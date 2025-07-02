<template>
  <div class="box-skill-area">
    <h2>{{ title }}</h2>
    <div class="skills-wrapper">
      <div v-for="(item, index) in items" :key="index" class="skill-items">
        <div class="skill-icon">
          <img :src="item.icon" alt="">
        </div>
        <div class="skill-text">
          <b>{{ item.text }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillItem } from '~/type/skill.interface'

const props = defineProps<SkillItem>()
const { title, items } = props
</script>

<style scoped>
* {
  color: #fff;
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.skill-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top:30px;
}

.skill-icon img {
  width: 30px;
  height: 30px;
}

.skill-text b {
  font-size: 10px;
  margin-top: 8px;
  text-align: center;
}
</style>
