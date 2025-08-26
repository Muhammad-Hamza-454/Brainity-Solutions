<template>
  <section id="projects" class="section-padding bg-gray-50">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of my recent work showcasing different technologies and problem-solving approaches
        </p>
        <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="filter in filterOptions"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-200',
            activeFilter === filter
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <Icon :name="project.icon" class="w-16 h-16 text-primary-500" />
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div class="flex space-x-4">
                <button
                  @click="viewProject(project)"
                  class="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
                >
                  <Icon name="lucide:external-link" class="w-5 h-5 text-primary-600" />
                </button>
                <button
                  @click="viewCode(project)"
                  class="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
                >
                  <Icon name="lucide:github" class="w-5 h-5 text-primary-600" />
                </button>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {{ project.title }}
              </h3>
              <span class="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                {{ project.category }}
              </span>
            </div>

            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Stats -->
            <div class="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                  <Icon name="lucide:star" class="w-4 h-4" />
                  <span>{{ project.stars }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Icon name="lucide:git-fork" class="w-4 h-4" />
                  <span>{{ project.forks }}</span>
                </div>
              </div>
              <span>{{ project.year }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <Button variant="outline" size="lg" icon="lucide:plus" @click="loadMoreProjects">
          Load More Projects
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeFilter = ref('All')

const filterOptions = ['All', 'Web App', 'Mobile App', 'AI/ML', 'Open Source']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.',
    category: 'Web App',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    icon: 'lucide:shopping-cart',
    stars: 124,
    forks: 32,
    year: '2024',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce'
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by machine learning that can understand context and provide meaningful responses.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    icon: 'lucide:bot',
    stars: 89,
    forks: 24,
    year: '2024',
    liveUrl: 'https://ai-chat-demo.com',
    githubUrl: 'https://github.com/username/ai-chat'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A cross-platform mobile application for team collaboration and project management with real-time synchronization.',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Redux'],
    icon: 'lucide:check-square',
    stars: 67,
    forks: 18,
    year: '2023',
    liveUrl: 'https://play.google.com/store/apps/task-manager',
    githubUrl: 'https://github.com/username/task-manager'
  },
  {
    id: 4,
    title: 'Design System Library',
    description: 'A comprehensive React component library with TypeScript support, Storybook documentation, and automated testing.',
    category: 'Open Source',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest'],
    icon: 'lucide:palette',
    stars: 203,
    forks: 45,
    year: '2023',
    liveUrl: 'https://design-system-demo.com',
    githubUrl: 'https://github.com/username/design-system'
  },
  {
    id: 5,
    title: 'Real-time Analytics Dashboard',
    description: 'A powerful dashboard for monitoring business metrics with real-time data visualization and custom reporting.',
    category: 'Web App',
    technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'WebSocket'],
    icon: 'lucide:bar-chart-3',
    stars: 156,
    forks: 38,
    year: '2023',
    liveUrl: 'https://analytics-dashboard-demo.com',
    githubUrl: 'https://github.com/username/analytics-dashboard'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'A mobile app for tracking workouts, nutrition, and health metrics with social features and gamification.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
    icon: 'lucide:activity',
    stars: 98,
    forks: 22,
    year: '2022',
    liveUrl: 'https://fitness-app-demo.com',
    githubUrl: 'https://github.com/username/fitness-app'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const viewProject = (project: any) => {
  window.open(project.liveUrl, '_blank')
}

const viewCode = (project: any) => {
  window.open(project.githubUrl, '_blank')
}

const loadMoreProjects = () => {
  // Logic to load more projects
  console.log('Loading more projects...')
}
</script>
