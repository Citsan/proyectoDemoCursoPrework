const username : string | number = "citsan";
const sum = (a: number,  b: number) =>{
  return a+b;
}
sum (1,2);

class person {
  
  constructor ( public age: number, public lastName: string){}
}

const citsan = new person(15, "sanchez");
citsan.age;

const suma = ( a : number , b: number):number => a + b
const saludar = (nombre: string , edad: number ):string => `Hola me llamo ${nombre} y tengo ${edad} años`