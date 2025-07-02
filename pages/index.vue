<template>
  
   <div>
    <HamburgerMenu />
  <HeaderSection />
  <SkillSection />
  <ExperienceSection />
 



  <ScrollMessage v-if="isAtTop" />
   </div>
</template>

<script setup lang="ts">
import ExperienceSection from '~/components/ExperienceSection.vue';
import HeaderSection from '~/components/HeaderSection.vue';
import HamburgerMenu from '~/components/items/HamburgerMenu.vue';
import ScrollMessage from '~/components/items/ScrollMessage.vue';
import SkillSection from '~/components/SkillSection.vue';
import { useAtTop } from '~/use/useAtTop';


const { isAtTop } = useAtTop();

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

hbody {
    height: 200vh; /* เพิ่มความสูงให้มี scrollbar */
    margin: 0;
    background-color: #121212;
    color: white;
    font-family: sans-serif;

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #ff0055 #000000; /* thumb, track */
  }

  /* Chrome, Edge, Safari */
  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background-color: #ccc;
  }

  body::-webkit-scrollbar-thumb {
    background-color: gold;
    
  }

  /* body::-webkit-scrollbar-thumb:hover {
    background-color: #ff3399;
  } */

</style>
