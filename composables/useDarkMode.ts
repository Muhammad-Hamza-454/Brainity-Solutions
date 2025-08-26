export const useDarkMode = () => {
  const isDark = ref(false)

  // Check for saved theme or system preference
  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      updateTheme()
    }
  }

  // Update theme in DOM and localStorage
  const updateTheme = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  // Set specific theme
  const setTheme = (theme: 'light' | 'dark') => {
    isDark.value = theme === 'dark'
    updateTheme()
  }

  // Initialize on mount
  onMounted(() => {
    initializeTheme()
  })

  return {
    isDark: readonly(isDark),
    toggleDarkMode,
    setTheme
  }
}
