<template>
  <div class="login-container">
    <h3>登&nbsp录</h3>
    <el-form label-width="80px" class="form">
      <el-form-item label="用户名:">
        <el-input class="input" v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" class="form" >
        <el-input class="input" v-model="password" type='password' @keydown.native.enter="login"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="login" @click="login">登录</el-button>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
      labelPosition: "left",
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password)
        return this.$notify({
          title: "警告",
          message: "请输入用户名或密码",
          type: "warning"
        });
      // console.log('登录操作')
      this.axios
        .post("users/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('userInfo',JSON.stringify(res.data.data))
          if (res.data.status == 200) {
            this.$notify({
              title: res.data.succMsg,
              message: "Welcome",
              type: "success"
            });
          }
          //登录成功后将token存到本地
          localStorage.setItem('token',res.data.data.token)
          this.$router.push('/address')
        })
        //.then的回调有两个参数,第一个为成功的回调,第二个为失败的,而axios可以使用.catch
        //来捕获失败的响应
        .catch((err)=>{
          console.dir(err)

          if(err.response.status==400){
            this.$notify.error({
              title: "错误",
              message: "用户名或密码错误"
            });
          }
        })
    }
  }
};
</script>
<style lang='less' scoped>
.login-container {
  width: 600px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 150px auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px #ccc;
  h3 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: orangered;
    font-weight: bold;
  }
  .form {
    margin-top: 50px;
  }
  .input {
    width: 500px;
  }
  .login {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
}
</style>

