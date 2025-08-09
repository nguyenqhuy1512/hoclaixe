# HoclaixeAZ Website

A modern React web application for HoclaixeAZ, a leading driver training system in Binh Thuan province, Vietnam.

## Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Multi-page Application**: Home, Courses, Branches, About, and Contact pages
- **Interactive Components**: Contact forms, course selection, and branch information
- **Mobile Responsive**: Optimized for all device sizes
- **Vietnamese Language Support**: Full Vietnamese content and localization
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

### Home Page
- Hero section with company statistics
- Feature highlights
- Course overview
- Call-to-action sections

### Courses Page
- Detailed course information
- Pricing and duration
- Course categories (Basic and Upgrade)
- Interactive course selection

### Branches Page
- All 11 branch locations
- Contact information for each branch
- Interactive map integration
- Branch-specific contact details

### About Page
- Company history and timeline
- Mission and values
- Statistics and achievements
- Team information

### Contact Page
- Contact form with validation
- Multiple contact methods
- Interactive map
- Social media links

## Technology Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations
- **React Icons**: Icon library
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hoclaixeaz-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   └── *.css           # Component styles
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Courses.js      # Courses page
│   ├── Branches.js     # Branches page
│   ├── About.js        # About page
│   ├── Contact.js      # Contact page
│   └── *.css           # Page styles
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Touch-friendly interactions

### Performance
- Optimized images and assets
- Lazy loading for components
- Efficient CSS with CSS variables
- Minimal bundle size

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### SEO
- Meta tags for each page
- Structured data
- Clean URLs
- Fast loading times

## Customization

### Colors
The color scheme can be modified in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #f59e0b;
  --accent-color: #10b981;
  /* ... other colors */
}
```

### Content
All content is stored in the component files and can be easily modified:
- Course information in `src/pages/Courses.js`
- Branch details in `src/pages/Branches.js`
- Contact information in `src/pages/Contact.js`

### Styling
- Global styles in `src/index.css`
- Component-specific styles in separate `.css` files
- CSS variables for consistent theming

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Other Platforms
The build folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3
- Firebase Hosting
- Surge.sh

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@hoclaixeaz.vn
- Phone: 0974.513.516
- Website: https://hoclaixeaz.vn

---

**HoclaixeAZ** - Hệ thống đào tạo lái xe hàng đầu Bình Thuận 