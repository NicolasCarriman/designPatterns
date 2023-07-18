
interface Product {
  name: string;
  price: number;
}

interface Customer {
  name: string;
  age: number;
  gender: string;
  location: string;
  email: string;
}

export interface CustomerData extends Customer {
  preferences: string[];
  problems: string[];
  dreams: string[];
  purchases: Product[];
}

type CustomerDataOnly = Omit<CustomerData, keyof Customer>;

export function createCustomer() {

  let customer: CustomerData = Object.create(null);

  const defineCustomerDataPropery = function <T extends keyof CustomerDataOnly>(obj: CustomerData, key: T, value: CustomerDataOnly[T]) {

    /**
     * this method define the customer sensible data properties to encapsulate
     */

    const config = {
      value: value,
      writable: true,
      enumerable: false,
    };

    Object.defineProperty(obj, key, config);
  }

  const defineCustomerProperty = function <T extends keyof Customer>(obj: CustomerData, key: T, value: Customer[T]) {
    const config = {
      value: value,
      writable: false,
      enumerable: true,
    };

    Object.defineProperty(obj, key, config);
  }

  defineCustomerProperty(customer, 'name', 'newCustomer');

  defineCustomerDataPropery(customer, 'dreams', ['viajar', 'ser reconocido']);

  return customer
}
