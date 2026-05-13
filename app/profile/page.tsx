import React from "react";

const Profile = () => {
  return (
    <section className="max-w-4xl mx-auto pt-40 pb-16 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            About
          </h2>
        </div>

        <div className="md:col-span-9">
          <p className="font-serif text-2xl leading-relaxed text-zinc-900 dark:text-zinc-100 italic mb-8">
            Founded as a digital broadsheet for the modern era,{" "}
            <span className="font-mono font-bold not-italic">NULSPACES</span>{" "}
            explores the intersection of aesthetic discipline and human
            experience.
          </p>

          <div className="font-sans text-sm leading-7 text-zinc-600 dark:text-zinc-400 space-y-4 max-w-2xl">
            <p>
              Here, the focus is on the &ldquo;null&rdquo; the essential, the
              quiet, and the unoccupied. As I relocate across the desert and
              shift my perspective from engineering software to navigating the
              literal systems of transit, these essays serve as field notes on
              design, power, and the radical act of maintaining identity in a
              world of defaults.
            </p>

            <p className="font-mono text-[10px] uppercase tracking-tighter pt-4">
              Logistics &bull; Spatial Philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
