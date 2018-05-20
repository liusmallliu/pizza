<template>
    <div>
        <h1>Home </h1>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
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