import { body } from "express-validator"

export const createAnimalValidation = [
  body('name')
  .isString().withMessage('O nome deve ser uma string')
  .notEmpty().withMessage('O nome é obrigatório'),

  body('sex')
  .isIn(['MACHO', 'FEMEA']).withMessage('O sexo deve ser "MACHO" ou "FEMEA"')
  .notEmpty().withMessage('O sexo é obrigatório'),

  body('age')
  .isInt({ min: 0 }).withMessage('A idade deve ser um número inteiro positivo')
  .notEmpty().withMessage('A idade é obrigatória'),

  body('animalSize')
  .isIn(['PEQUENO', 'MEDIO', 'GRANDE']).withMessage('O tamanho do animal deve ser "PEQUENO", "MEDIO" ou "GRANDE"')
  .notEmpty().withMessage('O tamanho do animal é obrigatório'),

  body('specie')
  .isIn(['GATO', 'CACHORRO']).withMessage('A Espécie do animal deve ser "GATO", "CACHORRO"')
  .notEmpty().withMessage('O specie é obrigatório'),

  body('state')
  .isString().withMessage('O estado deve ser uma string')
  .notEmpty().withMessage('O estado é obrigatório'),

  body('city')
  .isString().withMessage('A cidade deve ser uma string')
  .notEmpty().withMessage('A cidade é obrigatória'),

  body('description')
  .isString().withMessage('A descrição deve ser uma string')
  .notEmpty().withMessage('A descrição é obrigatória'),

  // body('photoAnimal')
  // .isURL().withMessage('A foto do animal deve ser uma URL válida')
  // .notEmpty().withMessage('A foto do animal é obrigatória'),

  body('livesWellIn')
  .isIn(['APARTAMENTO', 'CASA']).withMessage('O ambiente de vida deve ser "APARTAMENTO" ou "CASA"')
  .notEmpty().withMessage('O ambiente de vida é obrigatório'),

  body('sociableWith')
  .isIn(['DESCONHECIDOS', 'CRIANCAS', 'OUTROS_ANIMAIS']).withMessage('O nível de sociabilidade deve ser "DESCONHECIDOS", "CRIANCAS" ou "OUTROS_ANIMAIS"')
  .notEmpty().withMessage('O nível de sociabilidade é obrigatório'),

  body('vetCare')
  .isIn(['CASTRADO', 'VERMIFUGADO', 'VACINADO']).withMessage('O cuidado veterinário deve ser "CASTRADO", "VERMIFUGADO" ou "VACINADO"')
  .notEmpty().withMessage('O cuidado veterinário é obrigatório'),

  body('file')
  .notEmpty().withMessage('A foto do animal é obrigatória'),
]