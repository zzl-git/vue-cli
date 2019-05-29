<template>
  <div id="app">
    <div class="mainTop">
      <div class="mainbox">
        <!--        顶部logo和导航-->
        <dl>
          <dt>
            <img src="./assets/logo.png">
          </dt>
          <dd title="音乐管" >
            <router-link to="/"> 音乐管</router-link>
          </dd>
          <dd title="我的音乐">
            <router-link to="/mainTrue">我的音乐</router-link>
          </dd>
          <dd title="客服端">
            <router-link to="/ccc">
              <img src="./assets/mark_1.png" alt="">
              客服端
            </router-link>

          </dd>
          <dd title="音乐号">
            <router-link to="/aaa">
              音乐号
            </router-link>
          </dd>
          <dd title="VIP">
            <router-link to="/bbb">
              VIP
            </router-link>
          </dd>
        </dl>
        <!--        顶部搜索框-->
        <div class="sousuo">
          <el-autocomplete

            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          >
            <i
              class="el-icon-edit el-input__icon"
              slot="suffix"
              @click="handleIconClick">
            </i>
            <template slot-scope="{ item }">
              <span class="unmID">{{ item.id }}</span>
              <span class="name">{{ item.value }}</span>
              <span class="addr">{{ item.address }}</span>
            </template>
          </el-autocomplete>
        </div>
        <ul>
          <li>
            <img src="./assets/g.jpg" alt="">
            <span class="el-icon-location"></span>
          </li>
          <li>
            开通绿砖豪华版
          </li>
          <li>
            开通付费包
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  // import mainTrue from '@/components/mainTrue'
export default {
  name: 'App',
  data() {
    return {
      restaurants: [],
      state: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "id":"1","value": "该死的温柔", "address": "40.5万" },


      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}
</script>

<style scoped lang="less">
  .mainTop {
    width: 100%;
    .mainbox {
      overflow: hidden;
      width: 90%;
      height: 92px;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      dl {
        float: left;
        overflow: hidden;
        height: 100%;
        dt {
          img {
            margin-top: 15px;
          }
          float: left;
          height: 100%;
          line-height: 92px;
          margin-right: 30px;
        }
        dd {
          float: left;
          height: 100%;
          /*width: 96px;*/
          box-sizing: border-box;

          line-height: 92px;
          text-align: center;
          /*margin-inline-start: 0px !important;*/
          a {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            color: #000;
            padding: 0 20px;
          }
          &:hover {
            color: green;
          }
          &:nth-child(2) {
            /*background-color: green;*/
            /*color: #fff;*/

          }
          &:nth-child(4){
            position: relative;
            img {
              position: absolute;
              top: 20%;
              right: 0;
              height: 15px;
            }
          }
          &:last-child{
            margin-right: 50px;
          }
        }
      }
      .sousuo {
        float: left;
        margin: 20px 0 0 0px;
        width: 223px;
      }

      >ul {
        overflow: hidden;
        float: right;
        list-style: none;
        height: 92px;
        /*line-height: 92px;*/
        padding-top: 20px;
        li {
          &:first-child {
            position: relative;
            /*margin-top: 20px;*/
            img {
              width: 50px;
              border-radius: 50%;
            }
            span {
              position: absolute;
              /*button:0;*/
              right: 0;
              bottom: -5px;
              color: green;
            }
          }
          float: left;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          &:nth-child(2) {
            box-sizing: border-box;
            /*padding: 10px 5px;*/
            margin: 0 10px;
            padding: 0 5px;
            background-color: #31c27c;
          }
          &:nth-child(3) {
            box-sizing: border-box;
            border: 1px solid #ccc;
            padding: 0 5px;
          }
        }
      }

    }
    /*搜索框开始*/

  }
  /*搜索框*/
  .unmID {
    color: red;
    display: inline-block;
  }
  .name{
    display: inline-block;
    width: 110px;
    margin-left: 10px;
  }
  .addr {
    font-size: 12px;
    color: #b4b4b4;
    /*display: inline-block;*/
    /*width: 120px;*/

  }

  .highlighted .addr {
    color: red;
    display: inline-block;
  }
  .el-autocomplete-suggestion {
    li {
      &:hover {
        background-color: green !important;
        color: #fff !important;
      }
    }
  }

  .router-link-exact-active,.router-link-active
 {
    /*padding: 0 20px;*/
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: green;

      color: #fff !important;

    /*font-size: 40px;*/
  }
</style>
