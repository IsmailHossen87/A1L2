#Interview Import Question : 
  ## 1.Write an impactful blog post on 2 of the following questions:
  ## 2.What are some differences between interfaces and types in TypeScript?
  ## 3.What is the use of the keyof keyword in TypeScript? Provide an example.
  ## 4.Explain the difference between any, unknown, and never types in TypeScript.
  ## 5.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
  ## 6.What is type inference in TypeScript? Why is it helpful?
  ## 7.How does TypeScript help in improving code quality and project maintainability?
  ## 8.Provide an example of using union and intersection types in TypeScript.



#  Answer :
In this blog, we will discuss two important topics in TypeScript. These are:

1. Union and Intersection Types
2. Difference between Interface vs. Type

---

## 1. Union and Intersection Types

### 🔹 What is a Union Type?

A Union Type is a type that can be any one of multiple types. Suppose, a variable can be a string or a number — then we write `string | number`.

**Example:**

```ts
function printUserId(userId: string | number): void {
if (typeof userId === 'string') {
console.log(`User ID is a string: ${userId}`);
} else {
console.log(`User ID is a number: ${userId}`);
}
}
```
Here the user ID can be a string or a number.

### 🔹 What is Intersection Type ?
Intersection Type is used when we want to have properties of multiple types together in an object. We express it with the & symbol.

**Example:**

```ts
type Address = { 
city: string; 
country: string;
};
type Person = { 
name: string; 
age: number;
};
type PersonWithAddress = Person & Address;
const user: PersonWithAddress = { 
name: "rahim", 
age: 25, 
city: "Dhaka", 
country: "Bangladesh",
};
```

### 2. Difference between Interface vs. Type
🔹 Interface: 
    1.Interface is mainly used to define the structure of an object.
    2.Interfaces can be extended multiple times by extending and implementing them.
    3.Can be easily implemented in a class.
```ts
interface Vehicle {
  brand: string;
  speed: number;
}
interface Electric {
  batteryCapacity: number;
}
interface ElectricCar extends Vehicle, Electric {}
const tesla: ElectricCar = {
  brand: "Tesla",
  speed: 200,
  batteryCapacity: 100,
};
```

🔹 Type :
    1.type is a type alias — can be used for any type (object, union, primitives, etc.).
    2.Types can be used more flexibly with union, intersection.

```ts
type UserID = string | number;
type Status = 'active' | 'inactive';

