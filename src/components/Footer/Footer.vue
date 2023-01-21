<script setup>
</script>

<template>
<div class="footer-content">
    <div class="footer">
        
        <div class="institucional">
            <p class="footer-title">Institucional</p>
            <p>Quienes Somos</p>
            <p>Privacidad</p>
            <p>Protocolos COVID</p>
            <p>Terminos y Condiciones</p>
            <p>Defensa del Consumidor</p>
        </div>
        <div class="ayuda">
            <p class="footer-title">Ayuda</p>
            <p>Preguntas Frecuentes</p>
            <p>Promociones</p>
            <p>Entregas</p>
            <p>Retiros en Tienda</p>
            <p>Cambios</p>
        </div>
        <div class="nosotros">
            <p class="footer-title">Nosotros</p>
            <p>Contacto</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Nosotros</p>
        </div>
        <div class="footer-img">
            <img src="fiscal.png" alt="fiscal"/>
            <img src="precios.png" alt="precios"/>
        </div>
    </div>
</div>
</template>

<style>

.footer{
 /*   display: flex;
    justify-content: space-around;*/
    margin: 0 auto;

    width: fit-content;
}

.footer-title{
    font-weight: bold;
    font-size: 18px;
   
}

.footer-content{
    margin-top: 100px;
    background-color: rgb(204, 201, 201);
    
}

.footer-img{
  /*  display: flex;
    flex-direction: column;
    justify-content: space-around;*/
}

@media screen and (min-width: 800px) {


    .footer{
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.footer-title{
    font-weight: bold;
    font-size: 18px;
   
}

.footer-content{
    margin-top: 100px;
    background-color: rgb(204, 201, 201);
}

.footer-img{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


}
</style>