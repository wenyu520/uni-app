<template>
	<view>
		<navBar
		title="图款打分" 
		fontColor="#222">
		</navBar>
		<sun-tab :value.sync="tabIndex" :tabList="tabDataList" :rangeKey='tabRangeKey' :rangeNum='tabRangeNum' activeColor="#f44444">
		</sun-tab>
		<!-- 列表 -->
		<view>
			<view class="style-list" v-for="(item,index) in listData" :key='index'>
				<navigator hover-class="navigator-hover" url="/pages/scoreDetail/scoreDetail" open-type="navigate">
					<!-- 图片 -->
					<view class="">
						<image src="../../static/v2_pxx41d.jpg"></image>
					</view>
					<!-- 列表信息 -->
					<view>
						<view>
							<view>年度<text>{{item.year}}</text></view>
							<view>波段<text>{{item.temp}}</text></view>
							<view>季节<text>{{item.season}}</text></view>
							<view>商品结构<text>{{item.structure}}</text></view>
						</view>
						<view>
							<view>设计师<text>{{item.designer}}</text></view>
							<view>品牌<text>{{item.brand}}</text></view>
							<view>设计号<text>{{item.designNum}}</text></view>
						</view>
					</view>
					<!-- 图标 -->
					<view>
						<icon type="info"></icon>
					</view>
				</navigator>
			</view>
		</view>
		<loadMore :loadingType="loadingType" :contentText="contentText">
		</loadMore>
	</view>
	
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import navBar from "@/components/nav-bar/nav-bar.vue";
	import loadMore from '@/components/load-more/load-more.vue'
	export default {
		data() {
			return {
				tabIndex:0,
				tabDataList:[{
					name:'未打分',
					num:0
				},{
					name:'已打分',
					num:0
				}],
				tabRangeKey:'name',
				tabRangeNum:'num',
				contentText: {
					contentnomore: '--我可是有底线的--'
				},
				loadingType:1,
				listData:[{
					pic:'../../static/v2_pxx41d.jpg',
					year:'2019',
					temp:'第一波段',
					season:'春季',
					structure:'上衣/T恤',
					designer:'LOMEN',
					brand:'NIKE',
					designNum:'Ban2010HK-11'
				}]
			}
		},
		onLoad: function() {
			this.InitList();
		},
		onPullDownRefresh: function() {//上拉刷新
			this.InitList();
		},
		onReachBottom: function() {//下拉加载更多
			if(this.loadingType === 0) {
				return
			}
			uni.showNavigationBarLoading();
			this.InitList();
		},
		methods: {
			InitList(){
				for(var i = 0; i<10; i++){
					let item = {
						pic:'../../static/v2_pxx41d.jpg',
						year:'2019',
						temp:'第一波段',
						season:'春季',
						structure:'上衣/T恤',
						designer:'LOMEN',
						brand:'NIKE',
						designNum:'Ban2010HK-11'
					}
					this.listData.push(item)
				}
				this.loadingType= 0
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();//停止加载动画
			},
		},
		components: {
			sunTab,
			navBar,
			loadMore
		},
	}
</script>

<style lang="scss" scoped>
.style-list{
	navigator{
		display: flex;
		justify-content: space-between;
		padding:10px;
		& > view:first-child{
			flex: 1;
			image{
				width: 100%;
				height: 100%;
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
	}
	
}
</style>
