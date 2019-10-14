<template>
	<view class="SD_Page">
		<navBar
		title="款号打分信息" 
		fontColor="#222">
		</navBar>
		<view class="SD_Content">
			<view></view>
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
			<text class="SD_MyScore_title">我的分数</text></br>
			<view class="SD_Score_inp">
				<text>自定义分数</text>
				<input v-model="score" />
			</view>
			<view class="SD_Score_options">
				<view v-for = '(item,index) in scoreItem' :key='index' :class="{active:item === selectScore}" @click='selectdScore(item)'>
					{{item}}
				</view>
			</view>
			<view class="SD_Score_Btn">
				<button type="default" >确定并继续打分</button>
				<button type="warn" @click="handleScore">确定打分</button>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue";
	export default {
		data() {
			return {
				scoreItem:[100,90,80,70,60],
				selectScore:0,
				score:'',
			}
		},
		computed:{
			
		},
		methods: {
			selectdScore(item){
				this.selectScore = item;
				this.score = item
			},
			handleScore(){
				uni.navigateTo({
					url:'../scoredDetail/scoredDetail?score='+this.score
				})
			}
		},
		components:{
			navBar
		}
	}
</script>
<style lang="scss" >
	@import "../../static/scoreDetail/scoreDetail.scss";
	
</style>
