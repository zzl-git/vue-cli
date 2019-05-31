<template>
    <div>
      <div class="xindie">
        <ul>
          <li>内地</li>
          <li>港台</li>
          <li>欧美</li>
          <li>韩国</li>
          <li>日本</li>
          <li>其他</li>
        </ul>
        <div class="xindieBox">
          <ul>
            <li v-for="item in xindieData">
              <div class="mainImg">
                <img :src="item.Img">
                <i class="el-icon-caret-right"></i>
              </div>
              <div class="title">{{item.title}}</div>
              <div class="name">{{item.name}}</div>
              <div class="name">{{item.time}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "xindie",
      data(){
          return {
            xindieData:[
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },
              {
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              },{
                Img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002BPPkm0sozsI.jpg?max_age=2592000",
                title:"时光擦身而过",
                name:"谭维维",
                time:"2019-05-31"
              }
            ]
          }
      }
    }
</script>

<style scoped lang="less">
.xindie {
  background-color: #f4f4f5;
  overflow: hidden;
  >ul {
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    color: #333333;
    li {
      display: inline-block;
      padding: 5px;
      margin: 0 20px;
      &:first-child {
        color: #fff;
        background-color: green;
      }
    }
  }
  .xindieBox {
    width: 1200px;
    margin: 0 auto;
  ul {
    li {
      display: inline-block;
      width: 18%;
      margin: 10px;

      .mainImg {
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        position: relative;
        i {
          display: none;
          transition: all 1s;
        }
        &:hover {
          i {
            display: block;
            color: #ccc;
            position: absolute;
            left: 40%;
            top: 40%;
            font-size: 40px;
            background-color: #fff;
            border-radius: 50%;
            padding: 12px;
          }
          img {
            transform: scale(1.1);
          }
        }
        img {
          transition: all 1s;
          width: 100%;

        }

      }
      .name {
        color: #aaa;
      }
    }
  }
  }
}
</style>
