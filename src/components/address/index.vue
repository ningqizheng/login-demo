<template>
  <div>
    <el-row class="tac">
      <el-col :span="6">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">收货人</template>
              <el-menu-item index="1-1">收货人信息</el-menu-item>
              <el-menu-item index="1-2">收货人分类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <el-table :data="addresserList" style="width: 100%">
          <el-table-column prop="id" label="日期" width="150"></el-table-column>
          <el-table-column label="配送信息">
            <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
            <el-table-column label="地址">
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" width="120"></el-table-column>
              <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
              <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
              <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="2">
        <el-button type="success">{{userInfo.nickname}}</el-button><el-button type="info" @click='logout'>退出</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addresserList: [],
      userInfo:[]
    };
  },
  created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.getAddressLists();
  },
  methods: {
    getAddressLists() {
      this.axios
        //在请求参数里携带本地存储的token
        .get("users/getReceiverAddress")
        .then(res => {
          this.addresserList = res.data.data;
          console.log(res.data.data);
        });
    },
    logout(){
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
  }
};
</script>
<style lang="less">
    .el-button+.el-button{
        margin: 0
    }
</style>

