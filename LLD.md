# OOPs, SOLID Principles

## Encapsulation

Encapsulation in TypeScript involves bundling the data (properties) and methods (functions) that operate on the data into a single unit, known as a class. This helps in hiding the internal details of an object and exposing only what is necessary. There are three main aspects of encapsulation in TypeScript:

1. **Private Members:**

   - Use the `private` keyword to make properties or methods private.
   - Private members can only be accessed within the class.

   ```typescript
   class Car {
     private speed: number;

     constructor(initialSpeed: number) {
       this.speed = initialSpeed;
     }

     accelerate() {
       this.speed += 10;
     }
   }

   const myCar = new Car(50);
   myCar.accelerate(); // Valid
   // myCar.speed; // Error: Property 'speed' is private and only accessible within class 'Car'.
   ```

2. **Protected Members:**

   - Use the `protected` keyword to make properties or methods protected.
   - Protected members can be accessed within the class and its subclasses.

   ```typescript
   class Animal {
     protected sound: string;

     constructor(sound: string) {
       this.sound = sound;
     }

     makeSound() {
       console.log(this.sound);
     }
   }

   class Dog extends Animal {
     bark() {
       this.makeSound(); // Accessing protected member from the base class
     }
   }

   const myDog = new Dog("Woof!");
   myDog.bark(); // Outputs: Woof!
   // myDog.sound; // Error: Property 'sound' is protected and only accessible within class 'Animal' and its subclasses.
   ```

3. **Getters and Setters:**

   - Use getters and setters to control access to the properties of a class.

   ```typescript
   class Circle {
     private _radius: number;

     get radius(): number {
       return this._radius;
     }

     set radius(value: number) {
       if (value >= 0) {
         this._radius = value;
       } else {
         console.log("Radius cannot be negative.");
       }
     }
   }

   const myCircle = new Circle();
   myCircle.radius = 5;
   console.log(myCircle.radius); // Outputs: 5
   // myCircle._radius; // Error: Property '_radius' is private and only accessible within class 'Circle'.
   ```

In summary, encapsulation in TypeScript involves using access modifiers (`private`, `protected`) to control the visibility of class members and employing getters and setters to manage access to properties. This helps in organizing and securing the internal implementation details of a class.

## Abstraction

Let's break down abstraction in a simple way using TypeScript.

Abstraction is a concept in programming where you focus on the essential properties of an object or a system while ignoring the non-essential details.

```typescript
// Example 1: Abstraction through a class

class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    // This is an abstract method, as it doesn't have a specific implementation here
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} says Woof!`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} says Meow!`);
  }
}

const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

myDog.makeSound(); // Output: Buddy says Woof!
myCat.makeSound(); // Output: Whiskers says Meow!
```

In this example, `Animal` is an abstract class with a method `makeSound` that is meant to be implemented by its subclasses. `Dog` and `Cat` are concrete classes that extend `Animal` and provide specific implementations for the `makeSound` method.

This way, we abstract away the details of how each animal makes a sound in the `Animal` class, and each subclass provides its own specific implementation.

```typescript
// Example 2: Abstraction through interfaces

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square implements Shape {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength ** 2;
  }
}

const myCircle = new Circle(5);
const mySquare = new Square(4);

console.log(myCircle.calculateArea()); // Output: 78.54
console.log(mySquare.calculateArea()); // Output: 16
```

In this example, `Shape` is an interface with a method `calculateArea`. Both `Circle` and `Square` implement this interface, providing their own specific logic for calculating the area. The interface serves as an abstraction, defining a common behavior that both shapes must adhere to.

# Inheritance

Inheritance in TypeScript allows one class to inherit properties and methods from another class. It promotes code reuse and the creation of a hierarchical relationship between classes. Here's a simple explanation:

```typescript
// Parent class
class Animal {
  constructor(public name: string) {}

  // Method in the parent class
  makeSound() {
    console.log("Some generic sound");
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  // Child class can have its own constructor
  constructor(name: string, public breed: string) {
    // 'super' is used to call the constructor of the parent class
    super(name);
  }

  // Child class can override methods from the parent class
  makeSound() {
    console.log("Woof! Woof!");
  }

  // Child class can have its own methods
  fetch() {
    console.log("Fetching the ball");
  }
}

// Create an instance of the child class
const myDog = new Dog("Buddy", "Golden Retriever");

// Access properties and methods from both parent and child class
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Woof! Woof!
myDog.fetch(); // Output: Fetching the ball
```

In this example:

- The `Animal` class is the parent class with a property `name` and a method `makeSound`.
- The `Dog` class is the child class that extends `Animal`. It has its own property `breed`, overrides the `makeSound` method, and adds a new method `fetch`.
- The `super` keyword is used in the child class constructor to call the constructor of the parent class.
- Instances of the child class (`myDog`) have access to properties and methods of both the parent and child classes.

This is a basic example, but it illustrates the concept of inheritance in TypeScript.

# Polymorphism

Polymorphism in TypeScript allows objects of different types to be treated as objects of a common type. There are two main types of polymorphism: compile-time (static) and runtime (dynamic).

1. \*\*Compile-time Polymorphism (Method Overloading):

\*\*
In TypeScript, you can achieve compile-time polymorphism through method overloading. This means you can define multiple functions with the same name but different parameter types or numbers.

````typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // Output: 3
console.log(add("Hello, ", "world!")); // Output: Hello, world!

2. **Runtime Polymorphism (Inheritance and Method Overriding):**
   Runtime polymorphism is achieved through inheritance and method overriding. A subclass can provide a specific implementation of a method that is already defined in its superclass.

   ```typescript
   class Animal {
     sound(): string {
       return "Generic animal sound";
     }
   }

   class Dog extends Animal {
     sound(): string {
       return "Bark!";
     }
   }

   class Cat extends Animal {
     sound(): string {
       return "Meow!";
     }
   }

   let myDog: Animal = new Dog();
   let myCat: Animal = new Cat();

   console.log(myDog.sound()); // Output: Bark!
   console.log(myCat.sound()); // Output: Meow!
````

In the example above, `Animal` is the base class, and `Dog` and `Cat` are subclasses that inherit from `Animal`. The `sound` method is overridden in both `Dog` and `Cat` to provide specific behaviors for each subclass. The variable `myDog` is of type `Animal`, but it can hold an instance of `Dog`, and the same goes for `myCat` and `Cat`. This demonstrates runtime polymorphism.

# Relationships between Classes, UML

...

# Simple Factory, Factory Method & Abstract Factory Design Patterns

...

# Builder, Prototype and Singleton Design Patterns

...

# Singleton, Observer, Command Design Patterns

...

# Command, Chain of Responsibility, Iterator Design Pattern

...

# Strategy and Template Design Patterns

...

# Adapter and Decorator Design Patterns

...

# Bridge, Composite, Facade and Proxy Design Patterns

...

# Elevator System Design

...

# Interview Tips, Chess System Design

...

# IRCTC System Design

...

# Meeting Scheduler LLD Mock Interview

...

# State Design Pattern, Zerodha LLD

...

# Recommendation System, NoBRoker

...
