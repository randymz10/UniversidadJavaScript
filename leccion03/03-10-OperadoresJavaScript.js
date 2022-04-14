let a = 3, b = 2, c = 1, d = 4;

//Operador (+)

let z = a + b;
console.log("Resultado de la suma: " + z);

//Operador (-)
z = a - b;
console.log("Resultado de la resta: " + z);

//Operador (*)
z = a * b;
console.log("Resultado de la multiplicación: " + z);

//Operador (/)
z = a / b;
console.log("Resultado de la división: " + z);

//Operador (%)
z = a % b; // residuo de la división
console.log("Resultado del modulo (residuo): " + z);

//Operador exponente (**)
z = a ** b;
console.log("Resultado del exponente: " + z);

// Incremento
//Pre-incremento (el operadorr ++ antes de la variable)

z = ++a;
console.log(a);
console.log(z);

//Post-incremento (El operador ++ después de la variable)

z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento (El operador -- antes de la variable)
z = --a;
console.log(a);
console.log(z);

//Post-decremento (El operador -- después de la variable)
z = b--;
console.log(b);
console.log(z);

//Precedencia de Operadores en JavaScript

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / d;
console.log(z);

//Operador de asignación (=)

a = 1;

// Operador de asignación compuesto (+=, -=, *=, /=, %=, **=)

a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a + 3
console.log(a);

// Operadores de comparación 
//Igual a(==, ===)

a = 3, b = 2, c = "3";

z = a == b; // Se revisa el valor sin importar el tipo
console.log(z);

z = a == c;
console.log(z);

z = a === c; // Revisa los valores pero también el tipo
console.log(z)

// Operadores distinto a (!=, !==)

z = a != b; // Se revisa el valor sin importar el tipo
console.log(z);

z = a != c;
console.log(z);

z = a !== c; // Revisa los valores pero también el tipo
console.log(z)

// Operadores relacionales (menor e mayor que <>, menor o igual e mayo o igual)

a = 3, b = 3, c = "3";

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);