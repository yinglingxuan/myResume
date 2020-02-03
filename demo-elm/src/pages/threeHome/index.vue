<template>
    <div class="three-body">
        <div class="lefts">
           <div id="mountNode"></div>
        </div>
        <div class="txts">
          <h1 style="margin-bottom: 20px">技能栈</h1>
          <p>熟练使用JAVA 开发 Web服务器<br/>
            熟练JavaWeb开发，理解MVC开发模式和熟练使用Spring Boot,Spring MVC，MyBatis 开发<br/>
            熟练Web前端开发技术，熟悉前后端分离开发模式<br/>
            可熟练使用Vue、HTML、CSS、JQuery、JavaScript、AJAX、uni-app进行页面开发<br/>
            熟悉多种前端框架如LayUI、Eleme-Ui、Vant等<br/>
            熟练使用Nginx、CND文件加速配置<br/>
            熟悉Linux操作系统的使用<br/>
            熟悉微信公众号小程序开发<br/>
            熟悉Svn,GIT管理代码<br/>
            熟悉uniapp开发app</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "three",
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
            movement:this.status,
            charts:'',
            datas:[
            {
              "term": "UniApp",
              "count": 4
            },
            {
              "term": "Spring Boot",
              "count": 6
            }, {
              "term": "Mybatis",
              "count": 5
            }, {
              "term": "JQuery",
              "count": 4
            },{
              "term": "JAVA",
              "count": 8
            }, {
              "term": "CSS",
              "count": 7
            }, {
              "term": "JavaScript",
              "count": 8
            }, {
              "term": "HTML",
              "count": 7
            }, {
              "term": "Vue.js",
              "count": 6
            }]
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
          var _that=this;
          var chart = new G2.Chart({
            container: 'mountNode',
            forceFit: true,
            height: window.innerHeight,
            padding: [10, 80]
          });
          chart.source(_that.datas, {
            count: {
              max: 12
            }
          });

          chart.coord('theta', {
            innerRadius: 0.2,
            endAngle: Math.PI
          });
          chart.interval().position('term*count').color('r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff').shape('line').select(false).style({
            lineAppendWidth: 10
          }); // 线状柱状图
          chart.point().position('term*count').color('r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff').shape('circle');
          for (var i = 0, l = _that.datas.length; i < l; i++) {
            var obj = _that.datas[i];
            chart.guide().text({
              position: [obj.term, 0],
              content: obj.term + ' ',
              style: {
                textAlign: 'right',
                fill: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff'
              }
            });
          }
          chart.guide().text({
            position: ['50%', '50%'],
            content: '技术栈',
            style: {
              textAlign: 'center',
              fontSize: 24,
              fill: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff'
            }
          });
          chart.render();
          this.charts=chart;
        }
    }
</script>

<style scoped>
    .three-body{
       display: flex;
    }
    .three-body .lefts{
        width: 50%;
        margin-right: 10%;
        /* border: solid 1px red; */
    }
    .three-body .txts{
      width: 35%;
      margin-right: 0.5rem;
      margin-top: 1.5rem;
      margin-bottom: 4rem;
      padding: 0.3rem 0;
      line-height: 0.3rem;
      background: rgba(20,20,20,0.2);
      text-align: center;
      color: #fff;
      /* text-shadow: 1px 1px 1px rgba(250,250,250,1); */
    }
    .three-body .txts h1{
      font-size: 0.5rem;
      text-align: center;
    }

    .three-body .txts p{
      font-size: 0.16rem;
      text-align: center;

    }
</style>
