<template>
    <div class="production-body">
        <h1>个人作品集</h1>
        <div class="pro-ul">
            <div class="pro-li" style="background: url(http://cnd.yinglingxuan.cn/els.png) no-repeat;background-size: 100% 100%;">
                <a href="http://lin.yinglingxuan.cn/%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97.html"><p>俄罗斯方块canvas练手作品</p></a>
            </div>
            <div class="pro-li" style="background: url(http://cnd.yinglingxuan.cn/dazitup.png) no-repeat;background-size: 100% 100%;">
                 <a href="http://cnd.yinglingxuan.cn/type-demo.html"><p>html打字小游戏</p></a>
            </div>
            <div class="pro-li" style="background: url(http://cnd.yinglingxuan.cn/ysp.png) no-repeat;background-size: 100% 100%;">
                 <a href="http://lin.yinglingxuan.cn/%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A83.html"><p>音视频播放器</p></a>
            </div>
            <div class="pro-li" style="background: url(http://cnd.yinglingxuan.cn/gerenjianli.png) no-repeat;background-size: 100% 100%;">
                 <a href="https://github.com/yinglingxuan/index.html"><p>本网站-个人简历-兼容手机</p></a>
            </div>
            <div class="pro-li" style="background: url(http://cnd.yinglingxuan.cn/layui.png) no-repeat;background-size: 100% 100%;">
                 <a href="https://github.com/yinglingxuan/backstage"><p>layUi后台管理练手作品</p></a>
            </div>
            <div class="pro-li" style="background: url(http://cnd.yinglingxuan.cn/xcxt.jpg) no-repeat;background-size: 100% 100%;">
                 <a href="https://github.com/yinglingxuan/AppLet"><p>商城类小程序</p></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .production-body {
      text-align: center;
      width: 100%;
      background: rgba(20,20,20,0.2);
    }
    h1{
      color: #fff;
    }
    .production-body .pro-ul{
      display: flex;
      flex-wrap: wrap;
      width: 850px;
      margin: auto;
      margin-top: 20px;

    }
    a{
      color: #000;
    }
    .production-body .pro-ul .pro-li{
      width: 200px;
      height: 200px;
      border: solid 1px #000;
      transition: all 0.6s;
      margin: 20px 40px;
      border-radius: 50%;
      opacity: 0.8;
    }
    .production-body .pro-ul .pro-li:hover{
      transform: scale(1.1);
      opacity: 1;
    }
    .production-body .pro-ul .pro-li p{
       width: 200px;
       height: 200px;
       padding: 0 10px;
       border-radius: 50%;
       display: table-cell;
       vertical-align: middle;
       transition: all 0.6s;
       opacity: 0.5;
       color: #fff;
       font-weight: bolder;
     }
    .production-body .pro-ul .pro-li p:hover{
      opacity: 1;
      color: aqua;
    }

</style>
