export interface UserType {
  id: number;
  name: { firstname: string; lastname: string };
  token: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface BlogType {
  id: string;
  content: string;
}

export interface TechStackType {
  id?: string;
  name: string;
  logo: string;
}

export interface CertificateType {
  id?: string;
  name_vi: string;
  name_en: string;
  description_vi: string;
  description_en: string;
  img: string;
}
