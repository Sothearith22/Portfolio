import bookingSystem from "../assets/images/BookingSystem.png";
import StudentManagement from "../assets/images/StudentManagement.png";

export const projects = [
  {
    id: 1,
    title: "Student Management System",
    description: "A Student Management System is a web-based application that helps educational institutions manage student records, classes, attendance, and users securely and efficiently using role-based access control.",
    tech: ["React", "Laravel", "MySQL"],
    image: StudentManagement,
    github: "https://github.com/Sothearith22/student-system",
    demo: "",
  },
  {
    id: 2,
    title: "Hotel Booking System",
    description: "A Hotel Booking System is a software application that allows customers to search, book, and manage hotel room reservations online, while enabling hotel staff to manage rooms, prices, and bookings efficiently.",
    tech: ["Laravel", "Reactjs", "PostgreSQL"],
    image: bookingSystem,
    github: "https://github.com/Sothearith/booking-system",
    demo: "",
  },
];
