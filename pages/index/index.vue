<template>
	<view class="content">
		<view class="header">
			<view class="image"><image src="../../static/home-active@2x.png"></image></view>
			<view class="right">
				<view>移动买手</view>
				<view>广州恒康信息科技有限公司</view>
			</view>
		</view>
		
		<view class="list">
			
			<view class="list-item">
				 <navigator hover-class="navigator-hover" url="/pages/taskSquare/taskSquare" open-type="navigate">
					<view class="num">123</view>
					<view class="con">
						<view class="title">任务广场</view>
						<view class="name">系统所有任务</view>
					</view>
					<view class="icon">图标</view>
				</navigator>
			</view>
			<view class="list-item">
				 <navigator url="/pages/taskSquare/taskSquare" open-type="navigate">
					<view class="num">123</view>
					<view class="con">
						<view class="title">智能传款</view>
						<view class="name">系统所有任务</view>
					</view>
					<view class="icon">图标</view>
				</navigator>
			</view>
			<view class="list-item">
				 <navigator url="/pages/taskSquare/taskSquare" open-type="navigate">
					<view class="num">123</view>
					<view class="con">
						<view class="title">发布审核</view>
						<view class="name">系统所有任务</view>
					</view>
					<view class="icon">图标</view>
				</navigator>
			</view>
			<view class="list-item">
				 <navigator url="/pages/taskSquare/taskSquare" open-type="navigate">
					<view class="num">123</view>
					<view class="con">
						<view class="title">款图打分</view>
						<view class="name">系统所有任务</view>
					</view>
					<view class="icon">图标</view>
				</navigator>
			</view>
			<view class="list-item">
				 <navigator url="/pages/taskSquare/taskSquare" open-type="navigate">
					<view class="num">123</view>
					<view class="con">
						<view class="title">选款终审</view>
						<view class="name">系统所有任务</view>
					</view>
					<view class="icon">图标</view>
				</navigator>
			</view>
			<view class="list-item">
				 <navigator url="/pages/taskSquare/taskSquare" open-type="navigate">
					<view class="num">123</view>
					<view class="con">
						<view class="title">员工进度</view>
						<view class="name">系统所有任务</view>
					</view>
					<view class="icon">图标</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.content{
		width: $width;
		margin: 0 auto;
		.list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.list-item{
				padding: 24upx 32upx 24upx 16upx;
				margin-top: 28upx;
				background: #fff;
				border-radius: 10upx;
				box-shadow: -14upx 12upx 6upx 0 rgba(0,0,0,0.2);
	
				border: 2upx solid #e2e2e2;
				position: relative;
				navigator{
					display: flex;
					justify-content: space-between;
				}
				.navigator-hover{
					background-color: transparent;
				}
				
				.num{
					position: absolute;
					right: -20upx;
					top: -20upx;
					width: 54upx;
					height: 54upx;
					background: #f44444;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					font-size: 24upx;
				}
				.con {
					width: 220upx;
				}
				.icon{
					font-size: 20upx;
						align-self: center;
				}
				.title{
					color: #060606;
					font-size: 32upx;
				}
				.name{
					color: #666;
					font-size: 24upx;
					margin-top: 12upx;
				
				}
			}
		}
		.header{
			padding: 8upx 50upx 32upx;
			display: flex;
			.image{
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.right{
				padding-left: 60upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&>view {
					&:last-child{
						font-size: 24upx;
					}
				}
			}
		}
	}
</style>
