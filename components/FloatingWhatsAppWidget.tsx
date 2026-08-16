"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/lib/data/company";

/* ═══════════════════════════════════════════════════════════════════════════
 * Floating WhatsApp CTA ULTRATHINK Phase 2 Expansion
 *
 * Features:
 *  1. Physics-based drag & throw (momentum, bounce, friction)
 *  2. Edge-snapping after release (docks to nearest screen edge)
 *  3. Pulse animation when idle
 *  4. Tooltip ("Chat starten 💬") on hover & after 5s idle
 *  5. Notification badge ("1") for first 30 seconds
 *  6. Contextual WhatsApp messages per page
 *  7. Haptic feedback on mobile drag
 *  8. Analytics event on click
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ── Contextual messages per route ── */
function getContextualMessage(pathname: string): string {
  if (pathname.includes("/leistungen/notdienst") || pathname.includes("/leistungen/turoeffnung"))
    return "Hallo, ich habe einen Notfall und brauche dringend Hilfe bei einer Türöffnung.";
  if (pathname.includes("/preise"))
    return "Hallo, ich hätte eine Frage zu Ihren Preisen und Festpreisgarantie.";
  if (pathname.includes("/kontakt"))
    return "Hallo, ich möchte einen Termin vereinbaren.";
  if (pathname.includes("/leistungen/schliessanlagen"))
    return "Hallo, ich interessiere mich für eine Schließanlage.";
  if (pathname.includes("/leistungen/sicherheitstechnik"))
    return "Hallo, ich hätte gern eine Beratung zur Sicherheitstechnik.";
  if (pathname.includes("/leistungen/autoschluessel"))
    return "Hallo, ich brauche einen neuen Autoschlüssel.";
  if (pathname.includes("/leistungen/schluessel-nachmachen"))
    return "Hallo, ich möchte einen Schlüssel nachmachen lassen.";
  if (pathname.includes("/servicegebiet") || pathname.includes("schluesseldienst-wetzlar"))
    return "Hallo, ich komme aus der Region und brauche Hilfe.";
  return "Hallo, ich hätte eine Frage zu Ihren Leistungen.";
}

export default function FloatingWhatsAppWidget() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [isLeftSide, setIsLeftSide] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  // Position state - now tracks OFFSET from native CSS position
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const isSnapping = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });
  const prevPointer = useRef({ x: 0, y: 0, t: 0 });
  const animFrame = useRef<number>(0);
  const snapFrame = useRef<number>(0);
  // We use this mostly for tooltip conditional rendering now
  const [, forceRender] = useState(0);

  const SIZE = 64;
  const FRICTION = 0.92;
  const BOUNCE = 0.6;
  const MIN_VEL = 0.3;
  const DRAG_THRESHOLD = 5;

  useEffect(() => {
    // Delay mounting to avoid blocking LCP and ensure styles are ready
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 2500);

    // Or mount immediately on user interaction
    const handleInteraction = () => setMounted(true);
    window.addEventListener("scroll", handleInteraction, { once: true, passive: true });
    window.addEventListener("mousemove", handleInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(mountTimer);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      forceRender(n => n + 1);
    }, 5000);
    
    const badgeTimer = setTimeout(() => {
      setShowBadge(false);
    }, 30000);

    const handleResize = () => {
      // User requested: Snap back to bottom-right on resize
      pos.current = { x: 0, y: 0 };
      setIsLeftSide(false);
      if (btnRef.current) {
        btnRef.current.style.transform = `translate3d(0px, 0px, 0)`;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(badgeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]);

  /* ── Edge-snap animation (spring-like easing) ── */
  const snapToEdge = useCallback(() => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    isSnapping.current = true;

    const midX = rect.left + rect.width / 2;
    const distLeft = midX;
    const distRight = window.innerWidth - midX;
    
    const margin = 16;
    
    // Calculate target offset dx based on current bounding rect
    let targetDx = 0;
    if (distLeft < distRight) {
      targetDx = margin - rect.left;
      setIsLeftSide(true);
    } else {
      targetDx = (window.innerWidth - margin - rect.width) - rect.left;
      setIsLeftSide(false);
    }

    // Keep Y clamped within screen
    let targetDy = 0;
    if (rect.top < margin) {
      targetDy = margin - rect.top;
    } else if (rect.bottom > window.innerHeight - margin) {
      targetDy = (window.innerHeight - margin) - rect.bottom;
    }

    const startX = pos.current.x;
    const startY = pos.current.y;
    const endX = startX + targetDx;
    const endY = startY + targetDy;
    
    const startTime = performance.now();
    const duration = 400; // ms

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      pos.current.x = startX + (endX - startX) * eased;
      pos.current.y = startY + (endY - startY) * eased;
      
      if (btnRef.current) {
        btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (progress < 1) {
        snapFrame.current = requestAnimationFrame(step);
      } else {
        isSnapping.current = false;
        forceRender(n => n + 1); // update isIdle for tooltip
      }
    };

    snapFrame.current = requestAnimationFrame(step);
  }, []);

  /* ── Physics animation loop ── */
  const animate = useCallback(() => {
    if (isDragging.current || !btnRef.current) return;

    const p = pos.current;
    const v = vel.current;

    v.x *= FRICTION;
    v.y *= FRICTION;

    if (Math.abs(v.x) < MIN_VEL && Math.abs(v.y) < MIN_VEL) {
      v.x = 0;
      v.y = 0;
      snapToEdge();
      return;
    }

    p.x += v.x;
    p.y += v.y;

    // Apply temporary transform to get bounding box for collision detection
    btnRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    const rect = btnRef.current.getBoundingClientRect();

    let bounced = false;
    if (rect.left < 0) {
      p.x += (0 - rect.left);
      v.x = Math.abs(v.x) * BOUNCE;
      bounced = true;
    } else if (rect.right > window.innerWidth) {
      p.x += (window.innerWidth - rect.right);
      v.x = -Math.abs(v.x) * BOUNCE;
      bounced = true;
    }

    if (rect.top < 0) {
      p.y += (0 - rect.top);
      v.y = Math.abs(v.y) * BOUNCE;
      bounced = true;
    } else if (rect.bottom > window.innerHeight) {
      p.y += (window.innerHeight - rect.bottom);
      v.y = -Math.abs(v.y) * BOUNCE;
      bounced = true;
    }

    if (bounced) {
       btnRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    }

    // eslint-disable-next-line
    animFrame.current = requestAnimationFrame(() => animate());
  }, [snapToEdge]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!btnRef.current) return;
      e.preventDefault(); // Prevent default touch actions like scrolling while dragging
      
      isDragging.current = true;
      wasDragged.current = false;
      isSnapping.current = false;
      cancelAnimationFrame(animFrame.current);
      cancelAnimationFrame(snapFrame.current);
      vel.current = { x: 0, y: 0 };

      // Hide tooltip and badge on interaction
      setShowTooltip(false);
      setShowBadge(false);

      const now = Date.now();
      dragStart.current = { x: e.clientX, y: e.clientY };
      lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
      prevPointer.current = { x: e.clientX, y: e.clientY, t: now };

      (e.target as HTMLElement).setPointerCapture(e.pointerId);

      btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(1.15)`;
      
      // Haptic feedback on mobile
      if (navigator.vibrate) navigator.vibrate(30);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;

      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;

      const totalDx = e.clientX - dragStart.current.x;
      const totalDy = e.clientY - dragStart.current.y;
      if (Math.abs(totalDx) > DRAG_THRESHOLD || Math.abs(totalDy) > DRAG_THRESHOLD) {
        wasDragged.current = true;
      }

      pos.current.x += dx;
      pos.current.y += dy;

      prevPointer.current = { ...lastPointer.current };
      lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };

      if (btnRef.current) {
        btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(1.15)`;
      }
    },
    []
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const dt = Math.max(1, lastPointer.current.t - prevPointer.current.t);
      const vx = ((lastPointer.current.x - prevPointer.current.x) / dt) * 16;
      const vy = ((lastPointer.current.y - prevPointer.current.y) / dt) * 16;

      const maxV = 40;
      vel.current = {
        x: Math.max(-maxV, Math.min(maxV, vx)),
        y: Math.max(-maxV, Math.min(maxV, vy)),
      };

      if (btnRef.current) {
         // Reset scale to 1 on release
         btnRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (Math.abs(vel.current.x) > MIN_VEL || Math.abs(vel.current.y) > MIN_VEL) {
        animFrame.current = requestAnimationFrame(animate);
      } else {
        snapToEdge();
      }
    },
    [animate, snapToEdge]
  );

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (wasDragged.current) {
        e.preventDefault();
        return;
      }
      // Analytics event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: pathname,
        });
      }
    },
    [pathname]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animFrame.current);
      cancelAnimationFrame(snapFrame.current);
    };
  }, []);

  const whatsappNumber = companyInfo.socialMedia.whatsapp;
  if (!whatsappNumber || !mounted) return null;

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const contextMessage = getContextualMessage(pathname);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(contextMessage)}`;

  const isIdle = !isDragging.current && vel.current.x === 0 && vel.current.y === 0 && !isSnapping.current;

  return (
    <>
      {/* CSS Keyframes for pulse animation */}
      <style suppressHydrationWarning>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes wa-fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wa-idle-pulse svg {
          animation: wa-pulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-idle-pulse svg { animation: none !important; }
        }
      `}</style>

      {/* Main Button */}
      <a
        ref={btnRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Nachricht per WhatsApp senden"
        id="whatsapp-floating-btn"
        onClick={onClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`fixed right-4 bottom-[140px] md:right-6 md:bottom-24 z-[9997] flex items-center justify-center rounded-full bg-[#25D366] text-white no-underline select-none touch-none drop-shadow-[0_6px_28px_rgba(37,211,102,0.55)] ${isIdle ? 'wa-idle-pulse' : ''}`}
        style={{
          width: SIZE,
          height: SIZE,
          cursor: isDragging.current ? "grabbing" : "grab",
          willChange: "transform, filter",
        }}
      >
        {/* Tooltip positioned relative to the button */}
        {showTooltip && isIdle && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ...(isLeftSide ? { left: "100%", marginLeft: "14px" } : { right: "100%", marginRight: "14px" }),
              pointerEvents: "none",
              animation: "wa-fadeIn 0.3s ease-out forwards",
            }}
            className="hidden md:block" 
          >
            <div
              style={{
                background: "#1a1a1a",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: 12,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Chat starten 💬
            </div>
          </div>
        )}

        {/* Notification Badge */}
        {showBadge && (
          <span
            style={{
              position: "absolute",
              top: -2,
              right: -2,
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2.5px solid #fff",
              boxShadow: "0 2px 8px rgba(239,68,68,0.5)",
              fontFamily: "system-ui, sans-serif",
              pointerEvents: "none",
              animation: "wa-fadeIn 0.3s ease-out",
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
          style={{ fill: "#ffffff", pointerEvents: "none", willChange: "transform" }}
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
