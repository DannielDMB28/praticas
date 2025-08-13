function tipodedado(valor) {
    return typeof valor;
}

console.log(tipodedado(10));
console.log(tipodedado('Daniel'));
console.log(tipodedado(true));       // "boolean"
console.log(tipodedado({}));         // "object"
console.log(tipodedado([]));         // "object" (arrays são um tipo especial de objeto)
console.log(tipodedado(null));       // "object" (peculiaridade do JavaScript)
console.log(tipodedado(undefined));  // "undefined"
console.log(tipodedado(function(){})); // "function"