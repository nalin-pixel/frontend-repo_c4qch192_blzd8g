import React from 'react';

export default function Conclusion() {
  return (
    <section id="conclusion" className="relative bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.12),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Conclusion & Practical Notes</h2>
        <div className="mt-4 space-y-4 text-slate-300 leading-7">
          <p>
            In this lab, you explored how the refractive indices of the core (n₁) and cladding (n₂) control light
            guidance in a step-index optical fiber. Increasing n₁ or decreasing n₂ increases the index contrast, which
            raises the Numerical Aperture (NA) and widens the acceptance cone. A larger NA improves coupling from
            broad sources but generally supports more modes, which can increase modal dispersion in multimode fibers.
          </p>
          <p>
            The acceptance half-angle θₐ = arcsin(NA) determines which incoming rays are successfully guided via total
            internal reflection. Rays incident beyond this angle leak into the cladding and are not transmitted over
            long distances. For single-mode operation, designers choose small core radii and moderate NA such that the
            V-number V = (2πa/λ) · NA is below ~2.405. Multimode fibers (larger a, higher NA) are useful for short,
            high-brightness links where dispersion is less critical.
          </p>
          <p>
            Practically, NA informs connector alignment tolerance, lens design for coupling, brightness, and overall
            efficiency. Always ensure n₁ &gt; n₂ and use anti-reflection or index-matching considerations if the launch
            medium differs from air. The simulator here assumes air at the input; in liquids or other media, replace n₀
            in NA = n₀·sin(θₐ) accordingly.
          </p>
        </div>
      </div>
    </section>
  );
}
