# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion. This portfolio showcases your skills, projects, and experience in a beautiful and interactive way.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- 🎯 Interactive project filtering
- 📧 Contact form
- 🌙 Beautiful gradients and hover effects
- ⚡ Fast loading with Vite
- 🔍 SEO optimized

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Customization Guide

### 1. Personal Information

Update your personal information in the following components:

#### Hero Section (`src/components/Hero.jsx`)

- Change "Your Name" to your actual name
- Update the subtitle and description
- Modify social media links

#### About Section (`src/components/About.jsx`)

- Update the personal description
- Modify experience and education details
- Change statistics (years of experience, projects completed, etc.)

#### Contact Section (`src/components/Contact.jsx`)

- Update contact information (email, phone, location)
- Modify social media links

### 2. Skills

Edit the skills in `src/components/Skills.jsx`:

- Modify skill categories and their icons
- Update skill names and proficiency levels (0-100%)
- Add or remove skills as needed

### 3. Projects

Update projects in `src/components/Projects.jsx`:

- Replace placeholder projects with your actual projects
- Update project images, descriptions, and technologies
- Modify live demo and GitHub links
- Add or remove projects as needed

### 4. Styling

The main styling is in `src/App.css`. You can customize:

- Color scheme (search for `#667eea` and `#764ba2`)
- Fonts (currently using Inter from Google Fonts)
- Spacing and layout
- Animations and transitions

### 5. Meta Information

Update the HTML meta tags in `index.html`:

- Page title
- Meta description
- Open Graph tags for social media sharing
- Author information

### 6. Images and Assets

- Replace placeholder images with your actual project screenshots
- Add your profile picture (replace the emoji in the hero section)
- Update favicon and other assets in the `public` folder

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Skills.jsx         # Skills section
│   ├── Projects.jsx       # Projects section
│   ├── Contact.jsx        # Contact section
│   └── Footer.jsx         # Footer component
├── App.jsx                # Main app component
├── App.css               # Main styles
├── index.css             # Global styles
└── main.jsx              # Entry point
```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## Customization Tips

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add corresponding styles in `App.css`
4. Update navigation if needed

### Changing Colors

The main color scheme uses:

- Primary: `#667eea` (blue)
- Secondary: `#764ba2` (purple)

Search for these colors in `App.css` and replace them with your preferred colors.

### Adding Animations

The portfolio uses Framer Motion for animations. You can:

- Modify existing animations in components
- Add new animations using Framer Motion's API
- Adjust animation timing and easing

### SEO Optimization

- Update meta tags in `index.html`
- Add structured data for better search results
- Optimize images and use descriptive alt text
- Ensure proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The portfolio is optimized for performance with:

- Lazy loading of components
- Optimized images
- Minimal bundle size
- Fast loading times

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🚀**
