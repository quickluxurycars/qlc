'use client';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full pt-4">
      {/* Atmospheric Ambient Background Light Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="pointer-events-none absolute top-[900px] -right-48 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[160px]"></div>
        <div className="pointer-events-none absolute top-[2000px] -left-40 w-[650px] h-[650px] bg-secondary/5 rounded-full blur-[170px]"></div>

        {/* HERO SECTION */}
        <section className="relative max-w-[1440px] mx-auto px-4 md:px-8 pt-8 pb-12">
          {/* Top Eyebrow Badge & Quick Value Indicators */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-carbon/90 shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-status-available animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-gold-light">Delhi NCR Premier Supercar & Flagship Charter</span>
            </div>
            <div className="flex items-center gap-6 text-text-muted text-sm">
              <div className="flex items-center gap-1 uppercase tracking-wider text-on-surface-variant">
                <span className="text-primary text-lg">✓</span>
                <span>Chauffeur & Self-Drive</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 uppercase tracking-wider text-on-surface-variant">
                <span className="text-primary text-lg">⚡</span>
                <span>Doorstep White-Glove Handover</span>
              </div>
              <div className="hidden md:flex items-center gap-1 uppercase tracking-wider text-on-surface-variant">
                <span className="text-primary text-lg">★</span>
                <span>Pristine Inspected Fleet</span>
              </div>
            </div>
          </div>

          {/* Main Headline & Subtitle Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-block">
                <span className="text-lg uppercase tracking-[0.25em] text-gold-burnished">Quick Luxury Cars Fleet Atelier</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.08] font-display">
                Drive the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold-light to-secondary italic">extraordinary.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Link href="/collection" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container uppercase tracking-wider shadow-[0_0_28px_rgba(212,175,55,0.35)] hover:bg-primary hover:text-on-primary transition-all duration-300 font-semibold">
                <span>Explore Our Collection</span>
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Interactive Hero Showcase Stage */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-surface-carbon shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
            {/* Main Stage Vehicle Visual */}
            <div className="relative w-full h-[520px] md:h-[620px] overflow-hidden group">
              <Carousel
                transition={{ duration: 2 }}
                loop={true}
                autoplay={true}
                autoplayDelay={4000}
                className="h-full"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Image
                  src="/images/cars/audi_a3/1.jpeg"
                  alt="Audi Cabriolet"
                  width={1440}
                  height={620}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Image
                  src="/images/cars/hummer/1.jpeg"
                  alt="Hummer"
                  width={1440}
                  height={620}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Image
                  src="/images/cars/mercedes_c300/1.jpeg"
                  alt="Mercedes C300"
                  width={1440}
                  height={620}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Carousel>

              {/* Subtle Gradient Lighting Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-obsidian via-surface-obsidian/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-surface-obsidian/80 via-transparent to-surface-obsidian/40"></div>

              {/* Stage Badge Top Left */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-4 py-1 rounded-full glass text-primary text-xs uppercase tracking-widest shadow-md">
                  Current Spotlight
                </span>
                <span className="px-4 py-1 rounded-full glass text-status-available text-xs uppercase tracking-widest flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-available"></span> Available Today
                </span>
              </div>

              {/* Bottom Vehicle Details Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div className="flex flex-col gap-1 max-w-lg">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-burnished">Curated Luxury Fleet</span>
                  <h2 className="text-2xl md:text-3xl text-text-primary leading-tight font-headline-lg">Experience the Extraordinary</h2>
                  <p className="text-sm text-text-muted">From iconic supercars to elegant sedans and powerful SUVs, we deliver unmatched comfort, style, and performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}