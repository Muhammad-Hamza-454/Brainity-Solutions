# 🎨 Brainity Solutions - Color Theme Documentation

This document contains the complete color theme used in the Brainity Solutions portfolio website. You can use these exact colors for consistent branding across all your projects.

## 🔵 Primary Color Palette (Blue Theme)

The primary color is a beautiful blue that works well for professional portfolios:

```css
/* Primary Blue Palette */
--primary-50: #eff6ff;   /* Very light blue - backgrounds */
--primary-100: #dbeafe;  /* Light blue - subtle backgrounds */
--primary-200: #bfdbfe;  /* Light blue - borders, accents */
--primary-300: #93c5fd;  /* Medium light blue - hover states */
--primary-400: #60a5fa;  /* Medium blue - active states */
--primary-500: #3b82f6;  /* Base primary blue - main brand color */
--primary-600: #2563eb;  /* Darker blue - buttons, CTAs */
--primary-700: #1d4ed8;  /* Dark blue - hover states, emphasis */
--primary-800: #1e40af;  /* Very dark blue - high contrast */
--primary-900: #1e3a8a;  /* Darkest blue - headings, text */
--primary-950: #172554;  /* Ultra dark blue - strong contrast */
```

## ⚫ Gray Color Palette (Neutral Colors)

Professional gray scale for text, backgrounds, and UI elements:

```css
/* Gray Palette */
--gray-50: #f9fafb;    /* Almost white - page backgrounds */
--gray-100: #f3f4f6;   /* Very light gray - card backgrounds */
--gray-200: #e5e7eb;   /* Light gray - borders, dividers */
--gray-300: #d1d5db;   /* Medium light gray - inactive states */
--gray-400: #9ca3af;   /* Medium gray - placeholders, icons */
--gray-500: #6b7280;   /* Base gray - secondary text */
--gray-600: #4b5563;   /* Dark gray - primary text */
--gray-700: #374151;   /* Darker gray - headings */
--gray-800: #1f2937;   /* Very dark gray - emphasis */
--gray-900: #111827;   /* Almost black - high contrast */
--gray-950: #030712;   /* Ultra dark - maximum contrast */
```

## 🎯 Usage Guide

### Primary Colors Usage:
- **primary-600**: Main buttons, CTAs, brand elements
- **primary-500**: Links, interactive elements
- **primary-100**: Light backgrounds, subtle highlights
- **primary-50**: Very subtle backgrounds, hover states

### Gray Colors Usage:
- **gray-900**: Main headings, important text
- **gray-700**: Subheadings, emphasis text
- **gray-600**: Body text, descriptions
- **gray-400**: Secondary text, placeholders
- **gray-100**: Card backgrounds, sections
- **gray-50**: Page backgrounds

## 📱 Tailwind CSS Configuration

To use these colors in your Tailwind CSS project, add this to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      }
    }
  }
}
```

## 🌈 Color Combinations That Work Well

### Primary Combinations:
- **Text on Primary**: White text on `primary-600` or darker
- **Primary on Light**: `primary-600` on `gray-50` backgrounds
- **Hover States**: `primary-700` for hover effects on `primary-600` buttons

### Gray Combinations:
- **High Contrast**: `gray-900` text on `white` or `gray-50`
- **Medium Contrast**: `gray-700` text on `gray-100` backgrounds
- **Subtle**: `gray-600` text on `gray-50` backgrounds

## 🎨 CSS Custom Properties Version

For vanilla CSS or other frameworks:

```css
:root {
  /* Primary Colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* Gray Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;
}
```

## 🌟 Design System Notes

- **Font Family**: Inter (Google Fonts) for clean, professional look
- **Primary Brand Color**: `#2563eb` (primary-600)
- **Text Hierarchy**: 
  - Headings: `gray-900`
  - Body: `gray-700`
  - Secondary: `gray-600`
  - Muted: `gray-400`
- **Backgrounds**: 
  - Main: `white` or `gray-50`
  - Cards: `white`
  - Sections: `gray-50`

This color theme provides excellent contrast ratios and accessibility while maintaining a professional, modern appearance perfect for portfolio websites and business applications.
