<template>
  <div class="skill-wrapper">
    <div class="skill-inner">
      <div class="skill-header-text">
        <h2>SKILL</h2>
        <p>These are the tools I wield to build, break, and rebuild digital worlds.</p>
      </div>

      <div class="skill-area">
        <div class="pipe left">
          <img src="/public/assets/images/pipe.webp" alt="pipe left">
        </div>
        <div ref="boxLeft" class="box">
          <Boxskill :title="stackData.title" :items="stackData.items" />
        </div>
      </div>

      <div class="skill-area reverse">
        <div class="pipe right">
          <img src="/public/assets/images/pipe.webp" alt="pipe right">
        </div>
        <div ref="boxRight" class="box">
          
         <Boxskill :title="toolsData.title" :items="toolsData.items" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Boxskill from '@/components/skill/BoxSkill.vue'
import type { SkillItem } from '~/type/skill.interface';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const boxLeft = ref<HTMLElement | null>(null)
const boxRight = ref<HTMLElement | null>(null)



const stackData = ref<SkillItem>({
    title: 'TECH STACK',
    items: [
    { icon: '/assets/images/icons/html.svg', text: 'HTML' },
    { icon: '/assets/images/icons/css.svg', text: 'CSS' },
    { icon: '/assets/images/icons/javascript.svg', text: 'JAVASCRIPT' },
    { icon: '/assets/images/icons/typescript.svg', text: 'TYPESCRIPT' },
    { icon: '/assets/images/icons/nodejs.svg', text: 'NODEJS' },
    { icon: '/assets/images/icons/vuejs.svg', text: 'VUEJS' },
    { icon: '/assets/images/icons/nuxtjs.svg', text: 'NUXTJS' },
    { icon: '/assets/images/icons/nestjs.svg', text: 'NESTJS' },
    { icon: '/assets/images/icons/php.svg', text: 'PHP' },
    { icon: '/assets/images/icons/laravel.svg', text: 'LARAVEL' }
  ]
});

const toolsData = ref<SkillItem>({
    title: 'Tools & Database',
    items: [
    { icon: '/assets/images/icons/mysql.svg', text: 'MYSQL' },
    { icon: '/assets/images/icons/mongo.svg', text: 'MONGODB' },
    { icon: '/assets/images/icons/postman.svg', text: 'POSTMAN' },
    { icon: '/assets/images/icons/docker.svg', text: 'DOCKER' },
    { icon: '/assets/images/icons/github.svg', text: 'GITHUB' },
    { icon: '/assets/images/icons/gitlab.svg', text: 'GITLAB' },

  ]
});



onMounted(() => {
  if (boxLeft.value) {
    gsap.from(boxLeft.value, {
      x: -200,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: boxLeft.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })
  }

  if (boxRight.value) {
    gsap.from(boxRight.value, {
      x: 200,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: boxRight.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })
  }
})

</script>

<style>
:root {
  --bg-main-skill: #221f22;
  --bg-inner-skill: #2c2a2e;
  --border-main-skill: #1a191b;
  --bg-main: #e60012;
}
</style>

<style scoped>
.skill-wrapper {
  background-color: var(--bg-main-skill);
  min-height: 1200px;
  padding-top: 30px;
  font-family: Quicksand;
}

.skill-inner {
  width: 90%;
  margin: 0 auto;
  background-color: var(--bg-inner-skill);
  min-height: inherit;
  border-top: 4px solid var(--border-main-skill);
  border-left: 4px solid var(--border-main-skill);
  border-right: 4px solid var(--border-main-skill);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
}

.skill-header-text {
  text-align: center;
  margin: 50px 0;
}
.skill-header-text h2 {
  color: #fff;
  font-size: 50px;
  font-weight: bold;
}
.skill-header-text p {
  color: #fff;
}

.skill-area {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:10px;
}

.skill-area.reverse {
  flex-direction: row-reverse;
}

.pipe img {
  width: 300px;
}

.pipe.right img {
  transform: rotate(-90deg);
}

.pipe.left img {
  transform: rotate(90deg);
}

.box {
  background-color: var(--bg-main-skill);
  width: 800px;
  min-height: 250px;
  border-radius: 15px;
  border: 4px solid #1a191b;
  padding: 15px;
  margin: 0 30px;
  align-items: center;
}

</style>
