<template>
  <div>
    <div class="side">
      <ul>
        <li
          v-for="h2 in headers"
          data-tag="h2"
          :data-index="h2.index"
          class="item"
        >
          {{ h2.label }}
          <ul v-if="h2.children.length">
            <li
              v-for="h3 in h2.children"
              data-tag="h3"
              :data-index="h3.index"
              class="item item-h3"
              :class="{ active: h3.index === h3ActiveIndex }"
              @click="scroll2(h3.index)"
            >
              {{ h3.label }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div ref="makdownBody" class="markdown-body" v-html="html"></div>
  </div>
</template>

<script>
// import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import MarkdownItHighlight from "markdown-it-highlightjs";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import { getValueByPath } from "@/utils";

export default {
  name: "Markdown",

  props: {
    markdown: {
      type: String,
      default: "",
    },

    options: {
      type: Object,
      default: () => ({}),
    },

    plugins: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      html: "",
      tokens: [],
      headers: [],
      isMounted: false,
      h3ActiveIndex: 0,
    };
  },

  computed: {
    headerHeight() {
      return 64;
    },

    finalOptions() {
      const defaultOptions = {
        highlight: function (str, language) {
          // if (language && hljs.getLanguage(language)) {
          //   try {
          //     return hljs.highlight(str, { language }).value;
          //   } catch (e) {
          //     return str;
          //   }
          // }
          return str;
        },
      };
      return Object.assign({}, defaultOptions, this.options);
    },

    finalPlugins() {
      const defaultPugins = [
        // [MarkdownItHighlight, {}],
        [
          markdownItTocDoneRight,
          {
            level: [1, 2],
            callback: (html, ast) => {
              // console.log("html: ", html);
              console.log("ast: ", ast);
              console.log("this: ", this);
              console.log(this.genHeaderAst(ast));
            },
          },
        ],
      ];
      return [...defaultPugins, ...this.plugins];
    },
  },

  watch: {
    markdown: {
      immediate: true,
      handler: "onMarkdownChange",
    },
  },

  created() {
    const markdownIt = new MarkdownIt(this.finalOptions);
    this.finalPlugins.forEach((pluginAndOptions) => {
      markdownIt.use.apply(markdownIt, pluginAndOptions);
    });
    this.markdownIt = markdownIt;
    console.log(this.markdownIt);
    this.onMarkdownChange(this.markdown);
    this.h3topList = [];
    this.highlightViewportRange = { min: 0, max: 0 };
  },

  mounted() {
    this.isMounted = true;
    this.h2s = [];
    this.h3s = [];
    this.$nextTick(() => {
      this.h2s = [...this.$refs.makdownBody.querySelectorAll("h2")];
      this.h3s = [...this.$refs.makdownBody.querySelectorAll("h3")];
    });

    this.highlightSlideMenuHandler = this.throttle(this.highlightSlideMenu, 16);
    document.body.addEventListener(
      "scroll",
      this.highlightSlideMenuHandler,
      false
    );
  },

  beforeDestroy() {
    document.body.removeEventListener(
      "resize",
      this.highlightSlideMenuHandler,
      false
    );
  },

  methods: {
    throttle(fn, delay) {
      let timerId = null;
      return (...args) => {
        if (typeof fn !== "function" || timerId) {
          return;
        }
        timerId = setTimeout(() => {
          fn(...args);
          timerId = null;
        }, delay);
      };
    },

    /**
     * 当每次渲染html的时候计算一次h3的 BoundingClientRect 信息
     * 滚动的时候使用 scrollTop 和 每个 h3 的 rect.top 或 rect.bottom 比较，性能更好
     */
    updatetH3topList() {
      const container = this.$refs.makdownBody;
      if (!container) {
        return;
      }
      const h3list = [...container.querySelectorAll("h3")];
      const topList = h3list.map((item) => {
        return item.getBoundingClientRect().bottom;
      });
      this.h3topList = topList;
    },

    /**
     * 滚动时直接使用 scrollTop 和以及计算好的 h3 rect 比较，不需要实时计算
     */
    highlightSlideMenu(e) {
      const size = this.h3topList.length;
      if (!size) {
        return;
      }

      const scrollTop = e.target.scrollTop;
      let index = -1;

      for (let i = 0; i < size; i++) {
        const top = this.h3topList[i];
        if (scrollTop + this.headerHeight < top) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        this.h3ActiveIndex = index;
      }
    },

    /**
     * 锚点菜单项点击时，直接滚动到已经计算好的位置
     */
    scroll2(index) {
      const top = this.h3topList[index];
      if (top === undefined) {
        return;
      }
      this.h3ActiveIndex = index;
      document.body.scrollTop = top - this.headerHeight;
    },

    onMarkdownChange(val, oldVal) {
      // console.log("onMarkdownChange val: ", val);
      // console.log("onMarkdownChange oldVal: ", oldVal);
      if (val === oldVal || !this.markdownIt) {
        return;
      }
      // console.log(this);
      // console.log(this.markdownIt);
      try {
        // console.log(this.markdownIt.render(val));
        console.log("process: ", process);
        console.log("process.env: ", process.env);
        const text = this.replaceMarkdowVariables(val);
        console.log("onMarkdownChange text: ", text);
        this.html = this.markdownIt.render(text);
        this.$nextTick(() => {
          this.updatetH3topList();
        });
        // this.tokens = this.markdownIt.parse(val);
        // console.log("tokens: ", this.tokens);
      } catch (e) {
        console.error(e);
        this.html = "";
      }
    },

    replaceMarkdowVariables(markdownContent) {
      const varReg =
        /\{\{\s*([^\{\}\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+)\s*\}\}/gim;
      return markdownContent.replace(varReg, (m, p) => {
        console.log("m: ", m);
        console.log("p: ", p);
        return getValueByPath(process.env, p);
      });
    },

    createHtmlByTokens(tokens) {
      const stack = [];
      for (let i = 0; i < tokens.length; i++) {}
      str.replace;
    },

    genHeaderAst(ast) {
      const result = [];
      let h2i = 0;
      let h3i = 0;
      const format = (node) => {
        const { l, n, c } = node;
        const index = l === 2 ? h2i++ : h3i++;
        return Object.assign(Object.create(null), {
          index,
          id: `l${l}-${index}`,
          level: l,
          label: n,
          children: c,
        });
      };
      const gen = (map) => {
        const { l, c, n } = map;
        if (l < 2) {
          const children = Array.isArray(c) ? c : [];
          children.forEach(gen);
        } else if (l === 2) {
          const node = format(map);
          node.children = node.children.map(format);
          result.push(node);
        }
      };
      gen(ast);
      this.headers = result;
      return result;
    },
    scrollTo(container, scrollTop) {},

    animate(from, to, duration, callback) {
      if (typeof callback !== "function") {
        return reject(new TypeError("callback muse be a function."));
      }
      if (from === to) {
        return callback(to);
      }
      const isIncrease = to > from;
      const max = isIncrease ? to : from;
      const min = isIncrease ? from : to;
      let t = 0;
      const move = (s) => {
        if (t === 0) {
          t = s;
        }
        const x = parseFloat((s - t).toPrecision(7));
        if (x <= duration) {
          const y = this.easeInOutCubic(x, min, max, duration);
          callback(x, isIncrease ? y : max - y);
          requestAnimationFrame(move);
        }
      };
      requestAnimationFrame(move);
    },

    easeInOutCubic(t, start, end, duration) {
      if ((t /= duration / 2) < 1) {
        return (end / 2) * t * t * t + start;
      }
      return (end / 2) * ((t -= 2) * t * t + 2) + start;
    },
  },
};
</script>

<style lang="scss">
.markdown-body {
  pre {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    background-color: #f8f8f8;
  }
}
</style>

<style lang="scss" scoped>
.side {
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 2;
  background-color: #fff;

  .item-h3.active {
    color: red;
  }
}
</style>