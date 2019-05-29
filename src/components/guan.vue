<template>
    <div class="mainyyg">
<!--      子导航条-->
      <div class="nav">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/geshou">歌手</router-link>

          </li>
          <li>新碟</li>
          <li>排行榜</li>
          <li>分类歌单</li>
          <li>电台</li>
          <li>MV</li>
          <li>数字专辑</li>
          <li>票服</li>

        </ul>
      </div>

      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "guan",
      data(){
          return {

          }
      }
    }
</script>

<style scoped lang="less">
  .mainyyg {
    /*width: 100%;*/
    /*background-color: red;*/
  }
  /*子导航条*/
    .nav {
      /*width: 100%;*/
      background-color: #fff;
      margin: 0 auto;
      ul {
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
        box-sizing: border-box;
        /*background-color: red;*/
        list-style: none;
        text-align: center;
        li {
         display: inline-block;
          padding: 10px 20px;
          &:hover {
            color: green;
          }
        }
      }
    }

</style>
