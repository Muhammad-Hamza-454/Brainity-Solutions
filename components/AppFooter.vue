<template>
  <footer class="bg-gray-900 text-white section-padding">
    <div class="section-container">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div class="space-y-4 animate-fadeInUp animate-delay-100">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="lucide:brain-circuit" size="24" class="text-white" />
            </div>
            <span class="text-xl font-bold">Brainity Solutions</span>
          </NuxtLink>
          <p class="text-gray-400 leading-relaxed">
            Transforming ideas into digital excellence. Your trusted partner for innovative software solutions and digital transformation.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <Icon name="lucide:facebook" size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <Icon name="lucide:twitter" size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <Icon name="lucide:linkedin" size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <Icon name="lucide:instagram" size="20" />
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div class="space-y-4 animate-fadeInUp animate-delay-200">
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <div class="space-y-2">
            <NuxtLink to="/services" class="block text-gray-400 hover:text-white transition-colors duration-300">Mobile App Development</NuxtLink>
            <NuxtLink to="/services" class="block text-gray-400 hover:text-white transition-colors duration-300">Web Development</NuxtLink>
            <NuxtLink to="/services" class="block text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</NuxtLink>
            <NuxtLink to="/services" class="block text-gray-400 hover:text-white transition-colors duration-300">Enterprise Software</NuxtLink>
            <NuxtLink to="/services" class="block text-gray-400 hover:text-white transition-colors duration-300">IT Consulting</NuxtLink>
          </div>
        </div>
        
        <!-- Company -->
        <div class="space-y-4 animate-fadeInUp animate-delay-300">
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <div class="space-y-2">
            <NuxtLink to="/about" class="block text-gray-400 hover:text-white transition-colors duration-300">About Us</NuxtLink>
            <a href="#" class="block text-gray-400 hover:text-white transition-colors duration-300">Our Team</a>
            <a href="#" class="block text-gray-400 hover:text-white transition-colors duration-300">Careers</a>
            <a href="#" class="block text-gray-400 hover:text-white transition-colors duration-300">Blog</a>
            <NuxtLink to="/contact" class="block text-gray-400 hover:text-white transition-colors duration-300">Contact</NuxtLink>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div class="space-y-4 animate-fadeInUp animate-delay-400">
          <h3 class="text-lg font-semibold mb-4">Get In Touch</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <Icon name="lucide:phone" size="20" class="text-blue-400 mr-3" />
              <a href="tel:+923124573059" class="text-gray-400 hover:text-white transition-colors duration-300">+92 312 4573059</a>
            </div>
            <div class="flex items-center">
              <Icon name="lucide:mail" size="20" class="text-blue-400 mr-3" />
              <a href="mailto:info@brainitysolutions.com" class="text-gray-400 hover:text-white transition-colors duration-300">info@brainitysolutions.com</a>
            </div>
            <div class="flex items-start">
              <Icon name="lucide:map-pin" size="20" class="text-blue-400 mr-3 mt-1" />
              <span class="text-gray-400">Lahore, Punjab, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center animate-fadeInUp animate-delay-500">
        <p class="text-gray-400">
          &copy; {{ new Date().getFullYear() }} Brainity Solutions. All rights reserved. | 
          <a href="#" class="text-blue-400 hover:text-white transition-colors duration-300">Privacy Policy</a> | 
          <a href="#" class="text-blue-400 hover:text-white transition-colors duration-300">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
