<template>
  <button
    class="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none px-4 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <Icon v-if="icon && !loading" :name="icon" class="w-4 h-4 mr-2" />
    <Icon v-if="loading" name="lucide:loader-2" class="w-4 h-4 mr-2 animate-spin" />
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false
})
</script>
