"use client";

import { InputHTMLAttributes, forwardRef, useId } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string | React.ReactNode;
  description?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, description, error, disabled, id: providedId, ...props }, ref) => {
    
    // Fallback zu generiertem ID für a11y, falls keines vergeben
    const fallbackId = useId();
    const id = providedId || fallbackId;

    return (
      <div className={`relative flex items-start ${className}`}>
        <div className="flex h-6 items-center">
          <input
            id={id}
            type="checkbox"
            ref={ref}
            disabled={disabled}
            className={`
              h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              ${error ? "border-red-500 focus:ring-red-500" : ""}
            `}
            aria-describedby={error ? `${id}-error` : (description ? `${id}-description` : undefined)}
            {...props}
          />
        </div>
        
        {(label || description) && (
          <div className="ml-3 text-sm leading-6">
            {label && (
              <label htmlFor={id} className={`font-medium ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}`}>
                {label}
              </label>
            )}
            {description && (
              <p id={`${id}-description`} className="text-gray-500">
                {description}
              </p>
            )}
            {error && (
              <p id={`${id}-error`} className="text-red-600 mt-1">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
