<template>
    <view class="container">
        <view class="title">分配传款人</view>
        <view class="input-style">
            <input type="text" placeholder="选择买手或设计师">
            <i>图标</i>
        </view>
        <view class="title">款图评分时间</view>
        <view class="input-style">
            <input type="text" placeholder="选择买手或设计师">
            <i>图标</i>
        </view>
        <view class="title">款图评分规则</view>
        <view class="input-style">
            <input type="text" >
            <i>图标</i>
        </view>


        <view class="fixed">
            <view>重置</view>
            <view>确定</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "INDEX"
    }
</script>

<style scoped lang="scss">

    .container{
        width: $width;
        margin: 0 auto;
        .title{
            font-size: 28upx;
            color: #333;
            margin: 20upx 0;
        }
        .fixed{
            padding: 20upx 120upx;
            border-top:2upx solid #e2e2e2;
           display: flex;
            justify-content: space-between;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            font-size: 28upx;
            view{
                width: 204upx;
                height: 76upx;
                border-radius: 48upx;
                border: 2upx solid #e2e2e2;
                display: flex;
                justify-content: center;
                align-items: center;
                &:last-child{
                    border-color: #f44444;
                    background-color: #f44444;
                    color: #fff;
                }
            }
        }
        .input-style{
            display: flex;
            justify-content: space-between;
            height: 76upx;
            border-radius: 40upx;
            background-color: #F0F0F0;
            padding: 0 20upx ;
            input{
                height: 100%;
                text-indent: 30upx;
                font-size: 28upx;
            }

            i{
                font-size: 20upx;
                align-self: center;
            }
        }
    }
</style>
