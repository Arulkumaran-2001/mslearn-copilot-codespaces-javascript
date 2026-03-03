# 🚀 Arulkumaran Rajaram - Professional Portfolio

A modern, responsive, and interactive portfolio website built with React, Tailwind CSS, and Framer Motion. Showcasing 3+ years of experience in frontend development, React, and Shopify customization.

## ✨ Features

### 🎨 Design
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark/Light Mode** - Theme toggle with persistent storage
- **Smooth Animations** - Framer Motion animations for engaging interactions
- **Modern UI** - Clean, professional design with gradient accents
- **Accessibility** - WCAG 2.1 compliant, semantic HTML

### 📄 Pages
- **Home** - Hero section, features showcase, statistics, CTA
- **About** - Professional summary, technical strengths, journey timeline, CSS architecture expertise
- **Projects** - Featured projects with tech stacks, live demos, and source code links
- **Skills** - Categorized skills, proficiency levels, specializations
- **Contact** - Contact form with validation, social links, FAQs

### 🛠️ Components
- **Navbar** - Sticky navigation with mobile menu and theme toggle
- **Footer** - Social links and copyright information
- **ProjectCard** - Interactive project showcase with hover effects
- **SkillCard** - Skill category cards with animations

### ⚡ Performance
- Optimized bundle size
- Fast initial load time
- Smooth page transitions
- Lazy component loading

## 📋 Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Parcel
- **Package Manager:** npm

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:1234`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── ProjectCard.jsx     # Project card component
│   │   └── SkillCard.jsx       # Skill card component
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── About.jsx           # About page
│   │   ├── Projects.jsx        # Projects page
│   │   ├── Skills.jsx          # Skills page
│   │   └── Contact.jsx         # Contact page
│   ├── App.jsx                 # Main app component
│   ├── styles.css              # Global styles
│   ├── index.html              # HTML entry point
│   └── index.js                # React entry point
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎯 Key Features Explained

### Dark Mode Toggle
- Automatically detects system preference
- Persists user selection in localStorage
- Smooth transitions between themes
- Custom Tailwind CSS dark mode classes

### Responsive Navigation
- Sticky header that stays visible while scrolling
- Mobile hamburger menu
- Smooth active link indicators
- Theme toggle button

### Smooth Animations
- Page entry animations
- Scroll reveal animations
- Button hover effects
- Interactive card animations

### Contact Form
- Email validation
- Required field validation
- Success message feedback
- Accessible form controls

### SEO Optimization
- Semantic HTML structure
- Descriptive page titles
- Meta descriptions
- Open Graph tags
- Structured data

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. Follow the prompts to connect your account and deploy

Your site will be live in minutes! 🎉

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

### Deploy to GitHub Pages

```bash
npm run deploy
```

## ✏️ Customization

### Update Personal Information
1. Edit `src/pages/Home.jsx` - Hero section
2. Edit `src/pages/About.jsx` - Professional summary
3. Edit `src/pages/Projects.jsx` - Project list
4. Edit `src/pages/Skills.jsx` - Skills and expertise
5. Edit `src/pages/Contact.jsx` - Contact information

### Customize Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Change to your preferred color
  }
}
```

### Add New Projects
Edit the `projects` array in `src/pages/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/...',
  },
  // Add more projects
];
```

### Modify Skills
Edit the `skillCategories` array in `src/pages/Skills.jsx`

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Build with GitHub Pages URL
npm run build-gh

# Deploy to GitHub Pages
npm run deploy
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 What I Can Do

### Frontend Development
- React component architecture
- Modern JavaScript (ES6+)
- Responsive CSS and Tailwind
- Performance optimization
- SEO implementation

### E-commerce Specialization
- Shopify custom sections
- Liquid templating
- WordPress customization
- BigCommerce development
- Conversion rate optimization

### Code Quality
- Semantic HTML and accessibility
- BEM/ITCSS/SMACSS architecture
- Git version control
- Clean code practices
- Testing and debugging

## 📞 Contact

- **Email:** arulkumaran@example.com
- **LinkedIn:** [linkedin.com/in/arulkumaran](https://linkedin.com/in/arulkumaran)
- **GitHub:** [github.com/arulkumaran](https://github.com/arulkumaran)

## 📝 License

This project is licensed under the ISC License - feel free to use it as a template for your own portfolio!

## 🙏 Acknowledgments

- React for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Lucide React for beautiful icons
- Vercel for seamless deployment

---

**Built with ❤️ by Arulkumaran Rajaram**

*Last updated: March 2026*
