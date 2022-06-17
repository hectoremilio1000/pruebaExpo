// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Role = {
  "DOCTOR": "DOCTOR",
  "PACIENTE": "PACIENTE",
  "ADMIN": "ADMIN"
};

const Categoriablog = {
  "MAIN": "MAIN",
  "SUBMAIN": "SUBMAIN",
  "NORMAL": "NORMAL"
};

const { Pruebas, BLOG, Enfermeras, User } = initSchema(schema);

export {
  Pruebas,
  BLOG,
  Enfermeras,
  User,
  Role,
  Categoriablog
};