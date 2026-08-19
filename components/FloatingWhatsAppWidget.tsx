"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/lib/data/company";

/* ═══════════════════════════════════════════════════════════════════════════
 * Floating WhatsApp CTA – Gamified Physics Engine (Ultra-Performance)
 *
 * Features:
 *  1. Physics-based throw, momentum & wall boundary bounce
 *  2. Elastic edge-snapping to nearest viewport boundary on rest
 *  3. 100% Touch & Click Reliability (zero false-drag clicks on mobile)
 *  4. Zero React re-renders during motion (pure direct-DOM transform)
 *  5. GPU hardware accelerated (translate3d, will-change: transform)
 *  6. Idle breathing pulse & desktop tooltip ("Chat starten 💬")
 *  7. Route-contextual WhatsApp prefilled messages
 *  8. 30s notification badge & Google Analytics click tracking
 * ═══════════════════════════════════════════════════════════════════════════ */

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function getContextualMessage(pathname: string): string {
  if (pathname.includes("/leistungen/notdienst") || pathname.includes("/leistungen/turoeffnung"))
    return "Hallo, ich habe einen Notfall und brauche dringend Hilfe bei einer Türöffnung in Wetzlar.";
  if (pathname.includes("/preise"))
    return "Hallo, ich hätte eine Frage zu Ihren Preisen und der Festpreisgarantie.";
  if (pathname.includes("/kontakt"))
    return "Hallo, ich möchte einen Beratungstermin vereinbaren.";
  if (pathname.includes("/leistungen/schliessanlagen"))
    return "Hallo, ich interessiere mich für eine Schließanlage.";
  if (pathname.includes("/leistungen/sicherheitstechnik"))
    return "Hallo, ich hätte gern eine Beratung zur Sicherheitstechnik.";
  if (pathname.includes("/leistungen/autoschluessel"))
    return "Hallo, ich brauche einen neuen Autoschlüssel.";
  if (pathname.includes("/leistungen/schluessel-nachmachen"))
    return "Hallo, ich möchte einen Schlüssel nachmachen lassen.";
  if (pathname.includes("/servicegebiet") || pathname.includes("schluesseldienst-wetzlar"))
    return "Hallo, ich komme aus der Region Wetzlar und brauche Unterstützung.";
  return "Hallo Schlüssel Schmiede, ich hätte eine Frage zu Ihren Leistungen.";
}

export default function FloatingWhatsAppWidget() {
  const mounted = useIsMounted();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [isLeftSide, setIsLeftSide] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  // Physics & Interaction State (all in refs to avoid React re-renders during motion)
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const isSnapping = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, t: 0 });
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });
  const prevPointer = useRef({ x: 0, y: 0, t: 0 });
  const animFrame = useRef<number>(0);
  const snapFrame = useRef<number>(0);

  const SIZE = 60;
  const MARGIN = 16;
  const TOP_MARGIN = 80;
  const BOTTOM_MARGIN = 100;
  const FRICTION = 0.92;
  const BOUNCE = 0.65;
  const MIN_VEL = 0.35;
  const MAX_VEL = 42;
  const DRAG_DISTANCE_THRESHOLD = 9; // pixels
  const DRAG_TIME_THRESHOLD = 260; // ms

  /* ── Edge Snapping Animation ── */
  const snapToEdge = useCallback(() => {
    if (!btnRef.current || typeof window === "undefined") return;
    cancelAnimationFrame(snapFrame.current);
    isSnapping.current = true;

    const rect = btnRef.current.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    const distLeft = midX;
    const distRight = window.innerWidth - midX;

    let targetDx = 0;
    if (distLeft < distRight) {
      targetDx = MARGIN - rect.left;
      setIsLeftSide(true);
    } else {
      targetDx = window.innerWidth - MARGIN - rect.width - rect.left;
      setIsLeftSide(false);
    }

    let targetDy = 0;
    if (rect.top < TOP_MARGIN) {
      targetDy = TOP_MARGIN - rect.top;
    } else if (rect.bottom > window.innerHeight - BOTTOM_MARGIN) {
      targetDy = window.innerHeight - BOTTOM_MARGIN - rect.bottom;
    }

    const startX = pos.current.x;
    const startY = pos.current.y;
    const endX = startX + targetDx;
    const endY = startY + targetDy;
    const startTime = performance.now();
    const duration = 380; // ms

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = easeOutCubic(progress);

      pos.current.x = startX + (endX - startX) * ease;
      pos.current.y = startY + (endY - startY) * ease;

      if (btnRef.current) {
        btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (progress < 1) {
        snapFrame.current = requestAnimationFrame(step);
      } else {
        isSnapping.current = false;
        vel.current = { x: 0, y: 0 };
      }
    };

    snapFrame.current = requestAnimationFrame(step);
  }, []);

  /* ── Physics Momentum & Bounce Loop ── */
  const animateRef = useRef<() => void>(() => {});

  useEffect(() => {
    animateRef.current = () => {
      if (!btnRef.current || typeof window === "undefined") return;

      vel.current.x *= FRICTION;
      vel.current.y *= FRICTION;

      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      const rect = btnRef.current.getBoundingClientRect();
      let hitBoundary = false;

      // Left Boundary
      if (rect.left < MARGIN) {
        pos.current.x += MARGIN - rect.left;
        vel.current.x = -vel.current.x * BOUNCE;
        hitBoundary = true;
      }
      // Right Boundary
      else if (rect.right > window.innerWidth - MARGIN) {
        pos.current.x -= rect.right - (window.innerWidth - MARGIN);
        vel.current.x = -vel.current.x * BOUNCE;
        hitBoundary = true;
      }

      // Top Boundary
      if (rect.top < TOP_MARGIN) {
        pos.current.y += TOP_MARGIN - rect.top;
        vel.current.y = -vel.current.y * BOUNCE;
        hitBoundary = true;
      }
      // Bottom Boundary
      else if (rect.bottom > window.innerHeight - BOTTOM_MARGIN) {
        pos.current.y -= rect.bottom - (window.innerHeight - BOTTOM_MARGIN);
        vel.current.y = -vel.current.y * BOUNCE;
        hitBoundary = true;
      }

      if (hitBoundary && typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate(10);
        } catch {
          // ignore vibrate permissions
        }
      }

      btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      const currentSpeed = Math.hypot(vel.current.x, vel.current.y);
      if (currentSpeed > MIN_VEL) {
        animFrame.current = requestAnimationFrame(animateRef.current);
      } else {
        vel.current = { x: 0, y: 0 };
        snapToEdge();
      }
    };
  }, [snapToEdge]);

  /* ── Pointer Interactions (Touch + Mouse Unified) ── */
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    // Only primary button
    if (e.button !== 0) return;

    cancelAnimationFrame(animFrame.current);
    cancelAnimationFrame(snapFrame.current);

    isDragging.current = true;
    wasDragged.current = false;
    isSnapping.current = false;

    const now = Date.now();
    dragStart.current = { x: e.clientX, y: e.clientY, t: now };
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
    prevPointer.current = { x: e.clientX, y: e.clientY, t: now };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // safe fallback if capture fails
    }

    if (btnRef.current) {
      btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(1.12)`;
      btnRef.current.style.cursor = "grabbing";
    }

    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(15);
      } catch {
        // ignore
      }
    }
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!isDragging.current) return;

    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;

    const totalDist = Math.hypot(
      e.clientX - dragStart.current.x,
      e.clientY - dragStart.current.y
    );

    if (totalDist > DRAG_DISTANCE_THRESHOLD) {
      wasDragged.current = true;
    }

    pos.current.x += dx;
    pos.current.y += dy;

    prevPointer.current = { ...lastPointer.current };
    lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };

    if (btnRef.current) {
      btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(1.12)`;
    }
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }

    if (btnRef.current) {
      btnRef.current.style.cursor = "grab";
    }

    const elapsed = Date.now() - dragStart.current.t;
    const totalDist = Math.hypot(
      e.clientX - dragStart.current.x,
      e.clientY - dragStart.current.y
    );

    // Differentiate quick tap from intentional drag/fling
    if (!wasDragged.current || (totalDist < DRAG_DISTANCE_THRESHOLD && elapsed < DRAG_TIME_THRESHOLD)) {
      wasDragged.current = false;
      if (btnRef.current) {
        btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      return;
    }

    // Calculate throw velocity based on recent pointer delta
    const dt = Math.max(1, lastPointer.current.t - prevPointer.current.t);
    const vx = ((lastPointer.current.x - prevPointer.current.x) / dt) * 16;
    const vy = ((lastPointer.current.y - prevPointer.current.y) / dt) * 16;

    vel.current = {
      x: Math.max(-MAX_VEL, Math.min(MAX_VEL, vx)),
      y: Math.max(-MAX_VEL, Math.min(MAX_VEL, vy)),
    };

    if (btnRef.current) {
      btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }

    const initialSpeed = Math.hypot(vel.current.x, vel.current.y);
    if (initialSpeed > MIN_VEL) {
      animFrame.current = requestAnimationFrame(animateRef.current);
    } else {
      snapToEdge();
    }
  }, [snapToEdge]);

  /* ── Click / Navigation Handler ── */
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (wasDragged.current) {
      e.preventDefault();
      wasDragged.current = false;
      return;
    }

    if (typeof window !== "undefined" && (window as unknown as { gtag?: (type: string, name: string, params: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (type: string, name: string, params: Record<string, unknown>) => void }).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: pathname,
      });
    }
  }, [pathname]);

  /* ── Lifecycle & Timer setup ── */
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    const badgeTimer = setTimeout(() => {
      setShowBadge(false);
    }, 30000);

    const handleResize = () => {
      pos.current = { x: 0, y: 0 };
      setIsLeftSide(false);
      if (btnRef.current) {
        btnRef.current.style.transform = "translate3d(0px, 0px, 0px)";
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(badgeTimer);
      cancelAnimationFrame(animFrame.current);
      cancelAnimationFrame(snapFrame.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const whatsappNumber = companyInfo.socialMedia.whatsapp;
  if (!whatsappNumber || !mounted) return null;

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const contextMessage = getContextualMessage(pathname);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(contextMessage)}`;

  return (
    <aside aria-label="WhatsApp Kontakt" className="fixed z-[9997]">
      <style jsx global>{`
        .wa-floating-anchor {
          position: fixed;
          right: 18px;
          bottom: 96px;
          touch-action: none;
          user-select: none;
          will-change: transform;
        }
        @media (max-width: 767px) {
          .wa-floating-anchor {
            right: 14px;
            bottom: 110px;
          }
        }
        @keyframes wa-idle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }
        .wa-pulse-animation {
          animation: wa-idle-pulse 2.6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-pulse-animation { animation: none !important; }
        }
      `}</style>

      {/* Main Draggable WhatsApp Button */}
      <a
        ref={btnRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="WhatsApp Chat mit Schlüssel Schmiede starten"
        id="whatsapp-floating-btn"
        onClick={handleClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className={`wa-floating-anchor flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.48)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-grab ${
          !isHovered ? "wa-pulse-animation" : ""
        }`}
        style={{
          width: SIZE,
          height: SIZE,
        }}
      >
        {/* Desktop Tooltip */}
        {showTooltip && (
          <div
            className={`hidden md:flex absolute top-1/2 -translate-y-1/2 pointer-events-none items-center transition-opacity duration-200 ${
              isLeftSide ? "left-full ml-3.5" : "right-full mr-3.5"
            }`}
          >
            <div className="bg-[#18181b] text-white text-xs font-semibold px-3.5 py-2 rounded-xl whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center gap-1.5 border border-white/10">
              <span>Chat starten 💬</span>
              <span className="text-emerald-400 font-bold">●</span>
            </div>
          </div>
        )}

        {/* Notification Badge */}
        {showBadge && (
          <span
            aria-hidden="true"
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-black flex items-center justify-center border-2 border-white shadow-md pointer-events-none animate-bounce"
          >
            1
          </span>
        )}

        {/* WhatsApp Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-sm pointer-events-none"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </aside>
  );
}
