<template>
  <div class="official-menu">
    <!-- <side-submenu></side-submenu> -->
    <side-menu-item identifier="4"></side-menu-item>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import SideSubmenu from './side-submenu.vue'
import SideMenuItem from './side-menu-item.vue'

export default {
  name: 'SideMenu',
  components: {
    SideSubmenu,
    SideMenuItem
  },
  provide() {
    return {
      activeList: this.activeList
    }
  },
  data() {
    return {
      activeList: []
    }
  },
  methods: {
    add() {

      const list = this.activeList
      const max = list[list.length - 1] || '1'
      const c = parseInt(max, 10) + 1 + ''
      this.activeList.push(c)
    }
  }
}
</script>