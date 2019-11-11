<template>
     <!-- 开始再页面上加元素 -->
    <!-- 外面的大盒子，背景为偏蓝色的那哪个 -->
    <div class="login_container">
       <!--白色的大盒子  -->
      <div class="login_box">
        <!-- 放图片的盒子 -->
        <div class="avatar-box">
          <img src="../assets/logo.png" alt="logo">
        </div>
        <!-- 表单区域 -->
        <el-form ref='loginFormRef' :rules="loginFormRules" :model="loginForm" label-width="80px" class="login_form">
          <!-- 两个input区域 -->
          <el-form-item label="用户名" prop="username">
             <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
             <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <!-- 两个按钮 -->
          <el-form-item class="btns">
              <el-button type="primary" @click="login">提交</el-button>
              <el-button type="primary" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则
      loginFormRules: {
        // 验证名字是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否正确
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮事件
    resetLoginForm () {
      // 此时的this就是指向当前vue的事例对象
      // console.log(this)
      // $refs.loginFormRef可以在上一步的打印中找到
      // this.$refs.loginFormRef获取到了引用对象，也就是form对象
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 保存tokrn
        window.sessionStorage.setItem('token', res.data.token)
        // 进行页面跳转
        this.$router.push('home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
background-color: #2b4b6b;
height: 100%;
}
.login_box {
width: 450px;
height: 300px;
background-color: #fff;
border-radius:3px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%)
}
// 放图片的盒子的大小
.avatar-box {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,-50%);
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  background-color: #fff;
}
.avatar-box img {
width: 100%;
height: 100%;
border-radius: 50%;
background-color: #ccc;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 90%;
}
// 两个按钮居右
.btns {
  // 跟老师的不一样
text-align: right;
}
</style>
