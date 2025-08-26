<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-max">
      <!-- Main Footer Content -->
      <div class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <!-- Brand Section -->
          <div class="lg:col-span-1">
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Icon name="lucide:brain-circuit" class="w-5 h-5 text-white" />
              </div>
              <span class="text-xl font-bold">Brainity Solutions</span>
            </div>
            <p class="text-gray-400 mb-6 leading-relaxed">
              Crafting innovative digital solutions with cutting-edge technology. 
              Let's build something amazing together.
            </p>
            
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-white mb-6">Quick Links</h3>
            <ul class="space-y-4">
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

          <!-- Services -->
          <div>
            <h3 class="font-semibold text-white mb-6">Services</h3>
            <ul class="space-y-4">
              <li v-for="service in services" :key="service">
                <span class="text-gray-400">{{ service }}</span>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-semibold text-white mb-6">Get in Touch</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <Icon name="lucide:mail" class="w-5 h-5 text-primary-500" />
                <a
                  href="mailto:hamza@brainitysolutions.com"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  hamza@brainitysolutions.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:phone" class="w-5 h-5 text-primary-500" />
                <a
                  href="tel:+15551234567"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-primary-500" />
                <span class="text-gray-400">San Francisco, CA</span>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="mt-8">
              <h4 class="font-medium text-white mb-4">Stay Updated</h4>
              <form @submit.prevent="subscribeNewsletter" class="flex">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Your email"
                  class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  required
                />
                <button
                  type="submit"
                  class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors"
                  :disabled="isSubscribing"
                >
                  <Icon name="lucide:send" class="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © {{ currentYear }} Brainity Solutions. All rights reserved.
          </div>
          
          <div class="flex items-center space-x-6">
            <a
              v-for="link in legalLinks"
              :key="link.name"
              :href="link.href"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {{ link.name }}
            </a>
          </div>

          <!-- Back to Top -->
          <button
            @click="scrollToTop"
            class="p-2 bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white rounded-full transition-all duration-200"
            aria-label="Back to top"
          >
            <Icon name="lucide:arrow-up" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')
const isSubscribing = ref(false)

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'lucide:github',
    url: 'https://github.com/Muhammad-Hamza-454'
  },
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    url: 'https://linkedin.com/in/muhammad-hamza-454'
  },
  {
    name: 'Twitter',
    icon: 'lucide:twitter',
    url: 'https://twitter.com/hamza_454'
  },
  {
    name: 'Dribbble',
    icon: 'lucide:dribbble',
    url: 'https://dribbble.com/hamza_454'
  }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' }
]

const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud Solutions',
  'AI Integration',
  'Consulting'
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' }
]

const subscribeNewsletter = async () => {
  try {
    isSubscribing.value = true
    
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    email.value = ''
    
    // You could show a success message here
    console.log('Subscribed to newsletter')
    
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
  } finally {
    isSubscribing.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
