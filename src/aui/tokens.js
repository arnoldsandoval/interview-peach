export const defaults = {
  borderRadius: '0.5rem',
  outlineColor: '#3576f6'
}

// TODO: This color pallete could be better accessible, consider fixing this at some point
// Related reading: https://medium.com/envoy-design/how-to-design-an-accessible-color-scheme-4a13ca12c92b
export const color = {
  blue: '#3576f6',
  green: '#43A047',
  red: '#E53935',
  white: '#fff',
  grayLight: '#FAFAFA',
  gray: '#ccc',
  grayDark: '#6c757d'
}

export const layout = {
  columns: 12,
  containerMaxWidth: 122,
  gutter: 1.6 // rem
}

// Box Shadows
export const shadow = {
  default: '1px 1px 2px 0 rgba(0, 0, 0, 0.2)'
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  landscape: 'landscape',
  portrait: 'portrait',
  retina: 'retina'
}

export const type = {
  fontSerif: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  baseFontSize: '62.5%',
  baseFontSizePx: '16px',
  baseFontSizeRem: '1.6rem',
  baseLineHeight: '1.5',
  fontColor: color.grayDark,
  linkColor: color.blue,

  // Standard Headings
  1: {
    xs: { size: '3.2rem', margin: '0 0 1rem 0' },
    sm: { size: '3.4rem', margin: '0 0 1rem 0' },
    md: { size: '3.6rem', margin: '0 0 1rem 0' },
    lg: { size: '3.8rem', margin: '0 0 1rem 0' },
    xl: { size: '4rem', margin: '0 0 1rem 0' }
  },
  2: {
    xs: { size: '2.4rem', margin: '0 0 1rem 0' },
    sm: { size: '2.6rem', margin: '0 0 1rem 0' },
    md: { size: '2.8rem', margin: '0 0 1rem 0' },
    lg: { size: '3rem', margin: '0 0 1rem 0' },
    xl: { size: '3.2rem', margin: '0 0 1rem 0' }
  },
  3: {
    xs: { size: '2rem', margin: '0 0 1rem 0' },
    sm: { size: '2.2rem', margin: '0 0 1rem 0' },
    md: { size: '2.4rem', margin: '0 0 1rem 0' },
    lg: { size: '2.6rem', margin: '0 0 1rem 0' },
    xl: { size: '2.8rem', margin: '0 0 1rem 0' }
  },
  4: {
    xs: { size: '1.6rem', margin: '0 0 1rem 0' },
    sm: { size: '1.8rem', margin: '0 0 1rem 0' },
    md: { size: '2rem', margin: '0 0 1rem 0' },
    lg: { size: '2.2rem', margin: '0 0 1rem 0' },
    xl: { size: '2.4rem', margin: '0 0 1rem 0' }
  },
  5: {
    xs: { size: '1.4rem', margin: '0 0 1rem 0' },
    sm: { size: '1.6rem', margin: '0 0 1rem 0' },
    md: { size: '1.8rem', margin: '0 0 1rem 0' },
    lg: { size: '2rem', margin: '0 0 1rem 0' },
    xl: { size: '2.2rem', margin: '0 0 1rem 0' }
  },
  6: {
    xs: { size: '0.8rem', margin: '0 0 1rem 0' },
    sm: { size: '1rem', margin: '0 0 1rem 0' },
    md: { size: '1.2rem', margin: '0 0 1rem 0' },
    lg: { size: '1.4rem', margin: '0 0 1rem 0' },
    xl: { size: '1.6rem', margin: '0 0 1rem 0' }
  },

  // Display Headings, to be used as visualLevel

  'display-1': {
    xs: { size: '6.6rem', margin: '0 0 0 0' },
    sm: { size: '7rem', margin: '0 0 0.2rem 0' },
    md: { size: '7.6rem', margin: '0 0 0.4rem 0' },
    lg: { size: '9rem', margin: '0 0 1rem 0' },
    xl: { size: '9.6rem', margin: '0 0 1rem 0' }
  },
  'display-2': {
    xs: { size: '4rem', margin: '0 0 1rem 0' },
    sm: { size: '4.4rem', margin: '0 0 1rem 0' },
    md: { size: '4.8rem', margin: '0 0 1rem 0' },
    lg: { size: '5.2rem', margin: '0 0 1rem 0' },
    xl: { size: '5.6rem', margin: '0 0 1rem 0' }
  },
  'display-3': {
    xs: { size: '3.2rem', margin: '0 0 1rem 0' },
    sm: { size: '3.6rem', margin: '0 0 1rem 0' },
    md: { size: '3.8rem', margin: '0 0 1rem 0' },
    lg: { size: '4rem', margin: '0 0 1rem 0' },
    xl: { size: '4.5rem', margin: '0 0 1rem 0' }
  },
  'display-4': {
    xs: { size: '2.6rem', margin: '0 0 1rem 0' },
    sm: { size: '2.8rem', margin: '0 0 1rem 0' },
    md: { size: '3rem', margin: '0 0 1rem 0' },
    lg: { size: '3.2rem', margin: '0 0 1rem 0' },
    xl: { size: '3.4rem', margin: '0 0 1rem 0' }
  }
}

export const buttons = {
  themes: {
    primary: {
      outline: color.blue,
      border: color.blue,
      borderWidth: '2px',
      background: color.blue,
      color: color.white,
      borderRadius: defaults.borderRadius
    },

    inverse: {
      outline: color.blue,
      border: color.white,
      background: 'transparent',
      color: color.white,
      borderRadius: defaults.borderRadius
    },

    link: {
      outline: color.blue,
      border: 'transparent',
      background: 'transparent',
      color: color.blue,
      borderRadius: 'transparent'
    },

    default: {
      outline: color.grayDark,
      border: color.grayDark,
      background: color.grayDark,
      color: color.white,
      borderRadius: defaults.borderRadius
    }
  },
  sizes: {
    lg: {
      fontSize: '2rem',
      padding: '1rem 1.6rem'
    },
    md: {
      fontSize: '1.6rem',
      padding: '0.6rem 1.2rem'
    },
    sm: {
      fontSize: '1.2rem',
      padding: '0.2rem 0.8rem'
    }
  }
}

export const inputs = {
  themes: {
    default: {
      borderColor: color.gray,
      background: color.white,
      color: color.grayDark,
      borderRadius: defaults.borderRadius,

      focus: {
        borderColor: color.grayDark
      }
    }
  },
  sizes: {
    lg: {
      fontSize: '2rem',
      padding: '1rem 1.6rem'
    },
    md: {
      fontSize: '1.6rem',
      padding: '1rem 1.2rem'
    }
  }
}

export const cardHeader = {
  themes: {
    primary: {
      border: color.blue,
      background: color.blue,
      color: color.white,
      borderRadius: defaults.borderRadius
    },
    danger: {
      border: color.red,
      background: color.red,
      color: color.white,
      borderRadius: defaults.borderRadius
    },
    success: {
      border: color.green,
      background: color.green,
      color: color.white,
      borderRadius: defaults.borderRadius
    },
    default: {
      border: color.grayDark,
      background: color.grayDark,
      color: color.white,
      borderRadius: defaults.borderRadius
    }
  }
}
