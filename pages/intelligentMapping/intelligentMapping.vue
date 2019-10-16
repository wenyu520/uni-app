<template>
	<view>
		<sun-tab :value.sync="swiperIndex" :tabList="tabSwiperList" activeColor="#f44444">
			<view slot="right" class="sx" @click="showDrawer()">筛选</view>
		</sun-tab>
		<swiper :current="swiperIndex" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
			<swiper-item v-for="(swiper,index) in tabSwiperList" :key="index">
				<view class="swiper-item-list">

					<view class="item-list">
						<view>
							<view>上衣/T桖</view>
							<view>0/7</view>
						</view>
						<view>
							<view class="view">
								<view><text>年度</text>2019</view>
								<view><text>波段</text>第一波段</view>
							</view>
							<view  class="view">
								<view><text>季节</text>春季</view>
								<view><text>主题</text>NIKE</view>
							</view>
							<view><text>开始时间</text>2019.2.2</view>
							<view><text>结束时间</text>2019.2.2</view>
							<view class="icon" @click="takePhoto">上传图片</view>

						</view>
					</view>
					<div class="image-list">
						<view class="con"  v-for="(item, i) in srcList" :key="i">
							<image mode="scaleToFill" :src="item"></image>
							<view>未发布</view>
						</view>
					</div>
				</view>
			</swiper-item>
		</swiper>




		<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer()">
			<view class="drawer-content">
				<view style="text-align: center;font-size: 36upx;font-weight: bold;">筛选</view>
				<view class="class-item">
					<view>年份</view>
					<view class="list">
						<text class="active">2019</text>
						<text>2020</text>
					</view>
				</view>
				<view class="class-item">
					<view>季节</view>
					<view  class="list">
						<text class="active">春季</text>
						<text>夏季</text>
						<text>秋季</text>
						<text>冬季</text>
					</view>
				</view>
				<view class="class-item">
					<view>波段</view>
					<view class="list">
						<text class="active">第一波段</text>
						<text>第二波段</text>
						<text>第三波段</text>
						<text>第四波段</text>
					</view>
				</view>
				<view class="class-item">
					<view>分配时间 （接收任务时间）</view>
					<view class="picker">
						<view>
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
						<text>前</text>
					</view>
				</view>
				<view class="class-item">
					<view>买手</view>
					<view class="picker">
						<view>
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>

			<view class="fixed-list">
				<view>重置</view>
				<view class="end">确定</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
    import sunTab from '@/components/sun-tab/sun-tab.vue';
    import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
    export default {
        components: {
            sunTab,
            uniDrawer
        },
        data() {
            return {
                showRigth:false,
                swiperIndex:0,
                srcList:[],
                tabSwiperList: ['未安排','已安排'],
            };
        },
        methods:{
            /**
			 * 拍照
             */
            takePhoto(){
				let self = this
                uni.chooseImage({
                    count: 6, //默认9
                    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album','camera'], //从相册选择 和 相机
                    success: function (res) {
                        self.srcList.push(...res.tempFilePaths)

						// 选中图片后 预览  按下 提示  =》 '发送给朋友', '保存图片', '收藏'
                        // uni.previewImage({
                        //     urls: res.tempFilePaths,
                        //     longPressActions: {
                        //         itemList: ['发送给朋友', '保存图片', '收藏'],
                        //         success: function(data) {
                        //             console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
                        //         },
                        //         fail: function(err) {
                        //             console.log(err.errMsg);
                        //         }
                        //     }
                        // });
                    }
                });
			},
            error(e) {
                console.log(e.detail);
            },

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

	swiper{
		width: 730upx;
		margin: 0 auto;
		height: 500px;
		.swiper-item-list{
			border-radius: 10upx;
			padding: 20upx;

			.item-list{
				display: flex;
				justify-content: space-between;

				& > view:first-child{
					width: 200upx;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					text-align: center;

					& > view:first-child{
						font-size: 36upx;
						font-weight: bold;
					}
					& > view:last-child{
						color: #ff0000;
						font-size: 34upx;
					}
				}
				& > view:last-child{
					width: 400upx;
					color: #666;
					font-size: 28upx;
					.view{
						display: flex;
						justify-content: space-between;
					}
					text{
						color: #000;
						font-weight: bold;
						padding-right: 20upx;
					}
				}
			}
			.image-list{
				display: flex;
				flex-flow: wrap;
				justify-content: flex-start;
				border-top: 2upx solid #e2e2e2;
				padding: 10upx 0;

				.con{
					position: relative;
					margin-right: 20upx;
					margin-bottom: 20upx;
					overflow: hidden;
					border-radius: 60upx;
					&:nth-child(5n){
						margin-right: 0;
					}
					view{
						position: absolute;
						height: 50upx;
						background: rgba(0,0,0,0.5);
						color: #fff;
						font-size: 24upx;
						bottom: 0;
						width: 100%;

						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
				image{
					width: 120upx;
					height: 120upx ;
					vertical-align: middle;


				}
			}
			.icon{
				text-align: right;
				color: #bd2c00;
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
	.fixed-list{
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		width: calc(100% - 240upx);
		padding: 20upx 120upx;
		height: 50upx;
		border-bottom: 2upx solid #e2e2e2;
		view{
			width: 120upx;
			height: 100%;
			font-size: 26upx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2upx solid #e2e2e2;
			border-radius: 5upx;
		}
		.end{
			background: #f44444;
			border-color: #f44444 ;
			color: #fff;
		}
	}
	.drawer-content{
		padding: 30px 20upx 0;
		.class-item{
			margin-bottom: 40upx;
			& > view:first-child{
				font-size: 28upx;
				margin-bottom: 15upx;
			}
			.picker{
				display: flex;
				justify-content: space-between;
				& > view{
					height: 60upx;
					background: #efefef;
					border-radius: 60rpx;
					width: 90%;

					picker{
						height: 100%;
						color: #222;
						font-size: 30upx;
						text-indent: 15upx;
						.uni-input{
							line-height: 60upx;
						}
					}
				}
				text{
					font-size: 28upx;
					align-self: center;
				}
			}
			.list{
				display: flex;
				flex-wrap: wrap;
				text{
					font-size: 26upx;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 5upx 15upx;
					margin-right: 10upx;
					margin-bottom: 10upx;
					border-radius: 5upx;
					&.active{
						background-color: #f44444;
						color: #fff;
					}
				}
			}
		}
	}
</style>
