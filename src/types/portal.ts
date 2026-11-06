export type PortalCategory = 
  | 'All'
  | 'Vascular Health'
  | 'Arterial & Cardiac'
  | 'Wound Care & Ulcers'
  | 'Lymphatics & Edema'
  | 'Surgical Proctology'
  | 'Endocrine & Urology';

export interface ClinicalStage {
  stage: string;
  name: string;
  description: string;
  clinicalSign: string;
}

export interface ClinicalPortalItem {
  id: string;
  title: string;
  category: PortalCategory;
  description: string;
  url: string;
  imageUrl: string;
  isExternal: boolean;
  status: 'Active Portal' | 'Active Module' | 'Clinical Beta' | 'Clinical Module' | 'Interactive Atlas';
  statusColor: 'emerald' | 'cyan' | 'blue' | 'amber';
  iconType: 'venous' | 'thrombus' | 'arterial' | 'ulcer' | 'lymph' | 'laser' | 'thyroid' | 'kidney';
  featureTags: string[];
  stagingSystem: string;
  stagesCount: string;
  referencesCount: number;
  highlightColor: string;
  bgGradient: string;
  sampleStages?: ClinicalStage[];
  summaryNote?: string;
}

export interface AccessFeedbackForm {
  name: string;
  email: string;
  role: 'Vascular Surgeon' | 'General Surgeon' | 'Resident / Fellow' | 'Medical Student' | 'Patient Educator' | 'Other';
  institution: string;
  moduleOfInterest: string;
  feedbackText: string;
}
