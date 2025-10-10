# Proton Security Website

A premium, multi-page security solutions website built with React, TypeScript, and Tailwind CSS.

## 🎨 Design System

The website uses a navy/light blue/yellow color scheme:
- **Navy** (#001f3f) - Primary brand color
- **Light Blue** (#009dff) - Accent color
- **Yellow** (#FFD400) - Highlight color for CTAs and badges

All colors are defined as HSL values in `src/index.css` using CSS custom properties.

## 📁 Project Structure

```
src/
├── assets/           # Generated hero images
├── components/       # Reusable components
│   ├── ui/          # shadcn UI components
│   ├── Layout.tsx   # Main layout with navbar and footer
│   ├── AnimatedSection.tsx
│   ├── DirectorCard.tsx
│   ├── ClientMarquee.tsx
│   └── Testimonials.tsx
├── data/            # Content data files
│   ├── directors.ts # Board of directors data
│   ├── services.ts  # Services information
│   ├── clients.ts   # Client logos and testimonials
│   └── gallery.ts   # Gallery images
└── pages/           # Page components
    ├── Index.tsx    # Home page
    ├── About.tsx
    ├── Services.tsx
    ├── Training.tsx
    ├── Board.tsx
    ├── DirectorProfile.tsx
    ├── Gallery.tsx
    ├── Clients.tsx
    ├── Contact.tsx
    └── Login.tsx
```

## 🔄 Content Replacement Guide

### 1. Logo
**Location:** `src/components/Layout.tsx` (lines 23-31)
- Replace the "PS" placeholder with your actual logo image
- Update both navbar and footer logos

### 2. Director Photos
**Location:** `src/data/directors.ts`
- Replace image URLs in the `images` array for each director
- Each director has 2-3 images for the profile slideshow
- Update social media links (TikTok, Instagram, Facebook)

### 3. Client Logos
**Location:** `src/data/clients.ts`
- Replace placeholder logo URLs with actual client company logos
- Update client names
- Modify testimonials with real client feedback

### 4. Gallery Images
**Location:** `src/data/gallery.ts`
- Replace all 13 gallery image URLs with actual photos
- Update titles and categories
- Add more images if needed (lightbox supports any number)

### 5. Contact Page Map
**Location:** `src/pages/Contact.tsx` (around line 150)
- Uncomment the iframe code
- Replace with your Google Maps embed URL
- Or use another map provider API

### 6. Contact Information
**Location:** `src/components/Layout.tsx` (footer) and `src/pages/Contact.tsx`
- Update phone numbers
- Update email addresses
- Update physical address
- Update business hours

## ✨ Key Features

### Board of Directors
- Home page shows 3 featured directors
- "See More" button navigates to full Board page with all 8 directors
- Each director card links to individual profile page
- Profile pages include:
  - Auto-rotating image slideshow (3-second intervals)
  - Full biography
  - List of achievements
  - Social media links (TikTok, Instagram, Facebook)
  - Back button to Board page

### Training Section
Three main sections as required:
1. **Core Programs** - Basic to advanced training courses
2. **Specialized Modules** - Domain-specific training
3. **Psychological & Strategic Modules** - Mental preparedness training

### Client Section
- Infinite horizontal marquee of client logos
- Smooth continuous scrolling animation
- Testimonials section directly below with 3 client quotes

### Gallery
- 13 image grid with responsive layout
- Click any image to open lightbox
- Lightbox navigation with image indicators
- Keyboard accessible (ESC to close)

### Animations
- Fade-in on scroll for all major sections
- Intersection Observer for performance
- Smooth transitions and hover effects
- Auto-rotating director profile images

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Responsive Design

- Mobile: Hamburger menu, stacked layouts
- Tablet: 2-column grids
- Desktop: Full multi-column layouts
- Touch-friendly controls on all devices

## ♿ Accessibility

- Semantic HTML structure
- Alt text placeholders for images
- Keyboard navigation support
- ARIA labels where needed
- Focus states on interactive elements

## 🎯 SEO

The website includes:
- Proper meta tags in `index.html`
- Semantic HTML structure
- Descriptive page titles
- Alt text placeholders
- Responsive design

## 📝 Notes

- All placeholder content is clearly marked with comments
- Design system uses HSL colors exclusively
- Button variants defined for consistent styling
- All animations use CSS for performance
- Images are imported as ES6 modules

## 🔐 Login Page

The login page is a demo interface. To implement actual authentication:
1. Connect to a backend service (e.g., Lovable Cloud)
2. Add authentication logic in `src/pages/Login.tsx`
3. Implement protected routes as needed

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and shadcn/ui
