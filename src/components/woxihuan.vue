<template>
  <div>
    <div class="woxihuan">
       <div class="woxihuanUl">
         <ul>
           <li>歌曲 60</li>
           <li>歌单 0</li>
           <li>专辑 0</li>
           <li>视频 0</li>
         </ul>
         <div class="woxihuanBut">
           <button>
             <i class="el-icon-caret-right"></i>
             播放全部
           </button>
           <button>
             <i class="el-icon-circle-plus"></i>
             添加到
           </button>
           <button>
             <i class="el-icon-download"></i>
             下载
           </button>
           <button>
             <i class="el-icon-edit"></i>
             批量操作
           </button>
         </div>
       </div>
      <div class="gequ">
        <ul>
          <li>
            <el-row>
              <el-col :span="12">歌曲</el-col>
              <el-col :span="4">歌手</el-col>
              <el-col :span="4">专辑</el-col>
              <el-col :span="4">时长</el-col>
            </el-row>
          </li>
        </ul>
        <ul v-for="(item,index) in gequData">
          <li v-if="index%2==0">
            <el-row>
              <el-col :span="6" style="position: relative">
                {{item.title}}
              </el-col>
              <el-col :span="6">
                &nbsp;
                <div class="caozuoImg">
                  <i class="el-icon-video-play"></i>
                  <i class="el-icon-circle-plus"></i>
                  <i class="el-icon-download"></i>
                  <i class="el-icon-folder-checked"></i>
                </div>
              </el-col>
              <el-col :span="4">{{item.name}}</el-col>
              <el-col :span="4">&nbsp;{{item.zhuanji}}</el-col>
              <el-col :span="4">{{item.time}}</el-col>
            </el-row>
          </li>
          <li v-if="index%2!=0" style="background-color: #f3f3f3">
            <el-row>
              <el-col :span="6" style="position: relative">
                {{item.title}}
              </el-col>
              <el-col :span="6">
                &nbsp;
                <div class="caozuoImg">
                  <i class="el-icon-video-play"></i>
                  <i class="el-icon-circle-plus"></i>
                  <i class="el-icon-download"></i>
                  <i class="el-icon-folder-checked"></i>
                </div>
              </el-col>
              <el-col :span="4">{{item.name}}</el-col>
              <el-col :span="4">&nbsp;{{item.zhuanji}}</el-col>
              <el-col :span="4">{{item.time}}</el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "woxihuan",
      data(){
          return {
            gequData:[
              {
                title:'我在贵州等你1',
                name:'刘炫吟',
                zhuanji:'我在贵州等你',
                time:'03.11'
              },{
                title:'我在贵州等你2',
                name:'刘炫吟',
                zhuanji:'我在贵州等你',
                time:'03.11'
              },{
                title:'我在贵州等你3',
                name:'刘炫吟',
                zhuanji:'我在贵州等你',
                time:'03.11'
              },{
                title:'我在贵州等你4',
                name:'刘炫吟',
                zhuanji:null,
                time:'03.11'
              },{
                title:'我在贵州等你5',
                name:'刘炫吟',
                zhuanji:'我在贵州等你',
                time:'03.11'
              },{
                title:'我在贵州等你6',
                name:'刘炫吟',
                zhuanji:null,
                time:'03.11'
              }
            ]
          }
      }
    }
</script>

<style scoped lang="less">
 .woxihuan {
   .woxihuanUl {
     margin-left: 50px;
     margin-top: 16px;
     ul {


       li {
         display: inline-block;
         padding-right: 20px;
         color: #333;
         &:hover {
           color: green;
         }
       }
     }
     .woxihuanBut {
       margin-top: 46px;
       button {
         &:first-child {
           background-color: green;
         }
         padding: 8px 20px;
         background-color: #fff;
         border: 1px solid #ccc;
         border-radius: 3px;
         margin-right: 15px;
         i {
           font-size: 20px;
           color: #ccc;
         }
       }
     }
   }
   .gequ {
     ul {
       width: 90%;
       list-style: none;
       margin: 0 auto;
       padding: 10px 0 10px 00px;
       width: 90%;
       li {
         padding: 20px 0;
         padding-left: 20px;
         .el-col {
           position: relative;
         }
         .caozuoImg {
           position: absolute;
           top: -10px;
           text-align: center;
           width: 100%;
           i {
             display: none;
             font-size: 40px;
             color: #aaa;

               cursor:pointer;

           }
         }
         &:hover {
           i {
             display: inline;
           }
         }
       }
       &:first-child {
         background-color: #f3f3f3;
         margin-top: 22px;
         padding: 5px 0 5px 0;
       }
     }
   }
 }
</style>
