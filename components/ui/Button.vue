<template>
  <button 
    :class="getButtonClasses()"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <Icon v-if="loading" name="lucide:loader" class="w-4 h-4 animate-spin mr-2" />
    <Icon v-else-if="icon && iconPosition === 'left'" :name="icon" class="w-4 h-4 mr-2" />
    
    <slot />
    
    <Icon v-if="icon && iconPosition === 'right'" :name="icon" class="w-4 h-4 ml-2" />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const getButtonClasses = () => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 transform'
  
  const variants = {
    primary: 'bg-gradient-mint-purple hover:shadow-lg text-white focus:ring-primary-500',
    secondary: 'bg-gradient-purple hover:shadow-lg text-white focus:ring-secondary-500',
    outline: 'border-2 border-primary-500 bg-transparent hover:bg-gradient-mint-purple hover:text-white text-primary-600 focus:ring-primary-500',
    ghost: 'bg-transparent hover:bg-primary-50 text-primary-700 focus:ring-primary-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const disabled = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : ''
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabled}`
}

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
