"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/lib/data/company";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Floating WhatsApp CTA – Gamified Physics Engine (Ultra-Interactive Edition)
 *
 * Features:
 *  1. Physics-based Drag & Throw (momentum, wall bouncing, friction)
 *  2. Elastic Edge-Snapping upon settling
 *  3. Pulse glow animation when idle
 *  4. Desktop Tooltip ("Chat starten 💬") on hover & after 5s idle
 *  5. Notification badge ("1") for first 30 seconds
 *  6. Contextual WhatsApp messages per page
 *  7. Haptic feedback on mobile drag & boundary collisions
 *  8. 100% Reliable tap handling on mobile & desktop
 *  9. Direct-DOM 60/120 FPS hardware acceleration (0ms TBT)
 * ═══════════════════════════════════════════════════════════════════════════ */

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
  const btnRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  // Position and Physics Refs (direct DOM mutation for 60/120fps with 0ms TBT)
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

  const SIZE = 64;
  const MARGIN = 16;
  const TOP_MARGIN = 75;
  const BOTTOM_MARGIN = 95;
  const FRICTION = 0.92;
  const BOUNCE = 0.62;
  const MIN_VEL = 0.35;
  const MAX_VEL = 42;
  const DRAG_THRESHOLD = 6;

  const updateDOMTransform = useCallback((scale = 1) => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale})`;
  }, []);

  /* ── Edge Snapping Animation (Spring Easing) ── */
  const snapToEdge = useCallback(() => {
    if (typeof window === "undefined") return;
    cancelAnimationFrame(snapFrame.current);
    isSnapping.current = true;

    const midX = pos.current.x + SIZE / 2;
    const distLeft = midX;
    const distRight = window.innerWidth - midX;

    let targetX = 0;
    if (distLeft < distRight) {
      targetX = MARGIN;
      setIsLeftSide(true);
    } else {
      targetX = window.innerWidth - SIZE - MARGIN;
      setIsLeftSide(false);
    }

    const maxY = window.innerHeight - SIZE - BOTTOM_MARGIN;
    const targetY = Math.max(TOP_MARGIN, Math.min(maxY, pos.current.y));

    const startX = pos.current.x;
    const startY = pos.current.y;
    const startTime = performance.now();
    const duration = 380; // ms

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      pos.current.x = startX + (targetX - startX) * eased;
      pos.current.y = startY + (targetY - startY) * eased;
      updateDOMTransform(1);

      if (progress < 1) {
        snapFrame.current = requestAnimationFrame(step);
      } else {
        isSnapping.current = false;
        vel.current = { x: 0, y: 0 };
        if (btnRef.current) {
          btnRef.current.classList.add("wa-pulse-glow");
        }
      }
    };

    snapFrame.current = requestAnimationFrame(step);
  }, [updateDOMTransform]);

  /* ── Physics Momentum & Bounce Animation Loop ── */
  const animateRef = useRef<() => void>(() => {});

  useEffect(() => {
    animateRef.current = () => {
      if (isDragging.current || typeof window === "undefined") return;

      vel.current.x *= FRICTION;
      vel.current.y *= FRICTION;

      const currentSpeed = Math.hypot(vel.current.x, vel.current.y);
      if (currentSpeed < MIN_VEL) {
        vel.current = { x: 0, y: 0 };
        snapToEdge();
        return;
      }

      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      const maxX = window.innerWidth - SIZE;
      const maxY = window.innerHeight - SIZE;
      const topLimit = TOP_MARGIN;
      const bottomLimit = maxY - 20;

      let hit = false;
      // Bounce off Left / Right walls
      if (pos.current.x <= 0) {
        pos.current.x = 0;
        vel.current.x = Math.abs(vel.current.x) * BOUNCE;
        hit = true;
      } else if (pos.current.x >= maxX) {
        pos.current.x = maxX;
        vel.current.x = -Math.abs(vel.current.x) * BOUNCE;
        hit = true;
      }

      // Bounce off Top / Bottom walls
      if (pos.current.y <= topLimit) {
        pos.current.y = topLimit;
        vel.current.y = Math.abs(vel.current.y) * BOUNCE;
        hit = true;
      } else if (pos.current.y >= bottomLimit) {
        pos.current.y = bottomLimit;
        vel.current.y = -Math.abs(vel.current.y) * BOUNCE;
        hit = true;
      }

      if (hit && typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate(10);
        } catch {
          // ignore
        }
      }

      updateDOMTransform(1);
      animFrame.current = requestAnimationFrame(animateRef.current);
    };
  }, [snapToEdge, updateDOMTransform]);

  /* ── Pointer Interactions (Touch & Mouse Unified) ── */
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.button !== 0) return;

    cancelAnimationFrame(animFrame.current);
    cancelAnimationFrame(snapFrame.current);
    vel.current = { x: 0, y: 0 };

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
      // safe fallback
    }

    if (btnRef.current) {
      btnRef.current.classList.remove("wa-pulse-glow");
      btnRef.current.style.cursor = "grabbing";
      btnRef.current.style.boxShadow = "0 8px 40px rgba(37,211,102,0.7), 0 0 0 6px rgba(37,211,102,0.25)";
    }

    updateDOMTransform(1.14);

    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(20);
      } catch {
        // ignore
      }
    }
  }, [updateDOMTransform]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!isDragging.current || typeof window === "undefined") return;

    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;

    const totalDist = Math.hypot(
      e.clientX - dragStart.current.x,
      e.clientY - dragStart.current.y
    );

    if (totalDist > DRAG_THRESHOLD) {
      wasDragged.current = true;
    }

    const maxX = window.innerWidth - SIZE;
    const maxY = window.innerHeight - SIZE;

    pos.current.x = Math.max(0, Math.min(maxX, pos.current.x + dx));
    pos.current.y = Math.max(0, Math.min(maxY, pos.current.y + dy));

    prevPointer.current = { ...lastPointer.current };
    lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };

    updateDOMTransform(1.14);
  }, [updateDOMTransform]);

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
      btnRef.current.style.boxShadow = "0 6px 28px rgba(37,211,102,0.55), 0 0 0 4px rgba(37,211,102,0.3)";
    }

    const elapsed = Date.now() - dragStart.current.t;
    const totalDist = Math.hypot(
      e.clientX - dragStart.current.x,
      e.clientY - dragStart.current.y
    );

    // Quick tap differentiation
    if (!wasDragged.current || (totalDist < DRAG_THRESHOLD && elapsed < 260)) {
      wasDragged.current = false;
      updateDOMTransform(1);
      if (btnRef.current) {
        btnRef.current.classList.add("wa-pulse-glow");
      }
      return;
    }

    // Momentum throw calculation
    const dt = Math.max(1, lastPointer.current.t - prevPointer.current.t);
    const vx = ((lastPointer.current.x - prevPointer.current.x) / dt) * 16;
    const vy = ((lastPointer.current.y - prevPointer.current.y) / dt) * 16;

    vel.current = {
      x: Math.max(-MAX_VEL, Math.min(MAX_VEL, vx)),
      y: Math.max(-MAX_VEL, Math.min(MAX_VEL, vy)),
    };

    updateDOMTransform(1);

    const initialSpeed = Math.hypot(vel.current.x, vel.current.y);
    if (initialSpeed > MIN_VEL) {
      animFrame.current = requestAnimationFrame(animateRef.current);
    } else {
      snapToEdge();
    }
  }, [snapToEdge, updateDOMTransform]);

  /* ── Click / Navigation Handler ── */
  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
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

  /* ── Initialization on Mount ── */
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const initialX = window.innerWidth - SIZE - (isMobile ? 16 : 24);
    const initialY = window.innerHeight - SIZE - (isMobile ? 120 : 96);
    pos.current = { x: initialX, y: initialY };
    updateDOMTransform(1);

    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);
    const badgeTimer = setTimeout(() => setShowBadge(false), 30000);

    const handleResize = () => {
      const isMob = window.innerWidth < 768;
      pos.current = {
        x: Math.max(MARGIN, Math.min(window.innerWidth - SIZE - MARGIN, pos.current.x)),
        y: Math.max(TOP_MARGIN, Math.min(window.innerHeight - SIZE - (isMob ? 110 : 90), pos.current.y)),
      };
      updateDOMTransform(1);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(badgeTimer);
      cancelAnimationFrame(animFrame.current);
      cancelAnimationFrame(snapFrame.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateDOMTransform]);

  const whatsappNumber = companyInfo.socialMedia.whatsapp;
  if (!whatsappNumber || !mounted) return null;

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const contextMessage = getContextualMessage(pathname);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(contextMessage)}`;

  return (
    <>
      {/* CSS Keyframes for pulse animation */}
      <style jsx global>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55), 0 6px 28px rgba(37,211,102,0.55); }
          70% { box-shadow: 0 0 0 18px rgba(37,211,102,0), 0 6px 28px rgba(37,211,102,0.55); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0), 0 6px 28px rgba(37,211,102,0.55); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wa-pulse-glow {
          animation: wa-pulse 2.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-pulse-glow { animation: none !important; }
        }
      `}</style>

      {/* Main Draggable WhatsApp Button */}
      <a
        ref={btnRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Nachricht per WhatsApp senden"
        id="whatsapp-floating-btn"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onClick={onClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed top-0 left-0 z-[9997] wa-pulse-glow flex items-center justify-center rounded-full text-white"
        style={{
          width: SIZE,
          height: SIZE,
          backgroundColor: "#25D366",
          color: "#ffffff",
          textDecoration: "none",
          userSelect: "none",
          touchAction: "none",
          cursor: "grab",
          boxShadow: "0 6px 28px rgba(37,211,102,0.55), 0 0 0 4px rgba(37,211,102,0.3)",
          willChange: "transform",
        }}
      >
        {/* Desktop Tooltip */}
        {showTooltip && (
          <div
            className={`hidden md:flex absolute top-1/2 -translate-y-1/2 pointer-events-none items-center transition-all duration-200 ${
              isLeftSide ? "left-full ml-3.5" : "right-full mr-3.5"
            }`}
          >
            <div
              style={{
                background: "#1a1a1a",
                color: "#ffffff",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: 12,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Chat starten 💬
            </div>
          </div>
        )}

        {/* Notification Badge */}
        {showBadge && (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -2,
              right: -2,
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2.5px solid #ffffff",
              boxShadow: "0 2px 8px rgba(239,68,68,0.5)",
              fontFamily: "system-ui, sans-serif",
              pointerEvents: "none",
              animation: "fadeIn 0.3s ease-out",
            }}
          >
            1
          </span>
        )}

        {/* WhatsApp SVG Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style={{ fill: "#ffffff", pointerEvents: "none" }}
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
