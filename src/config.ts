export const siteConfig = {
  name: "Darlene Zhang",
  title: "Data Science & Cognitive Science Student @ UC Berkeley",
  description: "Portfolio website of Darlene Zhang",
  accentColor: "#86dd9cff",
  social: {
    email: "darlenezhang@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/darlenezhang/",
    github: "https://github.com/darlene-zhang",
  },

  aboutMe:
    "I'm a Data Science and Cognitive Science student at UC Berkeley interested in machine learning, artificial intelligence, and full-stack software development. I enjoy building systems that combine data, algorithms, and user experience—from machine learning models for image and text classification to interactive software applications. My experience includes developing full-stack mobile features, conducting data analysis on large datasets, and implementing deep learning models using modern ML frameworks.",

  skills: [
    "Python",
    "Java",
    "JavaScript",
    "R",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "React",
    "Node.js",
    "Firebase",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Data Analysis",
    "REST APIs",
    "Git"
  ],

  projects: [
    {
      name: "Vision Transformer & Masked Autoencoder for Image Classification",
      description:
        "Implemented Vision Transformer (ViT) and Masked Autoencoder models on CIFAR-10 using PyTorch and TensorFlow. Applied self-supervised learning, attention mechanisms, and GPU acceleration to train models achieving ~70% accuracy.",
      link: "",
      skills: ["Python", "PyTorch", "TensorFlow", "Deep Learning"],
    },
    {
      name: "Email Spam Classification",
      description:
        "Built a logistic regression classifier for email spam detection with feature engineering and word correlation analysis. Achieved 92% accuracy with 90% precision and 88% recall using scikit-learn and NumPy.",
      link: "",
      skills: ["Python", "scikit-learn", "NLP", "Machine Learning"],
    },
    {
      name: "Portal Prowler",
      description:
        "Developed a procedurally generated 2D game world using advanced data structures and algorithms including A*, MST, and disjoint sets. Implemented serialization, event-driven programming, and rendering using Java.",
      link: "",
      skills: ["Java", "Algorithms", "Game Development"],
    },
  ],

  experience: [
    {
      company: "A Round Entertainment",
      title: "Software Engineering Intern",
      dateRange: "Jun 2024 - Oct 2024",
      bullets: [
        "Developed and maintained Joopi, a dating app that onboarded 500+ users in beta while improving matchmaking accuracy.",
        "Built full-stack mobile features using JavaScript, React Native, Node.js, and Firebase.",
        "Improved UX navigation and reduced user drop-offs by ~20% through interface and workflow improvements.",
      ],
    },
    {
      company: "Women in Computing & Data Science (WiCDs)",
      title: "Projects & Machine Learning Committee",
      dateRange: "Sep 2024 - Present",
      bullets: [
        "Performed exploratory data analysis and statistical modeling on 20k+ rows of corporate and clinical data.",
        "Used Python, Pandas, and NumPy for data cleaning, preprocessing, and analysis.",
        "Collaborated with JelikaLite to generate machine learning insights for neuromodulation research related to autism spectrum disorder.",
      ],
    },
  ],

  education: [
    {
      school: "University of California, Berkeley",
      degree: "BA in Data Science & Cognitive Science",
      dateRange: "2022 - 2026",
      achievements: [
        "Relevant coursework: Data Structures, Artificial Intelligence, Data Engineering, Deep Neural Networks",
        "Additional coursework: NLP, Machine Learning, Computational Models of Cognition",
      ],
    },
  ],
};

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://darlene-zhang.github.io',
  base: '/devportfolio/',
});