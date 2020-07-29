// Ejercicio 1
// const nombre = prompt("Ingresa tu nombre");
// const edad = prompt("Ingresa tu edad");
// console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${parseInt(edad)+1} años`)

// Ejercicio 2
// const PI= 3.14;
// let resultado;
// const figura = prompt("Escribe el numero de la figura elegida:\n1-Triangulo\n2-Rectangulo\n3-Circulo\n");
// if(figura==="1" || figura==="2"){
//     const base = parseInt(prompt("Ingresa la base"));
//     const altura = parseInt(prompt("Ingresa la altura"));
//     if(figura==="1"){
//         resultado = base*altura/2;
//         console.log(`El area de un Triángulo es ${resultado}`);
//     }
//     if(figura==="2"){
//         resultado = base*altura;
//         console.log(`El area de un Rectángulo es ${resultado}`);
//     }
// }else{
//     const radio = parseInt(prompt("Ingresa el radio del circulo"));
//     resultado = (radio*radio)*PI;
//     console.log(`El area de un Circulo es ${resultado}`);
// }

// Ejercicio 3
// let num = parseInt(prompt("Ingresa tu numero positivo menor 20"));
// for(let i= 1; i<num; i++){
//     if(i%2===0){
//         console.log(`${i} - es Par`);
//     }else{
//         console.log(`${i} - es Impar`);
//     }
// }

// Ejercicio 4
// let num_primo = parseInt(prompt("Ingresa tu numero positivo"));
// let primo= 0;
// for(let i=0; i<=num_primo; i++){
//     if(num_primo%i===0){
//         primo+=1;
//     }
// }
// if(primo>2){
//     console.log(`${num_primo} No es un numero primo`);
// }else{
//     console.log(`${num_primo} Es un numero primo`);
// }

// Ejercicio 5
// let factorial = parseInt(prompt("Ingresa tu numero positivo"));
// let total = 1;
// for(let i=1; i<=factorial; i++){
//     total*=i;
// }
// console.log(total);

// Ejercicio 6
// let suma = 0, num, i =0;
// while(suma<=50){
//     num = parseInt(prompt("Suma de numeros hasta 50\nIngresa un numero positivo"));
//     suma+=num;
//     i++;
// }
// if(suma>50){
//     suma-=num;
//     i--;
    
// }
// console.log(`La suma es ${suma} y la cantidad de numeros es ${i}`);

// Ejercicio 7

// let num = [1,2,3,4,5];
// let par = [];
// let impar = [];
// for(let i=0; i<num.length; i++){
//     let aleatorio = parseInt(Math.random() * (11 - 1) + 1);
//     resul = num[i]*aleatorio;
//     console.log(`${num[i]} * ${aleatorio} = ${resul}`);
//     if(resul%2===0){
//         par.push(resul);
//     }else{
//         impar.push(resul);
//     }
// }
// console.log(par);
// console.log(impar);

// Ejercicio 8

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
// let num = parseInt(prompt('Ingrese su numero de DNI:'));
// let digitos = num.toString().length;
// if(digitos===8 && num>0){
//     console.log(`La letra obtenida es ${letras[num%23]}`);
// }else{
//     console.log(`Ingreso un numero diferente de 8 digitos`);
//     num = parseInt(prompt('Ingreso un numero diferente de 8 digitos\nIngrese su numero de DNI:'));
// }

// Ejercicio 9

// const palabra = prompt("Ingrese una palabra:");
// const caracteres = palabra.split('');
// let vocales = 0,consonantes = 0;
// for(let i=0; i<caracteres.length; i++){
//     if(caracteres[i]===' '){
//         console.log("Ingreso mas de una palabra");
//     }
//     if( caracteres[i]==='a' ||
//         caracteres[i]==='e' ||
//         caracteres[i]==='i' ||
//         caracteres[i]==='o' ||
//         caracteres[i]==='u' ){
//             vocales++;
//         }else{
//             consonantes++;
//         }
// }
// console.log(`La palabra tiene ${caracteres.length} caracteres, ${vocales} vocales y ${consonantes} consonantes`);

// Ejercicio 10

// const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
// const color = prompt("ingrese un color:");
// let flag = false;
// for(let i=0; i<colores.length; i++){
//     if(colores[i]===color){
//         flag = true;
//     }
// }
// if(flag){
//     console.log(`El color ${color} esta dentro del array de colores`);
// }else{
//     console.log(`El color ${color} NO se encuentra dentro del array de colores`);
// }

