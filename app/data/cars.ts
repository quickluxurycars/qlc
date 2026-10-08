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
  { id: '1', name: 'Audi A3', brand: 'Audi', type: 'Convertible', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/audi_a3/1.jpeg', '/images/cars/audi_a3/2.jpeg', '/images/cars/audi_a3/3.jpeg', '/images/cars/audi_a3/4.jpeg'] },
  { id: '2', name: 'Mercedes E400', brand: 'Mercedes', type: 'Sedan', seating: 5, color: 'White', rating: 5, images: ['/images/cars/mercedes_e400/1.jpeg', '/images/cars/mercedes_e400/2.jpeg', '/images/cars/mercedes_e400/3.jpeg'] },
  { id: '3', name: 'Mercedes G63', brand: 'Mercedes', type: 'SUV', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/mercedes_g63/1.jpeg', '/images/cars/mercedes_g63/2.jpeg', '/images/cars/mercedes_g63/3.jpeg', '/images/cars/mercedes_g63/4.jpeg'] },
  { id: '4', name: 'Mercedes C300', brand: 'Mercedes', type: 'Sedan', seating: 5, color: 'White', rating: 5, images: ['/images/cars/mercedes_c300/1.jpeg', '/images/cars/mercedes_c300/2.jpeg', '/images/cars/mercedes_c300/3.jpeg'] },
  { id: '5', name: 'Hummer H2', brand: 'Hummer', type: 'SUV', seating: 6, color: 'Black', rating: 5, images: ['/images/cars/hummer/1.jpeg', '/images/cars/hummer/2.jpeg', '/images/cars/hummer/3.jpeg', '/images/cars/hummer/4.jpeg'] },
  { id: '6', name: 'Maybach', brand: 'Mercedes', type: 'Sedan', seating: 5, color: 'Silver', rating: 5, images: ['/images/cars/maybach/1.jpeg', '/images/cars/maybach/2.jpeg', '/images/cars/maybach/3.jpeg', '/images/cars/maybach/4.jpeg'] },
  { id: '7', name: 'Rolls Royce', brand: 'Rolls Royce', type: 'Sedan', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/rolls_royce/1.jpeg', '/images/cars/rolls_royce/2.jpeg', '/images/cars/rolls_royce/3.jpeg', '/images/cars/rolls_royce/4.jpeg', '/images/cars/rolls_royce/5.jpeg'] },
  { id: '8', name: 'Bentley Bentayga', brand: 'Bentley', type: 'SUV', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/bentley_bentayga/1.jpg', '/images/cars/bentley_bentayga/2.jpeg', '/images/cars/bentley_bentayga/3.jpeg'] },
  { id: '9', name: 'BMW 5 Series', brand: 'BMW', type: 'Sedan', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/bmw_5_series/1.jpeg', '/images/cars/bmw_5_series/2.jpeg', '/images/cars/bmw_5_series/3.jpeg'] },
  { id: '10', name: 'BMW 7 Series', brand: 'BMW', type: 'Sedan', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/bmw_7_series/1.jpeg', '/images/cars/bmw_7_series/2.jpeg', '/images/cars/bmw_7_series/3.jpg'] },
  { id: '11', name: 'Jaguar XF', brand: 'Jaguar', type: 'Sedan', seating: 5, color: 'White', rating: 5, images: ['/images/cars/jaguar_xf/1.jpeg', '/images/cars/jaguar_xf/2.jpeg', '/images/cars/jaguar_xf/3.jpg'] },
  { id: '12', name: 'Mercedes E Class', brand: 'Mercedes', type: 'Sedan', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/mercedes_benz_e_class/1.jpeg', '/images/cars/mercedes_benz_e_class/2.jpeg', '/images/cars/mercedes_benz_e_class/3.jpeg'] },
  { id: '13', name: 'Mercedes S Class', brand: 'Mercedes', type: 'Sedan', seating: 5, color: 'Black', rating: 5, images: ['/images/cars/mercedes_benz_s_class/1.jpeg', '/images/cars/mercedes_benz_s_class/2.jpeg', '/images/cars/mercedes_benz_s_class/3.jpeg'] },
  { id: '14', name: 'Range Rover Evoque', brand: 'Range Rover', type: 'SUV', seating: 5, color: 'White', rating: 5, images: ['/images/cars/range_rover_evoque/1.jpg', '/images/cars/range_rover_evoque/2.jpg', '/images/cars/range_rover_evoque/3.jpg'] },
];
