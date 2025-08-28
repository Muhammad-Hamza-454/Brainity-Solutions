<template>
  <div>
    <!-- Hero Section -->
    <SectionsHero />

    <!-- About Preview Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Brainity Solutions
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            We are a team of passionate developers and designers dedicated to creating innovative digital solutions. 
            With years of experience in web development, mobile apps, and digital transformation, we help businesses 
            achieve their goals through technology.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="lucide:code" class="w-8 h-8 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Expert Development</h3>
              <p class="text-gray-600">Cutting-edge technologies and best practices</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="lucide:users" class="w-8 h-8 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Client-Focused</h3>
              <p class="text-gray-600">Your success is our priority</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="lucide:zap" class="w-8 h-8 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p class="text-gray-600">Quick turnaround without compromising quality</p>
            </div>
          </div>
          <div class="mt-12">
            <NuxtLink to="/about" class="inline-flex items-center px-6 py-3 bg-gradient-mint-purple text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-200">
              Learn More About Us
              <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p class="text-lg text-gray-600">
            We offer comprehensive digital solutions to help your business thrive in the digital world.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Mobile Apps -->
          <div class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="lucide:smartphone" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile Applications</h3>
            <p class="text-gray-600 mb-4">
              Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Cross-Platform</li>
              <li>• Native Performance</li>
              <li>• App Store Ready</li>
            </ul>
          </div>

          <!-- Web Development -->
          <div class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="lucide:globe" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
            <p class="text-gray-600 mb-4">
              Custom websites and web applications built with modern frameworks like React, Vue.js, and Next.js.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Responsive Design</li>
              <li>• SEO Optimized</li>
              <li>• Fast Performance</li>
            </ul>
          </div>

          <!-- UI/UX Design -->
          <div class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="lucide:palette" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
            <p class="text-gray-600 mb-4">
              Beautiful and intuitive user interfaces that provide excellent user experiences.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• User-Centered Design</li>
              <li>• Prototyping</li>
              <li>• Design Systems</li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/services" class="inline-flex items-center px-6 py-3 bg-gradient-mint-purple text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-200">
            View All Services
            <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 bg-gradient-mint-purple">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Let's discuss how we can help bring your ideas to life with our expertise and innovative solutions.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 shadow-lg">
              Get in Touch
              <Icon name="lucide:mail" class="w-4 h-4 ml-2" />
            </NuxtLink>
            <a href="tel:+1234567890" class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 hover:scale-105 transform transition-all duration-200">
              Call Us Now
              <Icon name="lucide:phone" class="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page with Hero, About preview, Services preview, and Contact CTA
useHead({
  title: 'Brainity Solutions - Transforming Ideas into Digital Excellence',
  meta: [
    {
      name: 'description',
      content: 'We build secure, scalable, and user-friendly digital solutions for businesses worldwide. Expert web development, mobile apps, and UI/UX design services.'
    }
  ]
})
</script>
