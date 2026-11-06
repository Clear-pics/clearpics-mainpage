import { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-aditi-sharma',
    name: 'Dr. Aditi Sharma',
    qualifications: 'MBBS, MS (Gen Surg), FVVS (Germany)',
    specialty: 'Senior Endovascular & Vascular Surgeon',
    experienceYears: 16,
    surgeriesCount: 4200,
    hospital: 'ClearPix Center of Vascular Excellence',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    rating: 4.96,
    consultationFee: '$0 (Complimentary First Consult)',
    diseasesCovered: ['varicose-veins'],
    // Pexels photo for Dr. Aditi Sharma
    imageUrl: '/images/dr_aditi_sharma.jpg'
  },
  {
    id: 'dr-rajesh-nair',
    name: 'Dr. Rajesh Nair',
    qualifications: 'MBBS, MS, Fellowship in Laser Proctology (Austria)',
    specialty: 'Lead Proctologist & Sphincter Specialist',
    experienceYears: 18,
    surgeriesCount: 5600,
    hospital: 'ClearPix Surgical Care Institute',
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    rating: 4.94,
    consultationFee: '$0 (Complimentary First Consult)',
    diseasesCovered: ['piles'],
    // Pexels photo for Dr. Rajesh Nair
    imageUrl: '/images/dr_rajesh_nair.jpg'
  },
  {
    id: 'dr-meera-venkatesh',
    name: 'Dr. Meera Venkatesh',
    qualifications: 'MBBS, MS, FMAS, FIAGES (Robotics & Keyhole)',
    specialty: 'Chief Laparoscopic & GI Surgeon',
    experienceYears: 15,
    surgeriesCount: 3800,
    hospital: 'ClearPix Advanced Laparoscopy Pavilion',
    availableDays: ['Tue', 'Wed', 'Fri', 'Sat'],
    rating: 4.98,
    consultationFee: '$0 (Complimentary First Consult)',
    diseasesCovered: ['gallbladder-stones', 'hernia'],
    // iStock photo for Dr. Meera Venkatesh
    imageUrl: '/images/dr_meera_venkatesh.jpg'
  },
  {
    id: 'dr-siddharth-mehta',
    name: 'Dr. Siddharth Mehta',
    qualifications: 'MBBS, MS, MCh (Urology), DNB',
    specialty: 'Director of Laser Endourology & RIRS',
    experienceYears: 20,
    surgeriesCount: 6100,
    hospital: 'ClearPix Renal Laser Center',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri'],
    rating: 4.95,
    consultationFee: '$0 (Complimentary First Consult)',
    diseasesCovered: ['kidney-stones'],
    // Pexels photo for Dr. Siddharth Mehta
    imageUrl: '/images/dr_siddharth_mehta.jpg'
  },
  {
    id: 'dr-kavita-menon',
    name: 'Dr. Kavita Menon',
    qualifications: 'MBBS, MD, Fellowship Interventional Radiology & Thyroid RFA (Seoul)',
    specialty: 'Interventional Endocrine Radiologist',
    experienceYears: 14,
    surgeriesCount: 2900,
    hospital: 'ClearPix Scarless Endocrine Clinic',
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat'],
    rating: 4.97,
    consultationFee: '$0 (Complimentary First Consult)',
    diseasesCovered: ['thyroid-ablation'],
    // Pexels photo for Dr. Kavita Menon
    imageUrl: '/images/dr_kavita_menon.jpg'
  }
];

export function getDoctorsForDisease(diseaseId: string): Doctor[] {
  return DOCTORS.filter(d => d.diseasesCovered.includes(diseaseId as any));
}
