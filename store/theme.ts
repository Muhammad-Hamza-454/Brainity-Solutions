import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
    colorMode: 'light' as 'light' | 'dark' | 'auto'
  }),

  getters: {
    currentTheme: (state) => state.isDark ? 'dark' : 'light',
    isAutoMode: (state) => state.colorMode === 'auto'
  },

  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      this.colorMode = this.isDark ? 'dark' : 'light'
      this.updateTheme()
      this.saveToStorage()
    },

    setTheme(theme: 'light' | 'dark' | 'auto') {
      this.colorMode = theme
      
      if (theme === 'auto') {
        this.isDark = this.getSystemPreference()
      } else {
        this.isDark = theme === 'dark'
      }
      
      this.updateTheme()
      this.saveToStorage()
    },

    updateTheme() {
      if (process.client) {
        const html = document.documentElement
        
        if (this.isDark) {
          html.classList.add('dark')
          html.style.colorScheme = 'dark'
        } else {
          html.classList.remove('dark')
          html.style.colorScheme = 'light'
        }
      }
    },

    getSystemPreference(): boolean {
      if (process.client) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      return false
    },

    loadFromStorage() {
      if (process.client) {
        const savedMode = localStorage.getItem('color-mode') as 'light' | 'dark' | 'auto' | null
        
        if (savedMode) {
          this.setTheme(savedMode)
        } else {
          // Default to auto mode
          this.setTheme('auto')
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (this.colorMode === 'auto') {
            this.isDark = e.matches
            this.updateTheme()
          }
        })
      }
    },

    saveToStorage() {
      if (process.client) {
        localStorage.setItem('color-mode', this.colorMode)
      }
    },

    initializeTheme() {
      this.loadFromStorage()
      this.updateTheme()
    }
  }
})
