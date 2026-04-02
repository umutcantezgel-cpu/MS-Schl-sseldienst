export type ValidationResult = 
  | { valid: true } 
  | { valid: false; message: string };

export type FormErrors = Record<string, string | undefined>;

export const validateRequired = (value: unknown): ValidationResult => {
  if (value === null || value === undefined) {
    return { valid: false, message: 'Dieses Feld ist erforderlich' };
  }
  if (typeof value === 'string' && value.trim() === '') {
    return { valid: false, message: 'Dieses Feld ist erforderlich' };
  }
  return { valid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  const req = validateRequired(email);
  if (!req.valid) return req;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' };
  }
  return { valid: true };
};

export const validateMinLength = (value: string, minLength: number): ValidationResult => {
  if (!value || value.trim().length < minLength) {
    return { valid: false, message: `Mindestens ${minLength} Zeichen erforderlich` };
  }
  return { valid: true };
};

export const validateMaxLength = (value: string, maxLength: number): ValidationResult => {
  if (value && value.trim().length > maxLength) {
    return { valid: false, message: `Maximal ${maxLength} Zeichen erlaubt` };
  }
  return { valid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  // Optionale Validierung: Wenn leer, ist es okay (sofern nicht required, das wird extern gesteuert)
  if (!phone || phone.trim() === '') return { valid: true };
  
  const phoneRegex = /^\+?[0-9\s\-()]{6,}$/;
  if (!phoneRegex.test(phone.trim())) {
    return { valid: false, message: 'Bitte geben Sie eine gültige Telefonnummer ein' };
  }
  return { valid: true };
};

export const validateCheckbox = (checked: boolean): ValidationResult => {
  if (!checked) {
    return { valid: false, message: 'Bitte akzeptieren Sie diese Bedingung' };
  }
  return { valid: true };
};

export const validateForm = (
  data: Record<string, any>, 
  fieldValidators: Record<string, () => ValidationResult>
): FormErrors => {
  const errors: FormErrors = {};
  
  Object.entries(fieldValidators).forEach(([field, validator]) => {
    const result = validator();
    if (!result.valid) {
      errors[field] = result.message;
    }
  });
  
  return errors;
};
