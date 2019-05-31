<template>
    <div style="background-color: #f4f4f5">
      <div class="geshouImg">
        <h1>你关注的歌手将在这里展示</h1>
        <p>快速起歌,想听就听</p>
      </div>
      <div class="zhanshi">
        <ul>
          <li v-for="item in zhanshiData">
            <div class="zhanshiBox">
              <img :src="item.Img" :title="item.title">
              <p :title="item.title">{{item.title}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="geshouList">
        <ul>
          <li v-for="item in geshouListData">
           <span :title="item.name">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="fenye">
        <el-pagination
          background
          :pager-count="5"
          :page-sizes='[10,20,30,40,50]'
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

    </div>
</template>

<script>
    export default {
        name: "geshou",
      data(){
          return{
            zhanshiData:[
              {
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.jpg?max_age=2592000',
                title:'G.E.M.邓紫棋'
              },
              {
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000004V53Ga0bV65j.jpg?max_age=2592000',
                title:'陈雪玲'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',
                title:'周杰伦'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.jpg?max_age=2592000',
                title:'G.E.M.邓紫棋'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',
                title:'G.E.M.邓紫棋'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.jpg?max_age=2592000',
                title:'薛之谦'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000001BLpXF2DyJe2.jpg?max_age=2592000',
                title:'林俊杰'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000001JDzPT3JdvqK.jpg?max_age=2592000',
                title:'王力宏'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000020PeOh4ZaCw1.jpg?max_age=2592000',
                title:'艾伦'
              },{
                Img:'https://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.jpg?max_age=2592000',
                title:'G.E.M.邓紫棋'
              },
            ],
            geshouListData:[
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},{name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},{name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},{name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},{name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},{name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},
              {name:'胡夏'},

            ]
        }
      }
    }
</script>

<style scoped lang="less">
.geshouImg {
  background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3206507107,65007199&fm=26&gp=0.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 376px;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;

  h1 {
    margin-top: 100px;
    font-weight: 400;
    font-size: 50px;
    margin-bottom: 20px;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 20px;
  }
}
  .zhanshi {
    width: 90%;
    margin: 0 auto;
    ul {
      text-align: center;
      margin-top: 40px;
      li {
        display: inline-block;
        box-sizing: border-box;
        width: 18%;
        margin: 10px;
        overflow: hidden;
        .zhanshiBox {
          background-color: #fff;
          /*width: 80%;*/
          margin: 0 auto;
          padding: 20px 0;
          height: 100%;
        }
        img {
          border-radius: 50%;
        }
      }
    }
  }
  .geshouList {
    margin-top: 40px;
    ul {
      width: 90%;
      margin: 0 auto;
      /*width: 100%;*/
      li {
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        padding: 10px 0;
        span{
          &:hover {
            color: green;
          }
        }
      }
    }
  }
  .fenye {
    text-align: center;
    /*font-size: 60px;*/
  }
</style>
