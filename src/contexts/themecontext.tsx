// app/context/theme-context.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const root = window.document.documentElement

    if (savedTheme === 'dark') {
      root.classList.add('dark')
      setTheme('dark')
    } else {
      root.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    
    const isDark = root.classList.contains('dark')

    if (isDark) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
