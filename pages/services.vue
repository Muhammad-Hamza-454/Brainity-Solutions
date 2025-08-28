<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <section class="bg-gradient-mint-purple text-white py-16 pt-24">
      <div class="section-container">
        <div class="text-center animate-fadeInUp">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p class="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to drive your business forward
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding bg-white">
      <div class="section-container">
        <div class="text-center mb-16 animate-fadeInUp">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What We Do Best</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions that transform your business
          </p>
        </div>

        <div class="space-y-16">
          <!-- Mobile App Development -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="animate-fadeInLeft">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="lucide:smartphone" size="32" class="text-blue-600" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Mobile App Development</h3>
              </div>
              <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                Create powerful, user-friendly mobile applications that engage your customers and drive business growth. We develop native and cross-platform apps for iOS and Android.
              </p>
              <div class="space-y-4">
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Native iOS & Android Development</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Cross-Platform Solutions (React Native, Flutter)</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">App Store Optimization & Deployment</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Ongoing Maintenance & Updates</span>
                </div>
              </div>
              <div class="mt-6">
                <UiButton @click="scrollToContact">
                  Get Mobile App Quote
                </UiButton>
              </div>
            </div>
            <div class="animate-fadeInRight animate-delay-200">
              <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <Icon name="lucide:smartphone" size="48" class="text-blue-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Native Apps</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:layers" size="48" class="text-purple-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Cross-Platform</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:trending-up" size="48" class="text-green-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Performance</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:shield" size="48" class="text-orange-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Web Development -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="lg:order-2 animate-fadeInRight">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="lucide:globe" size="32" class="text-purple-600" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Web Development</h3>
              </div>
              <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                Build modern, responsive web applications that deliver exceptional user experiences across all devices. From simple websites to complex web platforms.
              </p>
              <div class="space-y-4">
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">React, Vue.js, Angular Development</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Node.js, Python, PHP Backend</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">E-commerce & CMS Solutions</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Cloud Hosting & DevOps</span>
                </div>
              </div>
              <div class="mt-6">
                <UiButton @click="scrollToContact">
                  Get Web Development Quote
                </UiButton>
              </div>
            </div>
            <div class="lg:order-1 animate-fadeInLeft animate-delay-200">
              <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <Icon name="lucide:monitor" size="48" class="text-purple-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Responsive Design</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:zap" size="48" class="text-yellow-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Fast Loading</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:search" size="48" class="text-blue-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">SEO Optimized</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:lock" size="48" class="text-red-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- UI/UX Design -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="animate-fadeInLeft">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="lucide:palette" size="32" class="text-pink-600" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">UI/UX Design</h3>
              </div>
              <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                Create stunning, user-centered designs that not only look beautiful but also provide intuitive and engaging user experiences that drive conversions.
              </p>
              <div class="space-y-4">
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">User Research & Analysis</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Wireframing & Prototyping</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Visual Design & Branding</span>
                </div>
                <div class="flex items-center">
                  <Icon name="lucide:check-circle" size="20" class="text-green-500 mr-3" />
                  <span class="text-gray-700">Usability Testing & Optimization</span>
                </div>
              </div>
              <div class="mt-6">
                <UiButton @click="scrollToContact">
                  Get Design Quote
                </UiButton>
              </div>
            </div>
            <div class="animate-fadeInRight animate-delay-200">
              <div class="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <Icon name="lucide:figma" size="48" class="text-pink-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Figma Design</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:user-check" size="48" class="text-blue-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">User Testing</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:smartphone" size="48" class="text-purple-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Mobile First</div>
                  </div>
                  <div class="text-center">
                    <Icon name="lucide:accessibility" size="48" class="text-green-600 mx-auto mb-2" />
                    <div class="text-sm text-gray-600">Accessible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="section-container">
        <div class="text-center mb-16 animate-fadeInUp">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete digital solutions to support every aspect of your business
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-soft hover:shadow-medium hover-lift transition-all duration-300 p-8 animate-fadeInUp animate-delay-100">
            <div class="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:building" size="32" class="text-indigo-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Enterprise Software</h3>
            <p class="text-gray-600 mb-6">
              Custom enterprise solutions including ERP systems, CRM platforms, and business process automation tools.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                Custom ERP Development
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                CRM Solutions
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                Process Automation
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-soft hover:shadow-medium hover-lift transition-all duration-300 p-8 animate-fadeInUp animate-delay-200">
            <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:users" size="32" class="text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">IT Consulting</h3>
            <p class="text-gray-600 mb-6">
              Strategic technology consulting to help you make informed decisions about your digital transformation journey.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                Technology Strategy
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                Digital Transformation
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                System Architecture
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-soft hover:shadow-medium hover-lift transition-all duration-300 p-8 animate-fadeInUp animate-delay-300">
            <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:cloud" size="32" class="text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
            <p class="text-gray-600 mb-6">
              Cloud migration, infrastructure setup, and DevOps implementation for scalable and reliable applications.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                AWS, Azure, GCP
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                CI/CD Pipelines
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="text-green-500 mr-2" />
                Container Orchestration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding bg-white">
      <div class="section-container">
        <div class="text-center mb-16 animate-fadeInUp">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center animate-fadeInUp animate-delay-100">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <Icon name="lucide:lightbulb" size="32" class="text-blue-600" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
            <p class="text-gray-600 text-sm">
              We analyze your requirements, understand your goals, and create a comprehensive project plan.
            </p>
          </div>

          <div class="text-center animate-fadeInUp animate-delay-200">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <Icon name="lucide:pencil" size="32" class="text-purple-600" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Design</h3>
            <p class="text-gray-600 text-sm">
              Our designers create wireframes, prototypes, and visual designs that align with your brand and users' needs.
            </p>
          </div>

          <div class="text-center animate-fadeInUp animate-delay-300">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <Icon name="lucide:code" size="32" class="text-green-600" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Development</h3>
            <p class="text-gray-600 text-sm">
              Our experienced developers build your solution using best practices, clean code, and modern technologies.
            </p>
          </div>

          <div class="text-center animate-fadeInUp animate-delay-400">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <Icon name="lucide:rocket" size="32" class="text-orange-600" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
            <p class="text-gray-600 text-sm">
              We deploy your solution, provide training, and offer ongoing support to ensure your success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="section-padding bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="section-container">
        <div class="text-center animate-fadeInUp">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your digital goals.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UiButton size="lg" variant="secondary">
              <Icon name="lucide:phone" size="20" class="mr-2" />
              Call +92 312 4573059
            </UiButton>
            <UiButton size="lg" variant="outline" @click="$router.push('/contact')">
              <Icon name="lucide:mail" size="20" class="mr-2" />
              Send Message
            </UiButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'Our Services - Brainity Solutions',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive digital services including mobile app development, web development, UI/UX design, enterprise software, IT consulting, and cloud solutions in Lahore, Pakistan.'
    }
  ]
})

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
