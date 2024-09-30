import { body } from "express-validator"

export const createUserValidation = [
  body('name')
    .isString().withMessage('O nome deve ser uma string')
    .notEmpty().withMessage('O nome é obrigatório'),

  body('email')
    .isEmail().withMessage('O email deve ser válido')
    .notEmpty().withMessage('O email é obrigatório'),

  body('password')
    .isString().withMessage('A senha deve ser uma string')
    .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres')
    .notEmpty().withMessage('A senha é obrigatória'),

  body('state')
    .isString().withMessage('O estado deve ser uma string')
    .notEmpty().withMessage('O estado é obrigatório'),

  body('city')
    .isString().withMessage('A cidade deve ser uma string')
    .notEmpty().withMessage('A cidade é obrigatória'),

  body('telephone')
    .matches(/^\d{2}-\d{5}-\d{4}$/).withMessage('O telefone deve estar no formato 00-00000-0000')
    .notEmpty().withMessage('O telefone é obrigatório'),

  body('roleId')
    .isString().withMessage('O roleId deve ser uma string válida')
    .notEmpty().withMessage('O roleId é obrigatório')
]
