<template>
  <div class="subNav">
    <h2>歌单推荐</h2>
    <div class="subNav">
      <ul>
        <li>为你推荐</li>
        <li>官方歌单</li>
        <li>情歌</li>
        <li>网络歌曲</li>
        <li>经典</li>
        <li>官方歌KTV热歌单</li>
      </ul>
    </div>

    <div class="block" >
      <el-carousel trigger="click" height="370px" :autoplay="false">
        <el-carousel-item v-for="(item,index) in listData" :key="item" >
          <el-card :body-style="{ padding: '0px'}" style="text-align: center;background-color: #fff">

            <div style="padding: 14px; display: inline-block;text-align: left">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
            </div>
            <div style="padding: 14px; display: inline-block ;text-align: left">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
            </div>
            <div style="padding: 14px; display: inline-block;text-align: left">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
            </div>
            <div style="padding: 14px; display: inline-block;text-align: left">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
      </div>
    </div>
</template>
  </div>
</template>

<script>

    export default {
        name: "subNav",
      data(){
          return {
            listData:[
              [
               { name:"假日煲剧:2019上班年韩剧指南0",
                liang:"播放量:7.40万"},
                { name:"假日煲剧:2019上班年韩剧指南1",
                  liang:"播放量:7.40万"},
                { name:"假日煲剧:2019上班年韩剧指南2",
                  liang:"播放量:7.40万"},
                { name:"假日煲剧:2019上班年韩剧指南3",
                  liang:"播放量:7.40万"}
              ],
              [
                { name:"假日煲剧:2019上班年韩剧指南1",
                  liang:"播放量:7.41万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.41万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.41万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.41万"}
              ],
              [
                { name:"假日煲剧:2019上班年韩剧指南2",
                  liang:"播放量:7.42万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.42万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.42万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.42万"}
              ],
              [
                { name:"假日煲剧:2019上班年韩剧指南3",
                  liang:"播放量:7.43万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.43万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.43万"},
                { name:"假日煲剧:2019上班年韩剧指南0",
                  liang:"播放量:7.43万"}
              ]
            ]
          }
      }
    }
</script>

<style scoped lang="less">
  /*新歌推荐*/
  .subNav {
    background-color: #f3f3f3;
    overflow: hidden;
    h2 {
      text-align: center;
      margin-top: 50px;
      font-size: 35px;
      font-weight: 400;
    }
    .subNav {
      ul {
        overflow: hidden;
        /*background-color: pink;*/
        list-style: none;
        text-align: center;
        li {
          display: inline-block;
          padding: 25px;
        }
      }
    }
  }
  /*滑块*/
  .el-carousel__button {
    width: 20px !important;
    height: 20px !important;
    border-radius: 50% !important;
  }
  .el-carousel__arrow {
    border-radius: 2px !important;
  }



</style>
