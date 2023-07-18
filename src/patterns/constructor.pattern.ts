class BaseCustomer {
  name: string;
  email: string;
  gender: string;
  age: number;
  location: string;
  
  constructor (
    name: string,
    email: string,
    gender: string,
    age: number,
    location: string
  ) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.age = age;
    this.location = location;
  }
}

BaseCustomer.prototype.toString = function (): string {
  return this.name + ' ' + this.email;
}

export const newBaseCustomer = new BaseCustomer(
  'nico',
  'nico@gmail.com',
  'masculino',
  21,
  'eslovaquia'
).toString();

