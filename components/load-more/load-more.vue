<template>
	<view class="load-more">
		<text class="loading-text" :style="{color:color}" v-if="loadingType === 0">
			{{contentText.contentnomore}}
		</text>
	</view>
</template>
 
<script>
	export default {
		name: "load-more",
		props: {
			loadingType: {
				//上拉的状态：0-没有更多了
				type: Number,
				default: 1
			},
			showImage: {
				type: Boolean,
				default: true
			},
			color: {
				type: String,
				default: "#777777"
			},
			contentText: {
				type: Object,
				default () {
					return {
						contentnomore: "没有更多数据了"
					};
				}
			}
		},
		data() {
			return {}
		}
	}
</script>
 
<style lang="scss" scoped>
	.load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center;
		.loading-text{
			font-size: 12px;
		}
	}
</style>