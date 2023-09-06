
//Estrutura de dados

// Arrays
const listaDeNomes = ["Babi", "Ygor", "Erica"]

// Lista Ligadas
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

//Pilhas (Stacks) 

const stack = []

stack.push(1)
stack.push(2)

const topElement = stack.pop()

//Filas (Queues)

const queue = []

queue.push(1)
queue.push(2)

const firtElement = queue.shift()

// ALGORITMOS

// Ordenação de Bolha (BubbleSort)

function bubbleSort(arr) {
   const n = arr.length;
   for (let i = 0; i < n - 1; i++){
    for(let j = 0; j < n - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
   } 
   return arr;
}

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = bubbleSort(unsortedArray)
// Output: [11, 12, 22, 25, 64]

// Pesquisa Binaria (BinarySearch)

// O(n) para O(log n)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.left - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid = 1;
        }
    }
    return - 1
}

const sortedArray2 = [11, 12, 22, 25, 64]
const targetElement = 22;

const result = binarySearch(sortedArray2, targetElement);




