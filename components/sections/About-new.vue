<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-max">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Section Header -->
        <div class="mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto"></div>
        </div>

        <!-- About Preview Content -->
        <div class="space-y-8">
          <p class="text-lg text-gray-700 leading-relaxed">
            At Brainity Solutions, every project is an opportunity to create lasting impact. 
            Our passionate professionals collaborate to deliver world-class digital solutions 
            across <span class="font-semibold text-primary-600">Mobile App Development</span>, 
            <span class="font-semibold text-primary-600">Web Development</span>, 
            <span class="font-semibold text-primary-600">UI/UX Design</span>, 
            <span class="font-semibold text-primary-600">Enterprise Software</span>, 
            and <span class="font-semibold text-primary-600">IT Consulting</span>.
          </p>

          <!-- Learn More Button -->
          <div class="mt-8">
            <Button 
              variant="primary" 
              icon="lucide:arrow-right"
              @click="learnMore"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const learnMore = () => {
  // Navigate to About page or show more content
  console.log('Navigate to About page')
}
</script>
