import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  Users,
  School,
  Calendar,
  Star,
  ChevronLeft,
  Quote,
  Globe,
  Award,
  BookOpen,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "7,500+", label: "Members" },
    { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Countries" },
    { icon: <School className="w-8 h-8" />, value: "100+", label: "Colleges" },
    {
      icon: <Award className="w-8 h-8" />,
      value: "95%",
      label: "Success Rate",
    },
  ];

  const programs = [
    {
      title: "Leadership Excellence",
      duration: "12 Weeks",
      level: "Advanced",
      description:
        "Master ethical leadership principles and practical management skills",
      features: [
        "Weekly Live Sessions",
        "1-on-1 Mentoring",
        "Real Project Work",
      ],
    },
    {
      title: "Community Building",
      duration: "8 Weeks",
      level: "Intermediate",
      description: "Learn to create and nurture meaningful communities",
      features: ["Group Activities", "Case Studies", "Networking Events"],
    },
    {
      title: "Personal Growth",
      duration: "6 Weeks",
      level: "Beginner",
      description: "Develop essential life skills and emotional intelligence",
      features: ["Self-paced Learning", "Weekly Workshops", "Personal Coach"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      image: "/api/placeholder/80/80",
      text: "The Leadership Excellence program transformed my approach to community building. The practical skills and mentoring were invaluable.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Student Ambassador",
      image: "/api/placeholder/80/80",
      text: "Joining Ethicraft was the best decision I made this year. The personal growth program helped me discover my true potential.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "NGO Director",
      image: "/api/placeholder/80/80",
      text: "The impact of this program extends far beyond personal development. It's creating a network of ethical leaders worldwide.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Remaining Content */}
      {/* All other sections would be here as written. */}
    </div>
  );
};

export default HomePage;
