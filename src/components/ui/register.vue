<template>
    <div class="big">
        <div class="logo">
            <img src="../../../public/load/art_logo.jpg" alt="logo">
        </div>
        <!-- 主体部分 -->
        <div class="main">
            <div class="head">
                <span>欢迎新用户</span>
                <span>已有账户 去<router-link :to="{ path: './login'}" replace style="red">登录</router-link></span>
            </div>
            <div class="elform">
                <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="addForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="addForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="addForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="addForm.mobile"></el-input>
                    </el-form-item>
                </el-form>
                <!-- 同意协议 -->
                <span class="xieyi">
                    <input type="checkbox">  同意协议并注册<a href="#">《工艺品用户协议》</a>
                </span>
                <!-- 内容底部的按钮 -->
                <span slot="footer" class="dialog-footer">
                    <el-button @click="toindex">退出</el-button>
                    <el-button type="primary" @click="addUser">确 定</el-button>
                </span>
            </div>
        </div>
        <!-- 底部 -->
        <div class="footer">
        <p class="links"><a href="javascript:;">关于我们</a>  |  联系我们  |  联系客服  |  商家入驻  |  展品中心  |  手机工艺品  |  友情链接  |  销售联盟  |  工艺品社区  |  工艺品公益  |  English Site  |  Contact U  </p>
        <p class="copyright">地址：河南省新乡市红旗渠红门镇新乡学院 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhangyihong.cn <br>新乡ICP备08001421号新乡公网安备110108007702</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    // 验证邮箱的自定义规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^\w+@\w+(\.\w+)+$/
      if (regEmail.test(value)) {
        // 合法的话
        return cb()
      }
      // 返回一个错误提示
      cb(new Error('请输入合法的邮箱'))
    }
    // 验证手机号的自定义规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^1[3456789]\d{9}$/
      if (regMobile.test(value)) {
        return cb()
      }
      // 返回一个错误提示
      cb(new Error('请输入合法的手机号码'))
    }
    return {
      // 查询到的用户信息对象
      editForm: {},
      UserLise: [],
      total: 0,
      // 添加用户的表单数据
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      // 添加表单的用户规则
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    clickIt: function () {
      window.location.href = './index'
      window.location.href = './login'
    },
    // 点击  确定  添加用户前的预验证
    addUser () {
      this.$refs.addFormRef.validate(async valid => {
        // 提交之前，若表单填写的内容全部符合验证，则返回true
        // console.log(this.$refs)
        // console.log(valid)
        if (!valid) return this.$message.error('请填写完整用户信息')
        // 发起请求
        // const { data: res } = this.$http.post('users', this.addForm)
        const { data: res } = await this.$http.post('users', this.addForm)
        // console.log(res)
        if (res.meta.status !== 201) {
          return this.$message.error('添加用户失败，原因：' + res.meta.msg)
        }
        this.$message.success('注册成功')
        // 成功添加用户后就关闭绘画框
        // this.addDialogVisible = false
        // 成功添加用户后，跳到index页面
        // this.$router.push('/index')
      })
    },
    toindex () {
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: black;
}
ul li {
    list-style: none;
}
.big {
    width: 1200px;
    margin: 0 auto;
}
.big .logo {
    width: 1200px;
    height: 100px;
    border-bottom: 2px solid #DE342F;
}
.logo img{
    height: 100%;
}
.main {
    width: 1200px;
    height: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
}
.main .head {
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    border-bottom: 1px solid #ccc;
}
.head span:first-child {
    float: left;
    padding: 0 10px;
    font-size: 18px;
}
.head span:last-child {
    float: right;
    padding: 0 10px;
    font-size: 14px;
}
.head span a {
    color: #DE342F;
}
.elform {
    width: 750px;
    margin: 50px auto;
    text-align: center;
}
.elform span {
    display: block;
    margin-top: 20px;
}
.elform span a{
    color: blue;
}
.footer {
    height: 120px;
    text-align: center;
    color: rgb(145, 145, 145);
    font-size: 12px;
}
.footer a {
    color: rgb(145, 145, 145);
}
.links {
    margin-top: 20px;
    height: 30px;
}
.copyright {
    line-height: 20px;
}
</style>
