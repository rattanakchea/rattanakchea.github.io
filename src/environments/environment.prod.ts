import { commonEnvironment } from "./environment.common";

const PORT = 3000;

export const environment = {
  production: true,
  rootUrl: `http://localhost:${PORT}/`, //TODO replace with my prod API
  ...commonEnvironment
};
