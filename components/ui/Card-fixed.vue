<template>
  <div :class="getCardClasses()">
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  variant?: 'default' | 'bordered' | 'shadow' | 'hover'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md'
})

const getCardClasses = () => {
  const base = 'bg-white rounded-xl overflow-hidden'
  
  const variants = {
    default: '',
    bordered: 'border border-gray-200',
    shadow: 'shadow-lg',
    hover: 'shadow-lg hover:shadow-xl transition-shadow duration-300'
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return `${base} ${variants[props.variant]} ${paddings[props.padding]}`
}
</script>

<style scoped>
.card-header {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.card-footer {
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>
