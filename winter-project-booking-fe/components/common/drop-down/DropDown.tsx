import React from 'react'
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  createTheme,
  ThemeProvider,
} from '@mui/material'

import theme from 'styles/theme'

interface DropDownProps {
  value: 'professor' | 'department' | 'name'
  handleChange: (event: SelectChangeEvent) => void
  items: { key: string; value: string; name: string }[]
}

const muiTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: theme.text.darkGrey,
          minWidth: '5.4rem',
          height: '2.25rem',
          fontSize: theme.fontSize.sm,
          '&:hover': {
            opacity: 0.7,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: theme.primary.grey400,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          marginTop: 4,
          borderWidth: 1,
          borderColor: theme.primary.grey300,
          borderStyle: 'solid',
          boxShadow: 'none',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          fontSize: theme.fontSize.sm,
          color: theme.text.darkGrey,
          '& li': {
            fontSize: theme.fontSize.sm,
          },
          '& li.Mui-selected': {
            background: theme.primary.grey100,
            fontWeight: 500,
          },
          '& li.Mui-selected:hover': {
            background: theme.primary.grey100,
          },
        },
      },
    },
  },
})

const getName = (value: string) => {
  switch (value) {
    case 'professor':
      return '교수명'
    case 'department':
      return '학과명'
    case 'name':
      return '과목명'
    default:
      return '교수명'
  }
}

const DropDown = ({ value, handleChange, items }: DropDownProps) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Select
        value={value}
        onChange={handleChange}
        sx={{
          '&:hover': {
            '&& fieldset': {
              borderColor: theme.primary.grey200,
            },
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.primary.blue80,
          },
        }}
        IconComponent={(props) => (
          <i
            {...props}
            className={`material-symbols-outlined ${props.className}`}
          >
            expand_more
          </i>
        )}
      >
        {items.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  )
}

export default DropDown
