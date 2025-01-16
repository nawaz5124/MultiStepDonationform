import Header from "./Header"; // Header component
import Footer from "./Footer"; // Footer component

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <Header />
      {/* Main Content */}
      <main className="flex-1">{children}</main>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}