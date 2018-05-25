<template>
    <div class="row">
            <!-- 菜单 -->
            <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入购物车</th>
                    </tr>
                </thead>
                <!-- 写不写key都可以,key的作用主要是为了高效的更新虚拟DOM -->
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td>
                            <strong>{{item.name}}</strong>
                        </td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td>
                            <button  
                                @click="addToBasket(item,option)" 
                                class="btn btn-sm btn-outline-success"
                                >+</button>
                        </td>
                    </tr>
                </tbody>
            </table>   
        </div>
    
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="bk in baskets" :key="bk.name">
                        <tr>
                            <td>
                                <button  @click="decreaseQuantity(bk)" class="btn btn-sm">-</button>
                                <span>{{bk.quantity}}</span>
                                <button  @click="increaseQuantity(bk)" class="btn btn-sm">+</button>
                            </td>
                            <td>
                                {{bk.name}}{{bk.size}}
                            </td>
                            <td>{{bk.price * bk.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价：{{total + "RMB"}}</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
            
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      baskets: [],
      basketText:'购物车暂无商品',
      getMenuItems: {}
    };
  },
  computed:{
      total(){
          let totalCost = 0

          for (let index in this.baskets) {
              let individualItem = this.baskets[index] 
              totalCost += individualItem.quantity * individualItem.price
          }

          return totalCost
      }
  },
  methods: {
    addToBasket(item, option) {
        let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }

        if(this.baskets.length > 0){
            //过滤
            let result = this.baskets.filter((bas) => {
                return (bas.name === item.name && bas.price === option.price)
            })

            if(result != null && result.length > 0){
                result[0].quantity++
            }else{
                this.baskets.push(basket);
            }
        }else{
            this.baskets.push(basket);
        }
   
    },
    decreaseQuantity(bk){
        bk.quantity--
        if(bk.quantity <= 0){
            this.removeFromBasket(bk)
        }
    },
    increaseQuantity(bk){
        bk.quantity++
    },
    removeFromBasket(bk){
        this.baskets.splice(this.baskets.indexOf(bk),1)
    },
    fetchData(){
        //使用fetch方法实现
        // fetch("https://wd5762020806ywbquh.wilddogio.com/menu.json")
        // .then(res => {
        //     return res.json()
        // })
        // .then(data =>{
        //     this.getMenuItems = data
        // })

        //使用axios方法实现
        // axios.get("menu.json")
        //     .then(res => this.getMenuItems = res.data)

        //使用配置的Vue原型实现
        this.http.get("menu.json")
                .then(res => this.getMenuItems = res.data)

    }
  },
  created(){
      this.fetchData()
  }
};
</script>

