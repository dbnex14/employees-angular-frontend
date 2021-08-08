/* holds response of the api */
export class Employee {
  /* these props should match the JPA properties in Springboot backend api */
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
