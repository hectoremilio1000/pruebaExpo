import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Role {
  DOCTOR = "DOCTOR",
  PACIENTE = "PACIENTE",
  ADMIN = "ADMIN"
}

export enum Categoriablog {
  MAIN = "MAIN",
  SUBMAIN = "SUBMAIN",
  NORMAL = "NORMAL"
}



type PruebasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BLOGMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EnfermerasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Pruebas {
  readonly id: string;
  readonly nombre?: string | null;
  readonly imagen?: string | null;
  readonly categoria?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pruebas, PruebasMetaData>);
  static copyOf(source: Pruebas, mutator: (draft: MutableModel<Pruebas, PruebasMetaData>) => MutableModel<Pruebas, PruebasMetaData> | void): Pruebas;
}

export declare class BLOG {
  readonly id: string;
  readonly titulo?: string | null;
  readonly text?: string | null;
  readonly foto?: string | null;
  readonly categoria?: Categoriablog | keyof typeof Categoriablog | null;
  readonly fecha?: string | null;
  readonly creadoPor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BLOG, BLOGMetaData>);
  static copyOf(source: BLOG, mutator: (draft: MutableModel<BLOG, BLOGMetaData>) => MutableModel<BLOG, BLOGMetaData> | void): BLOG;
}

export declare class Enfermeras {
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly whats?: string | null;
  readonly direccion?: string | null;
  readonly numexterior?: string | null;
  readonly numinterior?: string | null;
  readonly codigopostal?: string | null;
  readonly colonia?: string | null;
  readonly municipio?: string | null;
  readonly ciudad?: string | null;
  readonly estado?: string | null;
  readonly edad?: string | null;
  readonly cedula?: string | null;
  readonly antiguedad?: string | null;
  readonly especialidad?: string | null;
  readonly curso?: string | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Enfermeras, EnfermerasMetaData>);
  static copyOf(source: Enfermeras, mutator: (draft: MutableModel<Enfermeras, EnfermerasMetaData>) => MutableModel<Enfermeras, EnfermerasMetaData> | void): Enfermeras;
}

export declare class User {
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly role?: Role | keyof typeof Role | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}