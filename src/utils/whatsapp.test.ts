import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidPhoneNumber,
  isValidEmail,
  validateEnquiryForm,
  formatEnquiryMessage,
  createWhatsAppUrl,
  createServiceEnquiryUrl,
} from './whatsapp';
import { SITE_CONFIG } from '../config/site';

test('phone number validation accepts valid Indian 10-digit mobile numbers', () => {
  assert.equal(isValidPhoneNumber('9176180348'), true);
  assert.equal(isValidPhoneNumber('+91 9176180348'), true);
  assert.equal(isValidPhoneNumber('09176180348'), true);
  assert.equal(isValidPhoneNumber('9876543210'), true);
  assert.equal(isValidPhoneNumber('8123456789'), true);
});

test('phone number validation rejects incomplete or non-numeric numbers', () => {
  assert.equal(isValidPhoneNumber('12345'), false);
  assert.equal(isValidPhoneNumber('abcdefghij'), false);
  assert.equal(isValidPhoneNumber(''), false);
});

test('email validation accepts valid email and empty optional string', () => {
  assert.equal(isValidEmail(''), true);
  assert.equal(isValidEmail('customer@example.com'), true);
  assert.equal(isValidEmail('not-an-email'), false);
});

test('validateEnquiryForm catches missing required fields', () => {
  const result = validateEnquiryForm({
    fullName: '',
    phoneNumber: '',
    projectType: '',
    location: '',
    requirements: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.projectType);
  assert.ok(result.errors.location);
  assert.ok(result.errors.requirements);
});

test('validateEnquiryForm passes with complete valid data', () => {
  const result = validateEnquiryForm({
    fullName: 'Priya Sharma',
    phoneNumber: '9176180348',
    email: 'priya@example.com',
    projectType: 'Modular Kitchen',
    location: 'Dindigul',
    budget: '₹5–10 Lakhs',
    requirements: 'Looking for modern acrylic modular kitchen with breakfast counter',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('formatEnquiryMessage produces exact required format with placeholders filled', () => {
  const msg = formatEnquiryMessage({
    fullName: 'Karthik Raja',
    phoneNumber: '9176180348',
    email: '',
    projectType: 'Full Home Interiors',
    location: 'Palani Road, Dindigul',
    budget: '₹10–20 Lakhs',
    requirements: 'Complete interior design for a 3BHK contemporary villa.',
  });

  assert.ok(msg.includes('Hello Aura Interior!'));
  assert.ok(msg.includes('Name: Karthik Raja'));
  assert.ok(msg.includes('Phone: 9176180348'));
  assert.ok(msg.includes('Email: Not provided'));
  assert.ok(msg.includes('Project Type: Full Home Interiors'));
  assert.ok(msg.includes('Location: Palani Road, Dindigul'));
  assert.ok(msg.includes('Budget: ₹10–20 Lakhs'));
  assert.ok(msg.includes('Complete interior design for a 3BHK contemporary villa.'));
  assert.ok(msg.includes('Please contact me with more details.'));
});

test('createWhatsAppUrl creates valid wa.me URL with phone 9176180348 and encoded text', () => {
  const url = createWhatsAppUrl('Hello World');
  assert.equal(url, `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20World`);
});

test('createServiceEnquiryUrl targets specific service with wa.me link', () => {
  const url = createServiceEnquiryUrl('Modular Kitchen Design');
  assert.ok(url.startsWith('https://wa.me/9176180348?text='));
  assert.ok(decodeURIComponent(url).includes('Modular Kitchen Design'));
});
