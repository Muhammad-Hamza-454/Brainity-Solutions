<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-max">
      <!-- Main Footer Content -->
      <div class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <!-- Brand Section -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Icon name="lucide:brain-circuit" class="w-6 h-6 text-white" />
              </div>
              <span class="text-2xl font-bold">Brainity Solutions</span>
            </div>
            <p class="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforming ideas into digital excellence through innovative solutions 
              and cutting-edge technology.
            </p>
            
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.name">
                <a
                  :href="link.href"
                  class="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="font-semibold mb-6 text-lg">Contact Info</h4>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <Icon name="lucide:phone" class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p class="text-gray-400 text-sm">Phone</p>
                  <p class="text-white">+92 312 4573059</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p class="text-gray-400 text-sm">Headquarters</p>
                  <p class="text-white">Lahore, Punjab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-400 text-sm">
            Copyright © 2025 Brainity Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    url: '#'
  },
  {
    name: 'Twitter',
    icon: 'lucide:twitter',
    url: '#'
  },
  {
    name: 'Facebook',
    icon: 'lucide:facebook',
    url: '#'
  },
  {
    name: 'Instagram',
    icon: 'lucide:instagram',
    url: '#'
  }
]

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
]
</script>
