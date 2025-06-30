# 🔐 Password Generator

A beautiful, secure, and user-friendly password generator built with React and Vite. Generate strong passwords with customizable options and real-time strength analysis.

## 🌟 Live Demo

**[Try it live!](https://nikhilsisodia-itis.github.io/password-generator/)**

## ✨ Features

### 🎛️ **Customizable Password Generation**
- **Length Control**: Adjustable from 4 to 50 characters with smooth slider
- **Character Types**: 
  - ✅ Uppercase letters (A-Z)
  - ✅ Lowercase letters (a-z) 
  - ✅ Numbers (0-9)
  - ✅ Special symbols (!@#$%^&*)

### 🎯 **Password Strength Analysis**
- **Real-time strength meter** with 5 levels (Weak → Very Strong)
- **Color-coded indicators** for instant visual feedback
- **Security score** out of 100 points
- **Smart improvement tips** for better password security

### 🎨 **Beautiful User Interface**
- **Royal purple theme** with elegant design
- **Dark/Light mode toggle** with smooth transitions
- **Fully responsive** - works perfectly on desktop, tablet, and mobile
- **Modern UI components** with hover effects and animations

### 🚀 **User Experience**
- **One-click copy** to clipboard functionality
- **Instant feedback** with visual confirmations
- **Smart validation** prevents generating with no options selected
- **Smooth animations** and intuitive interactions

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: CSS Custom Properties (CSS Variables)
- **Deployment**: GitHub Pages
- **Development**: ESLint for code quality

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhilsisodia-itis/password-generator.git
   cd password-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run deploy` | Deploy to GitHub Pages |

## 🎨 Design Features

### Color Scheme
- **Primary**: Royal Purple (`#6b46c1`) with elegant hover states
- **Success**: Green (`#28a745`) for positive actions
- **Theme Support**: Seamless dark/light mode switching

### Responsive Design
- **Mobile-first** approach
- **Flexible grid** layout for checkboxes
- **Adaptive typography** for all screen sizes
- **Touch-friendly** controls

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── Header.jsx              # App header with theme toggle
│   ├── PasswordGenerator.jsx   # Main password generation form
│   ├── PasswordDisplay.jsx     # Password output and copy functionality
│   └── PasswordStrength.jsx    # Password strength analysis
├── index.css                   # Global styles and theme variables
├── App.jsx                     # Main app component
└── main.jsx                    # App entry point
```

### Key Components

- **PasswordGenerator**: Core password generation logic with customizable options
- **PasswordStrength**: Advanced algorithm analyzing password security
- **PasswordDisplay**: User-friendly output with copy functionality
- **Header**: Clean navigation with theme switching

## 🔐 Security Features

### Password Strength Algorithm
The strength analysis evaluates:
- **Length**: Minimum 8 characters recommended
- **Character Variety**: Uppercase, lowercase, numbers, symbols
- **Complexity Score**: Weighted scoring system
- **Security Tips**: Personalized improvement suggestions

### Best Practices
- Cryptographically secure random generation
- No password storage or logging
- Client-side processing only
- HTTPS deployment

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using the `gh-pages` package.

### Deploy Updates
```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push

# Deploy to live site
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UI design inspired by modern web applications
- Built with React and Vite for optimal performance
- Deployed with GitHub Pages for global accessibility

---

**[🔗 Live Demo](https://nikhilsisodia-itis.github.io/password-generator/)** | **[📧 Report Bug](https://github.com/nikhilsisodia-itis/password-generator/issues)** | **[💡 Request Feature](https://github.com/nikhilsisodia-itis/password-generator/issues)**
