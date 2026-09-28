import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Design Tokens — Clean Light Theme
        background: '#F7F8FA',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#EFF6FF',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#EEF2FF',
        },
        main: '#1F2937',
        subtext: '#6B7280',
        muted: '#9CA3AF',
        borderline: '#E5E7EB',
        status: {
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#DC2626',
        },
        // Kids mode: friendly, clean pastel-bright tones
        kids: {
          sun: '#F59E0B',
          sky: '#2563EB',
          mint: '#10B981',
          coral: '#F43F5E',
          canvas: '#F7F8FA',
          card: '#FFFFFF',
        },
        // Cinematic & Archival Cinema Tokens (Editorial Tone)
        noir: {
          950: '#0C0D0E',
          900: '#141618',
          850: '#1A1D20',
          800: '#232629',
          750: '#2C3035',
          700: '#3A3F45',
          600: '#525860',
        },
        brass: {
          200: '#EFE0C2',
          300: '#DFCA9E',
          400: '#C8A970',
          500: '#A98748',
          600: '#8A6C32',
        },
        paper: {
          50: '#FAF8F5',
          100: '#F2EFEB',
          200: '#E5E1DA',
          300: '#CCC6BC',
          400: '#9C9588',
          500: '#6E675B',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        none: '0',
        sm: '6px',
        DEFAULT: '10px',
        md: '12px',
        lg: '14px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
        elevated: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
        hover: '0 8px 16px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      aspectRatio: {
        poster: '2 / 3',
        cinematic: '16 / 9',
        panoramic: '21 / 9',
        portrait: '3 / 4',
        editorial: '16 / 10',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-up': 'scaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

