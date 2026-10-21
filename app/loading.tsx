/**
 * app/loading.tsx — Next.js App Router route-level loading UI.
 *
 * Automatically used by Next.js as a React Suspense fallback while a route
 * segment is streaming in. Displays a fine, luxury travel beam at the top
 * of the viewport, preserving page context and user control.
 *
 * This is a Server Component.
 */
export default function Loading() {
  return (
    <>
      {/* Slim travel trajectory line at top of viewport */}
      <div
        role="status"
        aria-label="Loading page content"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99998,
          height: "2px",
          background: "rgba(3, 39, 67, 0.15)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(246, 166, 35, 0.4) 30%, #F6A623 85%, #FFFFFF 100%)",
            boxShadow: "0 0 8px rgba(246, 166, 35, 0.5)",
            animation: "rt-route-glide 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          }}
        />
      </div>

      {/* Inline keyframes */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style>{`
        @keyframes rt-route-glide {
          0% {
            left: -35%;
            width: 30%;
          }
          50% {
            left: 20%;
            width: 55%;
          }
          100% {
            left: 100%;
            width: 30%;
          }
        }
      `}</style>
    </>
  );
}
