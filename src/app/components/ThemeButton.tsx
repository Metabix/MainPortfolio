'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const runtime = 'edge';
export function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="fixed top-4 right-4 p-2 rounded-lg bg-[#565264] dark:bg-[#ccb7ae] text-[#ccb7ae] dark:text-[#565264]"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}