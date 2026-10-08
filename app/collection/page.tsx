'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { Carousel } from '@material-tailwind/react';
import { cars } from '../data/cars';

export default function Collection() {
  const [filters, setFilters] = useState({
    brand: [] as string[],
    type: [] as string[],
    seating: [] as number[],
    color: [] as string[],
  });

  const [openFilters, setOpenFilters] = useState({
    brand: true,
    type: true,
    seating: true,
    color: true,
  });

  const toggleFilter = (filterName: keyof typeof openFilters) => {
    setOpenFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleFilterChange = (filterType: keyof typeof filters, value: string | number) => {
    setFilters(prev => {
      const currentFilter = prev[filterType] as (string | number)[];
      const valueExists = currentFilter.includes(value);

      return {
        ...prev,
        [filterType]: valueExists
          ? currentFilter.filter(v => v !== value)
          : [...currentFilter, value]
      };
    });
  };

  const filteredCars = cars.filter(car => {
    if (filters.brand.length > 0 && !filters.brand.includes(car.brand)) return false;
    if (filters.type.length > 0 && !filters.type.includes(car.type)) return false;
    if (filters.seating.length > 0 && !filters.seating.includes(car.seating)) return false;
    if (filters.color.length > 0 && !filters.color.includes(car.color)) return false;
    return true;
  });

  const brands = Array.from(new Set(cars.map(car => car.brand)));
  const types = Array.from(new Set(cars.map(car => car.type)));
  const seatings = Array.from(new Set(cars.map(car => car.seating))).sort((a, b) => a - b);
  const colors = Array.from(new Set(cars.map(car => car.color)));

  return (
    <div className="min-h-screen transition-colors pt-4">
      {/* Atmospheric Ambient Background Light Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="pointer-events-none absolute top-[900px] -right-48 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[160px]"></div>

        {/* Collection Header */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-sm uppercase tracking-[0.2em] text-gold-burnished">Curated Reserve</span>
              </div>
              <h1 className="text-4xl md:text-5xl text-text-primary font-headline-lg">
                World-class luxury cars curated for those who demand more.
              </h1>
              <p className="text-lg text-text-muted">
                Inspect each hand-selected chassis in our climate-conditioned Delhi hangar. Delivered impeccably sanitized, fully insured, and prepared for your arrival.
              </p>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 bg-surface-carbon p-1.5 rounded-full">
              <button
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all ${
                  filters.brand.length === 0 && filters.type.length === 0 && filters.seating.length === 0 && filters.color.length === 0
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-text-muted hover:text-text-primary'
                }`}
                onClick={() => setFilters({ brand: [], type: [], seating: [], color: [] })}
              >
                All Marquees
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                  filters.type.includes('Convertible') ? 'bg-primary-container text-on-primary-container' : 'text-text-muted hover:text-text-primary'
                }`}
                onClick={() => handleFilterChange('type', 'Convertible')}
              >
                Convertibles
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                  filters.type.includes('Sedan') ? 'bg-primary-container text-on-primary-container' : 'text-text-muted hover:text-text-primary'
                }`}
                onClick={() => handleFilterChange('type', 'Sedan')}
              >
                Sedans
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                  filters.type.includes('SUV') ? 'bg-primary-container text-on-primary-container' : 'text-text-muted hover:text-text-primary'
                }`}
                onClick={() => handleFilterChange('type', 'SUV')}
              >
                SUVs
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                  filters.type.includes('Luxury Sedan') ? 'bg-primary-container text-on-primary-container' : 'text-text-muted hover:text-text-primary'
                }`}
                onClick={() => handleFilterChange('type', 'Luxury Sedan')}
              >
                Luxury Sedans
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
              <div className="glass rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl font-headline-lg mb-6 text-text-primary">Filters</h2>

                {/* Car Brand Filter */}
                <div className="mb-6 border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFilter('brand')}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <span className="font-semibold text-text-primary">Car Brand</span>
                    {openFilters.brand ? <HiChevronUp className="text-gold-burnished" /> : <HiChevronDown className="text-gold-burnished" />}
                  </button>
                  {openFilters.brand && (
                    <div className="space-y-2">
                      {brands.map(brand => (
                        <label key={brand} className="flex items-center cursor-pointer hover:text-gold-burnished text-text-muted transition-colors">
                          <input
                            type="checkbox"
                            checked={filters.brand.includes(brand)}
                            onChange={() => handleFilterChange('brand', brand)}
                            className="mr-2 accent-[#C9A24D]"
                          />
                          {brand}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Car Type Filter */}
                <div className="mb-6 border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFilter('type')}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <span className="font-semibold text-text-primary">Car Type</span>
                    {openFilters.type ? <HiChevronUp className="text-gold-burnished" /> : <HiChevronDown className="text-gold-burnished" />}
                  </button>
                  {openFilters.type && (
                    <div className="space-y-2">
                      {types.map(type => (
                        <label key={type} className="flex items-center cursor-pointer hover:text-gold-burnished text-text-muted transition-colors">
                          <input
                            type="checkbox"
                            checked={filters.type.includes(type)}
                            onChange={() => handleFilterChange('type', type)}
                            className="mr-2 accent-[#C9A24D]"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Seating Capacity Filter */}
                <div className="mb-6 border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFilter('seating')}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <span className="font-semibold text-text-primary">Seating Capacity</span>
                    {openFilters.seating ? <HiChevronUp className="text-gold-burnished" /> : <HiChevronDown className="text-gold-burnished" />}
                  </button>
                  {openFilters.seating && (
                    <div className="space-y-2">
                      {seatings.map(seating => (
                        <label key={seating} className="flex items-center cursor-pointer hover:text-gold-burnished text-text-muted transition-colors">
                          <input
                            type="checkbox"
                            checked={filters.seating.includes(seating)}
                            onChange={() => handleFilterChange('seating', seating)}
                            className="mr-2 accent-[#C9A24D]"
                          />
                          {seating} Seats
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleFilter('color')}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <span className="font-semibold text-text-primary">Color</span>
                    {openFilters.color ? <HiChevronUp className="text-gold-burnished" /> : <HiChevronDown className="text-gold-burnished" />}
                  </button>
                  {openFilters.color && (
                    <div className="space-y-2">
                      {colors.map(color => (
                        <label key={color} className="flex items-center cursor-pointer hover:text-gold-burnished text-text-muted transition-colors">
                          <input
                            type="checkbox"
                            checked={filters.color.includes(color)}
                            onChange={() => handleFilterChange('color', color)}
                            className="mr-2 accent-[#C9A24D]"
                          />
                          {color}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Car Grid */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map(car => (
                  <div
                    key={car.id}
                    className="fleet-card flex flex-col rounded-2xl bg-surface-carbon hover:bg-surface-elevated transition-all duration-300 overflow-hidden shadow-xl group"
                  >
                    <div className="relative w-full h-64 overflow-hidden bg-surface-obsidian">
                      <Carousel
                        transition={{ duration: 2 }}
                        loop={true}
                        autoplay={true}
                        autoplayDelay={3000}
                        className="h-full"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {car.images.map((image, index) => (
                          <div key={index} className="relative h-64">
                            <Image
                              src={image}
                              alt={`${car.name} - Image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </Carousel>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1 rounded-full glass text-gold-light text-xs uppercase tracking-wider">
                          Self-Drive & Chauffeur
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-1 rounded-full glass text-status-available text-xs uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-status-available"></span> Available
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-between text-text-muted text-xs uppercase tracking-widest mb-1">
                          <span>{car.brand}</span>
                          <span className="text-gold-burnished">Delhi NCR Registered</span>
                        </div>
                        <h3 className="text-xl text-text-primary font-headline-sm">{car.name}</h3>
                        <p className="text-sm text-text-muted mt-1">{car.type} • {car.seating} Seats • {car.color}</p>
                      </div>

                      {/* Micro Telemetry Grid */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-surface-container-low text-center">
                        <div>
                          <span className="block text-xs text-text-muted uppercase">Seating</span>
                          <span className="text-lg text-gold-light font-semibold">{car.seating}</span>
                        </div>
                        <div>
                          <span className="block text-xs text-text-muted uppercase">Type</span>
                          <span className="text-lg text-text-primary font-semibold">{car.type.slice(0, 4)}</span>
                        </div>
                        <div>
                          <span className="block text-xs text-text-muted uppercase">Color</span>
                          <span className="text-lg text-text-primary font-semibold">{car.color.slice(0, 5)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <Link
                          href={`/contactus?car=${encodeURIComponent(car.name)}`}
                          className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary text-sm uppercase tracking-wider transition-all flex items-center gap-1 shadow-md"
                        >
                          <span>Enquire</span>
                          <span className="text-sm">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCars.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-text-muted">
                    No cars match your filters. Try adjusting your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
