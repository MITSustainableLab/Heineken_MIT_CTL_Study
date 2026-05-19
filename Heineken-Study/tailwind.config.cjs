/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Professional neutral grays — standard Tailwind slate values
        slate: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Single brand accent — deep authoritative navy
        brand: {
          DEFAULT: '#1B3A6B',
          light:   '#2A5298',
          pale:    '#EEF2FA',
          border:  '#C7D5EE',
        },
        // Keep ink alias for backward compatibility
        ink: {
          900: '#0F172A',
          700: '#334155',
          500: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
