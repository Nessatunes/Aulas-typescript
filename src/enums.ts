enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

type Person = {
  name: string;
  age: number;
  gender: string;
}

const person: Person = {
  name: 'Joao da silva',
  age: 13,
  gender: Gender.OTHER
}

function displayPersonInfo(person: Person): void{
  console.log(`${person.name}`);
  console.log(`${person.age}`);
  console.log(`${person.gender}`);
}
displayPersonInfo(person)