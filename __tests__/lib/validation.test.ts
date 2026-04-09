import { describe, it, expect } from "vitest";
import { 
  validateRequired, 
  validateEmail, 
  validateMinLength, 
  validateMaxLength, 
  validatePhone, 
  validateCheckbox, 
  validateForm 
} from "@/lib/forms/validation";

describe("validation.ts", () => {
    describe("validateRequired", () => {
        it("fails on null or undefined", () => {
            expect(validateRequired(null)).toEqual({ valid: false, message: 'Dieses Feld ist erforderlich' });
            expect(validateRequired(undefined)).toEqual({ valid: false, message: 'Dieses Feld ist erforderlich' });
        });

        it("fails on empty or whitespace strings", () => {
            expect(validateRequired("")).toEqual({ valid: false, message: 'Dieses Feld ist erforderlich' });
            expect(validateRequired("   ")).toEqual({ valid: false, message: 'Dieses Feld ist erforderlich' });
        });

        it("succeeds with valid string or object", () => {
            expect(validateRequired("hello").valid).toBe(true);
            expect(validateRequired({ foo: "bar" }).valid).toBe(true);
        });
    });

    describe("validateEmail", () => {
        it("returns required error if missing", () => {
            expect(validateEmail("").valid).toBe(false);
        });

        it("validates valid emails", () => {
            expect(validateEmail("test@example.com").valid).toBe(true);
            expect(validateEmail("TestUser123@sub.domain.co.uk").valid).toBe(true);
        });

        it("rejects invalid emails", () => {
            expect(validateEmail("not-an-email").valid).toBe(false);
            expect(validateEmail("test@").valid).toBe(false);
            expect(validateEmail("test@example").valid).toBe(false);
        });
    });

    describe("validateMinLength", () => {
        it("fails if string is too short", () => {
            expect(validateMinLength("12", 3)).toEqual({ valid: false, message: 'Mindestens 3 Zeichen erforderlich' });
        });

        it("succeeds if string is long enough", () => {
            expect(validateMinLength("123", 3).valid).toBe(true);
            expect(validateMinLength("1234", 3).valid).toBe(true);
        });
    });

    describe("validateMaxLength", () => {
        it("fails if string is too long", () => {
            expect(validateMaxLength("1234", 3)).toEqual({ valid: false, message: 'Maximal 3 Zeichen erlaubt' });
        });

        it("succeeds if string is short enough", () => {
            expect(validateMaxLength("12", 3).valid).toBe(true);
            expect(validateMaxLength("123", 3).valid).toBe(true);
        });
    });

    describe("validatePhone", () => {
        it("succeeds on empty string (optional)", () => {
            expect(validatePhone("").valid).toBe(true);
            // @ts-ignore
            expect(validatePhone(null).valid).toBe(true);
        });

        it("rejects bad phone numbers", () => {
            expect(validatePhone("abc").valid).toBe(false);
        });

        it("accepts valid phone numbers", () => {
            expect(validatePhone("+49 123 456789").valid).toBe(true);
            expect(validatePhone("06441-123456").valid).toBe(true);
        });
    });

    describe("validateCheckbox", () => {
        it("fails if unchecked", () => {
            expect(validateCheckbox(false)).toEqual({ valid: false, message: 'Bitte akzeptieren Sie diese Bedingung' });
        });

        it("succeeds if checked", () => {
            expect(validateCheckbox(true).valid).toBe(true);
        });
    });

    describe("validateForm", () => {
        it("runs multiple validators and returns errors map", () => {
            const data = { name: "", email: "valid@email.com" };
            const errors = validateForm(data, {
                name: () => validateRequired(data.name),
                email: () => validateEmail(data.email)
            });

            expect(Object.keys(errors).length).toBe(1);
            expect(errors.name).toBe('Dieses Feld ist erforderlich');
            expect(errors.email).toBeUndefined();
        });
    });
});
