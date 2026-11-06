import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Play,
  Pause,
  Image as ImageIcon,
  Video as VideoIcon,
  MessageSquareHeart,
  Star,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { DiseaseId } from '../types';

type GalleryMode = 'images' | 'videos' | 'testimonials';

interface ImageGalleryItem {
  id: string;
  name: string;
  subTitle: string;
  image: string;
  caption: string;
  speciality: string;
}

interface VideoGalleryItem {
  id: string;
  title: string;
  subTitle: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
  speciality: string;
}

interface TestimonialGalleryItem {
  id: string;
  patientName: string;
  ageLocation: string;
  conditionTreated: string;
  doctorName: string;
  quote: string;
  rating: number;
  avatar: string;
}

// 1. Image Gallery Data
const IMAGE_ITEMS: ImageGalleryItem[] = [
  {
    id: 'img-1',
    name: 'Varicose Veins EVLA Laser',
    subTitle: '1470nm Radial Laser Ablation & Doppler Mapping',
    image: '/images/varicose_veins.webp',
    caption: 'EVLA 1470nm Radial Laser Closure with Duplex Doppler Guidance',
    speciality: 'Endovascular Surgery'
  },
  {
    id: 'img-2',
    name: 'Gallbladder Stones 3D',
    subTitle: '3D HD Laparoscopic Cholecystectomy',
    image: '/images/gallbladder_stones.webp',
    caption: 'Scarless Laparoscopic Gallbladder Removal with Same-Day Mobility',
    speciality: 'Laparoscopic GI'
  },
  {
    id: 'img-3',
    name: 'Hernia 3D Mesh Repair',
    subTitle: 'Tension-Free 3D Contoured Mesh Placement',
    image: '/images/hernia_repair.webp',
    caption: 'Micro-Tension Anatomical Mesh Repair with <1% Recurrence',
    speciality: 'Hernia Surgery'
  },
  {
    id: 'img-4',
    name: 'Thyroid Scarless RFA',
    subTitle: 'Ultrasound-Guided Radiofrequency Ablation',
    image: '/images/thyroid_ablation.jpg',
    caption: 'Targeted RFA Needle Ablation Preserving Natural Thyroid Function',
    speciality: 'Interventional Radiology'
  },
  {
    id: 'img-5',
    name: 'Kidney Stones Laser RIRS',
    subTitle: 'Retrograde Intrarenal Holmium Laser Dusting',
    image: '/images/kidney_stones.webp',
    caption: 'Flexible Ureteroscopy with High-Frequency Holmium Laser Dusting',
    speciality: 'Laser Urology'
  },
  {
    id: 'img-6',
    name: 'Piles Laser LHP Protocol',
    subTitle: 'Sub-Millimeter Sphincter-Sparing Laser Closure',
    image: '/images/piles_patient.jpg',
    caption: 'Precision Laser Hemorrhoidoplasty with Zero Incontinence Risk',
    speciality: 'Laser Proctology'
  },
  {
    id: 'img-7',
    name: 'Modern Daycare Surgical Suite',
    subTitle: 'NABH/JCI Accredited Infrastructure',
    image: '/images/about_us_facility.jpg',
    caption: 'Laminar Airflow Operation Theatres with Rapid Daycare Discharge',
    speciality: 'Facility Infrastructure'
  },
  {
    id: 'img-8',
    name: 'High-Precision Duplex Doppler',
    subTitle: 'Vascular & Venous Hemodynamic Analysis',
    image: '/images/dvt_vascular.jpg',
    caption: 'Pre-Operative Acoustic Vascular Mapping for Target Accuracy',
    speciality: 'Vascular Diagnostics'
  }
];

// 2. Video Gallery Data
const VIDEO_ITEMS: VideoGalleryItem[] = [
  {
    id: 'vid-1',
    title: 'EVLA Laser Procedure Walkthrough',
    subTitle: 'Step-by-step 1470nm radial laser varicose vein closure',
    thumbnail: '/images/varicose_veins.webp',
    duration: '03:45',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&rel=0',
    speciality: 'Varicose Veins'
  },
  {
    id: 'vid-2',
    title: '3D Laparoscopic Cholecystectomy',
    subTitle: 'Micro-incision 4K 3D gallstone removal demonstration',
    thumbnail: '/images/gallbladder_stones.webp',
    duration: '04:12',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&rel=0',
    speciality: 'Gallbladder Stones'
  },
  {
    id: 'vid-3',
    title: 'No-Cut Laser RIRS Stone Dusting',
    subTitle: 'Flexible ureteroscopy pulverizing hard renal calculi',
    thumbnail: '/images/kidney_stones.webp',
    duration: '03:20',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&rel=0',
    speciality: 'Kidney Stones'
  },
  {
    id: 'vid-4',
    title: '3D Keyhole Hernia Mesh Repair',
    subTitle: 'Anatomical contoured mesh placement without muscle cuts',
    thumbnail: '/images/hernia_repair.webp',
    duration: '02:50',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&rel=0',
    speciality: 'Hernia Repair'
  },
  {
    id: 'vid-5',
    title: 'Scarless Ultrasound Thyroid RFA',
    subTitle: 'Outpatient needle radiofrequency nodule ablation',
    thumbnail: '/images/thyroid_ablation.jpg',
    duration: '03:15',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&rel=0',
    speciality: 'Thyroid Ablation'
  },
  {
    id: 'vid-6',
    title: 'Laser Hemorrhoidoplasty (LHP)',
    subTitle: 'Sphincter-preserving daycare protocol with zero stitches',
    thumbnail: '/images/piles_patient.jpg',
    duration: '02:35',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&rel=0',
    speciality: 'Piles Care'
  }
];

// 3. Patient Testimonials Data
const TESTIMONIAL_ITEMS: TestimonialGalleryItem[] = [
  {
    id: 'test-1',
    patientName: 'Ramesh K.',
    ageLocation: 'Age 48 · Bangalore',
    conditionTreated: 'Varicose Veins (EVLA Laser)',
    doctorName: 'Dr. Aditi Sharma',
    quote:
      'I walked out of the daycare clinic within 3 hours under my own steam. Heavy leg aches and night cramps vanished completely by day 2. 100% cashless insurance processed in under an hour!',
    rating: 5,
    avatar: '/images/dr_rajesh_nair.jpg'
  },
  {
    id: 'test-2',
    patientName: 'Sunita M.',
    ageLocation: 'Age 42 · Mumbai',
    conditionTreated: 'Gallbladder Stones (3D Keyhole)',
    doctorName: 'Dr. Meera Venkatesh',
    quote:
      'Suffered excruciating gallbladder attacks for 6 months. Dr. Meera completed the 3D keyhole surgery with barely visible pin-prick incisions. Returned to normal home routine in 48 hours.',
    rating: 5,
    avatar: '/images/dr_meera_venkatesh.jpg'
  },
  {
    id: 'test-3',
    patientName: 'Vikram S.',
    ageLocation: 'Age 39 · Pune',
    conditionTreated: 'Kidney Stones (Laser RIRS)',
    doctorName: 'Dr. Siddharth Mehta',
    quote:
      'A 12mm kidney stone was pulverized into fine sand through natural passages—zero skin cuts or painful drainage tubes. ClearPix team handled all hospital paperwork flawlessly.',
    rating: 5,
    avatar: '/images/dr_siddharth_mehta.jpg'
  },
  {
    id: 'test-4',
    patientName: 'Ananya D.',
    ageLocation: 'Age 34 · Hyderabad',
    conditionTreated: 'Thyroid Nodule (Scarless RFA)',
    doctorName: 'Dr. Kavita Menon',
    quote:
      'I was terrified of a surgical neck scar. Ultrasound RFA shrank my nodule completely without a single stitch, and my thyroid hormones remain 100% natural. No lifelong pills!',
    rating: 5,
    avatar: '/images/dr_kavita_menon.jpg'
  },
  {
    id: 'test-5',
    patientName: 'Pradeep N.',
    ageLocation: 'Age 52 · Chennai',
    conditionTreated: 'Piles Care (1470nm Laser LHP)',
    doctorName: 'Dr. Rajesh Nair',
    quote:
      'Delayed treatment for years fearing pain. German laser treatment took 25 minutes with practically no post-op discomfort. The care coordinator stayed in touch daily throughout recovery.',
    rating: 5,
    avatar: '/images/piles_patient.jpg'
  },
  {
    id: 'test-6',
    patientName: 'Kavita R.',
    ageLocation: 'Age 45 · Delhi',
    conditionTreated: 'Inguinal Hernia (3D Mesh Repair)',
    doctorName: 'Dr. Meera Venkatesh',
    quote:
      'Outstanding transparency! Exact cost breakdown provided upfront with zero hidden charges. The lightweight 3D mesh repair gave me complete freedom to resume workouts.',
    rating: 5,
    avatar: '/images/dr_aditi_sharma.jpg'
  }
];

export const GallerySection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<GalleryMode>('images');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Modals & Inline playback
  const [selectedZoomPhoto, setSelectedZoomPhoto] = useState<{ url: string; title: string; sub: string } | null>(null);
  const [inlinePlayingVideoId, setInlinePlayingVideoId] = useState<string | null>(null);

  // Screen sizing
  const [windowWidth, setWindowWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine current items count based on mode
  const currentCount =
    activeMode === 'images'
      ? IMAGE_ITEMS.length
      : activeMode === 'videos'
      ? VIDEO_ITEMS.length
      : TESTIMONIAL_ITEMS.length;

  // Reset index when changing modes
  const handleModeChange = (mode: GalleryMode) => {
    setActiveMode(mode);
    setActiveIndex(0);
    setInlinePlayingVideoId(null);
  };

  // Next and Prev handlers
  const handlePrev = useCallback(() => {
    setInlinePlayingVideoId(null);
    setActiveIndex((prev) => (prev === 0 ? currentCount - 1 : prev - 1));
  }, [currentCount]);

  const handleNext = useCallback(() => {
    setInlinePlayingVideoId(null);
    setActiveIndex((prev) => (prev === currentCount - 1 ? 0 : prev + 1));
  }, [currentCount]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || inlinePlayingVideoId) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext, inlinePlayingVideoId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedZoomPhoto) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, selectedZoomPhoto]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  return (
    <section id="gallery-section" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-4 sm:p-10 lg:p-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Media Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {activeMode === 'images' && 'Clinical Image Gallery'}
            {activeMode === 'videos' && 'Surgical Video Walkthroughs'}
            {activeMode === 'testimonials' && 'Patient Recovery Stories'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {activeMode === 'images' &&
              'High-definition procedural archives, intraoperative imaging, and diagnostic case documentation across 6 specialties.'}
            {activeMode === 'videos' &&
              'Live procedural explanations, 3D surgical animations, and guided walkthroughs by our specialist surgical directors.'}
            {activeMode === 'testimonials' &&
              'Verified real patient experiences detailing same-day discharge, rapid recovery, and 100% cashless pre-authorization.'}
          </p>

          {/* Auto-play Pause/Play Control */}
          <div className="flex items-center justify-center gap-2.5 mt-3">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
              title={isPlaying ? 'Pause rotation' : 'Resume rotation'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-teal-700 stroke-[2.5]" />
                  <span>Pause Rotation</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-teal-700 stroke-[2.5]" />
                  <span>Auto Rotate</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3D Fan / Stacked Polaroid Gallery Stage Centered */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl py-8 sm:py-12 px-2 sm:px-8 overflow-hidden select-none flex flex-col items-center justify-center"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(15, 118, 110, 0.08) 0%, rgba(241, 245, 249, 0.45) 50%, rgba(255, 255, 255, 0) 100%)',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Ambient Radial Lighting Ring */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[320px] sm:w-[540px] h-[320px] sm:h-[400px] rounded-full bg-teal-500/5 blur-3xl" />
          </div>

          {/* Left Arrow Navigation (<) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous item"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-xl border border-slate-200/90 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Right Arrow Navigation (>) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next item"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-xl border border-slate-200/90 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* The Fanned Stack of Polaroid Cards */}
          <div className="relative h-[380px] sm:h-[440px] w-full flex items-center justify-center mx-auto">
            
            {/* MODE 1: IMAGE GALLERY */}
            {activeMode === 'images' &&
              IMAGE_ITEMS.map((item, index) => {
                let diff = index - activeIndex;
                if (diff > 3) diff -= IMAGE_ITEMS.length;
                if (diff < -3) diff += IMAGE_ITEMS.length;

                const isCenter = diff === 0;
                const absDiff = Math.abs(diff);

                let translateX = 0;
                let translateY = 0;
                let scale = 1;
                let rotate = 0;
                let zIndex = 30;
                let opacity = 1;
                let filter = 'brightness(1)';

                if (isCenter) {
                  zIndex = 35;
                  scale = 1;
                  rotate = 0;
                  opacity = 1;
                } else if (absDiff === 1) {
                  zIndex = 25;
                  scale = 0.88;
                  rotate = diff > 0 ? 5 : -5;
                  const baseOffset = isMobile ? 70 : isTablet ? 115 : 160;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = isMobile ? 8 : 10;
                  opacity = 0.9;
                  filter = 'brightness(0.95)';
                } else if (absDiff === 2) {
                  zIndex = 15;
                  scale = 0.74;
                  rotate = diff > 0 ? 10 : -10;
                  const baseOffset = isMobile ? 130 : isTablet ? 210 : 290;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = isMobile ? 16 : 22;
                  opacity = 0.65;
                  filter = 'brightness(0.88)';
                } else {
                  zIndex = 5;
                  scale = 0.6;
                  rotate = diff > 0 ? 15 : -15;
                  const baseOffset = isMobile ? 170 : isTablet ? 280 : 380;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = 28;
                  opacity = 0;
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] md:w-[390px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isCenter ? 'cursor-default pointer-events-auto' : 'cursor-pointer hover:opacity-100'
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      filter,
                      transform: `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale}) rotate(${rotate}deg)`,
                    }}
                  >
                    <div className="bg-white p-3 sm:p-4 pb-4 sm:pb-5 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200/90 transition-transform">
                      <div className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-900 border border-slate-200/60 shadow-inner">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] text-teal-300 font-bold border border-white/20">
                          {item.speciality}
                        </div>
                        {isCenter && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedZoomPhoto({
                                url: item.image,
                                title: item.name,
                                sub: item.caption,
                              });
                            }}
                            className="absolute inset-0 bg-slate-950/20 hover:bg-slate-950/40 transition-colors flex items-center justify-center text-white opacity-0 hover:opacity-100 cursor-pointer"
                            title="Zoom clinical image"
                          >
                            <span className="p-2.5 rounded-full bg-black/60 backdrop-blur-md">
                              <ZoomIn className="w-5 h-5 text-white" />
                            </span>
                          </button>
                        )}
                      </div>

                      <div className="pt-2.5 sm:pt-3 text-center">
                        <div className="font-serif italic text-lg sm:text-2xl text-slate-900 font-bold tracking-tight">
                          {item.name}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5 truncate max-w-full px-2 font-medium">
                          {item.subTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* MODE 2: VIDEO GALLERY */}
            {activeMode === 'videos' &&
              VIDEO_ITEMS.map((item, index) => {
                let diff = index - activeIndex;
                if (diff > 3) diff -= VIDEO_ITEMS.length;
                if (diff < -3) diff += VIDEO_ITEMS.length;

                const isCenter = diff === 0;
                const absDiff = Math.abs(diff);

                let translateX = 0;
                let translateY = 0;
                let scale = 1;
                let rotate = 0;
                let zIndex = 30;
                let opacity = 1;
                let filter = 'brightness(1)';

                if (isCenter) {
                  zIndex = 35;
                  scale = 1;
                  rotate = 0;
                  opacity = 1;
                } else if (absDiff === 1) {
                  zIndex = 25;
                  scale = 0.88;
                  rotate = diff > 0 ? 5 : -5;
                  const baseOffset = isMobile ? 70 : isTablet ? 115 : 160;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = isMobile ? 8 : 10;
                  opacity = 0.9;
                  filter = 'brightness(0.95)';
                } else if (absDiff === 2) {
                  zIndex = 15;
                  scale = 0.74;
                  rotate = diff > 0 ? 10 : -10;
                  const baseOffset = isMobile ? 130 : isTablet ? 210 : 290;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = isMobile ? 16 : 22;
                  opacity = 0.65;
                  filter = 'brightness(0.88)';
                } else {
                  zIndex = 5;
                  scale = 0.6;
                  rotate = diff > 0 ? 15 : -15;
                  const baseOffset = isMobile ? 170 : isTablet ? 280 : 380;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = 28;
                  opacity = 0;
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] md:w-[390px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isCenter ? 'cursor-default pointer-events-auto' : 'cursor-pointer hover:opacity-100'
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      filter,
                      transform: `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale}) rotate(${rotate}deg)`,
                    }}
                  >
                    <div className="bg-white p-3 sm:p-4 pb-4 sm:pb-5 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200/90 transition-transform">
                      <div className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden bg-black border border-slate-200/60 shadow-inner group">
                        {isCenter && inlinePlayingVideoId === item.id ? (
                          /* Inline Video Player running right inside this small card */
                          <div className="relative w-full h-full bg-black">
                            <iframe
                              src={item.videoUrl}
                              title={item.title}
                              className="w-full h-full border-0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                            {/* Inline Close / Return Button */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setInlinePlayingVideoId(null);
                              }}
                              className="absolute top-2 right-2 z-30 px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-white text-[11px] font-bold flex items-center gap-1 backdrop-blur-md border border-white/20 shadow-md cursor-pointer transition-colors"
                              title="Stop and return to card"
                              aria-label="Close inline video"
                            >
                              <X className="w-3.5 h-3.5" />
                              <span>Close</span>
                            </button>
                          </div>
                        ) : (
                          /* Video Thumbnail Card with Play Button */
                          <div className="relative w-full h-full">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Gradient shade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />

                            {/* Top Badges */}
                            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] text-teal-300 font-bold border border-white/20">
                              {item.speciality}
                            </div>
                            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] text-white font-mono font-bold">
                              {item.duration}
                            </div>

                            {/* Centered Play Button (Only interactive on center card) */}
                            {isCenter ? (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setInlinePlayingVideoId(item.id);
                                  setIsPlaying(false); // Pause rotation while watching inline
                                }}
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                                aria-label={`Play video inline: ${item.title}`}
                              >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-600/95 hover:bg-teal-500 text-white flex items-center justify-center shadow-2xl border-2 border-white/90 group-hover/play:scale-110 active:scale-95 transition-all">
                                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                                </div>
                              </button>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 text-white/90 flex items-center justify-center border border-white/40">
                                  <Play className="w-5 h-5 fill-white/80 ml-0.5" />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="pt-2.5 sm:pt-3 text-center">
                        <div className="font-serif italic text-lg sm:text-2xl text-slate-900 font-bold tracking-tight">
                          {item.title}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5 truncate max-w-full px-2 font-medium">
                          {item.subTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* MODE 3: PATIENT TESTIMONIALS */}
            {activeMode === 'testimonials' &&
              TESTIMONIAL_ITEMS.map((item, index) => {
                let diff = index - activeIndex;
                if (diff > 3) diff -= TESTIMONIAL_ITEMS.length;
                if (diff < -3) diff += TESTIMONIAL_ITEMS.length;

                const isCenter = diff === 0;
                const absDiff = Math.abs(diff);

                let translateX = 0;
                let translateY = 0;
                let scale = 1;
                let rotate = 0;
                let zIndex = 30;
                let opacity = 1;
                let filter = 'brightness(1)';

                if (isCenter) {
                  zIndex = 35;
                  scale = 1;
                  rotate = 0;
                  opacity = 1;
                } else if (absDiff === 1) {
                  zIndex = 25;
                  scale = 0.88;
                  rotate = diff > 0 ? 5 : -5;
                  const baseOffset = isMobile ? 70 : isTablet ? 115 : 160;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = isMobile ? 8 : 10;
                  opacity = 0.9;
                  filter = 'brightness(0.95)';
                } else if (absDiff === 2) {
                  zIndex = 15;
                  scale = 0.74;
                  rotate = diff > 0 ? 10 : -10;
                  const baseOffset = isMobile ? 130 : isTablet ? 210 : 290;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = isMobile ? 16 : 22;
                  opacity = 0.65;
                  filter = 'brightness(0.88)';
                } else {
                  zIndex = 5;
                  scale = 0.6;
                  rotate = diff > 0 ? 15 : -15;
                  const baseOffset = isMobile ? 170 : isTablet ? 280 : 380;
                  translateX = diff > 0 ? baseOffset : -baseOffset;
                  translateY = 28;
                  opacity = 0;
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] md:w-[390px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isCenter ? 'cursor-default pointer-events-auto' : 'cursor-pointer hover:opacity-100'
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      filter,
                      transform: `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale}) rotate(${rotate}deg)`,
                    }}
                  >
                    <div className="bg-white p-4 sm:p-5 pb-5 sm:pb-6 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200/90 transition-transform flex flex-col justify-between">
                      {/* Top Header of Polaroid */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.avatar}
                            alt={item.doctorName}
                            className="w-8 h-8 rounded-full object-cover border border-slate-200"
                          />
                          <div>
                            <span className="text-xs font-bold text-slate-900 block leading-tight">
                              {item.patientName}
                            </span>
                            <span className="text-[10px] text-slate-500 block leading-tight">
                              {item.ageLocation}
                            </span>
                          </div>
                        </div>

                        {/* 5 Stars */}
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(item.rating)].map((_, rIdx) => (
                            <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Middle Quote Content */}
                      <div className="py-3 sm:py-4">
                        <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block mb-2">
                          {item.conditionTreated}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed line-clamp-4 font-serif">
                          "{item.quote}"
                        </p>
                      </div>

                      {/* Polaroid Bottom Doctor Credit */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1 text-emerald-700 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified Recovery</span>
                        </span>
                        <span className="font-semibold text-slate-700">
                          {item.doctorName}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-7 z-40 relative">
            {[...Array(currentCount)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 sm:w-9 h-3 sm:h-3.5 bg-teal-700'
                    : 'w-3 sm:w-3.5 h-3 sm:h-3.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* 3 NAVIGATION BUTTONS PLACED PROMINENTLY BELOW THE GALLERY */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col items-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Select Showcase Mode:
          </span>

          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner gap-1.5 sm:gap-2 flex-wrap justify-center">
            {/* Button 1: Image Gallery */}
            <button
              type="button"
              onClick={() => handleModeChange('images')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                activeMode === 'images'
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-900/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <ImageIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span>Image Gallery</span>
            </button>

            {/* Button 2: Video Gallery */}
            <button
              type="button"
              onClick={() => handleModeChange('videos')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                activeMode === 'videos'
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-900/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <VideoIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span>Video Gallery</span>
            </button>

            {/* Button 3: Patients Testimonials */}
            <button
              type="button"
              onClick={() => handleModeChange('testimonials')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                activeMode === 'testimonials'
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-900/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <MessageSquareHeart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span>Patients Testimonials</span>
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal for Images */}
      {selectedZoomPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedZoomPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedZoomPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/90 text-white flex items-center justify-center hover:bg-slate-700 transition-colors shadow-lg cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedZoomPhoto.url}
                alt={selectedZoomPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <h4 className="text-lg font-bold text-white">{selectedZoomPhoto.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{selectedZoomPhoto.sub}</p>
              </div>

              <button
                onClick={() => setSelectedZoomPhoto(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
