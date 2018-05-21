<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
                    <form  @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" class="form-control" v-model="confirmPassword">
                        </div>
                        <button  type="submit" class="btn btn-success btn-block">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            email:'',
            password:'',
            confirmPassword:''
        }
    },
    methods:{
        onSubmit(){
            if(this.password === this.confirmPassword){
                const formDate = {
                    email : this.email,
                    password : this.password,
                    confirmPassword : this.confirmPassword
                }

                // 如果axios.post()的括号里面什么都不输入，那么默认的地址就是main.js里面配置的
                // axios.defaults.baseURL = 'https://wd7068517581xtlbvg.wilddogio.com/';
                // 如果括号里面输入了，那么则是上面的地址后拼接输入的地址
                axios.post('/users.json',formDate)
                        .then(res => this.$router.push({name:'loginLink'}))

            }else{
                alert("两次密码不一致")
            }
        }
    }
}
</script>


