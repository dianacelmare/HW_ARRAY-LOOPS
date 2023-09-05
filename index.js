// 1. Tipăriți toate numerele pare de la 0 la 10

// Încercați să rezolvați această problemă cât mai eficient posibil. Luați în considerare utilizarea buclelor care vă vor permite să tastați cele mai puține caractere / comenzi (se acceptă orice abordare bazată pe bucle). Deși ați putea pur și simplu să tipăriți numerele pare, fiți creativi și încercați să le generați într-un mod în care să funcționeze indiferent de limita setată (până la 10 sau chiar până la 10.000).

// Exemplu 1:

// Input: n = 10, unde n este numărul maxim până la care se va executa bucla

// Output: 0, 2, 4, 6, 8, 10

function numerePare(num){
  let rezultat = [];
  for(let i = 0; i<=num;i++){
    if(i % 2 == 0){
      rezultat.push(i);
    }
  }
  console.log(`Numerele pare de la 0 la ${num} sunt urmatoarele ${rezultat}`)
  
}

numerePare(10);

// 2. Calculați suma numerelor dintr-un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

// Exemplu 1:

// Input: [1, -5, 20, -34, 16, 29, 36, -4]

// Output: 59

// Exemplu 2:

// Input: [3.45, -2.68, 356, -75.96, 64, 19.28]

// Output: 364.09000000000003

 function arraySum(array){
   let sum = 0
   for(let i=0; i<array.length; i++){
     sum +=array[i];
   }
   console.log("Suma sirului este:", sum)
 }

arraySum([2,4,6,8,9])
arraySum([6,10,1])


// 3. Creați o funcție care inversează un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite. Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.

// Exemplu 1:

// Input: [1, -5, 20, -34, 16, 29, 36, -4]

// Output: [-4, 36, 29, 16, -34, 20, -5, 1]

function reverseArray(array){
  let reversedArray = [];
  for(let i = array.length-1; i >= 0; i--){
    reversedArray.push(array[i]);
  }
  console.log('The reversed array is:', reversedArray)
}

reverseArray([1,2,3,4,5])



// 4. Returnează numărul de vocale dintr-un șir de caractere (string)

// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.

// Exemplu 1:

// Input: “string de test”

// Output: 3

// Explicație: Parcurgeți șirul și verificați fiecare caracter individual. Dacă este vocală, atunci o variabilă își mărește valoarea

// (adaugă +1). În șirul nostru de intrare avem vocalele: i, e, e ⇒ 3.

// function vowelsNum(parameter){
//   let count = 0;
//   for(let i = 0; i <= parameter.length; i++){
//     if(parameter[i] === 'a' || parameter[i] === 'e' || parameter[i] === 'i'|| parameter[i] === 'o' || parameter[i] === 'u'){
//       count += 1;
//     }
//   }
//   console.log("Numarul vocalelor este: ", count);
// }

function vowelsNum(parameter){
  let count = 0;
  vowels = ['a', 'e', 'i', 'o', 'u']
  for(let i = 0; i <= parameter.length; i++){
    if(vowels.includes(parameter[i])){
      count++;
    }
  }
  console.log("Numarul vocalelor este: ", count);
}



vowelsNum('I love pasta!')
