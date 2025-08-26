# 🚀 Brainity Solutions - Portfolio Website

A modern, responsive portfolio website built with Nuxt 3 and Tailwind CSS, showcasing professional projects and skills.

## ✨ Features

- **Modern Design**: Clean, professional, and responsive design
- **Dark/Light Mode**: Built-in theme switching with system preference detection
- **Performance Optimized**: Built with Nuxt 3 for optimal performance and SEO
- **Fully Responsive**: Looks great on all devices and screen sizes
- **Interactive Components**: Smooth animations and transitions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable portfolio with detailed project information
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon) with Lucide icons
- **State Management**: [Pinia](https://pinia.vuejs.org)
- **TypeScript**: Full TypeScript support
- **Animation**: CSS animations with Tailwind utilities

## 📁 Project Structure

```
root/
├── assets/                   # Source assets
│   ├── css/main.css         # Global styles with Tailwind
│   ├── fonts/               # Custom fonts
│   └── images/              # Project images
├── components/               # Vue components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   └── Navbar.vue
│   └── sections/            # Page sections
│       ├── Hero.vue
│       ├── About.vue
│       ├── Projects.vue
│       ├── Skills.vue
│       ├── Contact.vue
│       └── Footer.vue
├── composables/              # Vue composables
│   └── useDarkMode.ts
├── layouts/                  # Layout components
│   └── default.vue
├── pages/                    # Application pages
│   ├── index.vue            # Homepage
│   ├── projects.vue         # Projects page
│   └── contact.vue          # Contact page
├── public/                   # Static assets
├── store/                    # Pinia stores
│   └── theme.ts
├── utils/                    # Helper functions
│   └── formatDate.ts
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad-Hamza-454/Brainity-Solutions.git
   cd Brainity-Solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Update the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your colors
    950: '#172554'
  }
}
```

### Content

- Update personal information in the component files
- Replace placeholder images in `/public/`
- Modify project data in `components/sections/Projects.vue`
- Update contact information throughout the components

### Styling

- Global styles: `assets/css/main.css`
- Component-specific styles: within each Vue component
- Tailwind utilities: use throughout templates

## 📱 Components

### UI Components

- **Button**: Versatile button with variants and loading states
- **Card**: Flexible card component with header/footer slots
- **Navbar**: Responsive navigation with mobile menu

### Section Components

- **Hero**: Landing section with call-to-action
- **About**: Personal information and statistics
- **Skills**: Technology skills with progress indicators
- **Projects**: Portfolio showcase with filtering
- **Contact**: Contact form with validation
- **Footer**: Site footer with links and newsletter signup

## 🌙 Theme System

The website includes a comprehensive theme system:

- **Auto-detection**: Respects system theme preference
- **Manual toggle**: Users can override with theme switcher
- **Persistent**: Theme choice saved to localStorage
- **Smooth transitions**: Animated theme switching

## 📧 Contact Form

The contact form includes:

- Form validation
- Loading states
- Success/error feedback
- Responsive design
- Accessibility features

To integrate with a backend service, update the `submitForm` function in `components/sections/Contact.vue`.

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run generate`
2. Deploy the `dist/` folder to Netlify

### Static Hosting

Generate static files:
```bash
npm run generate
```

Upload the `dist/` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the beautiful icons
- [Unsplash](https://unsplash.com) for placeholder images

---

**Built with ❤️ by Muhammad Hamza**

For questions or collaboration opportunities, feel free to [get in touch](mailto:hamza@brainitysolutions.com)!
