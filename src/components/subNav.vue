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

            <div style="padding: 14px; display: inline-block;text-align: left" class="blockBox">
              <div class="imgBox">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
              <i class="el-icon-caret-right"></i>
            </div>
            <div style="padding: 14px; display: inline-block ;text-align: left" class="blockBox">
              <div class="imgBox">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
              <i class="el-icon-caret-right"></i>
            </div>
            <div style="padding: 14px; display: inline-block;text-align: left" class="blockBox">
              <div class="imgBox">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
              <i class="el-icon-caret-right"></i>
            </div>
            <div style="padding: 14px; display: inline-block;text-align: left" class="blockBox">
              <div class="imgBox">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <br><span>{{item[index].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item[index].liang }}</time>
              </div>
              <i class="el-icon-caret-right"></i>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
      </div>
    <h2>新歌首发</h2>
    <div class="subNav">
      <ul>
        <li>最新</li>
        <li>内地</li>
        <li>港台</li>
        <li>欧美</li>
        <li>韩国</li>
        <li>日本</li>
        <span class="playAll"><i class="el-icon-caret-right"></i>播放全部</span>
      </ul>
    </div>
    <el-carousel indicator-position="outside" :autoplay="false" height="380px" style="background-color: #fff" trigger="click">
      <el-carousel-item v-for="item in xingeData" :key="item">
        <ul class="gequMain">
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
          <li>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div class="gequBox">
              <h3>{{item.name}}</h3>
              <span>{{item.zuozhe}}</span>
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>

        </ul>
      </el-carousel-item>
    </el-carousel>
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
            ],
            xingeData:[
              {
                name:'灿烂的你',
                zuozhe:'汪峰',
                time:'05:33'
              },
              {
                name:'灿烂的你',
                zuozhe:'汪峰',
                time:'05:33'
              },
              {
                name:'灿烂的你',
                zuozhe:'汪峰',
                time:'05:33'
              }
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
        position: relative;
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
  .blockBox {
    position: relative;
    .imgBox {
      overflow: hidden;
      img {
        transition: all 0.5s;
        border: 1px solid #ccc;
      }
    }

    &:hover {
      img {

        transform: scale(1.1);
      }
      i {
        transition: all 5s;
        display: block;
      }

    }
    i {
      display: none;
      position: absolute;
      top: 50%-20;
      left: 50%-10;
      width: 50px;
      height: 50px;
      box-sizing: border-box;
      padding-top: 10px;
      text-align: center;
      font-size: 30px;
      background-color: #fff;
      border-radius: 50%;
      color: #aaa;
    }
  }
/*新歌首发*/
  .playAll {
    position: absolute;
    left: 20%;
    top: 30%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 5px 20px;
    i {
      font-size: 20px;
      color: #ccc;
      vertical-align: -2px;
    }
  }
.gequMain {
  overflow: hidden;
  list-style: none;
  text-align: center;
  li {
    /*float: left;*/
    display: inline-block;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    margin: 0 10px;
    img {
      width: 86px;
      margin-right: 5px;
      vertical-align: -30px;
    }
    .gequBox {
      display: inline-block;
      vertical-align: -10px;
      width: 236px;
      text-align: left;
      h3 {
        font-weight: 400;
        font-size: 16px;
      }
      span {
        color: #ccc;
      }
    }
    .time {
      display: inline-block;
    }
  }
}
</style>
