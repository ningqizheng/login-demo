<template>
  <div class='login-container'>
    <h3>登&nbsp录</h3>
    <el-form  label-width="80px" class='form'>
      <el-form-item label="用户名:">
        <el-input class='input'></el-input>
      </el-form-item>
      <el-form-item label="密码:" class='form'>
        <el-input class='input'></el-input>
      </el-form-item>
      
    </el-form>
    <el-button type="primary" class='login'>登录</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        
      };
    }
  }
</script>
<style lang='less' scoped>
.login-container{
    width: 600px;
    height: 300px;
    border:1px solid #ccc;
    margin:150px auto;
    padding: 20px;
    border-radius: 20px;
    h3{
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        color:skyblue;
        font-weight: bold
    }
    .form{
        margin-top: 50px;
    }
    .input{
        width: 500px;
    }
    .login{
        width: 100px;
        display: block;
        margin:0 auto
    }
}
</style>

