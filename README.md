# Sakkenix Cloud - Linux Consulting Website

A modern, responsive landing page for Linux consulting services built with Astro.js. Optimized for performance and ready for Vercel deployment.

## 🚀 Features

- **⚡ Astro.js**: Fast static site generation with zero JavaScript by default
- **🎨 Modern Design**: Clean, professional design with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🔧 Interactive Elements**: Terminal animation, form validation, smooth scrolling
- **🚀 Vercel Ready**: Optimized configuration for seamless deployment
- **♿ Accessible**: Follows web accessibility guidelines
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML

## 🛠 Tech Stack

- **Astro.js**: Static site generator
- **CSS**: Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript**: Vanilla JS for interactivity
- **Google Fonts**: Inter font family
- **Vercel**: Deployment platform

## 📁 Project Structure

```
sakkenix.cloud/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Terminal.astro
│   │   ├── ServiceCard.astro
│   │   ├── ContactForm.astro
│   │   └── Footer.astro
│   ├── layouts/             # Layout components
│   │   └── Layout.astro
│   └── pages/               # Astro pages
│       └── index.astro
├── public/                  # Static assets
│   └── favicon.svg
├── package.json
├── astro.config.mjs
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd sakkenix.cloud
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Start development server**:
   ```bash
   yarn dev
   ```

4. **Open your browser** and visit `http://localhost:4321`

### Build for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## 🚀 Deployment

Currently the site is deployed with vercel.

### Alternative: GitHub + Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Astro.js and deploy

### Manual Deployment

Since this is a static site, you can deploy it anywhere:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web server

## 🎨 Customization

### Colors and Branding

Edit the CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --accent-color: #06b6d4;     /* Accent color */
  --text-primary: #1e293b;     /* Main text color */
  /* ... more variables */
}
```

### Content

- **Update text**: Edit content in `src/pages/index.astro`
- **Change services**: Modify the services array in the index page
- **Update contact info**: Change email and contact details
- **Customize terminal**: Edit commands in `src/components/Terminal.astro`

### Form Handling

The contact form currently shows a success message. To handle form submissions:

1. **Use a form service**:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://docs.netlify.com/forms/setup/)
   - [Vercel Functions](https://vercel.com/docs/functions)

2. **Or create an API endpoint** in your preferred backend

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ⚡ Performance

This Astro.js site is optimized for performance:

- ✅ **Zero JavaScript by default** (only loads JS when needed)
- ✅ **Static generation** for fast loading
- ✅ **Optimized images** (SVG icons)
- ✅ **Efficient CSS** with modern techniques
- ✅ **Semantic HTML** for better SEO

## 🔧 Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn astro` - Run Astro CLI commands

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import the Layout component
3. Add your content

### Adding New Components

1. Create a new `.astro` file in `src/components/`
2. Export any props using TypeScript interfaces
3. Import and use in your pages

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## ♿ Accessibility

The site includes:

- ✅ **Semantic HTML** structure
- ✅ **Proper heading hierarchy**
- ✅ **Alt text for images**
- ✅ **Keyboard navigation** support
- ✅ **Screen reader** friendly
- ✅ **High contrast** colors
- ✅ **Focus indicators**

## 🔍 SEO Features

- ✅ **Meta tags** for description and viewport
- ✅ **Semantic HTML** structure
- ✅ **Proper heading hierarchy**
- ✅ **Fast loading** times
- ✅ **Mobile-friendly** design
- ✅ **Open Graph** ready

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues:

1. **Check the documentation** above
2. **Review the code** comments
3. **Open an issue** on GitHub if you found a bug

---

**Built with ❤️ using Astro.js for the Linux community** 