---
name: Intelligent Empathy
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#594046'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#8d6f76'
  outline-variant: '#e1bec5'
  surface-tint: '#ba025b'
  primary: '#9a004a'
  on-primary: '#ffffff'
  primary-container: '#c31161'
  on-primary-container: '#ffd9e0'
  inverse-primary: '#ffb1c4'
  secondary: '#8f4a47'
  on-secondary: '#ffffff'
  secondary-container: '#ffa7a2'
  on-secondary-container: '#7a3937'
  tertiary: '#66434a'
  on-tertiary: '#ffffff'
  tertiary-container: '#815a62'
  on-tertiary-container: '#ffd9df'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e1'
  primary-fixed-dim: '#ffb1c4'
  on-primary-fixed: '#3f001a'
  on-primary-fixed-variant: '#8f0044'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#3b090a'
  on-secondary-fixed-variant: '#723331'
  tertiary-fixed: '#ffd9df'
  tertiary-fixed-dim: '#ebbac2'
  on-tertiary-fixed: '#2f1319'
  on-tertiary-fixed-variant: '#603d44'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  gutter: 24px
  margin: 40px
---

## Brand & Style

This design system is built on the philosophy of **Intelligent Empathy**. It bridges the gap between the clinical precision of professional consultancy and the visceral warmth of human connection. The aesthetic is deeply rooted in editorial sophistication, moving away from standard SaaS "blue-and-white" tropes in favor of a palette that feels ancient, grounded, and undeniably modern.

The design style is **Editorial Minimalism**. It prioritizes high-quality typography and intentional whitespace to create a sense of calm and clarity. Visual interest is generated through subtle tonal transitions and the occasional "spark" of high-contrast color, rather than through decorative elements or complex patterns. The goal is to make the user feel held in a space that is both authoritative and inviting.

## Colors

The palette is designed to simulate a physical environment—warm walls, earthy materials, and sharp ink. 

- **Primary Accent (#c31161):** Used exclusively for key CTAs and "Moment of Truth" interactions. It is a sharp, intentional break from the softer surrounding tones, signaling action and confidence.
- **Secondary Muted Terracotta (#a95f5b):** A desaturated, refined earth tone used for structural elements, secondary buttons, and icons. It provides the "weight" and authority needed for professional trust.
- **Tertiary Antique Rose (#c2959d):** A more grounded, desaturated pink used for soft backgrounds, decorative dividers, and secondary containers. It softens the experience and provides the "empathy" in the system.
- **Neutral Warm Beige (#FFFBF4):** The canvas. This off-white base reduces eye strain and feels more premium and intentional than pure white.
- **Deep Carbon (#1F1E1D):** Used for primary typography and high-contrast borders.

## Typography

Typography is the primary vehicle for the brand’s voice. We use a pairing that contrasts the historical authority of the serif with the contemporary accessibility of the sans-serif.

**Headlines (Newsreader):** Use the serif for all major headings. It evokes the feeling of a prestige publication or a scholarly journal. It should be typeset with slightly tighter letter-spacing in larger sizes to maintain a cohesive "shape."

**Body (Manrope):** A refined sans-serif that remains legible at all sizes. It is used for all long-form content, navigation, and interface elements. 

**Labels:** Small-scale metadata and labels should use Manrope in all-caps with generous tracking (letter-spacing) to create a distinct, organized hierarchy.

## Layout & Spacing

This design system employs a **Fixed Grid** model (max-width 1440px) to ensure the editorial balance of text and image is never lost on ultra-wide screens. 

The spacing rhythm is generous. To achieve the "Minimalist/Spacious" feel, we prioritize the `lg` (64px) and `xl` (128px) units for vertical section padding. The goal is to let every piece of content breathe. 

A 12-column grid is used for desktop, with a focus on asymmetrical layouts (e.g., text occupying 5 columns and an image occupying 7) to avoid a generic, centered look.

## Elevation & Depth

We avoid traditional material shadows in favor of **Tonal Layers**. Depth is communicated through color-blocking and subtle outlines rather than faux-lighting.

- **Level 0 (Base):** Warm Beige (#FFFBF4).
- **Level 1 (Surface):** Antique Rose (#c2959d) used for cards or secondary sections to indicate a change in context.
- **Level 2 (Interaction):** Thin, 1px borders in Muted Terracotta (#a95f5b) or Deep Carbon (#1F1E1D) for interactive elements like inputs or active cards.

When a shadow is absolutely necessary for accessibility (e.g., a dropdown menu), use a "Tinted Ambient" shadow: a very low opacity (8%) shadow with a hint of the Muted Terracotta tone to keep it grounded in the palette.

## Shapes

The shape language is **Soft**. A 4px (0.25rem) base radius is applied to buttons, input fields, and cards. 

This subtle rounding removes the clinical "hardness" of sharp 90-degree corners without becoming overly "bubbly" or juvenile. It strikes the balance of being approachable but disciplined. For larger components like hero images or large containers, the `rounded-lg` (8px) variant may be used to emphasize the softness of the brand.

## Components

**Buttons:**
- **Primary:** Solid #c31161 with white text. High-impact, used for the main conversion point.
- **Secondary:** Outlined 1px Muted Terracotta (#a95f5b) or solid Antique Rose (#c2959d) for a softer look.
- **Ghost:** Text-only in Muted Terracotta with a subtle underline on hover.

**Input Fields:**
Fields should have a 1px border in Muted Terracotta (#a95f5b) with a Warm Beige background. Labels always sit above the field in `label-caps`. Focus states use a slightly thicker 2px border in #c31161.

**Cards:**
Cards do not use shadows. They are defined by a solid fill of Antique Rose or a thin 1px border. They should feature generous internal padding (32px) to maintain the spacious aesthetic.

**Chips/Tags:**
Used for categories or status. Small, pill-shaped with a background of #c2959d and text in #1F1E1D.

**Dividers:**
Horizontal rules should be thin and colored in #c2959d, providing a gentle break between content sections without creating visual noise.