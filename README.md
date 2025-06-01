# Akilesh Thuniki - DevOps Engineer Portfolio

A modern, responsive portfolio website showcasing my expertise as a Cloud Architect and DevOps Engineer.

## 🚀 Live Demo

[Visit Portfolio Website](https://akileshthuniki-portfolio.netlify.app/)

## ✨ Features

- **Responsive Design** - Works on all devices
- **Professional Sections** - About, Experience, Skills, Projects, Testimonials, Contact
- **Interactive Elements** - Smooth animations and hover effects
- **Working Contact Form** - Integrated with EmailJS
- **Modern UI/UX** - Clean, professional design

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling
- **EmailJS** - Contact form functionality
- **Vercel** - Hosting and deployment

## 📁 Key Files

```
portfolio-website/
├── app/
│   ├── page.tsx             # Main portfolio page
│   └── layout.tsx           # Root layout
├── public/
│   ├── images/              # Portfolio images
│   └── resume.pdf           # Resume file
└── package.json             # Dependencies
```

## 📧 Contact Form Setup

To enable the contact form:

1. Create an [EmailJS](https://www.emailjs.com/) account
2. Set up your email service and template
3. Update the EmailJS credentials in the code:

```javascript
const serviceId = "your_service_id"
const templateId = "your_template_id" 
const publicKey = "your_public_key"
```

## 🎨 Customization

Update personal information in `app/page.tsx`:
- Contact details
- Experience and education
- Skills and certifications
- Project showcases
- Testimonials

Replace images in `public/images/` folder with your own.

## 🚀 Deployment

Deployed on [Vercel](https://vercel.com/) for optimal performance and reliability.

Built with using Next.js and Tailwind CSS
