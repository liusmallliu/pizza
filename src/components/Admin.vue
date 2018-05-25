<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new pizza -->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-4">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMeunItem" :key="item.name">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button  @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from './NewPizza.vue';

export default {
    data(){
        return {
            getMeunItem : []
        }
    },
    components:{
        'app-new-pizza':NewPizza
    },

    //钩子函数，进入页面之前拿到数据
    created(){
        fetch("https://wd5762020806ywbquh.wilddogio.com/menu.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            let menuArray = []
            for (let key in data) {
                data[key].id = key
                menuArray.push(data[key])
            }
            this.getMeunItem = menuArray
        })
    },
    methods:{
        deleteData(item){
            fetch("https://wd5762020806ywbquh.wilddogio.com/menu/"+item.id+"/.json",{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            })
                .then(res => res.json())
                .then(data => this.$router.push({name:"menuLink"}))
                .catch(err => console.log(err))
        }
    }
}
</script>
