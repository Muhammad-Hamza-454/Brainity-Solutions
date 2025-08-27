<template>
  <div class="pt-16">
    <!-- Page Header -->
    <section class="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always excited to discuss new projects, opportunities, or just chat about technology and innovation.
        </p>
        <div class="w-20 h-1 bg-gradient-mint-purple rounded-full mx-auto mt-6"></div>
      </div>
    </section>

    <!-- Contact Section -->
    <Contact />
    
    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-gray-600">
            Common questions about working with me
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
              <Icon
                :name="activeFaq === index ? 'lucide:chevron-up' : 'lucide:chevron-down'"
                class="w-5 h-5 text-gray-500"
              />
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
    answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during the initial consultation."
  },
  {
    question: "What technologies do you work with?",
    answer: "I specialize in modern JavaScript frameworks (Vue.js, React, Next.js), Node.js for backend, TypeScript, Python, cloud platforms (AWS, Firebase), and mobile development with React Native and Flutter."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes! I work with clients worldwide and am comfortable with different time zones. I use modern communication tools to ensure smooth collaboration regardless of location."
  },
  {
    question: "What's your development process?",
    answer: "I follow an agile approach with regular check-ins, clear milestones, and continuous feedback. The process includes discovery, planning, design, development, testing, and deployment with ongoing support."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely! I offer various maintenance packages to keep your application secure, updated, and performing optimally. This includes bug fixes, security updates, and feature enhancements."
  },
  {
    question: "What are your payment terms?",
    answer: "I typically work with a 50% upfront payment and 50% upon completion for smaller projects. Larger projects are broken into milestones with payments distributed accordingly. I accept various payment methods including bank transfers and PayPal."
  }
]

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

useHead({
  title: 'Contact - Muhammad Hamza | Brainity Solutions',
  meta: [
    {
      name: 'description',
      content: 'Get in touch to discuss your project, ask questions, or explore collaboration opportunities. I\'m always excited to work on new challenges.'
    }
  ]
})
</script>
