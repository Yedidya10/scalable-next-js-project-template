'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import * as React from 'react'
import defaultTheme from './theme'

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: use Redux to get the theme mode
  // const themeMode = useRecoilValue(themeModeState)
  const themeMode = 'light'

  const theme = React.useMemo(
    () =>
      createTheme({
        ...defaultTheme,
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  )

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
