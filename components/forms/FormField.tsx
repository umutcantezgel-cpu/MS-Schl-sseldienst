import { ReactNode, useId } from "react";

export interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
  required?: boolean;
  helperText?: string;
  className?: string;
  htmlFor?: string;
}

export function FormField({ 
  label, 
  error, 
  children, 
  required = false, 
  helperText, 
  className = "",
  htmlFor
}: FormFieldProps) {
  
  const generatedId = useId();
  const idToUse = htmlFor || generatedId;

  return (
    <div className={`mb-6 ${className}`}>
      <label 
        htmlFor={idToUse} 
        className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      
      <div className="relative">
        {children}
      </div>

      {error ? (
        <p className="mt-2 text-sm text-red-600" id={`${idToUse}-error`} role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-2 text-sm text-gray-500" id={`${idToUse}-description`}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
