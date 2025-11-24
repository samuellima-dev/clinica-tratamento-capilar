import React, { ElementType } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
}

export interface CaseStudy {
  id: string;
  patientName: string;
  treatment: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}