"use client";

import { useEffect, useRef } from "react";

// A single-file, SSR-safe Leaflet + OSM map for Next.js (App Router or Pages Router)
// Pinch gestures zoom the map (not the page). No react-leaflet required.
// Drop this file anywhere in your app (e.g., app/components/LeafletOSM.tsx) and import it.
// NOTE: You must also import Leaflet's CSS globally (see instructions in chat).

export type LeafletOSMProps = {
  center?: [number, number]; // [lat, lng]
  zoom?: number;
  className?: string; // e.g. "h-[70vh] rounded-2xl overflow-hidden"
  scrollWheelZoom?: boolean; // default true on desktop
};

export default function LeafletOSM({
  center = [52.2297, 21.0122], // Warsaw
  zoom = 13,
  className = "w-full h-[60vh] rounded-2xl shadow-lg",
  scrollWheelZoom = true,
}: LeafletOSMProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any;

    // Defer all Leaflet work to the client and load it dynamically.
    let cancelled = false;
    (async () => {
      const L = await import("leaflet");

      if (cancelled || !containerRef.current) return;

      // Ensure the container allows the map to capture gestures instead of the page.
      containerRef.current.style.touchAction = "none"; // lets Leaflet own pinch/drag
      containerRef.current.style.overscrollBehavior = "contain"; // avoid rubber-banding scroll on iOS

      // Create the map.
      map = L.map(containerRef.current, {
        center,
        zoom,
        zoomControl: false, // we'll add a positioned control
        dragging: true,
        tap: false, // helps on some mobile browsers
        touchZoom: true,
        scrollWheelZoom, // typically true for desktop mice
        inertia: true,
      });

      // OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

        maxZoom: 19,
      }).addTo(map);

      // Zoom control in a nicer spot (bottom-right)
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Example marker (remove if you don't want it)
      const marker = L.marker(center);
      marker.addTo(map);

      // If your Next bundler can't find Leaflet's default marker images, uncomment below:
      // const iconUrl = (await import("leaflet/dist/images/marker-icon.png")).default as string;
      // const iconRetinaUrl = (await import("leaflet/dist/images/marker-icon-2x.png")).default as string;
      // const shadowUrl = (await import("leaflet/dist/images/marker-shadow.png")).default as string;
      // marker.setIcon(L.icon({ iconUrl, iconRetinaUrl, shadowUrl, iconSize: [25,41], iconAnchor: [12,41] }));

      // Just in case the container resizes, update map sizing.
      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });
      resizeObserver.observe(containerRef.current);

      // Cleanup
      return () => {
        resizeObserver.disconnect();
        map && map.remove();
      };
    })();

    return () => {
      cancelled = true;
      // map will be removed by the async cleanup above if it finished
    };
  }, [center?.[0], center?.[1], zoom, scrollWheelZoom]);

  return (
    <div className={"relative " + className}>
      {/* The map container the Leaflet instance will mount into */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Optional: basic UI hint for users */}
      <div className="pointer-events-none absolute left-3 top-3 z-[400] rounded-xl bg-white/80 px-3 py-1 text-sm shadow">
        Pinch to zoom • Drag to pan
      </div>
    </div>
  );
}
