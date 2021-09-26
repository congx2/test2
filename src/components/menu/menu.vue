<template>
	<div class="official-side-menu">
		<el-button>bbb</el-button>
		<el-menu router inline collapse-transition unique-opened text-color="#222222" active-text-color="#FF3A3A" @open="open" @close="close">
			<menu-item v-for="menu in list" :key="menu.id" :item="menu" />
		</el-menu>
	</div>
</template>

<script>
	import MenuItem from './menu-item.vue'
	import data from './data'

	export default {
		name: 'Menus',
		components: { MenuItem },
		data() {
			return {
				list: data,
				openIndexPath: [],
				// openArgs: {
				// 	index: '',
				// 	indexPath: []
				// },
				// closeArgs: {
				// 	index: '',
				// 	indexPath: []
				// }
			}
		},
		provide() {
			const { openIndexPath } = this
			return { openIndexPath }
		},
		methods: {
			open(index, indexPath) {
				console.log('open: ', index, indexPath)
				const size = this.openIndexPath.length
				this.openIndexPath.splice(0, size, ...indexPath)
			},
			close(index, indexPath) {
				console.log('close: ', index, indexPath)
				const i = this.openIndexPath.indexOf(index)
				if (i >= 0) {
					this.openIndexPath.splice(i, 1)
				}
			}
		}
	}
</script>

<style>

.official-side-menu {
	width: 260px;
	line-height: 24px;
}

.official-side-menu .el-menu {
	border: 0;
}

.official-side-menu .el-submenu .el-menu {
    margin-left: 26px;
}

.official-side-menu .el-submenu .el-menu .el-submenu .el-menu {
    margin-left: 0;
}

.official-side-menu .el-menu-item:focus, 
.official-side-menu .el-menu-item:hover,
.official-side-menu .el-submenu__title:hover {
	font-weight: 500;
	color: #FF3A3A;
  background-color: unset;
}

.official-side-menu .el-menu-item,
.official-side-menu .el-submenu__title {
	height: 48px;
	line-height: 48px;
	padding-right: 0;
	font-weight: 500;
}

.official-side-menu .el-submenu .el-menu-item {
	height: 40px;
	line-height: 40px;
	padding-right: 0;
	font-weight: 400;
}

.official-side-menu .el-submenu__title {
	position: relative;
	padding-left: 0 !important;
}

.official-side-menu .el-menu-item {
	padding-left: 26px !important;
}

.official-side-menu .submenu-title-box {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.official-side-menu .submenu-title-box .icon-box{
	width: 18px;
	height: 18px;
	margin-right: 8px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}

.official-side-menu .el-submenu__icon-arrow {
	display: none;
}

</style>