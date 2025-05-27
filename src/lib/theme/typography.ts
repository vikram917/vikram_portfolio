// Typography configuration
// lib/theme/typography.ts

export const typography = {
    // Font families
    fontFamily: {
      sans: 'var(--font-sans)',      // System font or custom sans-serif
      mono: 'var(--font-mono)',      // Monospace for code blocks
      heading: 'var(--font-heading)', // Optional custom heading font
    },
  
    // Font weights
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  
    // Font sizes
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
    },
  
    // Line heights
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  
    // Text styles
    styles: {
      h1: {
        fontSize: '3rem',         // 48px
        fontWeight: '700',        // Bold
        lineHeight: '1.2',        // Tight line height
        letterSpacing: '-0.025em', // Tight letter spacing
        marginBottom: '1.5rem',   // Bottom spacing
      },
      h2: {
        fontSize: '2.25rem',      // 36px
        fontWeight: '700',
        lineHeight: '1.25',
        letterSpacing: '-0.025em',
        marginBottom: '1.25rem',
      },
      h3: {
        fontSize: '1.875rem',     // 30px
        fontWeight: '600',
        lineHeight: '1.3',
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
      },
      h4: {
        fontSize: '1.5rem',       // 24px
        fontWeight: '600',
        lineHeight: '1.375',
        letterSpacing: '-0.015em',
        marginBottom: '0.75rem',
      },
      h5: {
        fontSize: '1.25rem',      // 20px
        fontWeight: '600',
        lineHeight: '1.4',
        letterSpacing: '-0.01em',
        marginBottom: '0.5rem',
      },
      h6: {
        fontSize: '1.125rem',     // 18px
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: '-0.005em',
        marginBottom: '0.5rem',
      },
      body: {
        fontSize: '1rem',         // 16px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0',
        marginBottom: '1rem',
      },
      bodyLg: {
        fontSize: '1.125rem',     // 18px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0',
        marginBottom: '1rem',
      },
      bodySm: {
        fontSize: '0.875rem',     // 14px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0',
        marginBottom: '0.75rem',
      },
      caption: {
        fontSize: '0.75rem',      // 12px
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0.01em',
        marginBottom: '0.5rem',
      },
      button: {
        fontSize: '0.875rem',     // 14px
        fontWeight: '500',
        lineHeight: '1',
        letterSpacing: '0.01em',
      },
      link: {
        textDecoration: 'underline',
        fontWeight: '500',
      },
      code: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.875rem',     // 14px
        fontWeight: '400',
        lineHeight: '1.5',
        padding: '0.2em 0.4em',
        borderRadius: '0.25rem',
      },
    },
  };