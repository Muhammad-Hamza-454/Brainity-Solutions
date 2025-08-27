<template>
  <section id="services" class="section-padding bg-gray-50">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto"></div>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        <Card
          v-for="service in services"
          :key="service.title"
          variant="hover"
          class="text-center group"
        >
          <div class="mb-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
              <Icon :name="service.icon" class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ service.description }}</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Mobile App Development',
    icon: 'lucide:smartphone',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.'
  },
  {
    title: 'Web Development',
    icon: 'lucide:globe',
    description: 'Modern, responsive websites and web applications built with the latest technologies and frameworks.'
  },
  {
    title: 'UI/UX Design',
    icon: 'lucide:palette',
    description: 'User-centered design solutions that enhance engagement and deliver exceptional digital experiences.'
  },
  {
    title: 'Enterprise Software',
    icon: 'lucide:building',
    description: 'Scalable enterprise solutions and custom software development for complex business requirements.'
  },
  {
    title: 'IT Consulting',
    icon: 'lucide:users',
    description: 'Strategic technology consulting and digital transformation guidance for growing businesses.'
  }
]
</script>
