export type Slide = {
  type: 'text' | 'code'
	number: string,
  content: string
  commentary?: string
}

export const slides: Slide[] = [
  {
    type: 'text',
    number: '1',
    content: '# 💪 TypeScript: From Beginner to Pro! 💪\r\n' +
      '\r\n' +
      'This short guide will explain all the benefits of TypeScript and how to get started! I hope you enjoy it!'
  },
  {
    type: 'text',
    number: '2',
    content: '# Why does TypeScript exist?\r\n' +
      '\r\n' +
      'TypeScript is a powerful tool for adding types to your JavaScript code, allowing you to be more strict about what types are expected to be passed into functions and how they are defined. This helps catch errors early in the development process, making your code more reliable and easier to maintain.\r\n' +
      '\r\n' +
      '# How do install it?\r\n' +
      '\r\n' +
      'There are several ways to install TypeScript. Choose the method that best suits your current environment **[here 👈🏼](https://www.typescriptlang.org/download/)**'
  },
  {
    type: 'text',
    number: '3',
    content: '# Core Features\r\n' +
      '\r\n' +
      '### Here are some of the core features of TypeScript:\r\n' +
      '\r\n' +
      '### Static Typing\r\n' +
      '\r\n' +
      'This allows you to annotate your variables, parameters, and the return type of a function. It also makes your code more readable, especially when creating custom objects or using types from a specific framework.\r\n' +
      '\r\n' +
      '### Interfaces\r\n' +
      '\r\n' +
      'Interfaces are a great way to define the structure of an object. They allow you to specify all the required and optional fields, as well as the type of each field, such as a string, number, float, or custom type.\r\n' +
      '\r\n' +
      '### Type Objects\r\n' +
      '\r\n' +
      'Also known as type aliases in TypeScript, these allow the creation of custom types, making it easier to manage complex objects.'
  },
  {
    type: 'text',
    number: '4',
    content: '# Benefits\r\n' +
      '\r\n' +
      '## TypeScript offers several key advantages:\r\n' +
      '\r\n' +
      '- Improved code maintainability: Static typing makes it easier to refactor and update large codebases.\r\n' +
      '- Enhanced readability: Type annotations serve as inline documentation, making code intentions clearer.\r\n' +
      '- Better error detection: Compile-time type checking catches errors early, reducing runtime bugs.\r\n' +
      '- Improved developer productivity: Advanced autocompletion and IntelliSense features speed up development.\r\n' +
      '- Easier collaboration: Types provide a clear contract for how code should be used, facilitating teamwork.'
  },
  {
    type: 'code',
    number: '5',
    content: 'function greet(name: string) {\r\n' +
      '  console.log(`Hello, \${name}!`)\r\n' +
      '}\r\n' +
      '\r\n' +
      'greet("TypeScript")',
    commentary: 'This is a basic TypeScript function. Note how the parameter for name is annotated to be a string.'
  },
  {
    type: 'code',
    number: '6',
    content: 'let name = "Alice";  // TypeScript infers type as string\r\n' +
      'let age = 30;        // TypeScript infers type as number\r\n' +
      'let isStudent = true;  // TypeScript infers type as boolean\r\n' +
      '\r\n' +
      'let numbers = [1, 2, 3];  // TypeScript infers type as number[]',
    commentary: 'TypeScript also has the ability to infer types at compile time when it is easy for it to distinguish what the type is likely to be, saving you time.'
  },
  {
    type: 'code',
    number: '7',
    content: 'interface Person {\r\n' +
      '  name: string;\r\n' +
      '  age: number;\r\n' +
      '  greet(): void;\r\n' +
      '}\r\n' +
      '\r\n' +
      'let user: Person = {\r\n' +
      '  name: "Alice",\r\n' +
      '  age: 30,\r\n' +
      '  greet() {\r\n' +
      "    console.log(`Hello, I'm ${this.name}`);\r\n" +
      '  }\r\n' +
      '};',
    commentary: "Interfaces are a bit like objects except you can also annotate what each field's type should be at compile time when it's being used or passed around in functions. This makes it easy to make sure there are no missing fields and every field has a type you expect it to be. You can also include that it has a function as a field and describe what return type that function should return."
  },
  {
    type: 'text',
    number: '8',
    content: '# Type Guards\r\n' +
      '\r\n' +
      'Type guards in TypeScript allow you to narrow down the type of a variable within a conditional block. They help you work with union types more safely by checking the type or structure of a value at runtime.'
  },
  {
    type: 'code',
    number: '9',
    content: '// Union type\r\n' +
      'type StringOrNumber = string | number;\r\n' +
      '\r\n' +
      'function processValue(value: StringOrNumber) {\r\n' +
      '  // Type guard using typeof\r\n' +
      '  if (typeof value === "string") {\r\n' +
      "    // In this block, TypeScript knows 'value' is a string\r\n" +
      '    console.log(value.toUpperCase());\r\n' +
      '  } else {\r\n' +
      "    // Here, TypeScript infers 'value' must be a number\r\n" +
      '    console.log(value.toFixed(2));\r\n' +
      '  }\r\n' +
      '}\r\n' +
      '\r\n' +
      '// Custom type guard\r\n' +
      'interface Car {\r\n' +
      '  make: string;\r\n' +
      '  model: string;\r\n' +
      '}\r\n' +
      '\r\n' +
      'interface Bicycle {\r\n' +
      '  type: string;\r\n' +
      '  gears: number;\r\n' +
      '}\r\n' +
      '\r\n' +
      'function isCar(vehicle: Car | Bicycle): vehicle is Car {\r\n' +
      '  return (vehicle as Car).make !== undefined;\r\n' +
      '}\r\n' +
      '\r\n' +
      'function describeVehicle(vehicle: Car | Bicycle) {\r\n' +
      '  if (isCar(vehicle)) {\r\n' +
      "    // TypeScript knows 'vehicle' is a Car here\r\n" +
      '    console.log(`Car: \\${vehicle.make} ${vehicle.model}`);\r\n' +
      '  } else {\r\n' +
      "    // TypeScript infers 'vehicle' is a Bicycle\r\n" +
      '    console.log(`Bicycle: \\${vehicle.type} with ${vehicle.gears} gears`);\r\n' +
      '  }\r\n' +
      '}',
    commentary: '### Key points about type guards:\r\n' +
      '\r\n' +
      '- They use conditional checks to narrow down types.\r\n' +
      '- Built-in type guards include typeof and instanceof.\r\n' +
      '- You can create custom type guards using type predicates.\r\n' +
      '- They improve type safety when working with union types.\r\n' +
      '- Type guards help TypeScript infer the correct type within conditional blocks.'
  },
  {
    type: 'text',
    number: '10',
    content: '# Type Assertions\r\n' +
      '\r\n' +
      "Type assertions in TypeScript allow you to tell the compiler to treat a value as a specific type, overriding its default type inference. This is useful when you have more information about a value's type than TypeScript can infer on its own."
  },
  {
    type: 'code',
    number: '11',
    content: '// Type assertion with objects\r\n' +
      '\r\n' +
      'interface User {\r\n' +
      '  name: string;\r\n' +
      '  age: number;\r\n' +
      '}\r\n' +
      '\r\n' +
      'let userObj: any = { name: "Alice", age: 30 };\r\n' +
      'let user = userObj as User;\r\n' +
      "console.log(user.name);  // TypeScript now knows 'user' has a 'name' property",
    commentary: '### Key points about type assertions:\r\n' +
      '\r\n' +
      "- They don't change the runtime behavior; they're purely a compile-time construct.\r\n" +
      "- Use them when you're sure about a type that TypeScript can't infer.\r\n" +
      '- The as keyword is the preferred syntax, especially in JSX files.\r\n' +
      "- They're useful when working with DOM elements or external data."
  },
  {
    type: 'text',
    number: '12',
    content: '# Migrating to TypeScript from JavaScript\r\n' +
      '\r\n' +
      'Incrementally migrating an existing JavaScript codebase to TypeScript is often the most practical approach for large projects.\r\n' +
      '\r\n' +
      '### Advice:\r\n' +
      '\r\n' +
      '- Start with a tsconfig.json file\r\n' +
      '- Add **allowJs** to the file so that you can mix JS/TS in the project.\r\n' +
      '- Rename your existing files gradually from .js to .ts, starting with the less complex files.\r\n' +
      "- If you get any type errors and you don't currently have the time to refactor something else, use the type **any** where possible for the time being. Be sure to fix it later as **any** is error prone!\r\n" +
      '- Change "strict" in the tsconfig to false and then manually change which strict settings you wanna keep in place, for example strictNullChecks.\r\n' +
      '\r\n' +
      '### Remember, this process can be gradual. The goal is to improve the codebase over time while continuing to ship features and maintain the application.'
  },
  {
    type: 'text',
    number: '13',
    content: '# I hope you have learnt about all the great things you can do with TypeScript! 💪'
  }
]