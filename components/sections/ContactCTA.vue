<template>
  <section class="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600">
    <div class="container-max">
      <div class="text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Let's bring your ideas to life with creativity, technology, and excellence.
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Ready to transform your business with innovative digital solutions? 
          Let's discuss your project and create something amazing together.
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          icon="lucide:phone"
          class="bg-white text-primary-600 hover:bg-gray-100"
          @click="contactUs"
        >
          Contact Us
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contactUs = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
