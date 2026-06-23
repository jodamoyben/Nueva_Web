
export type Language = 'es' | 'en';

export interface ServicePackage {
  id: string;
  name: { es: string; en: string };
  price: number;
  highlight?: boolean;
  color: string;
  features: { es: string[]; en: string[] };
  delivery: { es: string; en: string };
  designTime: { es: string; en: string };
}

export interface AdditionalService {
  name: { es: string; en: string };
  price: string;
}

export interface UseCase {
  title: { es: string; en: string };
  description: { es: string; en: string };
  icon: string;
  color: string;
}
