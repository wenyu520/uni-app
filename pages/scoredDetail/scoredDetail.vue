<template>
	<view class="SD_Page">
		<navBar
		title="款号打分信息" 
		fontColor="#222">
		</navBar>
		<view class="SD_Content">
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
			<!--信息部分 -->
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
			<!-- 评分信息 -->
			<view class="SD_Score_Info">
				<view class="SD_Score_Title">
					<text class="title">评分信息</text>
					<view class="score">综合得分<text>{{score}}</text>分</view>
				</view>
				<view class="SD_Score_list">
					<image class="SD_Score_avatar" src="../../static/v2_pxx41d.jpg"></image>
					<view class="SD_Score_Collecting">
						<view class="info">
							<text class="name">Lomen</text>
							<view class="weight">权重<text>1</text></view>
							<view class="score"><text>{{score}}</text>分</view>
						</view>
						<view class="remark">
							<icon size='16' type="waiting"></icon>
							<text>领口翻领是本年流行趋势，格纹可以再优化......</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue";
	export default {
		data() {
			return {
				score:''
			}
		},
		components:{
			navBar
		},
		onLoad(e) {
			this.score = e.score
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import "../../static/scoreDetail/scoreDetail.scss";
.SD_Score_Info{
	.SD_Score_Title{
		padding: 5px 10px;
		border-bottom: 1px solid #ececec;
		display: flex;
		flex-direction: row;
		.title{
			font-size: 14px;
			color: #5f5f5f;
			font-weight: 700;
			flex: 1;
		}
		.score{
			font-size: 12px;
			font-weight: 400;
			color: rgb(16, 16, 16);
			text{
				color: rgba(246, 90, 81, 1);
				font-size: 18px;
				font-weight: 700;
			}
		}
	}
	.SD_Score_list{
		display: flex;
		flex-direction: row;
		padding: 10px 10px 0 10px;
		.SD_Score_avatar{
			width: 45px;
			height: 45px;
			border-radius: 50%;
		}
		.SD_Score_Collecting{
			margin-left: 10px;
			flex: 1;
			.info{
				display: flex;
				.name{
					color: rgb(16, 16, 16);
					font-size: 16px;
					font-weight: 700;
				}
				.weight{
					margin-left: 10px;
					flex: 1;
					align-self: center;
					font-size: 12px;
					color: rgb(153, 153, 153);
					text{
						margin-left: 3px;
						color: #333;
					}
				}
				.score{
					font-size: 12px;
					color: rgb(153, 153, 153);
					align-self: center;
					text{
						font-weight: 700;
						color: rgb(16,16,16);
						margin-right: 3px;
					}
				}
			}
			.remark{
				icon{
					vertical-align: middle;
				}
				text{
					font-size: 12px;
					line-height: 22px;
					margin-left: 3px;
				}
			}
		}
		
	}
}
</style>
