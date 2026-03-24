"use client";

import { TimeSlot, TIME_MODIFIERS } from"./pricing.constants";
import { m } from"framer-motion";

interface TimeSlotSelectorProps {
  selected: TimeSlot;
  onSelect: (slot: TimeSlot) => void;
}

export default function TimeSlotSelector({ selected, onSelect }: TimeSlotSelectorProps) {
  const slots: { id: TimeSlot; label: string }[] = [
    { id:"day", label: TIME_MODIFIERS.day.label },
    { id:"evening", label: TIME_MODIFIERS.evening.label },
    { id:"night", label: TIME_MODIFIERS.night.label },
  ];

  return (
    <div
      role="tablist"
      aria-label="Zeitraum auswählen"
      className="flex flex-col sm:flex-row w-full bg-[var(--border-subtle)] p-1.5 rounded-2xl gap-1 relative"
    >
      {slots.map((slot) => {
        const isSelected = selected === slot.id;
        return (
          <button
            key={slot.id}
            role="tab"
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(slot.id)}
            className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-colors z-10 ${isSelected ?"text-white" :"text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              }`}
          >
            {isSelected && (
              <m.div
                layoutId="active-timeslot"
                className="absolute inset-0 bg-[var(--color-red-500)] rounded-xl -z-10"
                transition={{ type:"spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-20">{slot.label}</span>
          </button>
        );
      })}
    </div>
  );
}
