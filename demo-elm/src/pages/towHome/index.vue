<template>
    <div class="tow-title" style="height:100%;" v-bind:style="{height:heights+'px'}" id="tow">
        <div class="bor">
            <div class="imgs">
                <img src="http://cnd.yinglingxuan.cn/头像.jpg">
            </div>
            <div class="txt">
                 <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你好，我叫林志松,一名前端工程师，同时也会一些JAVA技能</div>
                 <div> 后端开发技能 : JAVA,MySql,Redis,Spring Boot,Mybatis,前后端分离开发模式,实现api</div>
                 <div> 前端开发技能 : 能熟练运用DIV + CSS,HTML,MVVM模块化开发，小程序公众号开发,利用各种技巧实现交互丰富的界面</div>
                 <div> 熟悉的框架 : Vue.js,Jquery,elementUi,LayUi,uniapp等</div>
                 <div >
                  <a href="http://cnd.yinglingxuan.cn/%E5%89%8D%E7%AB%AF%E7%AE%80%E5%8E%86-3%E5%B9%B4.pdf" download="http://cnd.yinglingxuan.cn/%E5%89%8D%E7%AB%AF%E7%AE%80%E5%8E%86-3%E5%B9%B4.pdf">
                      <button onmouseover="Choice('下载PDF个人简历')"> Download Resume</button>
                  </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tow",
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
            heights:'',
            movement:this.status
          }
        },
         watch: {
          status (newV, oldV) { // watch监听props里status的变化，然后执行操作
            // console.log(newV, oldV)
            this.movement = newV
            if(this.movement){
              setTimeout(function () {
                $(".tow-title .bor .imgs").show();
                $(".tow-title .bor .imgs").animate({top:'20%'});
              },600);
              setTimeout(function () {
                $(".tow-title .bor .txt").show();
                $(".tow-title .bor .txt").animate({top:'38%'});
              },1000)
            }else{
              $(".tow-title .bor .imgs").css({top:50});
              $(".tow-title .bor .imgs").hide();
              $(".tow-title .bor .txt").css({top:50});
              $(".tow-title .bor .txt").hide();
            }
          }
        },
        created(){
        },
        mounted(){
        //获取到当前浏览器的高度
          this.heights=$(window).height();
          console.info("第二个界面",$(window).height())
        }
    }
</script>

<style scoped>
  .tow-title{
    /*height: 500px;*/
    width: 100%;
    background: url("http://cnd.yinglingxuan.cn/17.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .tow-title .bor{
  /*  border: solid 1px red;
    width: 100%;
    height: 500px;*/

  }
  .tow-title .bor .txt{
    color: #fff;
    width: 60%;
    position: absolute;
    left: 20%;
    right: 20%;
    text-align: center;
    /* bottom: -10%; */
    display: none;
    font-size: 0.25rem;
    line-height: 0.4rem;
  }
  .tow-title .bor .txt button{
     color: #fff;
     background: #000;
     border: 0;
     padding: 10px 30px;
     margin-top: 20px;
  }
  .tow-title .bor .imgs{
    width: 1.5rem;
    position: absolute;
    margin-left:-0.75rem;
    left: 50%;
    right: 50%;
    /* bottom: -30%; */
    display: none;
  }
  .tow-title .bor .imgs img{
    height: 1.5rem;
    width: 1.5rem;;
    border-radius: 50%;
  }
</style>
