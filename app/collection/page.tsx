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
    <div className="min-h-screen transition-colors pt-8">
      {/* Collection Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-serif text-[#C9A961]">Collection</h1>
      </div>

      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
            <div className="bg-black text-white rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-serif mb-6">Filters</h2>

              {/* Car Brand Filter */}
              <div className="mb-6 border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleFilter('brand')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <span className="font-semibold">Car Brand</span>
                  {openFilters.brand ? <HiChevronUp /> : <HiChevronDown />}
                </button>
                {openFilters.brand && (
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center cursor-pointer hover:text-[#C9A961]">
                        <input
                          type="checkbox"
                          checked={filters.brand.includes(brand)}
                          onChange={() => handleFilterChange('brand', brand)}
                          className="mr-2 accent-[#C9A961]"
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
                  <span className="font-semibold">Car Type</span>
                  {openFilters.type ? <HiChevronUp /> : <HiChevronDown />}
                </button>
                {openFilters.type && (
                  <div className="space-y-2">
                    {types.map(type => (
                      <label key={type} className="flex items-center cursor-pointer hover:text-[#C9A961]">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange('type', type)}
                          className="mr-2 accent-[#C9A961]"
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
                  <span className="font-semibold">Seating Capacity</span>
                  {openFilters.seating ? <HiChevronUp /> : <HiChevronDown />}
                </button>
                {openFilters.seating && (
                  <div className="space-y-2">
                    {seatings.map(seating => (
                      <label key={seating} className="flex items-center cursor-pointer hover:text-[#C9A961]">
                        <input
                          type="checkbox"
                          checked={filters.seating.includes(seating)}
                          onChange={() => handleFilterChange('seating', seating)}
                          className="mr-2 accent-[#C9A961]"
                        />
                        {seating} Seats
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Color Filter */}
              <div className="mb-6 border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleFilter('color')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <span className="font-semibold">Color</span>
                  {openFilters.color ? <HiChevronUp /> : <HiChevronDown />}
                </button>
                {openFilters.color && (
                  <div className="space-y-2">
                    {colors.map(color => (
                      <label key={color} className="flex items-center cursor-pointer hover:text-[#C9A961]">
                        <input
                          type="checkbox"
                          checked={filters.color.includes(color)}
                          onChange={() => handleFilterChange('color', color)}
                          className="mr-2 accent-[#C9A961]"
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
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700 group"
                >
                  <Carousel
                    transition={{ duration: 2 }} 
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    className="h-48"
                    placeholder={undefined} 
                    onResize={undefined} 
                    onResizeCapture={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                  >
                    {car.images.map((image, index) => (
                      <div key={index} className="relative h-48 bg-gray-200">
                        <Image
                          src={image}
                          alt={`${car.name} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {car.name}
                    </h3>
                    <Link 
                      href={`/contactus?car=${encodeURIComponent(car.name)}`}
                      className="inline-block text-[#C9A961] hover:text-[#B8984F] transition-colors font-medium"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No cars match your filters. Try adjusting your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
