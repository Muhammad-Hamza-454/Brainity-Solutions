<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <section class="bg-gradient-mint-purple text-white py-16 pt-24">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            🚀 Are you finding it hard to scale your team with the right developers?
          </p>
          <p class="text-lg text-white/80 max-w-4xl mx-auto">
            ✨ We are here to help you scale your team by matching you with the most professional developer, ready to bring your project to life. Hire the best talent to ensure faster delivery and outstanding results.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
              <p class="text-lg text-gray-600 mb-8">
                We're here to help you bring your digital vision to life. Whether you need a new website, mobile app, or complete digital transformation, our team is ready to deliver exceptional results.
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">📧</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email Us</h3>
                  <p class="text-gray-600">brainitysolutions@gmail.com</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Call Us</h3>
                  <p class="text-gray-600">+92 312 4573059</p>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">📍</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Visit Us</h3>
                  <p class="text-gray-600">Lahore, Punjab</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Business Hours</h3>
                  <p class="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch for Top Solutions and Expert Advice</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="+92 312 4573059"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-teal-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span v-if="!isSubmitting">📤</span>
                <span v-else>⏳</span>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-gray-600">
            Common questions about working with Brainity Solutions
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 class="font-semibold text-gray-900">{{ faq.question }}</h3>
              <span class="text-2xl">{{ activeFaq === index ? '⬆️' : '⬇️' }}</span>
            </button>
            <div
              v-show="activeFaq === index"
              class="px-6 pb-4 text-gray-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const activeFaq = ref<number | null>(null)

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the initial consultation."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern JavaScript frameworks (Vue.js, React, Next.js), Node.js for backend, TypeScript, Python, cloud platforms (AWS, Firebase), and mobile development with React Native and Flutter."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes! We work with clients worldwide and are comfortable with different time zones. We use modern communication tools to ensure smooth collaboration regardless of location."
  },
  {
    question: "What's your development process?",
    answer: "We follow an agile approach with regular check-ins, clear milestones, and continuous feedback. The process includes discovery, planning, design, development, testing, and deployment with ongoing support."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely! We offer various maintenance packages to keep your application secure, updated, and performing optimally. This includes bug fixes, security updates, and feature enhancements."
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. Larger projects are broken into milestones with payments distributed accordingly. We accept various payment methods including bank transfers and PayPal."
  }
]

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contact - Brainity Solutions',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Brainity Solutions for your next digital project. Expert web development, mobile apps, and UI/UX design services. Contact us today!'
    }
  ]
})
</script>