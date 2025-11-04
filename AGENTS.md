# AGENTS.MD - AI Agent Context & Instructions

## Next Prompt
<!-- Ready for next instructions -->

## 🎯 CRITICAL RULES FOR AI AGENTS

### 1. Mobile Responsiveness - MANDATORY
**EVERY component, section, and code change MUST be mobile responsive and adapt to all screen sizes:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Use Tailwind responsive classes: `sm:`, `md:`, `lg:`, `xl:`
- Test all layouts on multiple breakpoints
- Ensure touch-friendly interactions on mobile
- Optimize font sizes, spacing, and images for each screen size

### 2. Context Awareness
- Always read this file before starting any work
- Update the "Latest Changes" section after completing tasks
- Maintain consistency with existing design system
- Reference the current status and tech stack sections

### 3. Code Quality
- Write clean, maintainable TypeScript/React code
- Follow existing patterns and conventions
- Use Framer Motion for animations
- Leverage Tailwind CSS utilities
- Ensure accessibility compliance

---

## 📊 CURRENT PROJECT STATUS

### Project Overview
**Shoaib Khan Portfolio Website** - A premium, cinematic personal portfolio showcasing content creation, entrepreneurship, and creative work.

### Development Stage
- ✅ Core infrastructure setup complete
- ✅ Splash screen with animations implemented
- ✅ Hero section with floating elements
- ✅ Navigation system (desktop pill + mobile hamburger)
- ✅ About section with two-column layout
- ⚠️ Journey, Experience, Services, Contact sections (placeholder content)
- 🔄 Needs: Real content, portfolio showcase, contact form

### Live Sections
1. **Splash Screen** - Animated intro with particle effects
2. **Hero Section** - Profile image, name, description, social links
3. **About Section** - Story with image and detailed biography
4. **Navbar** - Responsive navigation with active state tracking
5. **Placeholder Sections** - Journey, Experience, Services, Contact

---

## 🎨 DESIGN SYSTEM

### Color Palette
```css
Primary Colors:
- Background: #000000 (Pure Black)
- Primary Accent: #FEBD59 (Golden Yellow)
- Text: #FFFFFF (White)

Orange Variants:
- Default: #FF9D00
- Light: #FF9A00
- Medium: #FFBC4C
- Bright: #FFDE63

Opacity Variants:
- Glass effects: rgba(255, 255, 255, 0.1)
- Borders: rgba(254, 189, 89, 0.3-0.5)
- Overlays: rgba(0, 0, 0, 0.5-0.9)
```

### Typography System
```css
Font Families:
1. Cabinet Grotesk - Display/Headings
   - Weights: 400, 500, 700, 800, 900
   - Usage: Main headings, hero text, section titles
   - Letter-spacing: -0.02em

2. Urbanist - Body Text
   - Weights: 300, 400, 500, 600, 700
   - Usage: Paragraphs, descriptions, general content
   - Letter-spacing: -0.01em

3. Karla - Accent Text
   - Weights: 300, 400, 500, 600, 700
   - Usage: Highlights, special text, italics
   - Letter-spacing: 0.01em

4. DM Sans - Alternative
   - Weights: 300, 400, 500, 600, 700
   - Usage: Buttons, navigation, UI elements
```

### Font Size Scale (Responsive)
```css
Headings:
- Mobile: text-4xl (2.25rem)
- Tablet: text-5xl (3rem)
- Desktop: text-6xl (3.75rem)
- Large: text-7xl (4.5rem)

Body:
- Mobile: text-base (1rem)
- Tablet: text-lg (1.125rem)
- Desktop: text-xl (1.25rem)

Small:
- Mobile: text-sm (0.875rem)
- Tablet: text-base (1rem)
```

### Spacing System
```css
Sections:
- Mobile: py-12 (3rem)
- Tablet: py-16 (4rem)
- Desktop: py-20 (5rem)
- Large: py-32 (8rem)

Containers:
- Mobile: px-4 (1rem)
- Tablet: px-6 (1.5rem)
- Desktop: px-8 (2rem)

Gaps:
- Small: gap-4 (1rem)
- Medium: gap-6 (1.5rem)
- Large: gap-8 (2rem)
- XLarge: gap-12 (3rem)
```

### Animation System
```css
Tailwind Animations:
- fade-in: 0.8s ease-in-out
- slide-up: 0.8s ease-out
- scale-in: 0.6s ease-out
- float: 3s ease-in-out infinite
- typewriter: 2s steps(40) forwards

Framer Motion Patterns:
- Page transitions: duration 0.8s, ease [0.6, 0.05, 0.01, 0.9]
- Hover effects: duration 0.4s, ease "easeOut"
- Scroll animations: viewport once:true, amount:0.2
```

### Effects & Styles
```css
Glass Morphism:
- background: rgba(255, 255, 255, 0.1)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(255, 255, 255, 0.2)

Gradient Text:
- background: linear-gradient(135deg, #FEBD59 0%, #FFBC4C 100%)
- -webkit-background-clip: text
- -webkit-text-fill-color: transparent

Shadows:
- Glow: 0 0 40px rgba(254, 189, 89, 0.3)
- Card: 0 25px 50px -12px rgba(254, 189, 89, 0.2)
- Hover: 0 0 80px rgba(254, 189, 89, 0.6)

Borders:
- Standard: 2-4px solid rgba(254, 189, 89, 0.4-0.5)
- Hover: rgba(254, 189, 89, 0.7-0.8)
```

---

## 🛠️ TECH STACK

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript 5.0.2** - Type safety
- **Vite 5.4.2** - Build tool & dev server

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **Sass 1.69.5** - CSS preprocessor
- **PostCSS 8.4.31** - CSS transformations
- **Autoprefixer 10.4.16** - Vendor prefixes

### UI & Animation
- **Framer Motion 10.16.4** - Animation library
- **Lucide React 0.263.1** - Icon library
- **Bootstrap 5.3.2** - Component library
- **React Bootstrap 2.10.1** - React components

### Routing & Navigation
- **React Router DOM 7.6.2** - Client-side routing
- **Lenis 1.3.8** - Smooth scrolling

### SEO & Meta
- **React Helmet Async 1.3.0** - Document head management

### Development Tools
- **ESLint 8.45.0** - Code linting
- **TypeScript ESLint** - TS linting rules
- **Terser 5.24.0** - Code minification

---

## 📁 PROJECT STRUCTURE

```
shoaib-khan-portfolio/
├── public/
│   └── assets/
│       ├── skpic.webp          # Profile image (hero)
│       └── skback.webp         # Background image (about)
│
├── src/
│   ├── components/
│   │   ├── SplashScreen.tsx    # Animated intro screen
│   │   ├── Navbar.tsx          # Responsive navigation
│   │   ├── HeroSection.tsx     # Landing section
│   │   ├── AboutSection.tsx    # Biography section
│   │   ├── JourneySection.tsx  # Timeline (placeholder)
│   │   ├── ExperienceSection.tsx # Work history (placeholder)
│   │   ├── ServicesSection.tsx # Services offered (placeholder)
│   │   └── ContactSection.tsx  # Contact form (placeholder)
│   │
│   ├── pages/
│   │   └── Home.tsx            # Main page layout
│   │
│   ├── styles/
│   │   └── variables.scss      # SCSS variables
│   │
│   ├── utils/
│   │   └── lenis.ts            # Smooth scroll config
│   │
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
│
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

---

## 🎬 COMPONENT DETAILS

### 1. SplashScreen Component
**Purpose:** Animated intro screen shown on initial load

**Features:**
- Particle field animation (40 particles desktop, 20 mobile)
- Animated gradient orbs
- Text rotation: "Content Creator" → "Entrepreneur" → "Co-Founder of Hyderabad Hustlers"
- Loading indicator with glowing dots
- Auto-dismisses after 9.5 seconds

**Responsive:**
- Particle count adjusts by screen size
- Text size: 2xl (mobile) → 6xl (desktop)
- Orb sizes scale down on mobile

### 2. Navbar Component
**Purpose:** Site navigation with active section tracking

**Desktop (lg+):**
- Pill-shaped container
- Width animation: 100% (at top) → 85% (scrolled)
- Active tab indicator with smooth transition
- Centered layout

**Mobile/Tablet:**
- Hamburger menu (top-right)
- Slide-in drawer from right
- Full-height overlay
- Touch-optimized buttons

**Features:**
- Smooth scroll to sections
- Active section highlighting
- Backdrop blur effects
- Golden accent colors

### 3. HeroSection Component
**Purpose:** Main landing section with profile

**Layout:**
- Centered content
- Profile image with glow effect
- Name in gradient text
- Description with highlighted text
- Social links (LinkedIn, Instagram)
- Floating creative icons (desktop only)

**Responsive:**
- Image: 56 (mobile) → 80 (desktop)
- Text: 4xl (mobile) → 7xl (desktop)
- Icons hidden on mobile
- Button adapts to screen width

### 4. AboutSection Component
**Purpose:** Biography and story section

**Layout:**
- Two-column grid (desktop)
- Stacked layout (mobile)
- Left: Image with golden border
- Right: Story paragraphs + quote

**Features:**
- Scroll-triggered animations
- Floating story icons (desktop)
- Flowing golden light animation
- Ambient light orbs
- Staggered text reveal

**Responsive:**
- Grid: 1 column (mobile) → 2 columns (desktop)
- Image max-width: full (mobile) → md (desktop)
- Text size adapts to screen

### 5. Placeholder Sections
**Journey, Experience, Services, Contact:**
- Basic structure in place
- Centered heading with gradient
- Placeholder lorem ipsum text
- Ready for content expansion

---

## 🔧 CONFIGURATION FILES

### tailwind.config.js
```javascript
- Custom colors: primary, orange variants
- Custom fonts: display, body, accent
- Custom animations: fade-in, slide-up, scale-in, float, typewriter
- Extended keyframes for smooth animations
```

### vite.config.ts
```javascript
- React plugin enabled
- SCSS preprocessing with auto-import of variables
- Terser minification for production
- Console/debugger removal in builds
```

### tsconfig.json
```javascript
- Target: ES2020
- Module: ESNext
- Strict mode enabled
- Path aliases: @/* → ./src/*
```

---

## 🚀 PERFORMANCE OPTIMIZATIONS

### Implemented
1. **Lazy loading** for images
2. **GPU acceleration** for animations (translateZ, backface-visibility)
3. **Will-change** properties on animated elements
4. **Reduced motion** support for accessibility
5. **Optimized particle counts** based on device
6. **Terser minification** in production builds
7. **Console removal** in production

### Best Practices
- Use `loading="lazy"` on images
- Add `will-change` to animated elements
- Limit particle effects on mobile
- Use CSS transforms over position changes
- Implement viewport-based animation triggers

---

## 📱 RESPONSIVE BREAKPOINTS

```css
Tailwind Breakpoints:
- sm: 640px   (Small tablets, large phones)
- md: 768px   (Tablets)
- lg: 1024px  (Small laptops)
- xl: 1280px  (Desktops)
- 2xl: 1536px (Large screens)

Custom Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+
```

---

## 🎯 SEO & META TAGS

### Implemented
- Title: "Shoaib Khan - Content Creator & Entrepreneur"
- Meta description with keywords
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD) for Person schema
- Canonical URLs
- Favicon

### Keywords
- Content Creator
- Video Editor
- Director
- Entrepreneur
- Hyderabad
- Hyderabad Hustlers

---

## 📝 LATEST CHANGES & PROGRESS

### Session 1 - Initial Setup (Completed)
- ✅ Project scaffolding with Vite + React + TypeScript
- ✅ Tailwind CSS configuration
- ✅ Font system setup (Cabinet Grotesk, Urbanist, Karla, DM Sans)
- ✅ Color palette implementation
- ✅ Basic component structure

### Session 2 - Core Components (Completed)
- ✅ SplashScreen with particle animations
- ✅ Responsive Navbar (desktop pill + mobile hamburger)
- ✅ HeroSection with floating icons
- ✅ AboutSection with two-column layout
- ✅ Smooth scrolling with Lenis
- ✅ Framer Motion animations

### Session 3 - Polish & Optimization (Completed)
- ✅ Mobile responsiveness across all sections
- ✅ Performance optimizations (GPU acceleration, lazy loading)
- ✅ SEO meta tags and structured data
- ✅ Accessibility improvements
- ✅ Cross-browser testing

### Session 4 - Journey Section (Oct 31, 2025)
- ✅ Completely rebuilt JourneySection.tsx with cinematic timeline
- ✅ Added 11 milestone events from 2017 to present
- ✅ Integrated YouTube video embeds with autoplay
- ✅ Implemented alternating left-right desktop layout
- ✅ Added category-based color coding system
- ✅ Created mobile-responsive stacked layout
- ✅ Added smooth scroll animations and hover effects
- ✅ Included final inspirational quote section

### Session 5 - Journey Section Updates (Nov 1, 2025)
- ✅ Added two new timeline milestones: Stand-Up Comedy Performance (Sept 18) and Content Format Experimentation (Ongoing)
- ✅ Integrated new milestones as regular timeline events matching existing style
- ✅ Added video embed for stand-up comedy performance
- ✅ Updated quote attribution to use "~ Shoaib Khan" format (removed decorative lines)
- ✅ Maintained consistent design and responsive layout

---

## 🎬 NEXT STEPS & TODO

### High Priority
1. **Journey Section** - Add timeline with milestones
2. **Experience Section** - Add work history cards
3. **Services Section** - Expand service offerings with details
4. **Contact Section** - Implement functional contact form
5. **Portfolio/Work Showcase** - Add project gallery

### Medium Priority
1. Add testimonials section
2. Implement blog/articles section
3. Add video showreel
4. Create case studies for projects
5. Add downloadable resume/CV

### Low Priority
1. Dark/light mode toggle (currently dark only)
2. Language switcher (if needed)
3. Analytics integration
4. Newsletter signup
5. Social media feed integration

---

## 🐛 KNOWN ISSUES & LIMITATIONS

### Current Limitations
1. Placeholder content in Journey, Experience, Services, Contact sections
2. No backend/API integration yet
3. Contact form not functional (needs backend)
4. No CMS integration for content management
5. Social media links are placeholder URLs

### Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ⚠️ IE11 not supported (modern browsers only)

---

## 💡 DEVELOPMENT GUIDELINES

### When Adding New Components
1. Create component in `src/components/`
2. Use TypeScript with proper typing
3. Implement mobile-first responsive design
4. Add Framer Motion animations
5. Follow existing naming conventions
6. Use Tailwind utilities where possible
7. Add proper accessibility attributes
8. Test on multiple screen sizes

### When Modifying Existing Components
1. Read this AGENTS.md file first
2. Maintain existing design patterns
3. Ensure mobile responsiveness
4. Test animations and interactions
5. Update this file with changes
6. Check for TypeScript errors
7. Verify cross-browser compatibility

### Code Style
- Use functional components with hooks
- Prefer `const` over `let`
- Use arrow functions
- Destructure props
- Add proper TypeScript types
- Use meaningful variable names
- Comment complex logic
- Keep components focused and small

---

## 📚 USEFUL COMMANDS

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Linting
npm run lint             # Run ESLint

# Type Checking
tsc --noEmit            # Check TypeScript errors
```

---

## 🔗 EXTERNAL RESOURCES

### Fonts
- Google Fonts: Cabinet Grotesk, Urbanist, Karla, DM Sans

### Icons
- Lucide React: https://lucide.dev/

### Animation
- Framer Motion: https://www.framer.com/motion/

### Smooth Scroll
- Lenis: https://github.com/studio-freight/lenis

---

## 📞 PROJECT CONTEXT

### Client: Shoaib Khan
- **Role:** Content Creator, Director, Writer, Video Editor, Entrepreneur
- **Location:** Hyderabad, India
- **Company:** Co-Founder of Hyderabad Hustlers (HH)
- **Focus:** Storytelling, entrepreneurship, youth inspiration

### Brand Identity
- **Tone:** Professional, creative, inspiring, modern
- **Style:** Cinematic, premium, bold, energetic
- **Target Audience:** Entrepreneurs, content creators, youth, businesses
- **Key Message:** Inspiring youth to build and follow their passions

---

**Last Updated:** Initial creation - Current session
**Version:** 1.0.0
**Maintained By:** AI Agent System
