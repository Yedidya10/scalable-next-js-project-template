'use client'

import * as React from 'react'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import MuiThemeProvider from './MuiThemeProvider'

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
