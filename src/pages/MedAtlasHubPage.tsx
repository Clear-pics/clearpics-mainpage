import React, { useState, useMemo } from 'react';
import { PortalHeader } from '../components/portal/PortalHeader';
import { PortalHero } from '../components/portal/PortalHero';
import { TrustRibbon } from '../components/portal/TrustRibbon';
import { PortalGrid } from '../components/portal/PortalGrid';
import { VisualAtlasFeature } from '../components/portal/VisualAtlasFeature';
import { PortalFacultySection } from '../components/portal/PortalFacultySection';
import { PortalCenterSection } from '../components/portal/PortalCenterSection';
import { PortalPreviewModal } from '../components/portal/PortalPreviewModal';
import { RequestAccessModal } from '../components/portal/RequestAccessModal';
import { DocumentationModal } from '../components/portal/DocumentationModal';
import { PortalFooter } from '../components/portal/PortalFooter';
import { CompanyMissionSections } from '../components/CompanyMissionSections';
import { PORTAL_MODULES } from '../data/portalData';
import { ClinicalPortalItem, PortalCategory } from '../types/portal';

interface MedAtlasHubPageProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

export const MedAtlasHubPage: React.FC<MedAtlasHubPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PortalCategory>('All');
  const [previewModule, setPreviewModule] = useState<ClinicalPortalItem | null>(null);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('conditions-grid');

  // Filter modules by search query & category
  const filteredModules = useMemo(() => {
    return PORTAL_MODULES.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCategory = item.category.toLowerCase().includes(q);
      const inStaging = item.stagingSystem.toLowerCase().includes(q);
      const inTags = item.featureTags.some((tag) => tag.toLowerCase().includes(q));

      return inTitle || inDesc || inCategory || inStaging || inTags;
    });
  }, [searchQuery, selectedCategory]);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLiveUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1A2421] selection:bg-[#2E6E62]/20 selection:text-[#1F4E46] font-sans">
      
      {/* 1. Frosted Sticky Header & Navigation */}
      <PortalHeader
        onOpenAccessModal={() => setIsAccessModalOpen(true)}
        onOpenDocModal={() => setIsDocModalOpen(true)}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
        onNavigate={onNavigate}
        modulesCount={PORTAL_MODULES.length}
      />

      <main className="flex-1 space-y-4">
        
        {/* 2. Hero Section with Pulse Badge, Gradient Title & Search/Filter (includes Vecteezy Doctor BG) */}
        <PortalHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          totalCount={PORTAL_MODULES.length}
          filteredCount={filteredModules.length}
        />

        {/* 5. Minimalist Quick Stats / Trust Ribbon */}
        <TrustRibbon />

        {/* 3. Main Feature Cards (Portal Grid with authentic medical images for all modules) */}
        <PortalGrid
          modules={filteredModules}
          onPreview={(mod) => setPreviewModule(mod)}
          onNavigate={onNavigate}
          searchQuery={searchQuery}
          onResetSearch={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}
        />

        {/* Highlight Feature: Flagship Varicose Veins Live Web App & CEAP Interactive Visualizer (with varicose_veins.webp) */}
        <VisualAtlasFeature 
          onOpenLiveUrl={handleOpenLiveUrl} 
          onNavigate={onNavigate}
        />

        {/* Clinical Faculty: Specialist Doctors with authentic photos */}
        <PortalFacultySection onOpenBooking={onOpenBooking || (() => setIsAccessModalOpen(true))} />

        {/* Clinical Daycare Facility: Center showcase with authentic facility photo */}
        <PortalCenterSection onOpenAccessModal={() => setIsAccessModalOpen(true)} />

        {/* Core Business Focus, Patient-First Charter, and Sustainable Healthcare Business */}
        <CompanyMissionSections onOpenBooking={onOpenBooking} variant="meridian" />

      </main>

      {/* 6. Clean Medical Footer */}
      <PortalFooter
        onOpenAccessModal={() => setIsAccessModalOpen(true)}
        onOpenDocModal={() => setIsDocModalOpen(true)}
        onScrollToTop={handleScrollToTop}
      />

      {/* Interactive Staging Breakdown & Preview Modal with Condition Photo Banner */}
      <PortalPreviewModal
        module={previewModule}
        onNavigate={onNavigate}
        onClose={() => setPreviewModule(null)}
      />

      {/* Request Access & Feedback Modal */}
      <RequestAccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />

      {/* Clinical Grading Standards Documentation Modal */}
      <DocumentationModal
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
      />

    </div>
  );
};
