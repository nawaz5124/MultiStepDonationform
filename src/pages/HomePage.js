// HomePage.js
// This file is the main layout for the home page, integrating all sections.

import Header from "../components/layout/Header"; // Navigation bar
import HeroSection from "../components/sections/HeroSection"; // Hero Section
import MissionSection from "../components/sections/MissionSection"; // Mission Section
import FeaturedProjects from "../components/sections/FeaturedProjects"; // Projects Section
import Footer from "../components/layout/Footer"; // Footer
import homeContent from "../content/home/home.json"; // Dynamic content from JSON

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Section - Displays the welcome message and CTAs */}
      <HeroSection content={homeContent.hero} />

      {/* Mission Section - Displays the organization's mission */}
      <MissionSection content={homeContent.mission} />

      {/* Featured Projects Section - Highlights important projects */}
      <FeaturedProjects projects={homeContent.featured_projects} />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}