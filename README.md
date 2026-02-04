# OZ LAB Website

A modern, elegant website for OZ LAB (Opportunity Zone LAB), a university startup club built with React and Vite.

## 🚀 Features

- **Modern Design**: Dreamy yet sophisticated interface with cool neutral color palette
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessible**: Semantic HTML and ARIA labels for better accessibility

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ozlab-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

1. Update `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/',
```

2. Update `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Team.jsx
│   │   ├── Timeline.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── team.js
│   │   └── achievements.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'bg-primary': '#D8D8D8',
  'bg-secondary': '#ECECEC',
  'text-primary': '#B8A8D6',
  'text-dark': '#3A3A3A',
  'accent': '#9B8AB8',
  'highlight': '#A8B8C8',
}
```

### Content

Update the data files in `src/data/`:
- `projects.js` - Project information
- `team.js` - Team member details
- `achievements.js` - Timeline achievements

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
