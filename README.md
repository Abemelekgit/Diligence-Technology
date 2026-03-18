# Diligence Technologies PLC - Landing Page

A high-converting, mobile-first advertising landing page optimized for QR code traffic. Built with React, TypeScript, TailwindCSS, and Framer Motion.

## 🎯 Features

- **Mobile-First Design**: Optimized for QR code scanning with large touch targets and readable text
- **Sticky Mobile CTA Bar**: Quick access to Call, WhatsApp, Email, and Portfolio download
- **UTM Tracking**: Automatically captures and stores UTM parameters for analytics
- **Fast Loading**: Lightweight with optimized assets and minimal dependencies
- **Copy-to-Clipboard**: Quick copy buttons for email and phone
- **Responsive Contact Form**: With validation using react-hook-form and zod
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels, smooth scrolling, and reduced motion support
- **Performance Optimized**: useCallback hooks and memoization for optimal rendering

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **react-hook-form** - Form management
- **zod** - Schema validation
- **react-icons** - Icon library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
diligencetechnologiesweb/
├── public/
│   ├── PORTFOLIO_README.md       # Instructions for PDF placement
│   └── Diligence-Technologies-Portfolio.pdf  # (Add your PDF here)
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Sticky header with navigation
│   │   ├── Hero.tsx              # Hero section with CTAs
│   │   ├── About.tsx             # Company overview
│   │   ├── Services.tsx          # Core service pillars
│   │   ├── Partnerships.tsx      # Global partnerships
│   │   ├── WhyChoose.tsx         # Value propositions
│   │   ├── Contact.tsx           # Contact form and quick actions
│   │   ├── Footer.tsx            # Footer with links
│   │   └── MobileCTA.tsx         # Sticky mobile action bar
│   ├── data/
│   │   └── content.ts            # All page content and copy
│   ├── lib/
│   │   └── utm.ts                # UTM tracking utilities
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.ts                # Vite configuration
└── package.json                  # Dependencies
```

## 🎨 Brand Colors

- **Primary (Azure Blue)**: `#0078D4`
- **Navy**: `#0B1F3B`
- **Background**: `#F8FAFC`

## 📱 Key Sections

1. **Header**: Logo, navigation, and portfolio download
2. **Hero**: Headline, value proposition, trust metrics, and CTAs
3. **About**: Company history and financial highlights
4. **Services**: SUPPLY, SUPPORT, SOLUTIONS
5. **Partnerships**: Hardware, Networking, Software partners
6. **Why Choose Us**: 8 key differentiators
7. **Contact**: Form with validation + quick contact buttons
8. **Footer**: Company info and links
9. **Mobile CTA Bar**: Sticky bottom bar with Call, WhatsApp, Email, Portfolio

## 📊 UTM Tracking

The landing page automatically captures UTM parameters from the URL:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

Parameters are:
1. Stored in localStorage
2. Included in form submissions
3. Logged to console (replace with your analytics endpoint)

### Example URL:
```
https://yoursite.com/?utm_source=qr_code&utm_campaign=spring_2024&utm_medium=print
```

## 📄 Portfolio PDF

Place your company portfolio PDF at:
```
public/Diligence-Technologies-Portfolio.pdf
```

All download buttons will automatically link to this file.

## 🔧 Customization

### Update Content
Edit `src/data/content.ts` to modify all text content, contact information, and services.

### Update Colors
Edit `tailwind.config.js` to change brand colors.

### Add/Remove Sections
Modify `src/App.tsx` to add or remove page sections.

## 📈 Performance Optimizations

- ✅ Mobile-first responsive design
- ✅ Lazy loading with Framer Motion viewport detection
- ✅ Optimized bundle size (~133KB gzipped)
- ✅ Minimal dependencies
- ✅ CSS purging with Tailwind
- ✅ Fast initial load time

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web server
```

## 📞 Contact Information

Update contact details in `src/data/content.ts`:
- Phone
- Email
- WhatsApp
- LinkedIn
- Address

## 🐛 Troubleshooting

### Build Issues
If you encounter peer dependency issues:
```bash
npm install --legacy-peer-deps
```

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Cache
```bash
rm -rf node_modules dist .vite
npm install --legacy-peer-deps
npm run dev
```

## 📝 License

© 2025 Diligence Technologies PLC. All rights reserved.

## 🙏 Support

For technical support or questions about the landing page, contact the development team.

---

**Built with ❤️ for Diligence Technologies PLC**

<- Updated seed data with new user entries and tiny non-functional contribution 01 -->

<- Updated seed data with new user entries and tiny non-functional contribution 02 -->

<- Updated seed data with new user entries and tiny non-functional contribution 03 -->

<- Updated seed data with new user entries and tiny non-functional contribution 04 -->

<- Updated seed data with new user entries and tiny non-functional contribution 05 -->

<- Updated seed data with new user entries and tiny non-functional contribution 06 -->

<- Updated seed data with new user entries and tiny non-functional contribution 07 -->

<- Updated seed data with new user entries and tiny non-functional contribution 08 -->

<- Updated seed data with new user entries and tiny non-functional contribution 09 -->

<- Updated seed data with new user entries and tiny non-functional contribution 10 -->

<- Updated seed data with new user entries and tiny non-functional contribution 11 -->

<- Updated seed data with new user entries and tiny non-functional contribution 12 -->

<- Updated seed data with new user entries and tiny non-functional contribution 13 -->

<- Updated seed data with new user entries and tiny non-functional contribution 14 -->

<- Updated seed data with new user entries and tiny non-functional contribution 15 -->

<- Updated seed data with new user entries and tiny non-functional contribution 16 -->

<- Updated seed data with new user entries and tiny non-functional contribution 17 -->

<- Updated seed data with new user entries and tiny non-functional contribution 18 -->

<- Updated seed data with new user entries and tiny non-functional contribution 19 -->

<- Updated seed data with new user entries and tiny non-functional contribution 20 -->

<- Updated seed data with new user entries and tiny non-functional contribution 21 -->
