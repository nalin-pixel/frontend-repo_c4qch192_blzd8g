import React from 'react';

export default function Theory() {
  return (
    <section id="theory" className="relative bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Theory: Numerical Aperture (NA) & Acceptance Angle</h2>
        <p className="mt-4 text-slate-300 leading-7">
          Numerical Aperture (NA) quantifies the light-gathering ability of an optical fiber. For a step-index fiber
          with core refractive index n₁ and cladding refractive index n₂ (n₁ &gt; n₂), the NA is given by
          <span className="font-semibold text-emerald-300"> NA = √(n₁² − n₂²) </span> for light entering from air
          (n₀ ≈ 1). The acceptance angle 2θₐ is the full cone angle in air within which incoming rays are guided
          through the core by total internal reflection at the core–cladding boundary.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-lg font-medium text-emerald-300">Key Relations</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>NA = n₀ · sin(θₐ) ≈ sin(θₐ) in air</li>
              <li>NA = √(n₁² − n₂²) for step-index fibers</li>
              <li>Acceptance half-angle θₐ = arcsin(NA)</li>
              <li>V-number V = (2πa/λ) · NA determines mode count</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-lg font-medium text-indigo-300">Physical Insight</h3>
            <p className="mt-2 text-slate-300">
              Rays launched within the acceptance cone refract into the core and undergo total internal reflection when
              the incidence angle at the core–cladding interface exceeds the critical angle. Lower cladding index or
              higher core index increases NA, allowing a wider input cone and higher coupling efficiency.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-300">
          In practice, NA influences brightness, coupling from LEDs/lasers, and the number of modes. This app lets you
          adjust n₁ (core) and n₂ (cladding), see the 3D ray path intuition, and compute NA and acceptance angle.
        </p>
      </div>
    </section>
  );
}
