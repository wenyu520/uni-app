<template>
	<view>
		<navBar
		title="选款终审" 
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
					name:'待审核',
					num:0
				},{
					name:'已审核',
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
					designNum:'Ban2010HK-11',
					score:90
				}],
				url:''
			}
		},
		components: {
			sunTab,
			navBar,
			loadMore,
			scoreList
		},
		methods: {
			handleTabChange(tab){
				this.url = tab.name === "已审核" ? '../scoredDetail/scoredDetail' : '../scoreDetail/scoreDetail'
				if(tab.name === '已审核') {
					this.listData.map(item=>{
						this.$set(item,'audit',"已审核")
					})
				} else {
					this.listData.map(item=>{
						if(item.audit){
							this.$delete(item,'audit')
						}
					})
				}
			}
		}
	}
</script>

<style>

</style>
