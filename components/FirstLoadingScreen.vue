<template>
  <div class="loading-wrapper">
    <div class="loading-inner">
      <div class="loading-texts">
        <div class="main-text-row">
          <div class="loader" />
          <p class="text">Fetching profile...</p>
        </div>
        <p class="subtext"><b style="background-color: #e60012;padding:10px;color:#fff;">Warning:</b> Contains dangerously cool frontend skills.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.loading-wrapper {
  background-color: #e60012;
  position: relative;
}

.loading-inner {
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Quicksand, sans-serif;
}

.loading-texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-text-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.loader {
  width: 25px;
  height: 25px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.text {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 5px;
  margin: 0;
}

.subtext {
  font-size: 16px;
  position: absolute;
  margin-top: 8px;
  color: #333;
  bottom: 40px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>