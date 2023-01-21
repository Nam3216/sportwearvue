<script setup>
import { onMounted,ref } from 'vue';

const checkScroll=ref(true)

onMounted(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>{
        window,removeEventListener("scroll",handleScroll)
    }

})

const handleScroll=()=>{
    if(window.scrollY>50){
        checkScroll.value=false
        
    }
    if(window.scrollY<50){
        checkScroll.value=true
    }
}
//class="container-fluid"
</script>
<template>


   

   <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg navbar-light bg-light" :id= "checkScroll ? 'navbar' : 'navbarScroll'"  >
  <div class="container-fluid">
  
   <p class="navbar-brand" id="brand">Sportwear by Vue</p>

    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" id="home-link">
             <RouterLink to="/"><p class="link-p">Home</p></RouterLink>
        </li>
       
        <li class="nav-itemOk dropdown">
          <p class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Categorias
          </p>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="dropdown">
            <li><RouterLink to="/category/football"><p class="link-p">Football</p></RouterLink></li>
            <li><RouterLink to="/category/running"><p class="link-p">Running</p></RouterLink></li>
            <li><RouterLink to="/category/boxing"><p class="link-p">Boxing</p></RouterLink></li>
            <li><RouterLink to="/category/tennis"><p class="link-p">Tennis</p></RouterLink></li>
            <li><RouterLink to="/category/hockey"><p class="link-p">Hockey</p></RouterLink></li>
            
          
          </ul>
        </li>
        <li class="nav-item">
            <RouterLink to="/cart"><p class="link-p">Cart</p></RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/about"><p class="link-p">About</p></RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/contact"><p class="link-p">Contact</p></RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>

.nav1{

}
/*
.navbar{
    display: flex;
    
    background-color:black;
    align-items: center;
    justify-content: space-evenly;
}
*/
li {
  list-style: none;
}

a{
   font-weight: bold;
    color: white;

}

a:link, a:visited, a:active {
    text-decoration:none;
}

#navbar{

    top: 0%;
    width: 100%;
    margin-bottom: 100px;
    height: 80px;
}

#navbarScroll{

top: 0%;
width: 100%;
margin-bottom: 100px;
height: 60px;

}


.nav-item {
    margin-right: 30px;
    margin-top: 20px;/* para q se alinee renglon*/

    height: fit-content;
    color: white;
}

.nav-itemOk{
  
    margin-right: 30px;
    margin-top: 12px;
    font-weight: bold;
}

#home-link{
  /*  margin-left: 50px;*/
}

.navbar-brand{
    margin-top: 10px;

}

#brand{
  margin-right: 50px;
}

.link-p{
  color: whitesmoke;
  font-weight: bold;
}



#dropdown{
  background-color: black;
  border-radius: 10px;
  padding: 10px;
}

@media screen and (max-width: 991px) {

  #navbarNavDropdown{/*dropdown responsive.*/
 background-color: black;
 border-radius: 10px;
 padding: 10px;
}
}



</style>

