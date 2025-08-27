<template>
  <section id="contact" class="section-padding bg-gray-50">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Get in touch with us today and let's discuss your project.
        </p>
        <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Whether you have a question about our services, want to discuss a project, 
              or just want to say hello, we're always here to help you achieve your goals.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:phone" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Phone</h4>
                <p class="text-gray-600 mt-1">+92 312 4573059</p>
                <p class="text-sm text-gray-500 mt-1">Available during business hours</p>
              </div>
            </div>

            <div class="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:map-pin" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Headquarters</h4>
                <p class="text-gray-600 mt-1">Lahore, Punjab</p>
                <p class="text-sm text-gray-500 mt-1">Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Send Message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="John"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="john@example.com"
              />
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
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Project Discussion"
              />
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
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon="lucide:send"
              :loading="isSubmitting"
              class="w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form on success
    Object.keys(form).forEach(key => form[key] = '')
    
    console.log('Form submitted successfully!')
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
