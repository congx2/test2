<template>
  <ul class="list">
    <li v-for="item in data" :key="item[keyField]" :class="classes(item)">
      <template v-if="hasChildrend(item)">
        <div class="list-group-title-box" @click="toggle">
          <slot name="list-group-title">
          <span class="list-group-title-icon">
            <i class="el-icon-arrow-down"></i>
          </span>
          <span class="list-group-title">{{ item.label }}</span>
          </slot>
        </div>
        <el-collapse-transition>
          <list v-show="show" :data="item.children" :key-field="keyField" />
        </el-collapse-transition>
      </template>
      <template v-else>
          <span class="list-item-label">{{ item.label }}</span>        
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    keyField: {
      type: String,
      default: 'id'
    },
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    hasChildrend(node) {
      const children = node.children
      return Array.isArray(children) && children.length > 0
    },
    classes(node) {
      const flag = this.hasChildrend(node)
      return {
        'list-item': !flag,
        'list-group-item': flag
      }
    },
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.list {
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-group-title-box,
.list-item {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  /* padding-left: 26px; */
}

.list-group-title-icon,
.list-item-icon {
  flex: 0 0 18px;
  width: 18px;
}

.list-group-item {
  display: inline-flex;
  flex-direction: column;
}


.list-group-item > .list {
  margin-left: 18px;
}
</style>