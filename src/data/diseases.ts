import { DiseaseData } from '../types';

export const DISEASES: Record<string, DiseaseData> = {
  'varicose-veins': {
    id: 'varicose-veins',
    route: '/varicose-veins',
    name: 'Varicose Veins',
    medicalTerm: 'Chronic Venous Insufficiency (CVI)',
    specialty: 'Advanced Endovascular Care',
    headline: 'USFDA-Approved Endovenous Laser Ablation (EVLA).',
    subheadline: 'Gold-standard 1470nm radial laser ablation & medical glue seals malfunctioning saphenous veins with zero stitches, no hospital stay, and immediate walking.',
    summary: 'Varicose veins occur when the microscopic one-way check valves inside leg veins fail, allowing blood to pool backwards under gravity. ClearPix offers pinhole Endovenous Laser Ablation (EVLA) and VenaSeal medical adhesive, restoring healthy venous circulation and pristine leg appearance.',
    heroKicker: 'Precision Endovascular Vein Care',
    accentColor: 'text-teal-600',
    accentBg: 'bg-teal-50',
    stats: [
      { label: 'Walking Resumption', value: 'Immediate (15 min)' },
      { label: 'Procedure Time', value: '30-40 min' },
      { label: 'Clinical Success Rate', value: '98.7%' },
      { label: 'Hospital Stay', value: 'Zero (Daycare Walk-in)' }
    ],
    overviewPoints: [
      'Real-time Doppler ultrasound guidance pinpoints incompetent saphenous valves with millimeter accuracy.',
      'German radial laser fibers deliver gentle 360-degree heat, closing the diseased vein permanently.',
      'Circulation is instantly redirected into healthy, deep leg veins—relieving leg heaviness within hours.',
      'No incisions, no spinal anesthesia, zero scarring, and full return to work the very next morning.'
    ],
    symptoms: [
      {
        name: 'Tortuous, Bulging Blue Cord-like Veins',
        description: 'Twisted, swollen superficial veins protruding beneath the skin surface of the calves and thighs.',
        severity: 'moderate',
        category: 'Visible Anatomy'
      },
      {
        name: 'Persistent Leg Heaviness & Fatigue',
        description: 'Aching, tired sensation in the legs that progressively intensifies toward evening or after standing.',
        severity: 'mild',
        category: 'Sensory Discomfort'
      },
      {
        name: 'Nocturnal Muscle Cramps & Restless Legs',
        description: 'Sudden painful calf cramps during sleep and an uncontrollable urge to move the legs while resting.',
        severity: 'moderate',
        category: 'Neuromuscular'
      },
      {
        name: 'Skin Hyperpigmentation, Eczema & Ulcers',
        description: 'Brownish rusty discoloration around the ankles (lipodermatosclerosis) progressing to painful, slow-healing venous leg sores.',
        severity: 'severe',
        category: 'Advanced Trophic Change'
      }
    ],
    causes: [
      {
        title: 'Venous Valve Incompetence (Reflux)',
        description: 'Microscopic one-way leaflet valves fail to close tightly, allowing gravity-driven blood pooling and vein wall stretching.'
      },
      {
        title: 'Prolonged Standing or Sitting Occupations',
        description: 'Lack of calf muscle pump contraction during long hours standing (teachers, nurses, retail) or sitting.'
      },
      {
        title: 'Genetic Predisposition',
        description: 'Inherited weakness in venous wall collagen and elastin fiber density (over 65% familial link).'
      },
      {
        title: 'Pregnancy & Hormonal Surges',
        description: 'Elevated progesterone relaxes vein walls, while pelvic uterine pressure restricts iliac venous return.'
      }
    ],
    redFlags: [
      {
        sign: 'Sudden Painful Unilateral Swelling in Calf or Thigh',
        risk: 'Deep Vein Thrombosis (DVT) with risk of life-threatening Pulmonary Embolism (PE).',
        action: 'Emergency duplex venous Doppler ultrasound and urgent anticoagulation assessment.'
      },
      {
        sign: 'Spontaneous Profuse Bleeding from a Thin-Walled Vein',
        risk: 'High-pressure venous hemorrhage.',
        action: 'Elevate leg above heart level, apply firm direct pressure, and seek immediate emergency care.'
      },
      {
        sign: 'Open Non-Healing Sore Near the Medial Ankle',
        risk: 'Active Stage C6 Venous Ulcer susceptible to secondary soft-tissue infections.',
        action: 'Specialized wound debridement and definitive endovenous reflux closure.'
      }
    ],
    treatments: [
      {
        name: 'Endovenous Laser Ablation (EVLA)',
        fullName: '1470nm Radial Fiber Laser Closure',
        description: 'Under local tumescent anesthesia, a micro-catheter introduces a radial laser fiber into the great saphenous vein, delivering controlled thermal energy that permanently collapses and seals the diseased vein.',
        recoveryTime: 'Walk immediately, return to work next day',
        advantages: ['USFDA gold standard', '98.7% permanent closure rate', 'No surgical incisions or scars', 'Done under local numbing'],
        isDaycare: true,
        technology: 'Radial 2-Ring Laser Fiber & 1470nm Generator'
      },
      {
        name: 'VenaSeal Medical Adhesive',
        fullName: 'Non-Thermal Cyanoacrylate Vein Closure',
        description: 'A revolutionary non-thermal approach that dispenses tiny droplets of specialized medical adhesive to glue the incompetent vein shut without heat or tumescent injections.',
        recoveryTime: 'Zero downtime; no compression stockings required',
        advantages: ['Completely painless', 'No heat damage risk to nerves', 'No need for post-op compression stockings'],
        isDaycare: true,
        technology: 'Medtronic VenaSeal Delivery System'
      },
      {
        name: 'Ultrasound-Guided Foam Sclerotherapy (UGFS)',
        fullName: 'Tessari Microfoam Sclerotherapy',
        description: 'Liquid sclerosant converted into microfoam is injected into tributary branches and spider veins under direct ultrasound guidance, dissolving the inner endothelial lining.',
        recoveryTime: 'Outpatient 15-minute procedure',
        advantages: ['Ideal for residual tortuous branch veins and spider veins', 'Cost-effective and quick'],
        isDaycare: true,
        technology: 'Carbon Dioxide & Polidocanol Microfoam'
      }
    ],
    faqs: [
      {
        question: 'If you seal or close the vein, how does blood return to the heart?',
        answer: 'The varicose veins are superficial veins that carry less than 10% of your leg circulation and are actually flowing backward due to broken valves. Over 90% of venous blood returns through your deep leg veins. When the malfunctioning vein is sealed, circulation immediately redirects into those deep, healthy veins, significantly improving total blood return and relieving swelling.'
      },
      {
        question: 'Can compression stockings cure varicose veins permanently?',
        answer: 'No. Medical compression stockings squeeze the leg from the outside, which helps reduce swelling and heaviness while you wear them. However, they cannot repair failed valves or fix stretched vein walls. Once stockings are removed, the venous pooling returns. Definitive laser closure or glue is required for a permanent cure.'
      },
      {
        question: 'Is the procedure covered by health insurance?',
        answer: 'Yes. Varicose vein treatment with documented venous reflux on Doppler ultrasound is classified as a medically necessary vascular procedure (not cosmetic). ClearPix coordinates cashless insurance coverage across all primary providers.'
      }
    ],
    preventionTips: [
      'Take 2-minute walking breaks every 45 minutes if working at a desk or standing stationary.',
      'Elevate your legs above heart level for 15 minutes each evening to facilitate venous drainage.',
      'Engage in brisk walking, swimming, or cycling to activate the calf muscle venous pump.'
    ]
  },

  'gallbladder-stones': {
    id: 'gallbladder-stones',
    route: '/gallbladder-stones',
    name: 'Gallbladder Stones',
    medicalTerm: 'Cholelithiasis',
    specialty: 'Advanced Laparoscopic Surgery',
    headline: 'Keyhole 3D Laparoscopic Cholecystectomy.',
    subheadline: 'State-of-the-art 3-port laparoscopic removal of diseased gallbladders with 4K optics, pinpoint safety, and 24-hour discharge.',
    summary: 'Gallbladder stones are hardened deposits of digestive fluids that form in your gallbladder. When symptomatic, removal of the gallbladder via minimally invasive keyhole surgery is the gold standard, restoring normal digestive comfort with no long-term dietary restrictions.',
    heroKicker: '4K Keyhole Surgical Precision',
    accentColor: 'text-amber-600',
    accentBg: 'bg-amber-50',
    stats: [
      { label: 'Incision Size', value: '3-5 mm pinholes' },
      { label: 'Hospital Stay', value: '24 hours' },
      { label: 'Procedure Time', value: '35-45 min' },
      { label: 'Full Recovery', value: '5-7 days' }
    ],
    overviewPoints: [
      'High-definition 4K 3D laparoscopy provides clear visualization of Calot’s triangle.',
      'Preventive removal prevents severe acute cholecystitis, pancreatitis, and jaundice.',
      'The liver continues producing bile directly into the small intestine; long-term digestion remains unaffected.',
      'Safe, stitch-free dermabond skin closure with minimal cosmetic marks.'
    ],
    symptoms: [
      {
        name: 'Biliary Colic in Right Upper Abdomen',
        description: 'Intense, steady cramp or gnawing pain under the right rib cage, frequently radiating to the right shoulder blade.',
        severity: 'moderate',
        category: 'Pain Pattern'
      },
      {
        name: 'Post-Prandial Nausea and Bloating',
        description: 'Persistent nausea, indigestion, and heavy fullness 30 to 90 minutes after consuming rich or fatty meals.',
        severity: 'mild',
        category: 'Gastrointestinal'
      },
      {
        name: 'Fever with Rigors & Persistent Tenderness',
        description: 'Elevated body temperature indicating acute inflammation or bacterial infection of the gallbladder wall (Acute Cholecystitis).',
        severity: 'severe',
        category: 'Infection'
      },
      {
        name: 'Yellowing of Eyes & Skin (Jaundice)',
        description: 'Dark tea-colored urine and pale clay stools caused by a stone slipping into and obstructing the common bile duct (Choledocholithiasis).',
        severity: 'severe',
        category: 'Biliary Obstruction'
      }
    ],
    causes: [
      {
        title: 'Cholesterol Supersaturation in Bile',
        description: 'The liver secretes more cholesterol than bile salts can dissolve, crystallizing into cholesterol calculi.'
      },
      {
        title: 'Gallbladder Hypomotility',
        description: 'Incomplete or sluggish emptying causes bile to concentrate and form microscopic sludge that coalesces into stones.'
      },
      {
        title: 'Rapid Weight Loss or Prolonged Fasting',
        description: 'Rapid mobilization of hepatic cholesterol during crash diets promotes calculus crystallization.'
      },
      {
        title: 'Metabolic & Hormonal Influences',
        description: 'Estrogen elevates biliary cholesterol saturation, making stones statistically more common in women.'
      }
    ],
    redFlags: [
      {
        sign: 'Continuous Pain Exceeding 6 Hours with High Fever',
        risk: 'Gallbladder empyema, gangrene, or localized perforation.',
        action: 'Immediate emergency admission for IV antibiotic therapy and urgent laparoscopic cholecystectomy.'
      },
      {
        sign: 'Sudden Mid-Epigastric Pain Radiating to the Back',
        risk: 'Gallstone Pancreatitis due to ampulla of Vater obstruction.',
        action: 'Urgent hospitalization and serum amylase/lipase assessment.'
      },
      {
        sign: 'Scleral Icterus (Yellow Eyes) & Clay Stools',
        risk: 'Obstructive jaundice with common bile duct blockage.',
        action: 'Requires urgent MRCP or ERCP stone extraction followed by cholecystectomy.'
      }
    ],
    treatments: [
      {
        name: '4K Laparoscopic Cholecystectomy',
        fullName: 'Minimally Invasive 3-Port Gallbladder Extraction',
        description: 'Three tiny punctures (5mm) permit laparoscopic instruments to safely isolate the cystic duct and artery, removing the gallbladder intact inside an endobag.',
        recoveryTime: 'Discharge within 24 hours, normal diet in 2 days',
        advantages: ['Ultra-minimal incision lines', 'Virtually zero wound infection risk', 'Rapid return to work', 'Definitive permanent cure'],
        isDaycare: true,
        technology: '4K Ultra-HD 3D Imaging Tower'
      },
      {
        name: 'Single-Incision Laparoscopic Surgery (SILS)',
        fullName: 'Single-Port Scarless Umbilical Surgery',
        description: 'Entire gallbladder removal conducted via a single 1.5cm hidden incision inside the natural contour of the navel, leaving zero visible abdominal scars.',
        recoveryTime: 'Full resumption of routine in 4-5 days',
        advantages: ['Superior cosmetic outcome', 'Hidden scar inside umbilicus', 'Less post-op abdominal wall discomfort'],
        isDaycare: true,
        technology: 'Articulating Laparoscopic Instruments'
      }
    ],
    faqs: [
      {
        question: 'Can gallbladder stones be dissolved with medicines or broken with shockwaves?',
        answer: 'Medications (like Ursodiol) only dissolve tiny pure-cholesterol stones over many years and have an 80% recurrence rate once stopped. Shockwave lithotripsy is contraindicated in the gallbladder because stone fragments can lodge in the common bile duct or pancreatic duct, causing life-threatening complications. Laparoscopic cholecystectomy is the only definitive international standard.'
      },
      {
        question: 'Can I live a normal healthy life without a gallbladder?',
        answer: 'Yes, completely. The gallbladder is only a storage reservoir; bile is actually produced by the liver. After removal, the liver continues producing bile, which flows continuously into the small intestine. Over 98% of patients eat a regular diet without complications.'
      },
      {
        question: 'When should I undergo surgery if I have stones but no pain?',
        answer: 'Asymptomatic stones generally require periodic ultrasound monitoring. However, surgery is advised if stones are larger than 2.5cm, if there are accompanying gallbladder polyps, or in patients with diabetes or porcelain gallbladder.'
      }
    ],
    preventionTips: [
      'Adopt a balanced diet rich in monounsaturated fats (olive oil, avocados) and high dietary fiber.',
      'Avoid drastic low-calorie crash diets; target steady weight loss of 0.5-1 kg per week.',
      'Stay physically active; regular moderate exercise helps normalize biliary lipid metabolism.'
    ]
  },

  hernia: {
    id: 'hernia',
    route: '/hernia',
    name: 'Hernia Repair',
    medicalTerm: 'Hernioplasty & Herniorrhaphy',
    specialty: 'Advanced Laparoscopic & Robotic Surgery',
    headline: 'Advanced 3D Mesh Laparoscopic Hernia Repair.',
    subheadline: 'Anatomical tension-free mesh reinforcement via keyhole incisions for inguinal, umbilical, and incisional hernias.',
    summary: 'A hernia develops when an internal organ or fatty tissue squeezes through a weak spot in the surrounding muscle or fascia. ClearPix specializes in laparoscopic TEP and TAPP repairs that place a contoured 3D mesh behind the defect, preventing recurrence and ensuring rapid recovery.',
    heroKicker: 'Tension-Free 3D Mesh Reconstruction',
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    stats: [
      { label: 'Surgical Ports', value: '3 mini-incisions' },
      { label: 'Stay Duration', value: 'Daycare / 24 hrs' },
      { label: 'Mesh Longevity', value: 'Permanent biocompatible' },
      { label: 'Physical Activity', value: 'Walking in 6 hours' }
    ],
    overviewPoints: [
      'Tension-free repair eliminates tissue pulling, reducing post-operative soreness by 70%.',
      'Posterior preperitoneal mesh placement uses natural intra-abdominal physics to reinforce the wall.',
      'Effective for unilateral, bilateral, and recurrent groin or ventral hernias.',
      'Absorbable fixation tackers minimize nerve entrapment and chronic groin pain.'
    ],
    symptoms: [
      {
        name: 'Visible Soft Bulge or Swelling',
        description: 'Noticeable protrusion in the groin, scrotum, or navel area that becomes more prominent when standing, coughing, or bending.',
        severity: 'mild',
        category: 'Physical Finding'
      },
      {
        name: 'Dragging Aching Sensation',
        description: 'Dull, heavy discomfort in the lower abdomen or groin that worsens toward the end of an active day.',
        severity: 'moderate',
        category: 'Discomfort'
      },
      {
        name: 'Burning or Gurgling Sensation at Defect',
        description: 'A distinct sensation of bowel or omentum sliding through the fascial defect during exertion.',
        severity: 'moderate',
        category: 'Sensory'
      },
      {
        name: 'Hard, Non-Reducible, Painful Lump',
        description: 'Bulge turns rigid, extremely tender to the touch, and cannot be gently guided back into the abdomen (Incarcerated / Strangulated Hernia).',
        severity: 'severe',
        category: 'Surgical Emergency'
      }
    ],
    causes: [
      {
        title: 'Pre-existing Congenital Muscle Weakness',
        description: 'Failure of embryonic fascia to fuse completely (patent processus vaginalis or umbilical ring defect).'
      },
      {
        title: 'Repeated Straining & Heavy Lifting',
        description: 'Frequent heavy occupational lifting, chronic coughing, or prostate-related urinary straining elevates abdominal pressure.'
      },
      {
        title: 'Previous Surgical Incision Sites',
        description: 'Compromised abdominal wall healing following past laparotomies leading to incisional defects.'
      },
      {
        title: 'Age-Related Collagen Degradation',
        description: 'Natural progressive thinning of muscular fascia and loss of tensile collagen matrix over time.'
      }
    ],
    redFlags: [
      {
        sign: 'Sudden Inability to Push Bulge In with Severe Pain',
        risk: 'Incarceration with bowel loops trapped in the hernia ring.',
        action: 'Immediate emergency hospital presentation within 2-4 hours.'
      },
      {
        sign: 'Skin Over Bulge Turns Red, Purple, or Dusky',
        risk: 'Strangulation: cut-off blood supply leading to bowel ischemia and necrosis.',
        action: 'Emergency surgical exploration to save the compromised bowel loop.'
      },
      {
        sign: 'Incarcerated Bulge Accompanied by Vomiting and Inability to Pass Gas',
        risk: 'Complete mechanical small bowel obstruction.',
        action: 'Immediate surgical admission and NG tube decompression.'
      }
    ],
    treatments: [
      {
        name: 'Laparoscopic TEP Repair',
        fullName: 'Totally Extraperitoneal Inguinal Hernioplasty',
        description: 'Repair performed entirely outside the peritoneal cavity in the preperitoneal space, placing an anatomic 3D mesh without entering the abdominal organs.',
        recoveryTime: 'Light activities in 48 hours, gym in 3 weeks',
        advantages: ['Zero risk of bowel adhesions', 'Minimal pain', 'Both sides can be repaired through same ports', 'No visible scars'],
        isDaycare: true,
        technology: 'Extraperitoneal Balloon Dissector'
      },
      {
        name: 'Laparoscopic TAPP Repair',
        fullName: 'Transabdominal Preperitoneal Repair',
        description: 'Accesses the hernia defect from inside the abdominal cavity, incises the peritoneal flap, places a wide-coverage mesh, and carefully re-closes the peritoneum.',
        recoveryTime: '24 hours in hospital, routine tasks in 3 days',
        advantages: ['Superior visualization of large scrotal or recurrent defects', 'Direct assessment of bowel viability'],
        isDaycare: true,
        technology: '3D High-Definition Laparoscopy'
      },
      {
        name: 'Robotic-Assisted Hernia Reconstruction',
        fullName: 'Robotic Transfascial Component Separation',
        description: 'Utilizes articulated robotic wrists for complex ventral, incisional, or recurrent giant abdominal wall hernias.',
        recoveryTime: '3-4 days recovery',
        advantages: ['Sub-millimeter suture precision', 'Excellent for complex reconstructive abdominal repairs'],
        isDaycare: false,
        technology: 'Multi-Arm Robotic Platform'
      }
    ],
    faqs: [
      {
        question: 'Can a hernia heal on its own with exercise or a hernia belt?',
        answer: 'No. A hernia is a mechanical defect in the fibrous muscle wall. Exercise cannot close the gap and often worsens it by increasing intra-abdominal pressure. Hernia belts (trusses) provide temporary symptomatic support but cannot cure the defect and may cause skin irritation.'
      },
      {
        question: 'Will I feel the mesh inside my body after surgery?',
        answer: 'Modern ClearPix 3D lightweight polypropylene meshes are bio-inert and engineered to mimic natural human fascia elasticity. Within weeks, your own tissue incorporates into the mesh scaffold. You will not feel, hear, or detect the mesh during sports or daily life.'
      },
      {
        question: 'How quickly can I resume lifting weights or heavy work?',
        answer: 'Walking is encouraged on the day of surgery. Desk work and driving resume within 3 to 5 days. Light cardio starts at 2 weeks, and heavy weightlifting or rigorous contact sports can safely resume after 4 to 6 weeks.'
      }
    ],
    preventionTips: [
      'Always bend at the knees and use your legs—not your lower back—when lifting heavy objects.',
      'Maintain an ideal body mass index (BMI) to reduce persistent intra-abdominal pressure.',
      'Treat chronic coughs, asthma, and prostate enlargement promptly to prevent chronic straining.'
    ]
  },

  'thyroid-ablation': {
    id: 'thyroid-ablation',
    route: '/thyroid-ablation',
    name: 'Thyroid Ablation',
    medicalTerm: 'Radiofrequency & Thermal Ablation (RFA)',
    specialty: 'Interventional Endocrine Surgery',
    headline: 'Scarless Thyroid Radiofrequency Ablation (RFA).',
    subheadline: 'USFDA-approved thermal ablation shrinks benign thyroid nodules through a needle puncture—preserving your natural gland and voice.',
    summary: 'Thyroid nodules affect up to 50% of the population. ClearPix brings advanced USG-guided Radiofrequency Ablation (RFA) and Microwave Ablation (MWA), offering an alternative to neck-slicing open surgery. No scar, no general anesthesia, and no lifelong hormone replacement pills.',
    heroKicker: 'Non-Surgical Endocrine Preservation',
    accentColor: 'text-cyan-600',
    accentBg: 'bg-cyan-50',
    stats: [
      { label: 'Incision Required', value: 'Zero (Needle tip)' },
      { label: 'Gland Preservation', value: '100% Intact Function' },
      { label: 'Lifelong Pills Needed', value: '0% (Natural hormone)' },
      { label: 'Volume Reduction', value: '80-93% in 6 months' }
    ],
    overviewPoints: [
      'Preserves the healthy thyroid tissue so you never become dependent on lifelong thyroxine medication.',
      'No surgical incision on the anterior neck; zero visible scarring or stitch marks.',
      'Real-time hydrodissection technique protects the recurrent laryngeal nerve to safeguard your voice.',
      'Performed under localized numbing; walk out of the clinic within 2 hours.'
    ],
    symptoms: [
      {
        name: 'Palpable Neck Lump or Goiter',
        description: 'Noticeable swelling or firm rounded nodule in the front of the neck that moves upward when swallowing.',
        severity: 'mild',
        category: 'Physical Examination'
      },
      {
        name: 'Sensation of Food Sticking (Dysphagia)',
        description: 'Difficulty swallowing solid food or pills due to mechanical compression of the esophagus by the expanding nodule.',
        severity: 'moderate',
        category: 'Compressive Symptom'
      },
      {
        name: 'Persistent Throat Tightness / Globus',
        description: 'Uncomfortable fullness, choking sensation when lying flat, or chronic need to clear the throat.',
        severity: 'moderate',
        category: 'Compressive Symptom'
      },
      {
        name: 'Hoarseness or Voice Tone Alteration',
        description: 'Progressive raspiness or fatigue in the speaking voice from pressure on the adjacent vocal cord nerve.',
        severity: 'severe',
        category: 'Neurological / Compression'
      }
    ],
    causes: [
      {
        title: 'Benign Colloid Nodules & Adenomas',
        description: 'Overgrowth of normal thyroid glandular tissue forming discrete encapsulated fluid-filled or solid nodules.'
      },
      {
        title: 'Dietary or Environmental Iodine Imbalance',
        description: 'Fluctuations in systemic iodine availability stimulate localized follicular cell hyperplasia.'
      },
      {
        title: 'Chronic Hashimoto’s Thyroiditis',
        description: 'Autoimmune inflammation of the gland leading to pseudonodular architecture and localized tissue enlargement.'
      },
      {
        title: 'Genetic Susceptibility & Familial History',
        description: 'Hereditary propensity toward multiple multinodular goiter developments.'
      }
    ],
    redFlags: [
      {
        sign: 'Rapidly Growing Hard, Fixed Nodule in Weeks',
        risk: 'High clinical suspicion for thyroid malignancy or anaplastic change.',
        action: 'Immediate high-resolution ultrasound followed by fine-needle aspiration biopsy (FNAC).'
      },
      {
        sign: 'Acute Stridor or Severe Breathlessness When Supine',
        risk: 'Critical tracheal narrowing or acute intra-nodular hemorrhage.',
        action: 'Emergency airway assessment and endocrine surgical decompression.'
      },
      {
        sign: 'Enlarged Lateral Neck Lymph Nodes Alongside Nodule',
        risk: 'Potential metastatic papillary thyroid carcinoma.',
        action: 'Comprehensive cervical lymph node mapping and guided biopsy.'
      }
    ],
    treatments: [
      {
        name: 'Thyroid Radiofrequency Ablation (RFA)',
        fullName: 'Moving-Shot USG-Guided Thermal Ablation',
        description: 'Under continuous ultrasound guidance, a specialized 18-gauge internally cooled electrode creates frictional heat (50-80°C) to induce irreversible coagulative necrosis strictly within the nodule.',
        recoveryTime: 'Walk home in 2 hours, normal routine the next morning',
        advantages: ['100% scarless', 'Thyroid hormone output remains normal', 'No general anesthesia required', 'Safe for all age groups'],
        isDaycare: true,
        technology: 'Internally Cooled RFA Generator & Multi-Freq USG'
      },
      {
        name: 'Microwave Ablation (MWA)',
        fullName: 'Dielectric Hysteresis Thermal Volumetry',
        description: 'Utilizes high-frequency electromagnetic microwave radiation to rapidly agitate water molecules, generating uniform thermal fields for larger or cystic-solid lesions.',
        recoveryTime: 'Overnight rest, normal activities next day',
        advantages: ['Faster ablation speeds for voluminous goiters', 'Consistent predictable ablation margins'],
        isDaycare: true,
        technology: '2450 MHz Microwave Thermal System'
      },
      {
        name: 'Ethanol Ablation (PEI)',
        fullName: 'Percutaneous Ethanol Injection',
        description: 'Targeted injection of sterile 95% ethanol into predominantly cystic thyroid nodules, causing chemical cellular dehydration and permanent cavity shrinkage.',
        recoveryTime: 'Immediate resumption of work',
        advantages: ['Cost-effective for pure thyroid cysts', 'Takes less than 15 minutes in clinic'],
        isDaycare: true,
        technology: 'Sterile Absolute Ethanol & Micro-catheter'
      }
    ],
    faqs: [
      {
        question: 'Will I need to take thyroid hormone tablets (Thyroxine) after RFA?',
        answer: 'No. This is the single biggest advantage of RFA over traditional thyroidectomy. Traditional surgery removes the entire thyroid lobe or gland, leaving you dependent on daily hormone pills for the rest of your life. RFA targets ONLY the nodule, preserving all surrounding healthy thyroid tissue.'
      },
      {
        question: 'Does the nodule disappear immediately after ablation?',
        answer: 'The thermal ablation destroys the cellular matrix inside the nodule. Over the following weeks and months, your body’s natural immune system (macrophages) gradually absorbs and removes the debris. Clinical studies show 50-60% volume reduction at 1 month, and 85-93% reduction by 6 months.'
      },
      {
        question: 'How do you ensure my vocal cords and voice are not damaged?',
        answer: 'We employ the "danger triangle" safety protocol and continuous hydrodissection—injecting cold dextrose solution between the thyroid capsule and the recurrent laryngeal nerve. This thermal barrier ensures the nerve remains at ambient body temperature throughout the procedure.'
      }
    ],
    preventionTips: [
      'Ensure balanced dietary intake of iodized salt and trace minerals like selenium.',
      'Undergo routine thyroid ultrasound screening if you have a family history of goiter.',
      'Avoid unnecessary ionizing radiation exposure to the neck region.'
    ]
  },

  'kidney-stones': {
    id: 'kidney-stones',
    route: '/kidney-stones',
    name: 'Kidney Stones',
    medicalTerm: 'Nephrolithiasis & Urolithiasis',
    specialty: 'Advanced Endourology & Laser Care',
    headline: 'No-Cut Laser RIRS & Mini-PCNL Stone Removal.',
    subheadline: 'Thulium & Holmium laser dusting pulverizes kidney stones to fine powder through natural urinary passages—zero external cuts.',
    summary: 'Kidney stones are crystalline mineral deposits that form inside your renal kidneys and urinary tract, causing sudden incapacitating flank pain. ClearPix utilizes flexible digital ureterorenoscopy (RIRS) and micro-laser fibers to dust stones into microscopic sand, eliminating the need for open surgery.',
    heroKicker: 'Natural Orifice Laser Endourology',
    accentColor: 'text-sky-600',
    accentBg: 'bg-sky-50',
    stats: [
      { label: 'External Incisions', value: 'Zero (Natural Orifice)' },
      { label: 'Laser Tech', value: 'Thulium Fiber Laser (TFL)' },
      { label: 'Stone Dusting Speed', value: 'Up to 4x faster' },
      { label: 'Discharge', value: 'Same Day / 24 hrs' }
    ],
    overviewPoints: [
      'Digital flexible scopes navigate every calyx of the kidney with 270-degree bidirectional deflection.',
      'Thulium fiber laser pulverizes stones into fine dust (< 0.5mm) that washes out painlessly.',
      'Virtually eliminates bleeding risks compared to older percutaneous procedures.',
      'Comprehensive metabolic stone analysis included to prevent future recurrence.'
    ],
    symptoms: [
      {
        name: 'Severe Sharp Flank Pain (Renal Colic)',
        description: 'Excruciating spasm pain in the lower back beneath ribs, coming in intense waves and radiating forward to the lower abdomen and groin.',
        severity: 'severe',
        category: 'Pain Presentation'
      },
      {
        name: 'Hematuria (Pink, Red, or Brown Urine)',
        description: 'Microscopic or visible blood in the urine caused by sharp stone edges scraping ureteral endothelial lining.',
        severity: 'moderate',
        category: 'Urinary'
      },
      {
        name: 'Urinary Frequency & Constant Urgency',
        description: 'Persistent feeling of needing to urinate, passing only small volumes accompanied by a stinging burning sensation.',
        severity: 'moderate',
        category: 'Urinary'
      },
      {
        name: 'Fever, Chills & Nausea with Vomiting',
        description: 'Intense gastrointestinal upset triggered by shared celiac autonomic nerve pathways, accompanied by fever if infection is present.',
        severity: 'severe',
        category: 'Systemic / Infection'
      }
    ],
    causes: [
      {
        title: 'Chronic Subclinical Dehydration',
        description: 'Low fluid consumption causes urine to become highly concentrated, exceeding the saturation limit of calcium and oxalate.'
      },
      {
        title: 'Excess Dietary Sodium and Animal Protein',
        description: 'High sodium increases renal calcium excretion; excess purine animal proteins lower urine pH, fostering uric acid stones.'
      },
      {
        title: 'Metabolic & Genetic Hypercalciuria',
        description: 'Inherited abnormalities in kidney tubular handling of calcium, citrate, or cystine.'
      },
      {
        title: 'Recurrent Urinary Tract Infections (UTIs)',
        description: 'Urea-splitting bacteria like Proteus elevate urine alkalinity, producing large struvite staghorn calculi.'
      }
    ],
    redFlags: [
      {
        sign: 'Severe Flank Pain with High Fever and Chills',
        risk: 'Obstructive pyelonephritis / urosepsis: a life-threatening medical emergency.',
        action: 'Immediate emergency admission for urgent JJ stenting or nephrostomy drainage.'
      },
      {
        sign: 'Inability to Pass Any Urine for Over 8 Hours (Anuria)',
        risk: 'Bilateral ureteral obstruction or solitary kidney blockage leading to acute renal failure.',
        action: 'Emergency urology intervention within 2 hours.'
      },
      {
        sign: 'Intractable Vomiting Preventing Oral Hydration & Pain Relief',
        risk: 'Severe electrolyte derangement and acute kidney injury.',
        action: 'Hospital admission for intravenous hydration and parenteral anti-emetics.'
      }
    ],
    treatments: [
      {
        name: 'RIRS with Thulium Fiber Laser',
        fullName: 'Retrograde Intrarenal Surgery',
        description: 'A miniature flexible video scope enters through the natural urethra and bladder into the kidney. High-frequency Thulium laser pulses dust the stone to powder.',
        recoveryTime: 'Walk home in 24 hours, back to desk work in 2 days',
        advantages: ['Zero incisions or scars', 'Able to clear multiple stones in lower calyx', 'Minimal blood loss', 'Immediate stone clearance'],
        isDaycare: true,
        technology: 'Olympus Flexible Digital Ureteroscope & TFL Laser'
      },
      {
        name: 'Mini-PCNL',
        fullName: 'Miniaturized Percutaneous Nephrolithotomy',
        description: 'For large kidney stones (> 20mm or staghorn calculi), a tiny 4mm keyhole channel in the back permits ultrasonic/pneumatic lithotripsy and suction evacuation.',
        recoveryTime: '1-2 days hospital stay, full recovery in 7 days',
        advantages: ['Clears giant stones in a single setting', 'Significantly less bleeding than traditional PCNL'],
        isDaycare: false,
        technology: '14-16 Fr Nephroscope & Suction Lithotripter'
      },
      {
        name: 'Laser Ureteroscopy (URS)',
        fullName: 'Semi-Rigid Ureteroscopic Lithotripsy',
        description: 'Standard laser treatment for stones lodged in the mid or lower ureter, fragmenting the calculus and extracting remnants with a nitinol basket.',
        recoveryTime: 'Discharge same evening, normal routine next day',
        advantages: ['Immediate relief of acute renal colic', 'No cuts or wounds'],
        isDaycare: true,
        technology: 'Semi-Rigid Ureteroscope'
      }
    ],
    faqs: [
      {
        question: 'Will a 6mm kidney stone pass out naturally with water and beer?',
        answer: 'Stones smaller than 4mm have an 80% chance of passing with medical expulsive therapy (hydration and alpha-blockers). Stones 6mm or larger have less than a 30% chance of passing and frequently cause ureteral obstruction, severe pain, and kidney swelling (hydronephrosis). Drinking beer is medically discouraged as alcohol causes dehydration and uric acid spikes.'
      },
      {
        question: 'Is a Double-J (JJ) stent always required after laser surgery?',
        answer: 'A soft, hair-thin internal silicone tube (JJ stent) is often placed for 5 to 10 days after RIRS to ensure the ureter does not swell shut from stone dust passage. It is completely internal, invisible from outside, and easily removed in the outpatient clinic in 2 minutes.'
      },
      {
        question: 'How do I prevent new kidney stones from forming in the future?',
        answer: 'Every stone extracted at ClearPix undergoes spectrophotometric stone analysis to identify its exact mineral composition. We then create a customized 24-hour urine metabolic plan specifying fluid, citrate, and calcium targets, reducing recurrence rates by over 85%.'
      }
    ],
    preventionTips: [
      'Maintain an intake of at least 3 liters of fluids daily so your urine remains pale, crystal clear.',
      'Add freshly squeezed lemon juice to water; natural urinary citrate inhibits calcium crystal formation.',
      'Reduce processed sodium and table salt intake to less than 2 grams per day.'
    ]
  },

  piles: {
    id: 'piles',
    route: '/piles',
    name: 'Piles',
    medicalTerm: 'Hemorrhoids',
    specialty: 'Advanced Proctology',
    headline: 'Advanced Laser Hemorrhoidoplasty with zero cutting.',
    subheadline: 'Precision diode laser energy seals inflamed venous cushions with minimal post-operative discomfort and same-day discharge.',
    summary: 'Piles (hemorrhoids) are swollen, inflamed veins in the lower rectum and anus. ClearPix offers non-excisional 1470nm diode laser procedures that shrink hemorroidal tissue from within while preserving natural sphincter integrity.',
    heroKicker: 'Day-Care Laser Proctology',
    accentColor: 'text-rose-600',
    accentBg: 'bg-rose-50',
    stats: [
      { label: 'Procedure Duration', value: '25-30 min' },
      { label: 'Discharge Window', value: '4-6 hours' },
      { label: 'Normal Activity Resumption', value: '24-48 hours' },
      { label: 'Recurrence Rate', value: '< 2.1%' }
    ],
    overviewPoints: [
      'Preservation of the anal sphincter muscle prevents post-procedural incontinence risks.',
      'Targeted 1470nm diode laser light causes selective photocoagulation of arterial nodes.',
      'No painful cuts, open wounds, dressings, or daily packing required.',
      'Covered by all major cashless health insurance providers under daycare surgical benefits.'
    ],
    symptoms: [
      {
        name: 'Painless Bleeding During Defecation',
        description: 'Fresh, bright red blood droplets in the toilet bowl or on tissue paper during or immediately following bowel movements.',
        severity: 'mild',
        category: 'Vascular'
      },
      {
        name: 'Prolapse or Tissue Protrusion',
        description: 'Soft palpable lumps that push outward during straining; may retract spontaneously (Grade II) or require manual reduction (Grade III).',
        severity: 'moderate',
        category: 'Structural'
      },
      {
        name: 'Perianal Irritation & Itching',
        description: 'Persistent pruritus and skin maceration triggered by mucus secretion from prolapsed rectal mucosa.',
        severity: 'mild',
        category: 'Cutaneous'
      },
      {
        name: 'Acute Perianal Pain & Thrombosis',
        description: 'Sudden, severe throbbing pain caused by a blood clot lodged inside an external hemorrhoidal vein (Thrombosed external pile).',
        severity: 'severe',
        category: 'Acute Complication'
      }
    ],
    causes: [
      {
        title: 'Chronic Straining & Constipation',
        description: 'Excessive downward pressure during irregular bowel movements weakens pelvic connective tissue supports.'
      },
      {
        title: 'Prolonged Sedentary Posture',
        description: 'Extended sitting increases hydrostatic pressure in pelvic venous plexuses, causing venous pooling.'
      },
      {
        title: 'Elevated Intra-Abdominal Pressure',
        description: 'Pregnancy, frequent heavy weightlifting, and chronic coughing amplify pressure on anorectal veins.'
      },
      {
        title: 'Low-Fiber Dietary Habits',
        description: 'Diets lacking soluble and insoluble fibers lead to hard, bulky stools requiring high expulsive effort.'
      }
    ],
    redFlags: [
      {
        sign: 'Continuous, Uncontrolled Bleeding',
        risk: 'Risk of acute hemodynamic instability or precipitous hemoglobin drop.',
        action: 'Seek emergency hospital admission for immediate endoscopic evaluation.'
      },
      {
        sign: 'Black, Tarry Stools (Melena)',
        risk: 'Indicates high gastrointestinal tract bleeding rather than simple hemorrhoids.',
        action: 'Urgent gastroenterology consult and upper GI endoscopy.'
      },
      {
        sign: 'Irreducible Prolapse with Severe Discoloration',
        risk: 'Strangulated pile with acute vascular compromise and tissue gangrene risk.',
        action: 'Immediate surgical intervention within 6 hours.'
      }
    ],
    treatments: [
      {
        name: 'Laser Hemorrhoidoplasty (LHP)',
        fullName: '1470nm Radial Laser Fiber Shrinkage',
        description: 'A miniature radial fiber delivers radial laser energy directly into the submucosal hemorrhoidal node, sealing the feeding arterial branches without mucosal excision.',
        recoveryTime: 'Back to desk work within 48 hours',
        advantages: ['Zero open wounds or stitches', 'Sphincter preservation', 'Negligible post-op pain score', 'Same-day home discharge'],
        isDaycare: true,
        technology: 'German Diode Laser 1470nm'
      },
      {
        name: 'MIPH / Stapled Hemorrhoidopexy',
        fullName: 'Minimally Invasive Procedure for Hemorrhoids',
        description: 'A circular mechanical stapling instrument excises a circumferential ring of loose mucosa above the dentate line, pulling prolapsed tissue back into anatomic position.',
        recoveryTime: '3-4 days recovery',
        advantages: ['Ideal for advanced Grade III & IV circumferential piles', 'Restores anatomic cushions', 'Virtually no external skin cuts'],
        isDaycare: true,
        technology: 'Endo-Surgical Circular Stapler'
      },
      {
        name: 'Ultrasound-Guided Sclerotherapy',
        fullName: 'Microfoam Endoscopic Sclerosis',
        description: 'Injection of an FDA-approved sclerosant foam directly into early-stage internal hemorrhoids under direct visualization to obliterate microscopic vessels.',
        recoveryTime: 'Immediate return to normal life',
        advantages: ['Painless 10-minute outpatient procedure', 'No anesthesia needed', 'Effective for Grade I & II bleeding'],
        isDaycare: true,
        technology: 'Polidocanol Microfoam'
      }
    ],
    faqs: [
      {
        question: 'How is Laser Hemorrhoidoplasty different from traditional open surgery?',
        answer: 'Traditional Milligan-Morgan surgery excises the hemorrhoidal tissue with surgical blades, leaving raw open wounds that take 4 to 6 weeks to heal and require painful daily dressings. ClearPix Laser Hemorrhoidoplasty uses laser energy to shrink the vein from inside without making incisions, eliminating open wounds and cutting recovery time to under 48 hours.'
      },
      {
        question: 'Will I experience pain during or after the laser procedure?',
        answer: 'The procedure is performed under short, gentle sedation or regional anesthesia so you feel no pain. Post-procedure pain is mild to moderate for 24-36 hours and easily managed with standard oral analgesics.'
      },
      {
        question: 'Is piles laser surgery covered by medical insurance?',
        answer: 'Yes. Laser Hemorrhoidoplasty is recognized by all leading health insurance networks under day-care surgical benefits. ClearPix provides cashless insurance processing with approvals within 60 minutes.'
      },
      {
        question: 'Can hemorrhoids recur after laser treatment?',
        answer: 'Because the laser energy completely obliterates the arterial feeding branches, recurrence rates are exceptionally low (under 2.1%). Maintaining adequate hydration and dietary fiber ensures long-term resolution.'
      }
    ],
    preventionTips: [
      'Consume 25-35 grams of daily dietary fiber through oats, leafy greens, legumes, and flaxseed.',
      'Drink 2.5 to 3 liters of water throughout the day to soften stool consistency.',
      'Avoid sitting on the toilet for longer than 3-5 minutes or browsing smartphones.',
      'Engage in 30 minutes of moderate aerobic activity to stimulate colon motility.'
    ]
  }
};
