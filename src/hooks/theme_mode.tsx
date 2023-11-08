import { useEffect, useState } from 'react'

export const useTheme: () => [string, () => void] = () => {
  const [themeMode, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const color = themeMode === 'dark' ? 'light' : 'dark'

  const toggleTheme = () => {
    setTheme(color)
    localStorage.setItem('theme', color)
  }

  useEffect(() => {
    const classList = document.documentElement.classList
    classList.add(themeMode)
    classList.remove(color)
  }, [themeMode])

  return [color, toggleTheme]
}
