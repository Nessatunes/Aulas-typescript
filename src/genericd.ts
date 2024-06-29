// função generica para usar para qualquer tipo de dado
// ['Lucas', 'Fernanda', 'Gabriel']
//[1, 2, 3, 4, 5]

function getFirstElement<T>(data: T[]): T | null {
  if (!data.length) {
    return null
  }
  const [firstElement] = data;

  return firstElement

}
const stringArray: string[] = ['Lucas', 'Fernanda', 'Gabriel'];
const numberArray: number[] = [1, 2, 3, 4, 5];

console.log(getFirstElement<string>(stringArray));
console.log(getFirstElement<number>(numberArray));