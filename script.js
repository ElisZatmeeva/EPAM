'use strict'
// Tasks 1 Sort
/* Дан массив целых чисел. Напишите функцию, которая получает данный массив в качестве аргумента и сортирует его 
по возрастанию, а также программу для демонстрации работы этой функции.  */

let inputArr = document.querySelector('.arr'),
buttonSort = document.querySelector('.sort'), 
inputRes = document.querySelector('#result'),
arr;
/* console.log(inputArr);
console.log(buttonSort);
console.log(inputRes);
 */
buttonSort.addEventListener('click', function(){
 arr = inputArr.value.split(','); // БЕЗ ПРОБЕЛА
	 
	function sortFunction(a, b) {
	 if (a > b) return 1;
	 if (a == b) return 0;
	 if (a < b) return -1;
	 console.log( a + " <> " + b );
	  }

	  arr.sort(sortFunction);
     
     inputRes.value = arr; 
     inputArr. value = '';
   
});


/* Tasks 2 
Напишите функцию, которая для отсортированного маcсива целых чисел определяет, содержится ли в нем заданное значение. */ 

let inputNum = document.querySelector('.num'),
divRes = document.querySelector('.res');

// console.log(inputNum, divRes);

function funcIncludes(){
 let num = +inputNum.value;
 let z;
	for (let i = 0; i < arr.length; i++) {
	 z = arr[i];
		if (num == z) {
		 divRes.textContent = `Число ${num} содержится в массиве`;
		 break;
		}
	}
		if (num != z) {
	     divRes.textContent = `Числа ${num} нет в массиве`;
		}

    
    inputNum. value = '';
}
document.querySelector('.find').addEventListener('click', funcIncludes); 


/* Tasks 3. Строки
Дана строка, вывести только те слова, которые встречаются в ней только один раз. */ 

let str1 = document.querySelector('.text'),
words = document.querySelector('#res-text');

// console.log(str, word);

str1.addEventListener('change', function(){
	
	let arrWord = str1.value.split(' '),
	
	l = '',
	i = 0;
	
	while (i < arrWord.length) {
	 let j = 0,
	 sum = 0;
		while (j < arrWord.length) {
		 let z = 0;
		 let y = 0;

		  if (arrWord[i] === arrWord[j]) {
			sum++; 			
		  }
		  
		j++;
		}
	
	if ( sum == 1) {
	 l = arrWord[i];
	 words.value += l + ' ';
	 
	}	
	i++;
	}
});
	
	
// Tasks 4.  Факториал
//Написать функцию нахождения факториала числа n.

function factorial(n) {
  if (n === 1) {
	  return 1;
  } else {
	  return n * factorial(n-1);
  }
};

console.log( factorial(4) );


// Tasks 5. Правильная скобочная последовательность*
//Дана строка состоящая из скобок “{},(),[]”, определить является ли данная строка
//правильно скобочной последовательность. Например (()) – псп, а ((() нет. 
let str = "{},(),[]";
let count1 = 0;
let count2 = 0;
let count3 = 0;

for (let i = 0; i < str.length; i++) {
	if ( str[i] === "(" ) {
	 console.log(str[i]);
	 count1++;
	}
	 if ( str[i] === "[") {
	 console.log(str[i]);
	 count2++;
	 }
	 if ( str[i] === "{" ) {
	 console.log(str[i]);
	 count3++;
	}
	
	if (str[i] === ")") {
	 console.log(str[i]);
	 count1--;
	}
	if (str[i] === "]") {
	 console.log(str[i]);
	 count2--;
	}
	if (str[i] === "}" ) {
	 console.log(str[i]);
	 count3--;
	}
}
/*console.log(count1);
  console.log(count2);
  console.log(count3);*/
if (count1 < 0 || count2 < 0 || count3 < 0) {
	 console.log("Не правильная скобочная последовательность");
		
	}
if (count1 > 0 || count2 > 0 || count3 > 0) {
	 console.log("Не правильная скобочная последовательность");
	
	}
	if (count1 == 0 && count2 == 0 && count3 == 0) {
	 console.log("Скобочная пследовательность верна.");
	 
	}
