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
      className="fixed z-[9999] flex items-center justify-center w-[72px] h-[72px] no-underline select-none touch-none"
      style={{
        left: pos.current.x,
        top: pos.current.y,
        cursor: isDragging.current ? "grabbing" : "grab",
        filter: isDragging.current
          ? "drop-shadow(0 12px 24px rgba(37,211,102,0.6))"
          : "drop-shadow(0 6px 16px rgba(37,211,102,0.4))",
        transform: isDragging.current ? "scale(1.15)" : "scale(1)",
        transition: isDragging.current ? "none" : "filter 0.3s, transform 0.2s",
        willChange: "left, top, transform, filter",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full pointer-events-none drop-shadow-md"
        aria-hidden="true"
      >
        {/* Background Speech Bubble */}
        <path 
          style={{ fill: "#25D366" }}
          d="M12.008 2C6.486 2 2 6.485 2 12.006c0 1.764.464 3.483 1.346 5.003L2 22l5.127-1.342c1.472.822 3.16 1.258 4.881 1.258h.004c5.522 0 10.007-4.484 10.007-10.006A9.957 9.957 0 0019.08 4.93 9.956 9.956 0 0012.008 2z" 
        />
        {/* Inner Telephone Icon */}
        <path 
          style={{ fill: "#FFFFFF" }}
          d="M17.511 14.41c-.302-.15-1.785-.882-2.062-.983-.277-.1-.478-.15-.68.151-.2.302-.781.982-.958 1.184-.176.2-.352.226-.654.075a8.212 8.212 0 01-2.42-1.492c-.89-.794-1.49-1.774-1.666-2.076-.176-.301-.019-.464.132-.614.136-.135.302-.352.453-.528.151-.176.202-.301.302-.503.101-.201.05-.377-.025-.528-.076-.151-.68-1.637-.931-2.24-.246-.588-.495-.508-.68-.517-.176-.008-.377-.01-.58-.01a1.116 1.116 0 00-.805.378c-.277.301-1.057 1.03-1.057 2.513 0 1.483 1.082 2.915 1.233 3.116.151.201 2.128 3.245 5.155 4.548.72.31 1.282.495 1.72.635.723.23 1.38.198 1.9.119.58-.086 1.785-.729 2.037-1.433.251-.704.251-1.307.176-1.432-.075-.126-.277-.202-.579-.352z" 
        />
      </svg>
    </a>
  );
}
