<template>
	<view>
		<navBar  
		title="任务广场" 
		fontColor="#222">
		    <view class="icon_distribution" slot="right">分配</view>
		</navBar>
		<sun-tab :value.sync="swiperIndex" :tabList="tabSwiperList" activeColor="#f44444">
			<view slot="right" class="sx" @click="showDrawer()">筛选</view>
		</sun-tab>
		<swiper :current="swiperIndex" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
			<swiper-item v-for="(swiper,index) in tabSwiperList" :key="index">
				<view class="swiper-item-list">
					<view>
						<view><radio /></view>
						<view>
							<view class="name">上衣、T恤</view>
							<view>2019 春季 第一波段 NIKE </view>
							<view>2019/05/27(前)</view>
						</view>
					</view>
					<view><text>10</text>款</view>
				</view>
				<view class="swiper-item-list">
					<view>
						<view><radio /></view>
						<view>
							<view class="name">上衣、T恤</view>
							<view>2019 春季 第一波段 NIKE </view>
							<view>2019/05/27(前)</view>
						</view>
					</view>
					<view><text>10</text>款</view>
				</view>
			</swiper-item>
		 </swiper>
		 
		 <view class="fixed">
		 		<view><radio /> 全选</view>
				<view>合计： <text>2</text> 任务 <text>20</text>款</view>
				<view>接受任务</view>
		 </view>
		 
		 
		 <uni-drawer :visible="showRigth" mode="right" @close="closeDrawer()">
			sss
		 	<view class="close"><button type="default" @click="closeDrawer">关闭Drawer</button></view>
		 </uni-drawer>
	</view>
</template>

<script>
		import sunTab from '@/components/sun-tab/sun-tab.vue';
		import navBar from "@/components/nav-bar/nav-bar.vue";
		import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	export default {
		components: {
			sunTab,
			navBar,
			uniDrawer
		},
		data() {
			return {
				showRigth:false,
				swiperIndex:0,
				tabSwiperList: ['未安排','已安排'],
			};
		},
		methods:{
			swiperChange(e){
				this.swiperIndex = e.target.current;
			},
			onPreview(){
				
			},
			showDrawer(){
				this.showRigth = true
			},
			closeDrawer(){
				this.showRigth = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fixed{
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		height: 90upx;
		width: 100%;
		border-top: 2upx solid #e2e2e2;
		& > view:last-child{
			width: 180upx;
			background: #f44444;
			font-size: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
		}
		
		& > view:nth-child(2){
			font-size: 26upx;
			align-self: center;
			text{
				color: #f44444;
				padding: 0 15upx;
			}
		}
		
		& > view:first-child{
			font-size: 26upx;
			display: flex;
			align-items: center;
		}
	}
	radio{
			transform:scale(0.7);
	}
	swiper{
		width: $width;
		margin: 0 auto;
		height: 500px;
		.swiper-item-list{
			display: flex;
			padding: 20upx 0;
			justify-content: space-between;
	
			& > view:first-child{
				display: flex;
				font-size: 26upx;
				display: flex;
				justify-content: flex-start;
				align-self: flex-start;
				color: #999;
				.name{
					color: #222;
					font-size: 30upx;
					margin-bottom: 15upx;
				}
				& > view:first-child{
					// width: 30upx;
					// height: 30upx;
					// border: 2upx solid #e2e2e2;
					// border-radius: 50%;
					align-self: center;
				}
				& > view:last-child{
					justify-content: space-between;
					flex-direction: column;
					padding-left: 30upx;
				}
			}
			& > view:last-child{
				align-self: center;
				font-size: 28upx;
				display: flex;
				align-items: flex-end;
				text{
					color: #f44444;
					font-size: 34upx;
					padding-right: 10upx;
				}
			}
		}
	}
	.sx{
		font-size: 26upx;
		align-self: center;
		margin-right: 20upx;
	}
	
	.nav-list{
		display: flex;
		justify-content: space-between;
	}
	.icon_distribution{
		background: #f44444;
		width: 120upx;
		height: 50upx;
		font-size: 30upx;
		color: #fff;
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5upx;
	}
</style>
