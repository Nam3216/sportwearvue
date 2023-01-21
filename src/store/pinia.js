import {defineStore} from "pinia" 

export const useStoreOk=defineStore({
    id:"cartList",//creo no haria falta un id distinto por cada state
   //state es donde pongo los estados que despues voy a pasar o mostrar en otro componente 
    state:()=>({
        cartList:[], //es una state property, puedo agregar mas de una
        totalPrice:0
    }),
    //getter es como un metodo computado. es una funcion, que va a retornar algo si el state cambia o si pasa tal cosa. ej, si counter es 1 quiero que aparezca palabra UNO en un div. aca entonces retorn UNO si counter ==1
    //este getter se va a actualizar solo, no hace falta llamarlo, como la computed method, ver en mail como esta explicado
    getters:{
        checkCounter:(state)=>{
            if(state.count % 2===0) return "even"
            return "odd"
        }
    },
    //accion, es como el setstate. o las actions de redux. aca ponermos las actions o funciones que van a acceder y modificar el state
    actions:{
        addProduct(product,quantity){
  
           let check=false 
           for(const item of this.cartList){
            if (item.id==product.id){
                product.quantity=quantity
                check=true
            }
           }
           if(check==false){
            product.quantity=quantity
             this.cartList.push(product)
             console.log(this.cartList)
           }else{
            console.log(this.cartList,"false")

           }
           
         
        },
        deleteProduct(id){
            
            const filter=this.cartList.filter(x=>x.id!=id)
            this.cartList=filter
            console.log(this.cartList, "cartlist")
        },
        emptyList(){
            this.cartList=[]
        }
    }
})

