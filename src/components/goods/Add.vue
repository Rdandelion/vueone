<template>
  <div>
    <!-- 面包屑导航区域 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/goods' }">商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>添加商品</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片区域 -->
<el-card>
    <!-- 警告提示区域 -->
  <el-alert  title="添加商品信息" type="info" center show-icon  :closable="false"></el-alert>
  <!-- 步骤条 -->
  <!-- active 激活项的索引 -->
  <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
  <el-step title="基本信息"></el-step>
  <el-step title="商品信息"></el-step>
  <el-step title="商品属性"></el-step>
  <el-step title="商品图片"></el-step>
  <el-step title="商品内容"></el-step>
  <el-step title="完成"></el-step>
</el-steps>
<!-- 标签页  (tab栏区域) -->
<!-- 注意：form必须在tabs外面，tabs与tab-pane之间不能插入其他标签 -->
<el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px" label-position="top">
<el-tabs v-model="activeIndex" :tab-position="'left'" :before-leave="beforeTabLeave" @tab-click="tabClicked">
    <el-tab-pane label="基本信息" name="0">
      <el-form-item label="基本信息" prop="goods_name">
        <el-input v-model="addForm.goods_name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="goods_price">
        <el-input v-model="addForm.goods_price"  type="number"></el-input>
      </el-form-item>
      <el-form-item label="商品重量" prop="goods_weight">
        <el-input v-model="addForm.goods_weight" type="number"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="goods_number">
        <el-input v-model="addForm.goods_number" type="number"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="goods_cat">
        <!-- 选择商品分类的级联选择框 -->
            <el-cascader  expand-trigger='hover' v-model="addForm.goods_cat"  :options="catelist"
            :props="cateProps"  @change="handleChange" clearable></el-cascader>
      </el-form-item>
    </el-tab-pane>
    <el-tab-pane label="商品参数" name="1">
      <!-- 渲染表单的item项 -->
      <el-form-item :label="item.attr_name" v-for="item in manyTableData" :key="item.attr_id">
        <!-- 复选框组 -->
        <el-checkbox-group v-model="item.attr_vals">
        <el-checkbox :label="item" v-for="(item, index) in item.attr_vals" :key="index" border></el-checkbox>
      </el-checkbox-group>
      </el-form-item>
    </el-tab-pane>
    <el-tab-pane label="商品属性" name="2">
      <el-form-item :label="item.attr_name" v-for="item in onlyTableData" :key="item.attr_id">
        <el-input v-model="item.attr_vals"></el-input>
      </el-form-item>
    </el-tab-pane>
    <el-tab-pane label="商品图片" name="3">
      <!-- 上传图片 -->
      <!-- action 表示图片要上传到后台API地址-->
      <!-- 注意，上传图片按钮组件有自己的axios，它没有设置token，我们自己设置 -->
      <el-upload :action="uploadURL" :on-preview="handlePreview" :on-remove="handleRemove"  list-type="picture" :headers="headerObj" :on-success="handleSuccess">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-tab-pane>
    <el-tab-pane label="商品内容" name="4">
      <!-- 富文本编辑器组件 -->
      <quill-editor v-model="addForm.goods_introduce"></quill-editor>
      <!-- 添加商品的按钮 -->
      <el-button type="primary" class="btnadd" @click="add">添加商品</el-button>
    </el-tab-pane>
  </el-tabs>
  </el-form>
</el-card>
<!-- 图片预览 -->
<el-dialog  title="图片预览"  :visible.sync="previewVisible"  width="50%" >
  <img :src="previewPath" alt="图片预览" class="perviewImg">
</el-dialog>

  </div>
</template>

<script>
// 深拷贝  官方建议我们用_来引入，跟$一个原理
import _ from 'lodash'
export default {
  data () {
    return {
      activeIndex: '0',
      tabPosition: 'left',
      // 添加表单的数据项
      addForm: {
        goods_name: '',
        goods_price: 0,
        goods_number: 0,
        goods_weight: 0,
        // 商品所属的分类数组
        goods_cat: [],
        // 图片的数组，默认就是空数组
        pics: [],
        // 商品的详情描述
        goods_introduce: '',
        // 添加的商品参数、商品属性等，都存储在sttrs里
        attrs: []
      },
      // 验证表单的数据项
      addFormRules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        goods_number: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ],
        goods_weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' }
        ],
        goods_cat: [
          { required: true, message: '请选择商品分类', trigger: 'blur' }
        ]
      },
      // 商品分类列表
      catelist: [],
      cateProps: {
        label: 'cat_name',
        value: 'cat_id',
        children: 'children'
      },
      // 动态参数列表数据
      manyTableData: [],
      // 静态参数列表数据
      onlyTableData: [],
      // 上传图片的URL地址
      uploadURL: 'http://127.0.0.1:8888/api/private/v1/upload',
      // 图片上传组件的headers请求头对象
      // upload有自己的请求，我们自己设置的请求拦截器加的token对upload没用
      headerObj: {
        Authorization: window.sessionStorage.getItem('token')
      },
      previewPath: '',
      // 默认隐藏对话框
      previewVisible: false
    }
  },
  created () {
    this.getCateList()
  },
  methods: {
    // 获取所有商品分类数据
    async getCateList () {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类数据失败')
      }
      // this.$message.success('获取商品分类数据成功')
      this.catelist = res.data
      // console.log(this.catelist)
    },
    // 级联选择器选中项变化，会触发这个函数
    handleChange () {
      // console.log(this.addForm.goods_cat.length)
      // 只能选择三级分类的操作，不是三级就置空
      if (this.addForm.goods_cat.length !== 3) {
        this.addForm.goods_cat = []
      }
    },
    // 标签页切换会触发beforeTabLeave
    beforeTabLeave (activeName, oldActiveName) {
      // console.log('即将离开的标签页名字是：' + oldActiveName)
      // console.log('即将离开的标签页名字是：' + activeName)
      if (oldActiveName === '0' && this.addForm.goods_cat.length !== 3) {
        this.$message.error('请先选择商品分类')
        return false
        // return false的作用：不让跳转
      }
    },
    // tab被选中时触发
    async tabClicked () {
      // 把当前激活的index打印，即时当前的选中项
      // console.log(this.activeIndex)
      if (this.activeIndex === '1') {
        const { data: res } = await this.$http.get(`categories/${this.cateId}/attributes`, { params: { sel: 'many' } })
        if (res.meta.status !== 200) {
          return this.$message.error('获取动态参数列表失败')
        }
        // console.log(res.data)
        res.data.forEach(item => {
          item.attr_vals = item.attr_vals.length === 0 ? [] : item.attr_vals.split(',')
        })
        // 注意：有的三级没有属性，得到的时空数组
        this.manyTableData = res.data
      } else if (this.activeIndex === '2') {
        const { data: res } = await this.$http.get(`categories/${this.cateId}/attributes`, { params: { sel: 'only' } })
        if (res.meta.status !== 200) {
          return this.$message.error('获取静态参数列表失败')
        }
        // console.log(res.data)
        this.onlyTableData = res.data
      } else if (this.activeIndex === '3') {
        // console.log('3')
      }
    },
    // 处理图片预览效果
    handlePreview (file) {
      // console.log(file)
      this.previewPath = file.response.data.url
      // 用到dialog组件
      this.previewVisible = true
    },
    // 处理移除图片的操作
    handleRemove (file) {
      // console.log(file)
      // 1、获取将要删除的图片的临时路径
      const filePath = file.response.data.tmp_path
      // 2、从pics数组里，找到这个图片对应的索引值
      const i = this.addForm.pics.findIndex(x => x.pic === filePath)
      // 3、调用数组的splice方法，从pivs数组里移除
      this.addForm.pics.splice(i, 1)
      // console.log(this.addForm)
    },
    // 监听图片上传成功的事件
    handleSuccess (response) {
      // console.log(response)
      // 1、拼接得到一个图片信息对象
      const picInfo = { pic: response.data.tmp_path }
      // 2、将图片信息对象， push到pics数组里
      this.addForm.pics.push(picInfo)
      // console.log(this.addForm)
    },
    // 点击添加商品按钮
    add () {
      // console.log(this.addForm)
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) {
          return this.$message.error('请填写正确的表单项')
        }
        // 执行添加的业务逻辑
        // 级联时要求goods_cat为数组，提交时要求为字符串，我们要做的就是
        // 进行深拷贝，既不影响前面的级联，又能改变数组样式来提交
        // 深拷贝loadsh，里面有个方法 clone（obj）
        const form = _.cloneDeep(this.addForm)
        console.log(this.addForm)
        form.goods_cat = form.goods_cat.join(',')
        // 处理动态参数
        this.manyTableData.forEach(item => {
          const newInfo = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals.join(' ')
          }
          this.addForm.attrs.push(newInfo)
        })
        // 处理静态属性
        this.onlyTableData.forEach(item => {
          const newInfo = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals
          }
          this.addForm.attrs.push(newInfo)
        })
        form.attrs = this.addForm.attrs
        // console.log(form)
        const { data: res } = await this.$http.post('goods', form)
        if (res.meta.status !== 201) {
          return this.$message.error('商品添加失败')
        }
        this.$message.success('商品添加成功')
        this.$router.push('/goods')
      })
    }
  },
  computed: {
    cateId () {
      if (this.addForm.goods_cat.length === 3) {
        return this.addForm.goods_cat[2]
      }
      return null
    }
  }
}
</script>

<style lang="less" scoped>
.el-checkbox {
  margin:0 8px 0 0 !important;
}
.perviewImg {
  width: 100%;
}
.btnadd {
  margin-top: 15px;
}
</style>
