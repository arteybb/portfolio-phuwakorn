<template>
    <div class="scroll-message-area">
        <h2>
            Scroll down. Your destiny awaits (or maybe just more content).
        </h2>
    </div>
</template>


<style scoped>
.scroll-message-area{
    color:#fff;
    font-family: Quicksand;
    position: fixed;
    z-index: 999999;
    width:100%;
    bottom:50px;
    animation: blink 0.8s infinite;
    
    display:flex;
    justify-content: center;
    text-align: center;
}


@keyframes blink {
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>