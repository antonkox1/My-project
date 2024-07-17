"use strict";

document.querySelector('.butt').onclick = myClick;




function binary_search (listForsearch, numberArr) { // Бинарный поиск
    let low = 0;
    let high = listForsearch.length - 1;
        while (low <= high) {
        let mid = Math.floor((low + high) / 2) ;
        let guess = listForsearch[mid];
        if (guess === numberArr){
            return mid;
        }
        if (guess < numberArr){
            low = mid + 1;
        }
        else    {
            high = mid - 1;
        }    

        }
        return null;
    }

function myClick() {
    const myList = [1,2,3,4,5,6,7,8,9,10,11,12];
    let number = prompt('Введите число от 1 до 12');
    number = Number(number);
    let resultBinarySearch = binary_search(myList, number)
    if (resultBinarySearch === null){
        alert(`Вводи, что говорят!`); 
    } else {
        alert(`Номер в массиве ${resultBinarySearch}`); 
    }
    console.log(myList);
    document.querySelector('.text_out').innerHTML = sortDescending(myList); //Вывод массива на экран
   
}



function sortDescending (arr){ //Сортировка по возрастанию (с созданием нового массива)
    let smallest = arr[0];
    let newList = new Array();
    let smallestIndex = 0;
    let lengthArr = arr.length - 1;
    for (let j = 0; j <= lengthArr; j++) {
        for (let i = 1; i <= arr.length - 1; i++){
            if (arr[i] > smallest) { // Если поменять на > то станет сортирка по убыванию, < по возрастанию 
                smallest = arr[i];
                smallestIndex = i;
            }
        }
        newList.push(smallest);
        arr.splice(smallestIndex, 1);
        smallest = arr[0];
    }
    return newList;
}

