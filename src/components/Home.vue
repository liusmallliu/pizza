<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝Pizza！</h1>
                <h2>这里有你非常喜欢的pizza</h2>
                <button @click="goToMenu" class="btn btn-success">Let's order!</button>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    methods:{
        goToMenu(){
            //通过push进行跳转
             this.$router.push('/menu')
        }
    }
}
</script>

<style>
 #home{
     background: url('../../src/assets/pizza.jpg');
     /* 85vh代表占整个屏幕高度的85%，注意目前只有谷歌支持的较好 */
     height: 85vh;       
     padding: 10%;       
 }
 h1,h2{
     margin: 6%;
 }
 .background{
     background: #eee;
     /* 设置透明度 */
     opacity: 0.8;
     /* 70vw代表占整个屏幕高度的70% ，注意目前只有谷歌支持的较好*/
     max-width: 70vw;
     margin: 0 auto;
     padding: 20px 0;
 }
</style>
