<template>
  <section id="about" class="section-padding bg-gray-50">
    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div class="w-20 h-1 bg-primary-600 rounded-full"></div>
          </div>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm a passionate Full-Stack Developer with over 5 years of experience 
              creating digital solutions that make a difference. My journey started 
              with curiosity about how things work, and it evolved into a love for 
              building innovative applications that solve real-world problems.
            </p>
            
            <p>
              I specialize in modern JavaScript frameworks, cloud technologies, and 
              mobile development. My approach combines technical expertise with 
              creative problem-solving to deliver exceptional user experiences.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-primary-600">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-4 pt-6">
            <Button variant="primary" icon="lucide:message-circle" @click="scrollToContact">
              Let's Talk
            </Button>
            <Button variant="outline" icon="lucide:user" @click="learnMore">
              Learn More
            </Button>
          </div>
        </div>

        <!-- Image/Visual -->
        <div class="relative">
          <div class="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
            <!-- Profile Image Placeholder -->
            <div class="w-full h-96 bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:user" class="w-24 h-24 text-primary-400" />
            </div>
            
            <!-- Skills Preview -->
            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900">Core Technologies</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in coreTechnologies"
                  :key="tech"
                  class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Projects Completed', value: '50+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Coffee Cups', value: '∞' },
  { label: 'Lines of Code', value: '100K+' }
]

const coreTechnologies = [
  'Vue.js', 'React', 'Node.js', 'TypeScript', 
  'Python', 'AWS', 'Docker', 'MongoDB'
]

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const learnMore = () => {
  // Could navigate to a detailed about page or expand content
  console.log('Learn more about me')
}
</script>
