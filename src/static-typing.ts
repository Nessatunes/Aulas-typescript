/**
 * Tipos primitivos - js
 * number - string - boolean
 */

// Tipagem estatica

let age: number = 41
let fulano: string = 'vanessa'
let isAlive: boolean = false

// Inferência de Tipos

let animal = 'cat'
let quantity = 23

// Tipar Parametros e retorno de funções

function sum(a: number, b: number): number {
  const result = a + b
  return result
}

// Tipagem opcional de retorno

function greeting(fullname: string): string | void {
  if (fullname) {
    return `Hello, ${fullname}!`
  }
}

// Função com parametros ipcionais

function stringOrNumberSize(value: string | number): number {
if(typeof value == 'string'){
  return value.length
}
return value
}