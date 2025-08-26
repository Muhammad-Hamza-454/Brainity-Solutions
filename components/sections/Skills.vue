<template>
  <section id="skills" class="section-padding">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Skills & Expertise
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are the technologies and tools I use to bring ideas to life
        </p>
        <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4"></div>
      </div>

      <!-- Skills Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card
          v-for="category in skillCategories"
          :key="category.title"
          variant="hover"
          class="text-center"
        >
          <div class="mb-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon :name="category.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category.title }}</h3>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
          
          <div class="space-y-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center justify-between"
            >
              <span class="text-sm font-medium text-gray-700">{{ skill.name }}</span>
              <div class="flex items-center space-x-2">
                <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-primary-600 rounded-full transition-all duration-300"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
                <span class="text-xs text-gray-500">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <!-- Technology Icons -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
        
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          <div
            v-for="tech in technologies"
            :key="tech.name"
            class="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div class="w-12 h-12 flex items-center justify-center mb-2">
              <Icon :name="tech.icon" class="w-8 h-8" :style="{ color: tech.color }" />
            </div>
            <span class="text-xs text-gray-600 group-hover:text-gray-900">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mt-16 bg-gray-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications & Achievements</h3>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:award" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ cert.name }}</h4>
                <p class="text-sm text-gray-600 mb-2">{{ cert.issuer }}</p>
                <p class="text-xs text-gray-500">{{ cert.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'lucide:monitor',
    description: 'Creating beautiful and interactive user interfaces',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'Vue.js/Nuxt.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'SCSS/SASS', level: 85 }
    ]
  },
  {
    title: 'Backend Development',
    icon: 'lucide:server',
    description: 'Building robust and scalable server-side applications',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python/Django', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'GraphQL', level: 80 }
    ]
  },
  {
    title: 'Mobile & Cloud',
    icon: 'lucide:smartphone',
    description: 'Cross-platform mobile apps and cloud solutions',
    skills: [
      { name: 'React Native', level: 87 },
      { name: 'Flutter', level: 75 },
      { name: 'AWS', level: 83 },
      { name: 'Docker', level: 80 },
      { name: 'Firebase', level: 85 }
    ]
  }
]

const technologies = [
  { name: 'Vue.js', icon: 'logos:vue', color: '#4FC08D' },
  { name: 'React', icon: 'logos:react', color: '#61DAFB' },
  { name: 'Node.js', icon: 'logos:nodejs', color: '#339933' },
  { name: 'Python', icon: 'logos:python', color: '#3776AB' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
  { name: 'AWS', icon: 'logos:aws', color: '#FF9900' },
  { name: 'Docker', icon: 'logos:docker-icon', color: '#2496ED' },
  { name: 'MongoDB', icon: 'logos:mongodb', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#336791' },
  { name: 'Firebase', icon: 'logos:firebase', color: '#FFCA28' },
  { name: 'Git', icon: 'logos:git-icon', color: '#F05032' },
  { name: 'Figma', icon: 'logos:figma', color: '#F24E1E' }
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023'
  },
  {
    name: 'Meta React Developer',
    issuer: 'Meta',
    date: '2023'
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2022'
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2022'
  },
  {
    name: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    date: '2021'
  }
]
</script>
