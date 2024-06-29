// Type boas praticas letra maiuscula,singular, e ponto e virgula

type Coordinate = {
  x: number;
  y: number;
}

function CalculateDistance(pointA: Coordinate, pointB: Coordinate): number{
  const dx = pointB.x - pointA.x;
  const dy = pointB.y - pointA.y;

  const result = Math.sqrt(dx * dx + dy * dy);

  return result
}
const CoordinateA: Coordinate = {
  x: 20,
  y: 8
}
const CoordinateB: Coordinate = {
  x: 15,
  y: 30
}
//console.log(CalculateDistance(CoordinateA, CoordinateB))

// Interface parecido com classes - tambem com pascalcase letra maisuscula

interface Car {
  brand: string;
  model: string;
  year: number;
  startEngine: () => void;
}

const myCar: Car = {
  brand: 'Audi',
  model: 'A3',
  year: 2023,
  startEngine: () => {
    console.log('Engine Started!')
  }
}

function drive(car: Car): void {
  console.log(`Driving ${car.brand} - ${car.model}`)
    car.startEngine();  
}
drive(myCar)