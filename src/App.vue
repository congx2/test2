<template>
  <div id="app">
    <side-menu></side-menu>
    <div class="pp-container">
      <!-- <ul class="list">
        <li v-for="item in items" :key="item.id" class="item" :style="{backgroundColor: item.color}"></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal'
import sr from '@/dr.js'
import SideMenu from './components/menu/menu.vue'
import data from './components/menu/data'


export default {
  name: 'app',
  components: {
    SideMenu
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
    return { data }
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
    }
  },
  mounted() {
     this.sr = new scrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
    opacity: 0,
    scale: 0.8,
    delay: 100,
    cleanup: true,
    container: '.pp-container'
  })
  this.sr.reveal('.item')
  },
  beforeDestroy() {
    this.sr.destroy()
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
