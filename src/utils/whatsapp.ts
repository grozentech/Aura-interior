import { SITE_CONFIG } from '../config/site';

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  projectType: string;
  location: string;
  budget?: string;
  requirements: string;
}

export interface ValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  projectType?: string;
  location?: string;
  requirements?: string;
}

/**
 * Validates 10-digit Indian numbers (with or without +91 / 0 prefix) or standard international format
 */
export function isValidPhoneNumber(phone: string): boolean {
  if (!phone) return false;
  // Strip all spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  // Indian number (10 digits, or 12 digits starting with 91, or 11 starting with 0)
  if (/^[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^91[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^0[6-9]\d{9}$/.test(cleaned)) return true;
  // General international phone (7 to 15 digits)
  return cleaned.length >= 10 && cleaned.length <= 15 && /^\d+$/.test(cleaned);
}

/**
 * Optional email validator
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.trim() === '') return true; // optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Form validation logic
 */
export function validateEnquiryForm(data: EnquiryFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.phoneNumber || data.phoneNumber.trim() === '') {
    errors.phoneNumber = 'Phone number is required.';
  } else if (!isValidPhoneNumber(data.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid 10-digit phone number.';
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address, or leave it blank.';
  }

  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a project type.';
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Please specify your project location (e.g., Dindigul).';
  }

  if (!data.requirements || data.requirements.trim().length < 5) {
    errors.requirements = 'Please tell us briefly about your project requirements.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates the required formatted WhatsApp message:
 *
 * Hello Aura Interior!
 *
 * I am interested in your interior design services.
 *
 * Name: [Customer Name]
 * Phone: [Customer Phone]
 * Email: [Customer Email]
 * Project Type: [Selected Project]
 * Location: [Project Location]
 * Budget: [Selected Budget]
 *
 * Project Requirements:
 * [Customer Message]
 *
 * Please contact me with more details.
 */
export function formatEnquiryMessage(data: EnquiryFormData): string {
  const emailValue = data.email && data.email.trim() ? data.email.trim() : 'Not provided';
  const budgetValue = data.budget && data.budget.trim() ? data.budget.trim() : 'Not Decided';

  return (
    `Hello Aura Interior!\n\n` +
    `I am interested in your interior design services.\n\n` +
    `Name: ${data.fullName.trim()}\n` +
    `Phone: ${data.phoneNumber.trim()}\n` +
    `Email: ${emailValue}\n` +
    `Project Type: ${data.projectType.trim()}\n` +
    `Location: ${data.location.trim()}\n` +
    `Budget: ${budgetValue}\n\n` +
    `Project Requirements:\n` +
    `${data.requirements.trim()}\n\n` +
    `Please contact me with more details.`
  );
}

/**
 * Builds the URL-encoded WhatsApp link
 */
export function createWhatsAppUrl(message: string): string {
  return `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-filled message for specific service enquiry
 */
export function createServiceEnquiryUrl(serviceTitle: string): string {
  const msg =
    `Hello Aura Interior!\n\n` +
    `I am interested in your "${serviceTitle}" service in Dindigul. ` +
    `Could you please share more details regarding consultation and pricing?`;
  return createWhatsAppUrl(msg);
}

/**
 * Pre-filled message for specific portfolio concept enquiry
 */
export function createProjectEnquiryUrl(projectTitle: string, category: string): string {
  const msg =
    `Hello Aura Interior!\n\n` +
    `I really like your "${projectTitle}" (${category}) portfolio design on your website. ` +
    `I would love to explore a similar concept for my home/space in Dindigul.`;
  return createWhatsAppUrl(msg);
}

/**
 * Pre-filled default message for general WhatsApp button
 */
export function createDefaultWhatsAppUrl(): string {
  return createWhatsAppUrl(SITE_CONFIG.defaultWhatsAppMessage);
}
