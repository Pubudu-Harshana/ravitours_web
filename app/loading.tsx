import Image from "next/image";

/**
 * app/loading.tsx — Next.js App Router route-level loading UI.
 *
 * Automatically rendered by Next.js as a React Suspense boundary while a
 * page or route segment is loading. Provides a clean, modern, luxury travel
 * transition experience consistent with the Ravi Tours & Travels identity.
 *
 * This is a Server Component.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="fixed inset-0 z-[99990] flex flex-col items-center justify-center bg-[#07345A]/75 backdrop-blur-md select-none pointer-events-auto transition-opacity"
    >
      {/* Slim luminous travel trajectory line at the very top of the viewport */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-[99999] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-transparent via-[#F6A623] to-[#FFD166] shadow-[0_0_10px_#F6A623]"
          style={{
            animation: "rt-route-glide 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          }}
        />
      </div>

      {/* Centerpiece Modern Travel Card */}
      <div className="relative flex flex-col items-center px-6 py-6 rounded-3xl bg-[#021627]/90 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-[240px] w-full text-center">
        {/* Ambient badge glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#087EA4]/20 via-[#F6A623]/25 to-[#0FA3A3]/20 blur-xl -z-10" />

        {/* Brand Emblem with Spinning Golden Halo */}
        <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
          {/* Rotating dashed ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#F6A623]/60 animate-spin"
            style={{ animationDuration: "10s" }}
          />

          {/* Central logo circle */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center border border-[#F6A623]/40">
            <Image
              src="/ravilogo.svg"
              alt="Ravi Tours logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Brand Title (Minimal & Clean) */}
        <div className="flex flex-col items-center space-y-0.5">
          <span className="font-extrabold text-sm tracking-[0.25em] text-white">
            RAVI TOURS
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#F6A623] font-semibold">
            Sri Lanka
          </span>
        </div>
      </div>

      {/* Keyframe animation for the top trajectory beam */}
      <style>{`
        @keyframes rt-route-glide {
          0% {
            transform: translateX(-100%);
            width: 35%;
          }
          50% {
            width: 65%;
          }
          100% {
            transform: translateX(350%);
            width: 35%;
          }
        }
      `}</style>
    </div>
  );
}
