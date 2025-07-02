<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="header-text-area">
        <h2>PORTFOLIO</h2>
        <h3>PHUWAKORN KAIYASUAN</h3>
        <div class="header-button-area">
          <button class="btn-header" @click="handleToggleProfile">
            <span class="front"> CLICK ME! </span>
          </button>
        </div>

       
          <div class="profile-icon-area">
            <div class="profile-icon-item">
              <div class="slide-up">
                <img src="/public/assets/images/icons/github.svg" alt="">
              </div>
              <div class="slide-down">
                <img src="/public/assets/images/icons/google.svg" alt="">
              </div>
            </div>
          </div>
      

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const isToggleProfile = ref<boolean>(false)
const handleToggleProfile = () => {
  isToggleProfile.value = !isToggleProfile.value
}
</script>


<style>
:root {
  --bg-main: #e60012;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
<style scoped>
.header-wrapper {
  font-family: Quicksand;
  background-color: var(--bg-main);
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.header-text-area {
  text-align: center;
  color: #fff;
  h2 {
    font-size: 50px;
    font-weight: bold;
  }
}
.header-button-area {
  margin-top: 30px;
}
.btn-header {
  background: #ccc;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.front {
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  background: #fff;
  color: var(--bg-main);
  transform: translateY(-6px);
  transition: 0.4s;
}

.btn-header:hover .front {
  transform: translateY(-2px);
  transition: 0.4s;
}
.profile-icon-area{
  position: absolute;
  
  margin-top: 30px;
 width:280px;
  

}

.profile-icon-item{
  display:flex;
  justify-content: center;
  gap:20px;
  div{
    width:50px;
    height:50px;
    background-color: #fff;
    border-radius: 50%;
    border-bottom: 4px solid #ccc;
    border-right: 4px solid #ccc;
    cursor: pointer;
    transition: all 0.4s;
  }
  div:hover{
    transform: translateY(-5px);
    transition: all 0.4s;
  }
}

.slide-down {
  animation: slideDown 0.3s ease forwards;
}

.slide-up {
  animation: slideUp 0.3s ease forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px);
  }
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  
}
</style>
