export class InvalidRegisterError extends Error {
  constructor() {
    super("E-mail já cadastrado!")
  }
}