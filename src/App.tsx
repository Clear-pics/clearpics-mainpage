/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { AppointmentModal } from './components/AppointmentModal';
import { WhatsAppChat } from './components/WhatsAppChat';
import { ChatBot } from './components/ChatBot';
import { FounderDetailsView } from './components/FounderDetailsView';
import { HomePage } from './pages/HomePage';
import { DiseasePage } from './pages/DiseasePage';
import { DISEASES } from './data/diseases';
import { DiseaseId } from './types';

function normalizePath(raw: string): string {
  if (!raw) return '/';
  let path = raw.trim();

  // If full URL was passed
  try {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      const u = new URL(path);
      path = u.pathname + (u.hash ? u.hash : '');
    }
  } catch {}

  // If hash router format (e.g. #/piles or #piles or /#/piles)
  if (path.includes('#')) {
    const after = path.split('#')[1];
    if (after) {
      path = after.startsWith('/') ? after : '/' + after;
    }
  }

  // Strip query string
  path = path.split('?')[0];

  // Strip trailing slashes
  if (path.length > 1 && path.endsWith('/')) {
    path = path.replace(/\/+$/, '');
  }

  return path || '/';
}

function getInitialPath(): string {
  if (typeof window === 'undefined') return '/';
  
  // Prefer hash if present and not empty, otherwise pathname
  if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#/') {
    return normalizePath(window.location.hash);
  }
  return normalizePath(window.location.pathname || '/');
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselectedDisease, setBookingPreselectedDisease] = useState<DiseaseId | undefined>(undefined);

  // Sync with browser navigation (popstate & hashchange)
  useEffect(() => {
    const handleUrlChange = () => {
      const path = getInitialPath();
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleNavigate = useCallback((path: string) => {
    const target = normalizePath(path);
    if (target !== currentPath) {
      if (typeof window !== 'undefined') {
        try {
          window.history.pushState({}, '', target);
        } catch {
          // Fallback if sandboxed iframe restricts pushState
          try {
            window.location.hash = target;
          } catch {}
        }
      }
      setCurrentPath(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  const handleOpenBooking = (diseaseId?: DiseaseId) => {
    if (diseaseId) {
      setBookingPreselectedDisease(diseaseId);
    } else {
      // Determine if currently on a disease page
      const cleanKey = currentPath.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
      if (DISEASES[cleanKey]) {
        setBookingPreselectedDisease(cleanKey as DiseaseId);
      } else {
        setBookingPreselectedDisease(undefined);
      }
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  // Determine current disease if path matches any of the 6 condition routes
  const cleanKey = currentPath.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
  const activeDisease = DISEASES[cleanKey];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD] text-slate-900 selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* 3-Zone Apple Top Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPath === '/about-us' ? (
          <FounderDetailsView
            onBackToHome={() => handleNavigate('/')}
            onOpenBooking={handleOpenBooking}
          />
        ) : activeDisease ? (
          <DiseasePage
            disease={activeDisease}
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        ) : (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Direct WhatsApp Chat Widget (Bottom-Left) */}
      <WhatsAppChat preselectedDiseaseId={bookingPreselectedDisease} />

      {/* ClearPix YOUR AI Healthcare Assistant (Bottom-Right) */}
      <ChatBot
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
      />

      {/* Comprehensive Demo Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedDiseaseId={bookingPreselectedDisease}
      />
    </div>
  );
}
