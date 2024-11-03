// import clsx, { ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export default function cn(...classes: ClassValue[]) {
//   return twMerge(clsx(...classes));
// }

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
