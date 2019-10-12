<template>
	<view>
		<navBar
		title="款号打分信息" 
		fontColor="#222">
		</navBar>
		<view>
			<!-- 图片展示 横向滚动 -->
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H">
					<image src="../../static/v2_pxx41d.jpg"></image>
				</view>
				<view id="demo2" class="scroll-view-item_H">
					<image src="../../static/v2_pxx41d.jpg"></image>
				</view>
				<view id="demo3" class="scroll-view-item_H">
					<image src="../../static/v2_pxx41d.jpg"></image>
				</view>
				<view id="demo4" class="scroll-view-item_H">
					<image src="../../static/v2_pxx41d.jpg"></image>
				</view>
				<view id="demo5" class="scroll-view-item_H">
					<image src="../../static/v2_pxx41d.jpg"></image>
				</view>
			</scroll-view>
			<!-- 信息部分 -->
			<view class="SD_Info">
				<view>设计号<text>002233</text></view>
				<view>款式名称<text>间条大纹理</text></view>
				<view>颜色<text>白黄黑</text></view>
				<view>图片备注<text>时尚女装上衣</text></view>
			</view>
			<!-- 商品标签 -->
			<view class="SD_Tag">
				<text>商品标签</text>
				<view>
					<text>黄色</text>
					<text>黄色</text>
					<text>黄色</text>
				</view>
			</view>
			<!-- 打分备注 -->
			<view class="SD_Remark">
				<text>打分备注</text>
				<textarea>裙长</textarea>
			</view>
			<!-- 详细信息 -->
			<view class="SD_Detail">
				<text class="SD_Detail_Title">详细信息</text>
				<view class="SD_Detail_Cont">
					<view>
						年份<text>2019</text>
					</view>
					<view>
						季节<text>春季</text>
					</view>
					<view>
						设计师<text>LOMEN</text>
					</view>
					<view>
						波段<text>第一波段</text>
					</view>
					<view>
						品牌<text>NIKE</text>
					</view>
					<view>
						商品结构<text>上衣/T恤</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 我的分数，固定布局部分 -->
		<view class="SD_MyScore">
			<text>我的分数</text>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue";
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			navBar
		}
	}
</script>

<style lang="scss" >
	.scroll-view_H{
		white-space: nowrap;
		.scroll-view-item_H{
			display: inline-block;
			width: 100px;
			height: 90px;
			margin: 10px 0 10px 10px;
			image{
				width: 100%;
				height: 100%;
			}
			
		}
	}
	.SD_Info{
		font-size: 12px;
		padding: 0 10px;
		view{
			color: rgb(183, 183, 183);
			margin-top:15px;
			text{
				color: rgba(51, 51, 51, 1);
				margin-left: 20px;
			}
		}
	}
	.SD_Tag{
		padding:10px;
		text{
			font-size: 14px;
			color: rgb(95, 95, 95);
			font-weight: 700;
		}
		view{
			display: flex;
			flex-direction: row;
			margin-top: 8px;
			text{
				border: 1px solid #ececec;
				padding: 4px 9px;
				font-weight: normal;
				font-size: 12px;
				border-radius: 5px;
				margin-left: 10px;
				&:first-child{
					margin-left: 0;
				}
			}
		}
	}
	.SD_Remark{
		padding:10px;
		text{
			font-size: 14px;
			color: rgb(95, 95, 95);
			font-weight: 700;
		}
		textarea{
			display: flex;
			width: 100%;
			margin-top: 8px;
			text-indent: 10px;
			color: #333333;
			font-size: 12px;
			border: 1px solid #ececec;
		}
	}
	.SD_Detail{
		padding: 10px 0;
		.SD_Detail_Title{
			display: flex;
			font-size: 14px;
			padding: 0 0 10px 10px;
			border-bottom: 1px solid #ececec;
		}
		.SD_Detail_Cont{
			display: flex;
			flex-direction: row;
			flex-wrap:wrap;
			padding: 0 10px;
			view{
				width: 50%;
				margin-top: 10px;
				font-size: 12px;
				color: rgb(183, 183, 183);
				text{
					border: none;
					color: rgb(95, 95, 95);
				}
			}
		}
	}

</style>
