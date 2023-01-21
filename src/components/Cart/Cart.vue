<script setup>
import {useStoreOk} from "../../store/pinia.js"
import Counter from "../counter/counter.vue"


const storeOk=useStoreOk()//cono esto ya accedo al store

const addHandler=(quantity,idProduct)=>{//uso el idProduct que mando counter, q a su vez recibio del producto en cart abajo, para poder encontrar el objeto producto en cartList y mandarselo a addProduct para q cambie cant. otra opcion seria hacer otra action para cambio de cantidad que no necesite el objeto
//console.log(storeOk.cartList, "cartlist")
    idProduct=parseInt(idProduct)
   console.log(idProduct, "idprod")
    for(const item of storeOk.cartList){
       console.log(typeof(item.id),item.id,"id")
       console.log(typeof(idProduct), idProduct,"idproduct")
        if(item.id ==idProduct ){
            console.log("match ok")
            storeOk.addProduct(item,quantity)
        }
    }
}

</script>

<template>
    <div class="table-container" v-if="storeOk.cartList.length>0">
        <div class="table">
            <div class="title">
                <div class="title-img">Producto</div>
                <div class="title-description">Descripcion</div>
                <div class="title-size">Talle</div>
                <div class="title-quantity">Cantidad</div>
                <div class="title-price">Precio</div>
                <div class="title-delete">Eliminar</div>
            </div>
            <hr/>
            <div class="product" v-for="item in storeOk.cartList " :key="item.id">
                <div class="product-img"><img :src="item.img"  /> </div>
                <div class="product-description">{{ item.description }} </div>
                <div class="product-size">{{ item.size }} </div>
                <div class="product-quantity"><Counter :addHandler="addHandler" :init="item.quantity" :idProduct="item.id" from='cart'/></div>
                <div class="product-price">{{ item.price * item.quantity }} </div>
                <div class="product-delete"><button v-on:click="storeOk.deleteProduct(item.id)">Delete Product</button> </div>
            
            </div>
        </div>
        <div class="empty">
            <button v-on:click="storeOk.emptyList" id="button-empty">Empty List</button>
        </div>
    </div>
    <div class="empty-cart" v-if="storeOk.cartList.length==0" >
       <img src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt="loading"/>
    </div>

</template>


<style>

.empty-cart{
    text-align: center;

}

.empty-cart img{
    margin-top: 50px;  
}



.table{
    width: 800px;

    
}

.title{
    display: flex;
  
text-align: center;

}

.title-img{
    width: 16%;
    font-weight: bold;
}

.title-description{
    width: 16%;
    font-weight: bold;
}

.title-size{
    width: 16%;
    font-weight: bold;
}

.title-quantity{
    width: 20%;
    font-weight: bold;
}

.title-price{
    width: 16%;
    font-weight: bold;
}

.title-delete{
    width: 16%;
    font-weight: bold;
}

.product{
    display: flex;
    text-align: center;
    margin-top: 20px;
}

.product-img{
    width: 16%;
}

.product-description{
    width: 16%;
}

.product-size{
    width: 16%;
}

.product-quantity{
    width: 20%;
}

.product-price{
    width: 16%;
}

.product-delete{
    width: 16%;
}

.product-img img{
    width: 150px;
    border-radius: 50px;
    border: 1px solid white;
}

/*-----*/

#button-empty{
   
}

.empty{

    text-align: center;
}



@media screen and (max-width: 900px) {

    .table{
        width: fit-content;
       
    }

    .title{
        display: none;
    }

    .product{
        display: flex;
        flex-direction: column;
        
        width: fit-content;
        margin: 0 auto;
        
    }

    .product-img{
        width: fit-content;
        margin: 0 auto;
    }

    .product-description{
        width: fit-content;
        margin: 0 auto;
    }

    .product-quantity{
        width: fit-content;
        margin: 0 auto;
    }

    .product-price{
        width: fit-content;
        margin: 0 auto;
    }

    .product-delete{
        width: fit-content;
        margin: 0 auto;
        margin-top: 10px;

    }

    .product-img img{
        width: 150px;
    }

}

</style>