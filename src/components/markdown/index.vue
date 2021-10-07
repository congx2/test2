<template>
  <div>
    <div class="side">
      <ul @click="scroll2">
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
              class="item"
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
    };
  },

  computed: {
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
  },

  mounted() {
    this.isMounted = true;
    this.h2s = [];
    this.h3s = [];
    this.$nextTick(() => {
      this.h2s = [...this.$refs.makdownBody.querySelectorAll("h2")];
      this.h3s = [...this.$refs.makdownBody.querySelectorAll("h3")];
    });
  },

  methods: {
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
        this.html = this.markdownIt.render(val);
        // this.tokens = this.markdownIt.parse(val);
        // console.log("tokens: ", this.tokens);
      } catch (e) {
        console.error(e);
        this.html = "";
      }
    },
    createHtmlByTokens(tokens) {
      const stack = [];
      for (let i = 0; i < tokens.length; i++) {}
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
    findElement(el, className) {
      let node = el;
      while (node) {
        if (node.classList.contains(className)) {
          return node;
        }
        node = node.parentNode;
      }
      return null;
    },
    scroll2(event) {
      const el = event.target;
      console.log(el);
      if (
        !this.isMounted ||
        !el ||
        el.nodeType !== Node.ELEMENT_NODE ||
        !this.findElement(el, "item")
      ) {
        return;
      }
      const { tag, index } = el.dataset;
      const list = this[`${tag}s`];
      const target = list[index];
      const container = document.body;
      const from = container.scrollTop;
      const offsetTop = target.getBoundingClientRect().top;
      const to = offsetTop + from;

      // target.scrollIntoView();
      console.log(target);
      this.animate(from, to, 650, (x, y) => {
        console.log(y);
        container.scrollTop = y;
      });
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
}
</style>