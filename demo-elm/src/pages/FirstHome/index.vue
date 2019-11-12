<template>
    <div class="title" style="background-color: #000 ;" id="home">
      <div id="frame">
        <div class="canvas" style="height: 100%" v-bind:style="{transform:styles}">
          <div class="default left" v-bind:style="{transform:'rotateY(-90deg) translateZ('+widths+'px)'}"><img src="http://cnd.yinglingxuan.cn/in1.jpg"/></div>
          <div class="default right" v-bind:style="{transform:'rotateY(90deg) translateZ('+widths+'px)'}"><img src="http://cnd.yinglingxuan.cn/in3.jpg"/></div>
          <div class="default behind" v-bind:style="{transform:'rotateY(180deg) translateZ('+widths+'px)'}"><img src="http://cnd.yinglingxuan.cn/in4.jpg"/></div>   <!--后面-->
          <div class="default front" v-bind:style="{transform:'translateZ('+widths+'px)'}"><img src="http://cnd.yinglingxuan.cn/1.jpg"/></div>	  <!--前面-->
        </div>
      </div>

      <div class="Home-title">
        <h1 style="font-family: Algerian;font-size: 0.7rem">Hello!</h1>
        <p>我叫林志松</p>
        <p>是一名前端开发工程师</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "firsts",
        data(){
          return{
             styles:'',
             widths:''
          }
        },
        created(){
          //获取到当前浏览器的高度
          this.widths=document.body.clientWidth/2;
          setTimeout(function () {
            $(".Home-title").animate({top:'34%'});
          },600);
          var _this=this;
          var count=0;
          setInterval(function(){
              _this.styles='rotate3d(0,-1,0,'+count*90+'deg)';
            count++;
          },5000);
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .title{
      /*border: solid 1px red;*/
      width: 100%;
    }
    .Home-title{
       width: 50%;
       height: 2rem;
       position:absolute ;
       /*border: solid 1px red;*/
       z-index: 20;
       /*top: 34%;*/
       bottom: 0px;
       left: 25%;
       right: 25%;
       background-color: rgba(20,20,20,0.4);
       box-shadow: 10px 10px 5px rgba(88,88,88,0.6);
       text-align: center;
       padding-top: 0.2rem;
       color: #fff;
    }
    .Home-title p{
       font-size: 0.27rem;
    }
    #frame{
      position: absolute;
      width:100%;
      height: 100%;
      top: 0%;
      /*border: solid 1px red;*/
      /*perspective: 480px;!*在画框上设置透视*!*/
    }
    #frame .canvas{
      /*border: solid 1px #000000;*/
      width:100%;
      height: 100%;
      transform-style: preserve-3d;/*让子元素保留3d效果*/
      transition:transform 3s;
      /*animation: canvas 5s linear 0s infinite;    !*调用3d旋转,旋转时间的快慢，线性的,隔秒开始,是否无限*!*/
    }
    .default{
      height: 100%;
    }
    .default img{
      height: 100%;
    }
    #frame .canvas .default{
      position: absolute;
      width: 100%;
      height: 100%;
      border: solid 0px black;
    }
    img{
      width: 100%;
      height: 300px;
    }
    #frame .canvas .left{
      transform: rotateY(-90deg) translateZ(300px);
    }
    #frame .canvas .right{
      transform: rotateY(90deg) translateZ(300px);
    }
    #frame .canvas .behind{
      transform: rotateY(180deg) translateZ(300px);
    }
    #frame .canvas .front{
      transform: translateZ(300px);
    }
    @keyframes canvas{
      from{
        transform: rotate3d(0,0,0,0);
      }
      to{
        transform: rotate3d(0,-1,0,90deg);
      }
    }
</style>
