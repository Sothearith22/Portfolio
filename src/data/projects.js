import bookingSystem from "../assets/images/BookingSystem.png";
import StudentManagement from "../assets/images/StudentManagement.png";
import ElectronicStore from "../assets/images/ElectronicStore.png"
import TEN_Elenven from "../assets/images/TEN11.png"
import HourseRent from '../assets/images/Hourse.png'
export const projects = [

  {
    id: 1,
    title: "Student Management System (SMS)",
    description: "A comprehensive Full-Stack ERP solution for educational institutions. This platform features a secure Role-Based Access Control (RBAC) system allowing Admins, Teachers, and Students to manage academic records, real-time attendance tracking, and automated reporting.",
    tech: ["React js", "Tailwind CSS", "Laravel API", "MySQL"],
    image: StudentManagement,
    github: "https://github.com/Sothearith22/System-Management-Student",
    demo: null,
  },
  {
    id: 2,
    title: "EcoStay: Hotel Booking System",
    description: "An end-to-end hospitality management platform featuring a real-time reservation engine. This application synchronizes room availability, dynamic pricing, and booking management between a customer-facing portal and a comprehensive internal administrative dashboard.",
    tech: ["Laravel", "React js", "PostgreSQL", "Tailwind CSS"],
    image: bookingSystem,
    github: "null",
    demo: null,
  },
  {
    id: 3,
    "title": "Electronic Store",
    "description": "At EIECTRNIC, we bridge the gap between high-end innovation and everyday accessibility. Whether you are a professional looking for the power of an Apple iPad Pro M4, a gamer seeking a high-refresh-rate laptop, we’ve curated a selection that prioritizes performance and style.",
    "tech": ["React js", "Tailwind CSS", "Vercel"],
    "image": ElectronicStore,
    "github": "https://github.com/Sothearith22/Electronic-Shop",
    "demo": "https://electronic-shop-one-iota.vercel.app",
  },
  {
    id: 4,
    title: "TEN11 Clone",
    description: "A high-fidelity digital storefront recreation of Cambodia's leading fashion brand. This project focuses on translating complex retail layouts into modular React components with a heavy emphasis on mobile-first responsiveness and UI performance.",
    tech: ["React.js", "Tailwind CSS", "Lucide React", "Vercel"],
    image: TEN_Elenven,
    github: "https://github.com/Sothearith22/Project_TEN11",
    demo: "https://project-ten-11.vercel.app",
  },
  {
    id: 5,
    "title": "Hourse Rent",
    "description": "A dynamic property listing platform designed to simplify the house-hunting process. Featuring a sleek 'Find Your Place' hero interface, the application allows users to browse new listings with real-time price displays and multi-image property galleries.",
    "tech": ["React js", "Tailwind CSS"],
    "image": HourseRent,
    "github": "https://github.com/Sothearith22/house_rent",
    "demo": "https://house-rent-iota.vercel.app"
  }

];
