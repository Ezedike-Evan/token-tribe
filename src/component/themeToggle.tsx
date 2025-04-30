// components/ThemeToggle.tsx
'use client'

import { useTheme } from '@/contexts/themecontext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
    >
      <div
        className={`bg-white dark:bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
