<template>
  <div>
    <div class="foot">
      <el-row>
        <el-col :span="8">
          <dl>
            <dt>下载QQ音乐客服端</dt>
            <dd>
              <i class="iconfont icon-win"></i>
              PC版
            </dd>
            <dd>
              <i class="iconfont icon-mac"></i>
              PC版
            </dd>
            <dd>
              <i class="iconfont icon-anzhuo"></i>
              PC版
            </dd>
            <dd>
              <i class="iconfont icon-iconfontapple"></i>
              PC版
            </dd>
          </dl>
          <dl>
            <dt>
              开放平台
            </dt>
            <dd>腾讯音乐人平台</dd>
            <dd>音乐号认证</dd>
            <dd>机构入驻</dd>
          </dl>
        </el-col>
        <el-col :span="8">
          <dl>
            <dt>特色产品</dt>
            <dd>
              <i class="iconfont icon-quanminkge"></i>
              全民K歌
            </dd>
            <dd>
              <i class="iconfont icon-quanminkge"></i>
              Super Sound
            </dd>
            <dd>
              <i class="iconfont icon-quanminkge"></i>
              QPIay
            </dd>
            <br> <dd>
              车载互联
            </dd>
            <dd>
              QQ演出
            </dd>
          </dl>
          <dl style="margin-top: 48px">
            <dt>TME集团官网</dt>
            <dd>
              腾讯音乐
            </dd>
          </dl>
        </el-col>
        <el-col :span="8">
          <dl>
            <dt>合作链接</dt>
            <dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <br><dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <br><dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <br><dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
            <dd>腾讯视屏</dd>
          </dl>
        </el-col>
      </el-row>
      <div class="footerBot">
        <p>关于腾讯 | About Tencent | 服务条款 | 用户服务协议 | 隐私政策 | 权利声明 | 广告服务 | 腾讯招聘 | 客服中心 | 网站导航</p>
        <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
        <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footerBot",
      data(){
          return {

          }
      }
    }
</script>

<style scoped lang="less">
.foot {
  height: 590px;
  width: 100%;
  background-color: #333;
  color: #7f7f7f;
  overflow: hidden;
  dl {
    overflow: hidden;
    margin-top: 80px;
    margin-left: 40px;
    dt {
      margin-bottom: 50px;
    }
    dd {
      display: inline-block;
      text-align: center;
      box-sizing: border-box;
      padding-right: 30px;
      margin-top: 15px;
      &:hover {
        color: green;
      }
      i {
        display: block;
        font-size: 40px;
      }
    }
  }
  .footerBot {
    text-align: center;
    padding-top: 50px;
    p {
      font-size: 14px;
      margin-top: 15px;
    }
  }
}
</style>
