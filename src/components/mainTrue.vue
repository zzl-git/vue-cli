<template>

    <div class="mainMy">
      <div class="aboutMe">
        <div class="meBox">
          <div class="meImg">
            <img src="../assets/g.jpg">
          </div>
          <p>。累 <img src="https://y.gtimg.cn/music/icon/v1/mac/svip_g@2x.png?max_age=2592000"></p>
          <ul>
            <li>
              <span>0</span>
              <p>关注</p>
            </li>
            <li>
              <span>0</span>
              <p>粉丝</p>
            </li>
          </ul>
        </div>
        <div class="aboutMeBot">
          <ul>
            <li>
              <router-link to="/mainTrue/">我喜欢</router-link>
            </li>
            <li>
              <router-link to="/mainTrue/gedan">我创建的歌单</router-link>
            </li>
            <li>关注</li>
            <li>粉丝</li>
            <li>我上传的视频</li>

          </ul>
        </div>
      </div>
      <router-view></router-view>

    </div>


</template>

<script>
    export default {
        name: "mainTrue",
      data(){
          return {

          }
      }
    }
</script>

<style scoped lang="less">
.aboutMe {
    background-image:url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3803737297,1906211443&fm=26&gp=0.jpg");
  position: relative;
  background-size: 100% 100%;
  height: 382px;
    .meBox {
     text-align: center;
      color: #fff;
      .meImg {
        display: inline-block;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #fff;
        margin-top: 60px;
      }
      >p {
        font-size: 25px;
        img {
          /*width: 100%;*/
          vertical-align: -4px;
        }
      }
      ul {
        margin-top: 10px;
        li {
          display: inline-block;
          padding: 0 20px;
        }
      }
    }
  .aboutMeBot {
    position: absolute;
    bottom: 0;
    /*left: 50px;*/
    width: 100%;
    ul {
      background-color: #000;
      width: 100%;
      box-sizing: border-box;
      padding: 15px 0 15px 50px;
      color: #fff;
      background-color: rgba(0,0,0,0.5);
      li {
        display: inline-block;
        padding-right: 20px;
        &:first-child {
          color: green;
        }
        &:hover {
          color: green;
        }
      }
    }
  }
}
</style>
