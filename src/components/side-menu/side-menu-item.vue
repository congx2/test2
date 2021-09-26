<template>
  <li class="side-menu-item" :class="{'is-active': isActive}" @click="clickHandler">
    <slot name="prepend-icon"></slot>
    <slot>
      <span>{{ label }}</span>
    </slot>
    <slot name="prepend-icon"></slot>  
  </li>
</template>

<script>
export default {
  name: 'SideMenuItem',
  inject: ['activeList'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    identifier: {
      type: String,
      default: '',
      required: false
    },
    label: {
      type: String,
      default: '',
    },
    route: {
      type: [String, Object],
      default: ''
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    location() {
      if (typeof this.route === 'string') {
        return { path: this.route }
      }
      return this.route
    },
    isActive() {
      console.log('sideMenuItem isActive: ', this.activeList)
      return this.activeList.indexOf(this.identifier) >= 0
    }
  },
  methods: {
    clickHandler() {
      if (this.disabled) {
        return
      }
      this.$emit('push-active', this.identifier)
    }
  }
}
</script>

<style scoped>
.side-menu-item {
  position: relative;
  list-style-type: none;
}
</style>