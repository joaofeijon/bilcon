export class InvalidLoginError extends Error {
  constructor() {
    super("Credenciais invalidas!")
  }
}