<template>
    <div class="con-body">
       <div style="text-align: center;line-height: 30px; width: 100%">
          <h2 style="margin-bottom: 10px">联系我</h2>
          <span style="color:#FF0000; font-weight: bolder; font-size: 25px; margin: 10px">灵感</span>
          <span style="color:#33CCFF; font-weight: bolder; font-size: 25px;margin: 10px">代码</span>
          <span style="color:#83C800; font-weight: bolder; font-size: 25px;margin: 10px">梦想</span>
          <span style="color:#FF6633; font-weight: bolder; font-size: 25px;margin: 10px">未来</span>
          <p>注重效率，偏爱敏捷开发</p>
          <p>喜欢尝试，期待新鲜事物</p>
          <p>技术即兴趣，兴趣即未来</p>
          <p>行路有良友，便是捷径</p>
          <p>带上我吧，一起看到更大的世界</p>
           <div class="touch">
              <ul>
                <li>
                  <el-popover
                    placement="top-start"
                    width="200"
                    height="200"
                    trigger="hover"
                    slot="reference"
                    content=""><img style="width: 200px;height: 200px" src="http://cnd.yinglingxuan.cn/微信图片_20190119151359.jpg"/>
                    <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1226626.png) 3px no-repeat;background-size:90%;" slot="reference">
                      <div style="width: 40px;height: 40px;"></div>
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
                    <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1188698.png) 2px no-repeat;background-size:90%;" slot="reference">
                      <div style="width: 40px;height: 40px;"></div>
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
                    <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/22577.png) 4px no-repeat;background-size:80%;" slot="reference">
                      <div style="width: 40px;height: 40px;"></div>
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
                    <el-button style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1172981.png) 7px no-repeat;background-size:60%;" slot="reference">
                      <div style="width: 40px;height: 40px;"></div>
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
                      <div style="width: 40px;height: 40px;"></div></a>
                    </el-button>
                  </el-popover>
                </li>
              </ul>

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
  .touch{
  }
  .touch ul{
     width: 320px;
     /*border: solid 1px red;*/
     margin: auto;
     margin-top: 20px;
     clear: both;
  }
  .touch li{
    list-style-type: none;
    float: left;
    margin: 0px 10px;
  }
  .con-body p{
    font-size: 18px;
    font-weight: bolder;
    line-height: 30px;
  }
  .con-body{
     border: solid 4px rgb(7, 252, 252);
     width: 320px;
     margin: auto;
     padding: 20px;
     padding-bottom: 60px;
     background: rgba(20,20,20,0.3);
     color: #fff;
  }
</style>
