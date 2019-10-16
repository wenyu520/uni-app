<template>
	<view>
		<view class="style-list" v-for="(list,index) in DataList" :key='index' @click="handleNavigator(list)">
			<!-- <navigator> -->
				<!-- 图片 -->
				<view class="">
					<image src="../../static/v2_pxx41d.jpg"></image>
					<view v-if='list.score !== undefined' class="scored"><text>{{list.score}}</text>分</view>
				</view>
				<!-- 列表信息 -->
				<view>
					<view>
						<view>年度<text>{{list.year}}</text></view>
						<view>波段<text>{{list.temp}}</text></view>
						<view>季节<text>{{list.season}}</text></view>
						<view>商品结构<text>{{list.structure}}</text></view>
					</view>
					<view>
						<view>设计师<text>{{list.designer}}</text></view>
						<view>品牌<text>{{list.brand}}</text></view>
						<view>设计号<text>{{list.designNum}}</text></view>
					</view>
				</view>
				<!-- 图标 -->
				<view>
					<icon type="info"></icon>
				</view>
			<!-- </navigator> -->
			<view v-if="list.audit !=undefined" class="audit">
				{{list.audit}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			DataList:{
				type:Array
			},
			url:{
				type:String
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			handleNavigator(item){
				let url=this.url;
				if(item.score != undefined){
					url = this.url+'?score='+item.score
				}
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.style-list{
	position: relative;
		display: flex;
		justify-content: space-between;
		padding:10px;
		& > view:first-child{
			position: relative;
			flex: 1;
			image{
				width: 100%;
				height: 100%;
			}
			.scored{
				position: absolute;
				bottom: 0;
				width: 100%;
				text-align: right;
				font-size: 14px;
				background: rgba(0,0,0,.5);
				color: #fff;
				line-height: 26px;
				text{
					color: rgb(246, 90, 81);
					font-size: 15px;
				}
			}
		}
		& > view:nth-child(2){
			flex: 2;
			margin-left: 8px;
			view{
				font-family: PingFangSC;
				font-weight: 400;
				font-size: 12px;
				color: rgb(183, 183, 183);
				font-style: normal;
				letter-spacing: 0px;
				line-height: 17px;
				text-decoration: none;
				text{
					margin-left: 8px;
					color: rgba(51, 51, 51, 1);
				}
			}
			& > view:first-child{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				view{
					width: 50%;
				}
			}
			& > view:last-child{
				margin-top: 5px;
			}
		}
		& > view:last-child{
			    align-items: center;
			    display: flex;
				icon{
					i{
						font-size: 16px;
					}
				}
		}
	.audit{
		position: absolute;
		right: 15px;
		bottom: 15px;
		color: rgb(254, 112, 111);
		border: 2px solid rgb(254, 112, 111);
		border-radius: 49%;
		font-size: 12px;
		height: 44px;
		width: 44px;
		line-height: 44px;
		text-align: center;

	}
	
}
</style>
