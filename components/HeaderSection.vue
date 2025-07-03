<template>
  <div v-if="isToggleProfile" class="popup-wrapper">
    <div class="popup-box">
      <h2>Well, since you clicked...</h2>
      <p style="font-weight: bold">Why not hire me already?</p>

      <div class="grid-2">
        <div style="margin-top:20px;">
          <div class="contact-area">
            <img src="/public/assets/images/icons/email.png" alt="Email Logo" >
            <span>aphuwakorn2@gmail.com</span>
          </div>

          <div class="contact-area">
            <img src="/public/assets/images/icons/tel1.png" alt="Telephone Logo" />
            <span>061-935-7423</span>
          </div>

          <div class="contact-area">
            <img src="/public/assets/images/icons/line3.png" alt="Line Logo" />
            <span>artey1</span>
          </div>
        </div>
        <div>
          <form class="form-area">
            <div class="input-area">
              <input type="text" placeholder="Lucky visitor's name">
            </div>
            <div class="input-area">
              <input
              type="email"
              placeholder="Where I'll send my magical offer ✉️">
            </div>
            <textarea
              placeholder="e.g., Build a website, design a logo, debug a mess..."
            />
          </form>
        </div>
      </div>

      <button
        class="btn-header"
        style="position: absolute; right: 20px; bottom: 20px"
        @click=""
      >
        <span class="front" style="background-color: #323232; color: #fff">
          HIRE ME!
        </span>
      </button>
      <button
        class="btn-header"
        style="position: absolute; left: 20px; bottom: 20px"
        @click="handleToggleProfile"
      >
        <span class="front" style="color: #000"> NAH, JUST CLICKING </span>
      </button>
    </div>
  </div>

  <div class="header-wrapper">
    <div class="container">
      <div class="header-text-area">
        <h2>
          <span class="slide-left">PORT</span
          ><span class="slide-right">FOLIO</span>
        </h2>
        <h3>PHUWAKORN KAIYASUAN</h3>
        <div class="header-button-area">
          <button class="btn-header" @click="handleToggleProfile">
            <span class="front"> CLICK ME! </span>
          </button>
        </div>

        <div class="profile-icon-area">
          <div class="profile-icon-item">
            <div class="slide-up">
             <a href="https://github.com/arteybb" target="_blank"> <img src="/public/assets/images/icons/github.svg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isToggleProfile = ref<boolean>(false);
const handleToggleProfile = () => {
  isToggleProfile.value = !isToggleProfile.value;
};

watch(isToggleProfile, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
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
.popup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  font-family: QuickSand;
  z-index: 99999;
}
input, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 6px;
   border: none;
    background-color: #fff;
    box-shadow:
      inset 2px 2px 4px rgba(0,0,0,0.3),
      inset -2px -2px 4px rgba(255,255,255,0.8);
    font-family: monospace;
    font-size: 14px;
    outline: none;
    
  }
  .input{
    height:50px;
  }
  textarea{
    height:80px;
  }

  .input-area{
    margin-bottom:15px;
  }
.grid-2 {
  grid-template-columns: 320px 1fr;
  gap: 10px;
  display: grid;
  margin-top:10px;
}

.popup-box {
  background-color: #fff;
  border-radius: 30px;
  width: 800px;
  height: 450px;
  border: 4px solid #000;
  padding: 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.header-wrapper {
  font-family: Quicksand;
  background-color: var(--bg-main);
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

.slide-left,
.slide-right {
  display: inline-block;
  animation-fill-mode: forwards;
}

.header-text-area {
  text-align: center;
  color: #fff;
  h2 {
    font-size: 50px;
    font-weight: bold;
    display: flex;
    justify-content: center;
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

.contact-area{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap:10px;
  span{
    letter-spacing: 1px;
  }
  img{
    width:30px;
    height:30px;
  }
  
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
.profile-icon-area {
  position: absolute;

  margin-top: 30px;
  width: 280px;
}

.profile-icon-item {
  display: flex;
  justify-content: center;
  gap: 20px;
  div {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    border-bottom: 4px solid #ccc;
    border-right: 4px solid #ccc;
    cursor: pointer;
    transition: all 0.4s;
  }
  div:hover {
    transform: translateY(-5px);
    transition: all 0.4s;
  }
}

.slide-down {
  animation: slideDown 0.3s ease forwards;
}

.slide-left {
  animation: slideLeft 0.6s ease forwards;
}

.slide-right {
  animation: slideRight 0.3s ease forwards;
}

.slide-up {
  animation: slideUp 0.6s ease forwards;
}

@keyframes slideLeft {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slideRight {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
  }
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
