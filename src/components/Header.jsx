import React from 'react';
import { FiberManualRecord, Info, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-emerald-900 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#g)" strokeWidth="1">
            {Array.from({ length: 60 }).map((_, i) => (
              <path key={i} d={`M ${-200 + i * 20} -50 C ${100 + i * 10} 100, ${300 + i * 5} 200, 900 500`} opacity={(i % 7) / 10} />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiberManualRecord className="text-emerald-300" />
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Fiber Optics Lab — Numerical Aperture Simulator
            </h1>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#theory" className="hover:text-emerald-300 flex items-center gap-2"><Info size={16}/>Theory</a>
            <a href="#simulation" className="hover:text-emerald-300 flex items-center gap-2"><Settings size={16}/>Simulation</a>
            <a href="#conclusion" className="hover:text-emerald-300">Conclusion</a>
          </nav>
        </div>
        <p className="mt-6 max-w-3xl text-sm sm:text-base text-emerald-100/90">
          Explore how light travels through an optical fiber, visualize total internal reflection in 3D, and calculate the numerical aperture and acceptance angle for different refractive indices.
        </p>
      </div>
    </header>
  );
}
