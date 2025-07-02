<template>
  <div class="menu" @click="handleMenuToggle">
    <div v-if="!isToggleMenu" class="menu-icon">
    <div class="menu-icon-inner">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>

  <div v-if="isToggleMenu" class="close-icon">
    
      <div />
      <div />
   
  </div>
  </div>
</template>

<script setup lang="ts">
  const isToggleMenu = ref<boolean>(false)

  const handleMenuToggle = () => {
    isToggleMenu.value = !isToggleMenu.value
  }
</script>

<style scoped>
.menu-icon,.close-icon {
  position: fixed;
  z-index: 9999;
  top: 15px;
  left: 15px;
  transform: scale(0.6);
  cursor: pointer;
  width: 80px;
  height: 70px;
}
.menu-icon{
  animation: pop 0.3s ease;
}
.close-icon{
  left:8px;
  top:10px;
  animation: pop 0.3s ease;
}

.close-icon{
  
  div:nth-child(1){
    background-color: #fff;
    border-radius: 30px;
    height:10px;
    rotate: 45deg;
    position: relative;
    top:30px;
    
  }
  div:nth-child(2){
    background-color: #fff;
    border-radius: 30px;
    height:10px;
    rotate: -45deg;
    position: relative;
    top:20px;
    
  }
}


.menu-icon-inner {
  position: relative;
  cursor: pointer;
}

.menu-icon-inner div {
  width: 25px;
  background-color: #fff;
  position: absolute;
  border-radius: 5px;
}

.menu-icon-inner div:nth-child(1) {
  height: 30px;
  top: 0;
  left: 0;
}

.menu-icon-inner div:nth-child(2) {
  height: 20px;
  top: 0;
  left: 30px;
}

.menu-icon-inner div:nth-child(3) {
  height: 20px;
  top: 35px;
  left: 0;
}

.menu-icon-inner div:nth-child(4) {
  height: 30px;
  top: 25px;
  left: 30px;
}


@keyframes pop{
  from{
    transform: scale(0);
  }
  to{
    transform: scale(0.6);
  }
}
</style>
