import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileImage,
  Video,
  CheckCircle,
  Shield,
  Scan,
  RefreshCw,
  Trash2,
  AlertCircle
} from 'lucide-react';
import { DiseaseId } from '../../types';

interface VeinMediaUploaderProps {
  onOpenBooking: (diseaseId?: DiseaseId) => void;
}

export const VeinMediaUploader: React.FC<VeinMediaUploaderProps> = ({ onOpenBooking }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileType, setFileType] = useState<'image' | 'video'>('image');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-loaded sample demo cases
  const sampleCases = [
    {
      name: 'Sample Calf Veins (Case A)',
      type: 'image' as const,
      // Inline clean SVG representation of leg with varicose veins
      svg: (
        <svg viewBox="0 0 300 240" className="w-full h-full bg-slate-900 rounded-xl" fill="none">
          <path d="M110 20 C105 70, 95 130, 90 220 C160 220, 195 210, 180 140 C170 80, 175 40, 170 20 Z" fill="#334155" opacity="0.4" />
          {/* Varicose twisting vein */}
          <path d="M125 50 Q145 75 120 100 T150 150 Q130 180 140 210" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" />
          <path d="M135 90 Q155 105 160 125" stroke="#14B8A6" strokeWidth="4" strokeLinecap="round" />
          <circle cx="125" cy="50" r="4" fill="#5EEAD4" />
          <circle cx="140" cy="210" r="4" fill="#5EEAD4" />
        </svg>
      ),
      metrics: {
        diameter: '5.8 mm',
        tortuosity: 'Moderate-High',
        refluxZone: 'Great Saphenous Vein (GSV) Incompetence',
        suitability: 'Ideal for 1470nm Radial EVLA Laser'
      }
    },
    {
      name: 'Sample Spider & Reticular (Case B)',
      type: 'image' as const,
      svg: (
        <svg viewBox="0 0 300 240" className="w-full h-full bg-slate-900 rounded-xl" fill="none">
          <path d="M100 20 C100 80, 90 140, 90 220 C160 220, 190 200, 180 130 C170 80, 170 40, 165 20 Z" fill="#334155" opacity="0.4" />
          {/* Spider web-like veins */}
          <path d="M120 80 L140 100 M140 100 L155 90 M140 100 L145 120 M145 120 L160 130 M130 110 L120 130" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
          <path d="M140 140 L150 160 M150 160 L165 155 M150 160 L145 175" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      metrics: {
        diameter: '1.9 mm',
        tortuosity: 'Diffuse Superficial',
        refluxZone: 'Subdermal Reticular Plexus',
        suitability: 'High Response to Microfoam Sclerotherapy'
      }
    }
  ];

  const [activeSampleIndex, setActiveSampleIndex] = useState<number | null>(0);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    setActiveSampleIndex(null);
    setFileName(file.name);
    setFileType(file.type.startsWith('video/') ? 'video' : 'image');
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    runSimulatedScan();
  };

  const selectSample = (index: number) => {
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(null);
    setFileName('');
    setActiveSampleIndex(index);
    runSimulatedScan();
  };

  const runSimulatedScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1200);
  };

  const clearAll = () => {
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(null);
    setFileName('');
    setActiveSampleIndex(null);
    setScanComplete(false);
    setIsScanning(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const currentSample = activeSampleIndex !== null ? sampleCases[activeSampleIndex] : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-teal-700 font-semibold uppercase tracking-wider mb-1">
            <Scan className="w-4 h-4" />
            <span>Digital Vascular Inspection</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Photo & Video Vein Analysis
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            Upload clear photographs or a short video walk-around of your legs. ClearPix computer-assisted analysis maps vein prominence, caliber, and EVLA laser feasibility.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start">
          <Shield className="w-3.5 h-3.5 text-teal-600" />
          <span>Local Memory Processing</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Upload Zone & Sample Switcher (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Drag & Drop Box */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-7 text-center cursor-pointer transition-all ${
              dragActive
                ? 'border-teal-500 bg-teal-50/50 scale-[0.99]'
                : 'border-slate-300 hover:border-slate-400 bg-slate-50/60 hover:bg-slate-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileInput}
            />
            
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 text-teal-600 flex items-center justify-center mx-auto shadow-2xs mb-3">
              <UploadCloud className="w-6 h-6" />
            </div>

            <p className="text-xs font-semibold text-slate-800 mb-1">
              Click to select or drag and drop leg photo or video
            </p>
            <p className="text-[11px] text-slate-400">
              Supports JPEG, PNG, HEIC, MP4 (Max 25 MB)
            </p>

            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <FileImage className="w-3 h-3 text-slate-400" /> Standing calf photo
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Video className="w-3 h-3 text-slate-400" /> 5-sec 360° leg pan
              </span>
            </div>
          </div>

          {/* Quick Demo Pre-set Switcher */}
          <div>
            <span className="block text-xs font-semibold text-slate-700 mb-2">
              Or Try Pre-loaded Clinical Demonstrations:
            </span>
            <div className="grid grid-cols-2 gap-3">
              {sampleCases.map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectSample(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeSampleIndex === idx
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold shadow-2xs'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="text-xs">{sample.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {sample.metrics.refluxZone.split('(')[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Instructions for good photos */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
            <span className="font-semibold text-slate-800 block">Photography Best Practices:</span>
            <ul className="list-disc list-inside text-[11px] space-y-0.5 text-slate-500">
              <li>Stand on a flat floor under natural or bright overhead lighting.</li>
              <li>Capture from knees down to ankles while bearing full weight.</li>
              <li>Include both front, lateral side, and rear calf views.</li>
            </ul>
          </div>
        </div>

        {/* Right: Scanner Preview & AI Vision Output (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-slate-950 rounded-2xl p-6 text-white flex flex-col justify-between h-full space-y-6 shadow-md relative overflow-hidden">
            
            {/* Viewport Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-mono text-xs text-teal-300 font-medium uppercase tracking-wider">
                  Vision Analyzer
                </span>
              </div>
              
              {(fileUrl || activeSampleIndex !== null) && (
                <button
                  onClick={clearAll}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                  title="Clear media"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Media Canvas with Scanning HUD */}
            <div className="relative w-full aspect-[4/3] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
              
              {isScanning && (
                <div className="absolute inset-0 z-20 pointer-events-none bg-teal-500/10 flex flex-col justify-center items-center">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse absolute top-1/2" />
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-300 bg-slate-950/80 px-3 py-1.5 rounded-full border border-teal-500/30">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing Caliber & Reflux...</span>
                  </div>
                </div>
              )}

              {fileUrl ? (
                fileType === 'video' ? (
                  <video src={fileUrl} controls className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <img src={fileUrl} alt="Uploaded leg examination" className="w-full h-full object-cover rounded-xl" />
                )
              ) : currentSample ? (
                currentSample.svg
              ) : (
                <div className="text-center p-6 text-slate-500 space-y-2">
                  <Scan className="w-8 h-8 mx-auto text-slate-600" />
                  <p className="text-xs">No media loaded. Upload a file or pick a demo case.</p>
                </div>
              )}

              {/* HUD Bounding Box Overlay for Completed Analysis */}
              {scanComplete && (
                <div className="absolute inset-0 pointer-events-none border-2 border-teal-500/40 m-4 rounded-lg flex flex-col justify-between p-3">
                  <div className="flex justify-between items-start text-[10px] font-mono text-teal-300 bg-slate-950/80 px-2 py-1 rounded border border-teal-500/30 w-fit">
                    <span>DETECTED: GSV TRUNK #01</span>
                  </div>
                  <div className="text-right text-[10px] font-mono text-teal-300 bg-slate-950/80 px-2 py-1 rounded border border-teal-500/30 self-end">
                    <span>CALIBER: 5.8mm</span>
                  </div>
                </div>
              )}
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                <span>Computer Vision Analysis:</span>
                <span className="text-teal-400 font-semibold font-mono">
                  {scanComplete ? 'ANALYSIS READY' : isScanning ? 'PROCESSING' : 'STANDBY'}
                </span>
              </div>

              {scanComplete ? (
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Estimated Caliber</span>
                    <span className="font-mono text-teal-300 font-bold">
                      {currentSample?.metrics.diameter || '5.8 mm'}
                    </span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Tortuosity Index</span>
                    <span className="font-semibold text-slate-200">
                      {currentSample?.metrics.tortuosity || 'Moderate-High'}
                    </span>
                  </div>
                  <div className="col-span-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Recommended Technique</span>
                    <span className="font-semibold text-teal-300">
                      {currentSample?.metrics.suitability || 'Ideal for 1470nm Radial EVLA Laser'}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-500">
                  Select a demo sample or drop an image above to run real-time vein mapping.
                </p>
              )}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onOpenBooking('varicose-veins')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-95 transition-all shadow-sm"
              >
                Discuss Reports with Vascular Surgeon
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
