<template>
    <div class="login-container">
        <div class="login-box">
            <div class="login-box_head flex items-end pb-7">
                <h3 class="text-2xl font-bold pr-2 text-dark-500">用户登录</h3>
                <span class="text-base text-gray-500 font-medium">SIGN IN</span>
            </div>
            <el-form :model="loginForm" ref="loginFormRef" :rules="loginRules" label-width="80px" :inline="false" size="large">
                <el-form-item prop="username" label-width="0px">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名" >
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" label-width="0px">
                    <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password>
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-button class="btn-grad w-[150px]" :loading="loading" @click="onSubmit">登录</el-button>
            </el-form>
            
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from '@/util/usePrompt.js'
import { useUserStore } from '@/stores/user.js'

const { LOGIN_FUNC } = useUserStore()

const router = useRouter()
const loginFormRef = ref(null)
const loginForm = reactive({
    username: '',
    password: ''
})

const loading = ref(false)

const validatePass = (rule, value, callback) => {
    const reg =  /^(?=.*[A-Za-z])(?=.*\d)[^]{6,16}$/
  if (value === '') {
        callback(new Error('密码不能为空'))
  } else {
    if (!reg.test(loginForm.password)) {
        callback(new Error('密码为6到16个字符,至少包含一个字母和数字'))
        return
    }
    callback()
  }
}
const loginRules = reactive({
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
})

const onSubmit = () => {
  loginFormRef.value.validate((valid) => {
    if (!valid) return false;
    loading.value = true
    LOGIN_FUNC(loginForm).then(res => {
        toast('登录成功')
        router.replace('/')
    }).finally(() => {
        loading.value = false
    })
    console.log('submit!')
   
  })
}


// 监听回车函数
function onKeyUp(e) {
    if (e.key === 'Enter') {
        onSubmit()
    }
}

onMounted(() => {
    // 添加键盘监听事件
    document.addEventListener('keyup', onKeyUp)
})

onBeforeUnmount(() => {
    // 移除键盘监听事件
    document.removeEventListener('keyup', onKeyUp)
})

</script>

<style lang="scss" scoped>
.login-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: url('@/assets/images/login-bg.png') no-repeat center center / cover;

    .login-box {
        position: absolute;
        top: 50%;
        right: 8%;
        transform: translateY(-50%);
        width: 500px;
        padding: 48px;
        border-radius: 15px;
        background-color: #fff;
    }
}
         
.btn-grad {
    background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%);
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    cursor: pointer;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
         
</style>