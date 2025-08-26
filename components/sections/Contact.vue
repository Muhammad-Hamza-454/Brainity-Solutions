<template>
  <section id="contact" class="section-padding">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let's Work Together
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
        <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <p class="text-gray-600 mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6">
            <div
              v-for="contact in contactMethods"
              :key="contact.type"
              class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Icon :name="contact.icon" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ contact.type }}</h4>
                <a
                  :href="contact.href"
                  class="text-gray-600 hover:text-primary-600 transition-colors"
                  :target="contact.external ? '_blank' : '_self'"
                  :rel="contact.external ? 'noopener noreferrer' : ''"
                >
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-8">
            <h4 class="font-semibold text-gray-900 mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-full flex items-center justify-center transition-all duration-200"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <Card variant="shadow" class="lg:mt-0 mt-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                Project Budget (Optional)
              </label>
              <select
                id="budget"
                v-model="form.budget"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              >
                <option value="">Select budget range</option>
                <option value="<5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k+">$25,000+</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project or what you'd like to discuss..."
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              class="w-full"
              icon="lucide:send"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </Button>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccessMessage"
            class="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg"
          >
            <div class="flex items-center">
              <Icon name="lucide:check-circle" class="w-5 h-5 mr-2" />
              <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccessMessage = ref(false)

const contactMethods = [
  {
    type: 'Email',
    icon: 'lucide:mail',
    value: 'hamza@brainitysolutions.com',
    href: 'mailto:hamza@brainitysolutions.com',
    external: false
  },
  {
    type: 'Phone',
    icon: 'lucide:phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    external: false
  },
  {
    type: 'Location',
    icon: 'lucide:map-pin',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,CA',
    external: true
  },
  {
    type: 'LinkedIn',
    icon: 'lucide:linkedin',
    value: 'Muhammad Hamza',
    href: 'https://linkedin.com/in/muhammad-hamza-454',
    external: true
  }
]

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

const submitForm = async () => {
  try {
    isSubmitting.value = true
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    showSuccessMessage.value = true
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
