<template>
	<view>
		<navBar
		title="图款打分" 
		fontColor="#222">
		</navBar>
		<sun-tab :value.sync="tabIndex" :tabList="tabDataList" :rangeKey='tabRangeKey' :rangeNum='tabRangeNum' activeColor="#f44444" @change='handleTabChange'>
		</sun-tab>
		<!-- 列表 -->
		<scoreList :DataList='listData' :url='url'>
		</scoreList>
		<loadMore :loadingType="loadingType" :contentText="contentText">
		</loadMore>
	</view>
	
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import navBar from "@/components/nav-bar/nav-bar.vue";
	import loadMore from '@/components/load-more/load-more.vue'
	import scoreList from '@/components/score-list/score-list.vue'
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
				}],
				url:'../scoreDetail/scoreDetail',
				isShow:false,
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
			handleTabChange(tab){
				this.url = tab.name === "已打分" ? '../scoredDetail/scoredDetail' : '../scoreDetail/scoreDetail'
				if(tab.name === '已打分') {
					this.listData.map(item=>{
						this.$set(item,'score',90)
					})
				} else {
					this.listData.map(item=>{
						if(item.score){
							this.$delete(item,'score')
						}
					})
				}	
			}
		},
		components: {
			sunTab,
			navBar,
			loadMore,
			scoreList
		},
	}
</script>

<style lang="scss">

</style>
