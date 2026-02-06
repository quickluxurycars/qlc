export interface Car {
  id: string;
  name: string;
  brand: string;
  type: string;
  seating: number;
  color: string;
  rating: number;
  images: string[];
}

export const cars: Car[] = [
  { id: '1', name: 'AUDI A3', brand: 'Audi', type: 'Sedan', seating: 4, color: 'Black', rating: 5, images: ['/images/cars/audi_a3/1.jpeg', '/images/cars/audi_a3/2.jpeg', '/images/cars/audi_a3/3.jpeg'] },
  { id: '2', name: 'MERCEDES E400', brand: 'Mercedes', type: 'Sedan', seating: 4, color: 'White', rating: 5, images: ['/images/cars/mercedes_e400/1.jpeg', '/images/cars/mercedes_e400/2.jpeg', '/images/cars/mercedes_e400/3.jpeg'] },
  { id: '3', name: 'MERCEDES G63', brand: 'Mercedes', type: 'SUV', seating: 6, color: 'Black', rating: 5, images: ['/images/cars/mercedes_g63/1.jpeg', '/images/cars/mercedes_g63/2.jpeg', '/images/cars/mercedes_g63/3.jpeg'] },
  { id: '4', name: 'MERCEDES C300', brand: 'Mercedes', type: 'Sedan', seating: 4, color: 'White', rating: 5, images: ['/images/cars/mercedes_c300/1.jpeg', '/images/cars/mercedes_c300/2.jpeg', '/images/cars/mercedes_c300/3.jpeg'] },
  { id: '5', name: 'HUMMER H2', brand: 'Hummer', type: 'SUV', seating: 6, color: 'Black', rating: 5, images: ['/images/cars/hummer/1.jpeg', '/images/cars/hummer/2.jpeg', '/images/cars/hummer/3.jpeg'] },
  { id: '6', name: 'Maybach S500', brand: 'Mercedes', type: 'Luxury Sedan', seating: 4, color: 'Silver', rating: 5, images: ['/images/cars/maybach/1.jpeg', '/images/cars/maybach/2.jpeg', '/images/cars/maybach/3.jpeg'] },
  { id: '7', name: 'Rolls Royce', brand: 'Rolls Royce', type: 'Luxury Sedan', seating: 4, color: 'Black', rating: 5, images: ['/images/cars/rolls_royce/1.jpeg', '/images/cars/rolls_royce/2.jpeg', '/images/cars/rolls_royce/3.jpeg'] },
];
