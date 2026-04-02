"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", options, error, disabled, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          disabled={disabled}
          className={`
            w-full rounded-lg border px-3 py-2 pr-10 appearance-none bg-white font-sans transition-colors
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${disabled ? "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed" : "border-gray-300 hover:border-blue-400"}
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "focus:border-blue-500 focus:ring-blue-500/20"}
            ${className}
          `}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        
        {/* Custom Dropdown Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
