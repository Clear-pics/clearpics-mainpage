export type DiseaseId =
  | 'varicose-veins'
  | 'gallbladder-stones'
  | 'hernia'
  | 'thyroid-ablation'
  | 'kidney-stones'
  | 'piles';

export interface SymptomItem {
  name: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
  category: string;
}

export interface CauseItem {
  title: string;
  description: string;
}

export interface TreatmentItem {
  name: string;
  fullName: string;
  description: string;
  recoveryTime: string;
  advantages: string[];
  isDaycare: boolean;
  technology: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RedFlagItem {
  sign: string;
  risk: string;
  action: string;
}

export interface DiseaseData {
  id: DiseaseId;
  route: string;
  name: string;
  medicalTerm: string;
  specialty: string;
  headline: string;
  subheadline: string;
  summary: string;
  heroKicker: string;
  accentColor: string;
  accentBg: string;
  stats: {
    label: string;
    value: string;
  }[];
  overviewPoints: string[];
  symptoms: SymptomItem[];
  causes: CauseItem[];
  redFlags: RedFlagItem[];
  treatments: TreatmentItem[];
  faqs: FaqItem[];
  preventionTips: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  experienceYears: number;
  surgeriesCount: number;
  hospital: string;
  availableDays: string[];
  rating: number;
  consultationFee: string;
  diseasesCovered: DiseaseId[];
  imageUrl?: string;
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  phone: string;
  email: string;
  city: string;
  diseaseId: DiseaseId;
  consultationType: 'in-clinic' | 'video' | 'second-opinion';
  doctorId: string;
  date: string;
  timeSlot: string;
  hasInsurance: boolean;
  insuranceProvider?: string;
  additionalNotes?: string;
  createdAt: string;
}
