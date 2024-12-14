# Avery Interior

A modern, responsive interior design website built with React.js, React-Bootstrap, and various libraries for enhanced functionality. Explore various design solutions, animations, and smooth user interactions.

## 🌟 Features
- **Interior Design Showcase**: Display various interior design projects and concepts.
- **Smooth Animations**: Interactive animations powered by Animate.css and AOS.
- **Contact Form**: Get in touch through an email integration using EmailJS.
- **Responsive Design**: Beautiful UI that works seamlessly across all devices.
- **Toast Notifications**: Display real-time alerts with React Toastify.

## 🛠️ Technology Stack
- **Frontend Framework**: React.js
- **Styling**: 
  - React-Bootstrap
  - Animate.css
  - AOS (Animate on Scroll)
- **Animation**: React Animate on Scroll
- **Email Integration**: EmailJS for contact forms
- **Routing**: React Router DOM
- **State Management**: Not explicitly used, but React's local state is utilized where necessary.
- **Build Tool**: React Scripts

## 📁 Project Structure
```
├── public/                   # Public assets (images, icons, etc.)
├── src/                      # Source files
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx        # Website header component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── ProjectCard.jsx   # Component to showcase individual design projects
│   │   └── ContactForm.jsx   # Contact form component
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point for the app
│   └── styles/               # Styling files (CSS/SCSS)
├── .gitignore                # Files and folders to ignore in git
├── package.json              # Project dependencies and scripts
└── README.md                 # Project overview and instructions
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/avery-interior.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## 💻 Development

### Code Organization
- **Components**: Small, reusable UI components for modularity.
- **Styles**: Global styles and component-specific styling.
- **App.js**: The main entry point for the app where routes and components are organized.

### Best Practices
- **Modular component architecture**: Breaking the app into small, reusable components.
- **Responsive design**: Ensuring the app looks good on all devices.
- **State management**: Leveraging React’s state management for smooth user interactions.

## 🔑 Key Libraries & Tools
- **React-Bootstrap**: For responsive layouts and design elements.
- **AOS (Animate On Scroll)**: For beautiful scroll-based animations.
- **React Toastify**: For easy-to-implement toast notifications.
- **EmailJS**: To send emails directly from the contact form.

## 🎨 UI/UX Features
- **Interactive Animations**: Smooth transitions and scroll-based animations.
- **Responsive Grid Layout**: A flexible, mobile-first design.
- **Toast Notifications**: Alert users with clear feedback.
- **Contact Form**: Integrates directly with EmailJS for seamless contact.

## 📱 Responsive Design
The app is fully responsive and works great on:
- **Desktop computers**
- **Tablets**
- **Mobile phones**

## 🛠️ Future Improvements
- **Advanced Filtering**: Allow users to filter interior design projects based on various categories.
- **User Authentication**: Add a login and profile feature for clients.
- **Project Comments**: Enable users to leave feedback on different designs.
- **Design Recommendations**: Suggest related designs based on user interest.
- **Social Sharing**: Allow users to share their favorite designs on social media.

## 🔗 Acknowledgements
- **React-Bootstrap** for the UI components.
- **AOS** for the scroll-based animation library.
- **EmailJS** for email functionality.
- **React-Scripts** for project setup and build management.
