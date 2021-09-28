<template>
  <div id="app" class="md-github__body">
    <div class="pp-container">
    <!-- <qa></qa> -->
    <!-- <side-menu></side-menu> -->
    <!-- <div class="pp-container"> -->
      <!-- <ul class="list">
        <li v-for="item in items" :key="item.id" class="item" :style="{backgroundColor: item.color}"></li>
      </ul> -->
    <!-- </div> -->
    <div class="md" v-html="html">

    </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import markdownItGithub from 'markdown-it-github'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import markdownItPdf from "markdown-it-pdf"

import scrollReveal from 'scrollreveal'
import sr from '@/dr.js'
import SideMenu from './components/menu/menu.vue'
import Qa from './components/qa'
import data from './components/menu/data'


export default {
  name: 'app',
  components: {
    SideMenu,
    Qa
  },
  directives: {
    sr: sr({
    reset: true,
    distance: '100px',
    duration: 1000,
    opacity: 0,
    scale: 0.8,
    delay: 100,
    cleanup: true,
    container: '.pp-container'
  })
  },
  data() {
    return { data, html: '' }
  },
  computed: {
    items() {
      let n = 200
      const result = []
      while(n--) {
        result.push({
          id: n,
          color: this.color()
        })
      }
      return result
    },
    publicPath(){
      return process.env.BASE_URL.replace(/\/$/, '')
    } 
  },
  created() {
    const md = new MarkdownIt()
    md
    .use(markdownItGithub)
    .use(markdownItAnchor)
    .use(markdownItTocDoneRight, {
      level: [1, 2],
      listType: 'ul',
      format: (x, htmlencode) => {
        console.log('x: ', x)
        console.log('htmlencode: ', htmlencode)
        return x
      },
      callback: (html, ast) => {
        console.log('html: ', html)
        console.log('ast: ', ast)
        const af = html.replace(/nav/g, 'div')
        console.log('af: ', af)
        return af
      }
    })
    // .use(markdownItPdf)
    // .use(markdownItTocAndAnchor, {
    //   tocPattern: /\[toc\]/i,

    // })
    this.md = md
  },
  mounted() {
    console.log('process.env.BASE_URL: ', process.env.BASE_URL)
    console.log('this.publicPath: ', this.publicPath)
    import(`!!raw-loader!@/assets/md/axios.md`).then(m => {
      console.log(m)
      this.html = this.md.render(m.default)
      console.log(this.html)
    })

    // import(`!!raw-loader!@/assets/test.txt`).then(m => {
    //   console.log(m)
    //   this.html = this.md.render(m.default)
    //   console.log(this.html)
    // })
  },
  beforeDestroy() {
    // this.sr.destroy()
  },
  methods: {
    random(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    },
    color() {
      const cs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
      const max = cs.length - 1
      const hex = 'ffffff'
      const list = hex.split('').map(() => {
        return cs[this.random(0, max)]
      })
      return '#' + list.join('')
    }
  }
}
</script>

<style>

.official {

}

#app{
  box-sizing: border-box;
  padding: 15px;
}
.pp-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  width: 80%;
  margin: 0 auto 0;
  padding: 0;
}

.item {
  width: 20%;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 200px;
  border-radius: 10px;
}
</style>
