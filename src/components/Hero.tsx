const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/fbe88553-f9bb-40fe-964b-31940310c398/IMG_5509.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
      <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-4xl">
        <h1 className="text-primary text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
          A few projects I wanted to share.
        </h1>
        <a
          href="#projectlist"
          className="inline-block border border-primary text-primary px-8 py-3 text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Check it out
        </a>
      </div>
    </section>
  );
};

export default Hero;
