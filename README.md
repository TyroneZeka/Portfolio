# AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, designed to showcase AI engineering and deep learning projects.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive layout
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **About Section**: Professional experience, education, and skills
- **Contact Form**: Interactive contact form with multiple contact methods
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Static site generation for optimal loading speeds
- **Mobile-First**: Fully responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Icons**: Heroicons (inline SVG)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation bar
│   └── Footer.tsx         # Site footer
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared interfaces
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### 1. Personal Information

Update the following files with your information:

- `src/app/page.tsx` - Homepage hero section and featured projects
- `src/app/about/page.tsx` - Experience, education, and skills
- `src/app/contact/page.tsx` - Contact methods and availability
- `src/components/Footer.tsx` - Social links and contact info

### 2. Projects

Edit the `projects` array in `src/app/projects/page.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Title',
    description: 'Brief description',
    longDescription: 'Detailed description',
    technologies: ['PyTorch', 'Python', 'AWS'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-link.com',
    category: 'Deep Learning',
    featured: true,
  },
  // Add more projects...
];
```

### 3. Styling

The project uses Tailwind CSS. You can customize:

- Colors: Modify the color classes (e.g., `bg-blue-600`, `text-blue-600`)
- Layout: Adjust spacing, grid layouts, and responsive breakpoints
- Typography: Change font sizes and weights

### 4. SEO and Metadata

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | AI Engineer Portfolio",
  description: "Your custom description",
};
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to Pages → Source → GitHub Actions
4. The workflow will automatically deploy on pushes to `main`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory

3. Deploy the `out` directory to any static hosting service

### Repository Configuration

For GitHub Pages deployment, ensure:

1. Repository is public (or you have GitHub Pro for private repos)
2. Pages is enabled in repository settings
3. Source is set to "GitHub Actions"

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with introduction
- Featured technologies
- Project previews
- Call-to-action sections

### Projects (`/projects`)
- Filterable project gallery
- Featured projects section
- Category-based filtering
- Project details with tech stacks

### About (`/about`)
- Professional experience timeline
- Educational background
- Technical skills breakdown
- Key achievements
- Personal philosophy

### Contact (`/contact`)
- Interactive contact form
- Multiple contact methods
- Availability status
- Service offerings

## 🎨 Design Features

- **Gradient Backgrounds**: Visually appealing project cards
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Loading States**: Form submission feedback
- **Success Messages**: User feedback for form submissions

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance

- **Static Generation**: All pages are pre-rendered at build time
- **Optimized Images**: Next.js image optimization (disabled for static export)
- **Minimal JavaScript**: Only necessary JS is loaded
- **Fast Loading**: Optimized bundle sizes and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

Built with ❤️ using Next.js and TypeScript
