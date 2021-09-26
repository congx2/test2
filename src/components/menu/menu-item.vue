<template>
	<el-submenu v-if="hasChildren" :index="item.id">
		<template slot="title">
			<div class="submenu-title-box">
				<span class="icon-box">
					<i :class="isOpen ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
				</span>
				<span>{{ item.label }}</span>
			</div>
		</template>
		<official-menu-item v-for="child in children" :key="child.id" :item="child" />
	</el-submenu>
	<el-menu-item v-else :index="item.id" :route="item.route">{{ item.label }}</el-menu-item>
</template>

<script>
	export default {
		name: 'OfficialMenuItem',
		inject: ['openIndexPath'],
		props: {
			item: {
				type: Object,
				default: () => ({})
			}
		},
		computed: {
			children() {
				const children = this.item.children
				return Array.isArray(children) ? children : []
			},
			hasChildren() {
				return this.children.length > 0
			},
			isOpen() {
				return this.openIndexPath.indexOf(this.item.id) >= 0
			}
		}
	}
</script>
