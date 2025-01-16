import HeroCarousel from "./HeroCarousel";

export default function HeroSection({ content }) {
  return (
    <section className="relative">
      <HeroCarousel />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-white text-4xl font-bold mb-4">{content.title}</h2>
        <p className="text-white text-lg mb-6">{content.subtitle}</p>

      </div>
    </section>
  );
}


