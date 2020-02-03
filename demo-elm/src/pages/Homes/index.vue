<template>
  <div>
    <!-- 兼容pc端 -->
    <div style="background: aliceblue"  class="pcs">
      <div id="fullPage" class="fullpage-wrapper" style="height: 100%; position: relative; touch-action: none; transform: translate3d(0px, 0px, 0px);">
        <div class="section fp-section active fp-table fp-completely" style="height: 666px;opacity: 0.9; background-color: rgb(27, 188, 155);">
          <div class="fp-tableCell" style="height:666px;">
          <!--<h3>第一屏</h3>
          <p>fullPage.js — 项目导航演示</p>-->
            <home></home>
          </div>
        </div>
        <div class="section fp-section fp-table" style="height: 666px;opacity: 0.8; background: url(http://cnd.yinglingxuan.cn/in1.jpg) no-repeat; background-size: 100% 100%;">
          <div class="fp-tableCell" style="height:666px;" >
              <tow :status=moveme></tow>
          </div>
        </div>
        <div class="section fp-section fp-table" style="height: 666px;opacity: 0.8; background-color: rgb(123, 170, 190);background: url(http://cnd.yinglingxuan.cn/in3.jpg) no-repeat; background-size: 100% 100%">
          <div class="fp-tableCell" style="height:666px;">
              <three :status=threeboot></three>
          </div>
        </div>
        <div class="section fp-section fp-table" style="height: 666px;opacity: 0.8; background-color: rgb(255, 153, 0);background: url(http://cnd.yinglingxuan.cn/in2.jpg) no-repeat; background-size: 100% 100%">
          <div class="fp-tableCell" style="height:666px;width: 100%">
              <four></four>
          </div>
        </div>
        <div class="section fp-section fp-table" style="height: 666px;opacity: 0.8; background-color: rgb(255, 153, 0);background:url(http://cnd.yinglingxuan.cn/in4.jpg) no-repeat; background-size: 100% 100%;">
          <div class="fp-tableCell" style="height:666px;width:100%;position: relative;left: 60%;">
            <production></production>
          </div>
        </div>

        <div class="section fp-section fp-table" style="height: 666px; opacity: 0.8;background-color: rgb(255, 153, 0); background: url(http://cnd.yinglingxuan.cn/in5.jpg) no-repeat; background-size: 100% 100%"><div class="fp-tableCell" style="height:666px;">
          <div style="width: 100%; position: absolute; top: 25%">
            <contact></contact>
          </div>
        </div></div>
      </div>

      <div id="fp-nav" class="right" style="margin-top:-100px;">
        <ul>
          <li class="outer" v-bind:class="{out:sizes==1}" onmouseover="Choice('第一页,首页')">
              <a><span style="background: aqua;"></span></a>
          </li>
          <li class="outer active" v-bind:class="{out:sizes==2}" onmouseover="Choice('第二页，个人介绍页')">
              <a><span style="background: aqua;"></span></a>
          </li>
          <li class="outer" v-bind:class="{out:sizes==3}" onmouseover="Choice('第三页，技能介绍页')">
              <a><span style="background: aqua;"></span></a>
          </li>
          <li class="outer" v-bind:class="{out:sizes==4}" onmouseover="Choice('第四页，个人经历页')">
              <a><span style="background: aqua;"></span></a>
          </li>
          <li class="outer" v-bind:class="{out:sizes==5}" onmouseover="Choice('第五页，作品介绍页')">
            <a><span style="background: aqua;"></span></a>
          </li>
          <li class="outer" v-bind:class="{out:sizes==6}" onmouseover="Choice('第六页，联系方式页')">
            <a><span style="background: aqua;"></span></a>
          </li>


          <div class="jpgs" onmouseover="Choice('音乐操作')">
            <div class="simgs mids">
              <img src="http://cnd.yinglingxuan.cn/13.jpg">
            </div>
          </div>

          <div class="mps" style="display:none;">
            <audio  controls="controls" autoplay="autoplay" loop="true"  id="data5">
              <source src="http://cnd.yinglingxuan.cn/横山克 - アゲイン.mp3" type="audio/mpeg"/>
            </audio>
          </div>
          <div id="can">
            <canvas id="wrap" height="80" width="50" style="border-bottom: solid 1px #000000;"></canvas>
          </div>
        </ul>
      </div>
    </div>
    <!-- 兼容手机端 -->
    <div class="mobile-body" v-bind:style="{height:heights+'px'}">
        <div class="mobile-heads">
            <div class="users">

            </div>
            <div class="mobile-img">
                <img src="http://cnd.yinglingxuan.cn/头像.jpg">
            </div>
            <div class="mobile-message">
                <p>hello</p>
                <p>我是林志松</p>
                <p>是一名前端工程师</p>
            </div>
            <div class="contact">
                <ul>
                  <li>
                    <el-popover
                      placement="top-start"
                      width="20"
                      height="200"
                      trigger="hover"
                      slot="reference"
                      content=""><img style="width: 100px;height: 100px" src="http://cnd.yinglingxuan.cn/微信图片_20190119151359.jpg"/>
                      <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1226626.png) 2px no-repeat;background-size:90% 90%;" slot="reference">
                        <div style="width: 25px;height: 25px;"></div>
                      </el-button>
                    </el-popover>
                  </li>
                  <li>
                    <el-popover
                      placement="top-start"
                      width="200"
                      height="200"
                      trigger="hover"
                      slot="reference"
                      content=""><img style="width: 200px;height: 200px" src="http://cnd.yinglingxuan.cn/微信图片_20190119151342.jpg"/>
                      <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1188698.png) 1px no-repeat;background-size:90% 90%;" slot="reference">
                        <div style="width: 25px;height: 25px;"></div>
                      </el-button>
                    </el-popover>
                  </li>
                  <li>
                    <el-popover
                      placement="top-start"
                      width="200"
                      height="200"
                      trigger="hover"
                      slot="reference"
                      content="1289131424@qq.com">
                      <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/22577.png) 1px no-repeat;background-size:90%;" slot="reference">
                        <div style="width: 25px;height: 25px;"></div>
                      </el-button>
                    </el-popover>
                  </li>
                  <li>
                    <el-popover
                      placement="top-start"
                      width="200"
                      height="200"
                      trigger="hover"
                      slot="reference"
                      content="13715895307">
                      <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1172981.png) 5px no-repeat;background-size:60%;" slot="reference">
                        <div style="width: 25px;height: 25px;"></div>
                      </el-button>
                    </el-popover>
                  </li>
                  <li>
                    <el-popover
                      placement="top-start"
                      width="200"
                      height="200"
                      trigger="hover"
                      slot="reference"
                      content="github">
                      <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/fluidicon.png) no-repeat;background-size:100%;" slot="reference">
                        <a href="https://github.com/yinglingxuan/">
                        <div style="width: 25px;height: 25px;"></div></a>
                      </el-button>
                    </el-popover>
                  </li>
              </ul>
            </div>
        </div>
        <div class="about-me">
          <h3>关于我</h3>
          <p style="font-weight: bolder;">-你好,我叫林志松</p>
          <p>一名前端工程师,主要喜欢精美炫酷的页面,同时也会一些JAVA技能,主要是往全栈方向发展</p>
          <P style="font-weight: bolder;">-技术栈</P>
          <p>Vue.js + LayUi + element-Ui + UniApp + 小程序开发 </p>
          <p>JAVA + Spring Boot + MyBatis + MySQL </p>
          <p style="font-weight: bolder;">-关于我</p>
          <p>坐标深圳,曾在汕头工作了快两年,主要负责公众号小程序官网等页面开发</p>

          <h3>技能掌握</h3>
          <p>1. 热爱前端，熟悉各种Web前端技术，包括HTML、DIV、CSS、Javascript、jQuery、AJAX、JSON、Vue.js、uni-app等。</p>
          <p>2. 使用移动端的rem布局,响应式布局,解决不同移动端设备的适配和兼容问题</p>
          <p>3. 熟悉bootstrap,LayUi,element-Ui,Jquery类库进行pc端项目快速开发, 熟练使用Vant.Ui,WeUi等Ui框架进行移动端项目的开发。</p>
          <p>4. 熟悉原生JS,熟悉JavaScript的面向对象编程，了解作用域以及闭包的原理。</p>
          <p>5. 了解JAVA后台语言,Sping Boot,Mybatis等后台开发框架,了解MySQL数据库,期待向全栈方向发展</p>
          <p>6. 了解gulp,webpack自动化构建工具</p>
          <div style="width:100%;padding:20px 0;">
              JAVA<el-progress  :stroke-width="26" :percentage="90" status="success" color="red"></el-progress>
              javaScript<el-progress  :stroke-width="24" :percentage="90" status="success" color="blue"></el-progress>
              HTML5<el-progress  :stroke-width="24" :percentage="90" status="success" color="#409EFF"></el-progress>
              Vue.js<el-progress  :stroke-width="22" :percentage="80" status="success" color="#45378"></el-progress>
              JQuery<el-progress  :stroke-width="20" :percentage="85" status="success" color="#E6A23C"></el-progress>
              UniApp<el-progress  :stroke-width="20" :percentage="70" status="success" color="#F56C6C"></el-progress>
          </div>
           <h3>我的经历</h3>
          <div>
            <div class="block">
              <el-timeline>
                <el-timeline-item timestamp="2017/6" placement="top">
                  <el-card>
                    <h4>汕头平行软件科技有限公司</h4>
                    <p>负责PC端移动端页面制作。公众号小程序开发,迭代维护</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019/3" placement="top">
                  <el-card>
                    <h4>深圳建科网络科技有限公司</h4>
                    <p>负责公众号页面、SaaS系统，公装宝APP的迭代维护</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
          <h3>我的作品</h3>
          <div class="production">
                <el-carousel :interval="4000" type="card" height="130px">
                  <el-carousel-item>
                    <a href="http://lin.yinglingxuan.cn/%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97.html">
                      <div class="production-lis">
                          <img src="http://cnd.yinglingxuan.cn/els.png"/>
                          <div>俄罗斯方块canvas练手作品</div>
                      </div>
                    </a>
                  </el-carousel-item>
                  <el-carousel-item>
                    <a href="http://lin.yinglingxuan.cn/%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A83.html">
                      <div class="production-lis">
                          <img src="http://cnd.yinglingxuan.cn/ysp.png"/>
                          <div>音视频播放器</div>
                      </div>
                    </a>
                  </el-carousel-item>
                  <el-carousel-item>
                    <a href="https://github.com/yinglingxuan/AppLet">
                      <div class="production-lis">
                          <img src="http://cnd.yinglingxuan.cn/xcxt.jpg"/>
                          <div>商城类小程序</div>
                      </div>
                    </a>
                  </el-carousel-item>

                  <el-carousel-item>
                    <a href="https://github.com/yinglingxuan/backstage">
                      <div class="production-lis">
                          <img src="http://cnd.yinglingxuan.cn/layui.png"/>
                          <div>layUi后台管理练手作品</div>
                      </div>
                    </a>
                  </el-carousel-item>

                  <el-carousel-item>
                    <a href="http://cnd.yinglingxuan.cn/type-demo.html">
                      <div class="production-lis">
                          <img src="http://cnd.yinglingxuan.cn/dazitup.png"/>
                          <div>打字小游戏</div>
                      </div>
                    </a>
                  </el-carousel-item>

                </el-carousel>
          </div>
        </div>



        <div class="navs">
            <div class="navs-imgs mids">
                <img src="http://cnd.yinglingxuan.cn/13.jpg">
            </div>
        </div>
        <div class="my-resume" v-if="titles">我的简历</div>
        <div class="close-buttom" @click="closeNav()">
          <i :class="icons"></i>
        </div>
    </div>

    <!-- //导航的界面 -->
    <div class="nav-body" v-bind:style="{height:heights+'px'}">
        <div class="nav-title" v-bind:style="{height:heights+'px'}">
            <p @click="skipNav('首页')" class="sy">首页</p>
            <p @click="skipNav('关于我')" class="gyw">关于我</p>
            <p @click="skipNav('技能')" class="gyw">技能</p>
            <p @click="skipNav('我的经历')">我的经历</p>
            <p @click="skipNav('我的作品')">我的作品</p>
            <p class="bac"></p>
        </div>
    </div>




    <div class="waifu">
        <div class="waifu-tips"></div>
        <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
        <div class="waifu-tool">
            <span class="fui-home"></span>
            <span class="fui-chat"></span>
            <span class="fui-eye"></span>
            <span class="fui-user"></span>
            <span class="fui-photo"></span>
            <!-- <span class="fui-info-circle"></span>
            <span class="fui-cross"></span> -->
        </div>
    </div>
  </div>
</template>

<script>
    import home from "../FirstHome"
    import tow from "../towHome"
    import three from "../threeHome"
    import four from "../fourHome"
    import contact from "../contactHome"
    import production from "../productionHome"
    export default {
        name: "Dome",
        components:{
            home,tow,three,four,contact,production
        },
        data(){
          return{
            heights:"",//获取屏幕的高度
            sizes:"1",
            bac:true, //小点点的闪烁
            moveme:false,  //第二个界面的动态效果
            threeboot:false,//第三个界面的动态效果
            mvs:true,  //音乐的开关
            medias:"pc",
            titles:false,//标签是否显示
            icons:"el-icon-circle-plus-outline"
          }
        },
        methods:{
            closeNav(){
              let jg=this.icons=='el-icon-circle-plus-outline';
              if(jg){
                  this.icons='el-icon-circle-close';
                  $(".nav-body").show();
                  $(".nav-body").animate({width:'100%'},200);
              }else{
                  this.icons='el-icon-circle-plus-outline';
                  $(".nav-body").animate({width:'0%',display:"none"},200);
                  setTimeout(function(){
                    $(".nav-body").hide();
                  },200);
              }
            },
            skipNav(data){
                 console.info(data)
                 if(data=='首页'){
                   $(".mobile-body").scrollTop(0);
                 }else if(data=='关于我'){
                   $(".mobile-body").scrollTop(223);
                 }else if(data=='技能'){
                   $(".mobile-body").scrollTop(578);
                 }else if(data=='我的经历'){
                   $(".mobile-body").scrollTop(1240);
                 }else{
                   $(".mobile-body").scrollTop(1980);
                 }
                 $(".nav-body").animate({width:'0%',display:"none"},200);
                 this.icons='el-icon-circle-plus-outline';
                // var top = $(this).scrollTop(); 
                // console.info(top);
            },
           
        },
        mounted(){
          this.heights=document.documentElement.clientHeight || document.body.clientHeight;
          var _this=this;
          let pageWidth = document.documentElement.clientWidth || document.body.clientWidth;//获取屏幕长度
          if (pageWidth > 768) {
            _this.medias="pc";
            console.info("pc")
          } else {
            _this.medias="mobile";
            console.info("mobile")

            $(".mobile-body").scroll(function(){   //开始监听滚动条
              var top = $(".mobile-body").scrollTop();  //滚动条距离顶部的高度
              // console.info(top);
                if(top>200){
                    _this.titles=true;
                }else{
                   _this.titles=false;
                }
            })
          }
          try {
            $(function(){
              $('#fullPage').fullpage({
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
                'navigation': false,
                onLeave: function(index, nextIndex, direction){
                  /*console.info(nextIndex)*/
                  _this.sizes=nextIndex;
                  if(nextIndex==2){
                    _this.moveme=true;
                    // console.info("改变")
                  }else if(nextIndex==3){
                    _this.threeboot=true;
                  }else{
                     _this.moveme=false;
                     _this.threeboot=false;
                  }

                }
              });
            });
          }catch (e) {
          }
          var _this=this;
          var aee=["red","cyan","green","blue","orange","purple","#557CC1","#DA63FF","#93F100","#FECCE5"];
          // 鼠标移动到上面
          $('.outer').mouseenter(function () {
            /*console.info(this);*/
            _this.styles=false;
            $(".outer").css({backgroundColor:''});
            $(this).css({backgroundColor:'#fff'});
          })
          // 鼠标移开
          $('.outer').mouseleave(function () {
            /*console.info(this);*/
            _this.styles=true;
            $(this).css({backgroundColor:''});
          })
          //颜色的闪烁
          setInterval(function(){
            $(".outer").css({backgroundColor:''});
            if(_this.bac){
              $('.out').css({backgroundColor:'#fff'});
              _this.bac=!_this.bac;
            }else{
              $('.out').css({backgroundColor:''});
              _this.bac=!_this.bac;
            }
          },1000);
          //点击暂停和播放
          $('.mids').click(function () {
            this.mvs=!this.mvs;
            var music = document.getElementById("data5");
            if(this.mvs){
              music.play();
              // raised();
            }else{
              music.pause();
            }
          })
          // raised();
          //音频的波浪纹
          function raised(){
            var wrap = document.getElementById("wrap");
            var cxt = wrap.getContext("2d");
             //获取API
            // var AudioContext = AudioContext || webkitAudioContext;
            var context = new AudioContext;
            //加载媒体
            /*var audio = new Audio("MP3/40㍍P - からくりピエロ (活动小丑).mp3");*/
            var audio =document.getElementById("data5");
            //创建节点
            try {
              var source = context.createMediaElementSource(audio);
              var analyser = context.createAnalyser();
              //连接：source → analyser → destination
              source.connect(analyser);
              analyser.connect(context.destination);
              //创建数据
              var output = new Uint8Array(100);
              (function drawSpectrum() {
                analyser.getByteFrequencyData(output);//获取频域数据
                cxt.clearRect(0, 0, wrap.width, wrap.height);
                //画线条
                /*var p2=Math.random()*10;    //获取随机数对应颜色
                      var n=Math.ceil(p2);*/
                for (var i = 0; i < 10; i++) {
                  var t=i%10;
                  var value = output[i] / 8;//<===获取数据
                  var heights=wrap.height-(value*2);
                  cxt.fillStyle=aee[t];  //定义颜色
                  cxt.fillRect(i*5,heights,4,value*2);
                }
                //请求下一帧
                requestAnimationFrame(drawSpectrum);
              })();
            }catch (e) {
            }
          }


          //看版娘
          String.prototype.render = function (context) {
              var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

              return this.replace(tokenReg, function (word, slash1, token, slash2) {
                  if (slash1 || slash2) {  
                      return word.replace('\\', '');
                  }

                  var variables = token.replace(/\s/g, '').split('.');
                  var currentObject = context;
                  var i, length, variable;

                  for (i = 0, length = variables.length; i < length; ++i) {
                      variable = variables[i];
                      currentObject = currentObject[variable];
                      if (currentObject === undefined || currentObject === null) return '';
                  }
                  return currentObject;
              });
          };


          var re = /x/;
          console.log(re);
          re.toString = function() {
              showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000, true);
              return '';
          };

          $(document).on('copy', function (){
              showMessage('你都复制了些什么呀，转载要记得加上出处哦', 5000, true);
          });

          $('.waifu-tool .fui-home').click(function (){
              //window.location = 'https://www.fghrsh.net/';
              window.location = window.location.protocol+'//'+window.location.hostname+'/'
          });

          $('.waifu-tool .fui-eye').click(function (){
              loadOtherModel();
          });

          $('.waifu-tool .fui-chat').click(function (){
              showHitokoto();
          });

          $('.waifu-tool .fui-user').click(function (){
              loadRandModel();
          });

          $('.waifu-tool .fui-info-circle').click(function (){
              //window.open('https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02');
              window.open('https://www.fghrsh.net/post/123.html');
          });

          $('.waifu-tool .fui-cross').click(function (){
              sessionStorage.setItem('waifu-dsiplay', 'none');
              showMessage('愿你有一天能与重要的人重逢', 1300, true);
              window.setTimeout(function() {$('.waifu').hide();}, 1300);
          });

          $('.waifu-tool .fui-photo').click(function (){
              showMessage('照好了嘛，是不是很可爱呢？', 5000, true);
              window.Live2D.captureName = 'Pio.png';
              window.Live2D.captureFrame = true;
          });

          (function (){
              var text;
              //var SiteIndexUrl = 'https://www.fghrsh.net/';  // 手动指定主页
              var SiteIndexUrl = window.location.protocol+'//'+window.location.hostname+'/';  // 自动获取主页
              
              if (window.location.href == SiteIndexUrl) {      // 如果是主页
                  var now = (new Date()).getHours();
                  if (now > 23 || now <= 5) {
                      text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
                  } else if (now > 5 && now <= 7) {
                      text = '早上好！一日之计在于晨，美好的一天就要开始了';
                  } else if (now > 7 && now <= 11) {
                      text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
                  } else if (now > 11 && now <= 14) {
                      text = '中午了，工作了一个上午，现在是午餐时间！';
                  } else if (now > 14 && now <= 17) {
                      text = '午后很容易犯困呢，今天的运动目标完成了吗？';
                  } else if (now > 17 && now <= 19) {
                      text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
                  } else if (now > 19 && now <= 21) {
                      text = '晚上好，今天过得怎么样？';
                  } else if (now > 21 && now <= 23) {
                      text = '已经这么晚了呀，早点休息吧，晚安~';
                  } else {
                      text = '嗨~ 快来逗我玩吧！';
                  }
              } else {
                  if(document.referrer !== ''){
                      var referrer = document.createElement('a');
                      referrer.href = document.referrer;
                      var domain = referrer.hostname.split('.')[1];
                      if (window.location.hostname == referrer.hostname) {
                          text = '欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
                      } else if (domain == 'baidu') {
                          text = 'Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？';
                      } else if (domain == 'so') {
                          text = 'Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？';
                      } else if (domain == 'google') {
                          text = 'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
                      } else {
                          text = 'Hello! 来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友';
                      }
                  } else {
                      text = '欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
                  }
              }
              showMessage(text, 6000);
          })();

          //window.hitokotoTimer = window.setInterval(showHitokoto,30000);
          /* 检测用户活动状态，并在空闲时 定时显示一言 */
          var getActed = false;
          window.hitokotoTimer = 0;
          var hitokotoInterval = false;

          $(document).mousemove(function(e){getActed = true;}).keydown(function(){getActed = true;});
          setInterval(function() { if (!getActed) ifActed(); else elseActed(); }, 1000);
          initModel("http://cnd.yinglingxuan.cn/");
        }
    }
</script>

<style scoped>

  @media screen and (max-width: 768px) {
    .el-carousel__item {
      background-color: #99a9bf;
      height: 130px;
    }


    .pcs{
      display: none;
    }
    .mobile-body{
      overflow: scroll;
    }
    .mobile-body .mobile-heads{
      position: relative;
    }
    .mobile-body .mobile-heads .users{
      width: 100%;
      height: 5rem;
      background: url('http://cnd.yinglingxuan.cn/in1.jpg') no-repeat;
      background-size: 100% 100%;
      opacity: 0.4;
    }
    .mobile-body .mobile-heads .mobile-img{
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 1.2rem;
        left: 50%;
        margin-left: -0.75rem;
    }
    .mobile-body .mobile-heads .mobile-img img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
    .mobile-body .mobile-heads .mobile-message{
        width: 100%;
        position: absolute;
        top: 2.8rem;
    }
    .mobile-body .mobile-heads .mobile-message p{
        text-align: center;
        font-size: 0.25rem;
        line-height: 0.4rem;
    }
  /* //关于我的 */
    .about-me{
      width: 90%;
      margin: auto;
    }
    .about-me p{
      line-height: 0.6rem;
      font-size: 0.3rem;
    }
    h3{
      width: 1.7rem;
      font-size: 0.4rem;
      border-bottom: solid 2px rgb(55, 208, 235);
      text-align: center;
      margin: 10px auto;
      margin-top: 30px;
      line-height: 0.7rem;
    }

    .mobile-body .mobile-heads .contact{
        width: 100%;
        position: absolute;
        top: 4.1rem;
    }
    .mobile-body .mobile-heads .contact ul{
        width: 200px;
        /*border: solid 1px red;*/
        margin: auto;
        clear: both;
      }
    .contact li{
        list-style-type: none;
        float: left;
        margin: 0 0.1rem;
        background:#fff;
        border-radius: 50%;
        height: 25px;
    }
    .mobile-body .navs{
      width: 98%;
      padding-left:0.1rem;
      padding-top: 0.05rem;
      position:fixed;
      top: 0;
      z-index: 11;
    }
    .mobile-body .navs .navs-imgs{
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      margin: 0.1rem;
    }
    .mobile-body .navs .navs-imgs img{
      width: 100%;
      height: 0.8rem;
      border-radius: 50%;
      animation:myfirst2 7s linear 0s infinite;
    }
     @keyframes myfirst2
    {
      from{-webkit-transform: rotate(0deg)}
      to{-webkit-transform: rotate(360deg)}
    }
    .mobile-body .my-resume{
        width: 100%;
        text-align: center;
        line-height: 1.1rem;
        color: #fff;
        font-size: 0.35rem;
        background: rgb(69, 70, 68);
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .mobile-body .close-buttom{
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 13;
    }
    .mobile-body .close-buttom i{
      font-size: 0.6rem;
      color: rgb(217, 255, 0);
    }
    .nav-body{
        width: 0%;
        position: fixed;
        top: 0px;
        right: 0;
        z-index: 12;
        background: rgba(20,20,20,0.8);
        display: none;
    }
    .nav-body .nav-title{
        padding-top:130px;
        width: 50%;
        margin-left: 50%;

        text-align: right;
        font-size: 0.4rem;
        line-height: 40px;

         background: linear-gradient(105deg, transparent 90px, #fff 0) top left,
            linear-gradient(-135deg, transparent 0px, #fff 0) top right,
            linear-gradient(-45deg, transparent 0px, #fff 0) bottom right,
            linear-gradient(45deg, transparent 150px, #fff 0) bottom left;
        background-size: 53% 53%;
        background-repeat: no-repeat;
    }
    .nav-body .nav-title p{
      padding-right: 10px;
    }
    .bac{
      width: 50%;
      height: 200px;
      background: url('http://cnd.yinglingxuan.cn/qjf.jpg') no-repeat;
      background-size: 100% 100%;
      background-position: bottom right;
      position: absolute;
      bottom: 0;
      right: -10px;
    }
    /* 作品 */
    .production{
        /* border: solid 1px red; */
        height: 400px;
        margin-top: 20px;
    }
    .production .production-lis{
        width: 100%;
        height: 120px;
    }
    .production .production-lis img{
        width: 100%;
        height: 100px;
    }
    .production .production-lis div{
      font-size: 0.2rem;
      color: #fff;
      text-align: center;
    }
    .production a{
      text-decoration:none;
    }
  }
 /* .fp-tableCell{
    background: url("http://cnd.yinglingxuan.cn/timg.gif") no-repeat;
    background-size: 100% 100%;
  } */
  .outer{
    border: solid 0px #fff;
    border-radius: 50%;
    width: 30px;
    height: 20px;
   /* padding-top: 1px;
    padding-bottom: 1px;*/
    margin-left: -1px;
    transition:background-color 1s;
  }
  .dot{
  }
  #fp-nav .jpgs .simgs{
  }
  #fp-nav .jpgs .simgs img{
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: -10px;
    border-radius: 50%;
    animation:myfirst 7s linear 0s infinite;
  }
  @keyframes myfirst
  {
    from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(360deg)}
  }
  #can{
    /*border: solid 1px red;*/
    height: 80px;
    width: 50px;
    margin-left: -10px;
  }
  /*第二页*/
  .tow-title .bor .txt{
    color: #fff;
    width: 60%;
    position: absolute;
    left: 20%;
    right: 20%;
    bottom: -10%;
    display: none;
  }
  .tow-title .bor .imgs{
    width: 150px;
    position: absolute;
    left: 45%;
    right: 45%;
    bottom: -30%;
    display: none;
  }
  .tow-title .bor .imgs img{
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
  /*第三页*/
  .statistics{
    width: 46%;
  }
  .txts{
    background: rgba(20,20,20,0.2);
    padding: 30px 0px;
    position: absolute;
    top: 13%;
    right: 10%;
    left: 55%;
    line-height: 30px;
    text-align: center;
    color: #fff;
    text-shadow: 5px 5px 5px rgba(250,250,250,1);
  }
</style>
