"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { companyInfo } from "@/lib/data/company";

/**
 * Floating WhatsApp CTA button with physics-based drag & throw.
 * - Drag to reposition
 * - Throw with momentum (velocity-based inertia)
 * - Bounces off screen edges
 * - Settles with friction
 * - Click (without drag) opens WhatsApp
 */
export default function FloatingWhatsAppWidget() {
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Position state
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });
  const prevPointer = useRef({ x: 0, y: 0, t: 0 });
  const animFrame = useRef<number>(0);
  const [, forceRender] = useState(0);

  const SIZE = 64;
  const FRICTION = 0.92;
  const BOUNCE = 0.6;
  const MIN_VEL = 0.3;
  const DRAG_THRESHOLD = 5;

  useEffect(() => {
    setMounted(true);
    // Initialize position: bottom-right
    pos.current = {
      x: window.innerWidth - SIZE - 24,
      y: window.innerHeight - SIZE - 96,
    };
    forceRender((n) => n + 1);
  }, []);

  // Physics animation loop
  const animate = useCallback(() => {
    if (isDragging.current) return;

    const p = pos.current;
    const v = vel.current;
    const maxX = window.innerWidth - SIZE;
    const maxY = window.innerHeight - SIZE;

    // Apply friction
    v.x *= FRICTION;
    v.y *= FRICTION;

    // Stop if slow enough
    if (Math.abs(v.x) < MIN_VEL && Math.abs(v.y) < MIN_VEL) {
      v.x = 0;
      v.y = 0;
      forceRender((n) => n + 1);
      return;
    }

    // Move
    p.x += v.x;
    p.y += v.y;

    // Bounce off edges
    if (p.x <= 0) {
      p.x = 0;
      v.x = Math.abs(v.x) * BOUNCE;
    } else if (p.x >= maxX) {
      p.x = maxX;
      v.x = -Math.abs(v.x) * BOUNCE;
    }

    if (p.y <= 0) {
      p.y = 0;
      v.y = Math.abs(v.y) * BOUNCE;
    } else if (p.y >= maxY) {
      p.y = maxY;
      v.y = -Math.abs(v.y) * BOUNCE;
    }

    forceRender((n) => n + 1);
    animFrame.current = requestAnimationFrame(animate);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      isDragging.current = true;
      wasDragged.current = false;
      cancelAnimationFrame(animFrame.current);
      vel.current = { x: 0, y: 0 };

      const now = Date.now();
      dragStart.current = { x: e.clientX, y: e.clientY };
      lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
      prevPointer.current = { x: e.clientX, y: e.clientY, t: now };

      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;

      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;

      // Check if user actually dragged
      const totalDx = e.clientX - dragStart.current.x;
      const totalDy = e.clientY - dragStart.current.y;
      if (Math.abs(totalDx) > DRAG_THRESHOLD || Math.abs(totalDy) > DRAG_THRESHOLD) {
        wasDragged.current = true;
      }

      const maxX = window.innerWidth - SIZE;
      const maxY = window.innerHeight - SIZE;

      pos.current.x = Math.max(0, Math.min(maxX, pos.current.x + dx));
      pos.current.y = Math.max(0, Math.min(maxY, pos.current.y + dy));

      // Track velocity from last two points
      prevPointer.current = { ...lastPointer.current };
      lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };

      forceRender((n) => n + 1);
    },
    []
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;

      // Calculate throw velocity from last two pointer samples
      const dt = Math.max(1, lastPointer.current.t - prevPointer.current.t);
      const vx = ((lastPointer.current.x - prevPointer.current.x) / dt) * 16;
      const vy = ((lastPointer.current.y - prevPointer.current.y) / dt) * 16;

      // Clamp velocity to avoid insane speeds
      const maxV = 40;
      vel.current = {
        x: Math.max(-maxV, Math.min(maxV, vx)),
        y: Math.max(-maxV, Math.min(maxV, vy)),
      };

      // Start physics
      if (Math.abs(vel.current.x) > MIN_VEL || Math.abs(vel.current.y) > MIN_VEL) {
        animFrame.current = requestAnimationFrame(animate);
      }
    },
    [animate]
  );

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      // Only open link if user didn't drag
      if (wasDragged.current) {
        e.preventDefault();
      }
    },
    []
  );

  // Cleanup
  useEffect(() => {
    return () => cancelAnimationFrame(animFrame.current);
  }, []);

  const whatsappNumber = companyInfo.socialMedia.whatsapp;
  if (!whatsappNumber || !mounted) return null;

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hallo, ich hätte eine Frage zu Ihren Leistungen."
  )}`;

  return (
    <a
      ref={btnRef}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nachricht per WhatsApp senden"
      id="whatsapp-floating-btn"
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="fixed z-[9999] flex items-center justify-center w-[64px] h-[64px] rounded-full text-white no-underline select-none touch-none"
      style={{
        left: pos.current.x,
        top: pos.current.y,
        backgroundColor: "#25D366",
        cursor: isDragging.current ? "grabbing" : "grab",
        boxShadow: isDragging.current
          ? "0 8px 40px rgba(37,211,102,0.7), 0 0 0 6px rgba(37,211,102,0.25)"
          : "0 6px 28px rgba(37,211,102,0.55), 0 0 0 4px rgba(37,211,102,0.3)",
        transform: isDragging.current ? "scale(1.15)" : "scale(1)",
        transition: isDragging.current ? "none" : "box-shadow 0.3s, transform 0.2s",
        willChange: "left, top, transform",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="pointer-events-none"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
