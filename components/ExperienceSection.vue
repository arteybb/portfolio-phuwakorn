<template>
  <div class="experience-wrapper">
    <div class="experience-inner">
      <div class="experience-header-text">
        <h2>EXPERIENCE</h2>
        <p>
          These are the tools I wield to build, break, and rebuild digital
          worlds.
        </p>
      </div>

      <div class="experience-item-area">
        <div v-for="(experience, index) in experiences" :key="index" class="item">
          <div class="item-head">
            <div>{{ experience.date }}</div>
            <h2>{{ experience.company }}</h2>
            <div class="tag">
              <div
                class="tag-item"
                :style="{
                  backgroundColor:
                    experience.type === 'Freelance' ? 'limegreen' : 'dodgerblue',
                }"
              >
                {{ experience.type }}
              </div>
              <div class="tag-item">{{ experience.role }}</div>
            </div>
            <p>
              {{ experience.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  type: string;
  role: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    date: "1 November 2024 - 30 April 2025",
    title: "BINDZER TECH CO,.LTD.",
    company: "BINDZER TECH CO,.LTD.",
    type: "Intern",
    role: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae iure minima doloribus distinctio cupiditate ratione tempore amet omnis ab, aut quibusdam reprehenderit, voluptates blanditiis rem hic, rerum illum vitae!",
  },
  {
    date: "2020 - 2025",
    title: "Tepleela School",
    company: "Tepleela School",
    type: "Freelance",
    role: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae iure minima doloribus distinctio cupiditate ratione tempore amet omnis ab, aut quibusdam reprehenderit, voluptates blanditiis rem hic, rerum illum vitae!",
  },
];
</script>

<style scoped>
.experience-wrapper {
  width: 100%;
  background-color: #fff;
  font-family: Quicksand;
}
.experience-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.experience-header-text {
  text-align: center;
  margin: 50px 0;
}
.experience-header-text h2 {
  color: #000;
  font-size: 50px;
  font-weight: bold;
}

.item {
  background-color: #2c2a2e;
  border: 8px solid gray;
  color: #fff;
  padding: 30px;
  margin: 0 auto;
  .item-head {
    max-width: 400px;
    h2 {
      font-size: 50px;
    }
  }
}

.tag{
  display:flex;
  flex-wrap: wrap;
  gap:5px;
  margin-top:10px;
  margin-bottom:10px;
}
.tag-item {
  background-color: gold;
  font-weight: bold;
  color: #000;
  padding: 5px;
  border-right: 7px solid #000;
  border-bottom: 7px solid #000;
}
</style>
