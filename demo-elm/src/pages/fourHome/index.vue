<template>
    <div class="four-body">
      <div class="lefts">
          <p class="titles">我的经历</p>
          <p class="titles-qi">2017 07月</p>
          <p class="titles-jiu">2019 03月</p>
      </div>
      <div class="circle">
          <div class="circle-title">2017 </br>YEAR</div>
      </div>
      <div style="height: 200px;">
        <el-steps direction="vertical" :active="0">
          <el-step title="" description=""></el-step>
          <el-step title="汕头平行软件科技有限公司"  description="负责PC端移动端页面制作。公众号小程序开发"></el-step>
          <el-step title="深圳积家系统实业有限公司" description="负责小程序商城类开发"></el-step>
        </el-steps>
      </div>
    </div>
</template>

<script>
    export default {
        name: "four",
        props: {
          status: {
            type: Boolean,
            default () {
              return false
            }
          }
        },
        data(){
          return{

          }
        },
        watch: {
          status (newV, oldV) { // watch监听props里status的变化，然后执行操作
              if(oldV){
                this.charts.render();
              }
          }
        },
        methods:{
            onreadys(){

            }
        },
        created(){
        },
        mounted(){

        }
    }
</script>

<style>
      .four-body{
        display: flex;
        position: relative;
        top: -40px;
        left: 5rem;
        background: rgba(20,20,20,0.3);
        padding: 40px;
        padding-top: 60px;
      }
      .circle .circle-title{
         width: 70px;
         height: 70px;
         border-radius: 50%;
         border: solid 5px rgb(218, 213, 213);
         display: table-cell;
         vertical-align:middle;
         text-align: center;
         position: relative;
         top: -40px;
         right: -52px;
         background: #fff;
         z-index: 9999;
         font-weight: bolder;
         color: darkorange;
      }
      .lefts {
        width: 150px;
      }
      .lefts .titles{
        text-align:right;
        font-size: 0.2rem;
        font-weight: bolder;
        width: 100%;
        position: relative;
        right: -30px;
        top: -15px;
        color: chartreuse;
      }
      .lefts .titles-qi{
          font-size: 0.15rem;
          text-align: bottom right;
          position: relative;
          right: -150px;
          top: 50px;
          opacity: 0.7;
          color: #fff;
      }
      .lefts  .titles-jiu{
          font-size: 0.15rem;
          text-align: bottom right;
          position: relative;
          right: -150px;
          top: 105px;
          opacity: 0.7;
          color: #fff;
      }
      .four-body .is-wait{
        color: aqua;
      }
      .four-body .is-wait:hover{
         transform: scale(1.1);
         font-weight: bolder;
         color: chartreuse;
      }
      .four-body .el-step__title{
          margin-left: 20px;
      }
      .four-body  .el-step__description{
         margin-left: 20px;
      }
      .four-body  .el-step__icon{
         background: rgb(218, 213, 213);
      }
      .four-body .el-step__icon-inner{
          color:  rgb(218, 213, 213);
      }
      .four-body .el-step__line{
          background: rgb(218, 213, 213);
          width: 5px;
       }
      .four-body .el-step__icon.is-text{
         border: solid 3px aqua;
      }
</style>
