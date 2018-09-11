function bubbleSort(arr) { 
	while(!isSorted(arr)) { // se o item anterior for verdadeiro
		for (let i = 1; i < arr.length; i++) { //para cada segundo item, analisar o q está na lista e depois passar a analisar o item seguinte
			if (arr[i - 1] > arr[i]) { // se o item anterior for maior que o item analisado
				const aux = arr[i] // temos uma constante em que o numero auxiliar é igual ao item analisado
				arr[i] = arr[i - 1] // o item analisado passa a ser o item anterior
				arr[i - 1] = aux // e o item anteior passa a ser o item analisado, trocando assim a ordem dos itens. 
			}
	    }
	}

	return arr
}
undefined
function isSorted(arr) {
    for (var i = 1; i < arr.length; i++) { //para cada segundo item da lista, analisar q está dentro (menor que o comprimento da lista)da lista menos 1, e a cada nova interação, adicione i
        if (arr[i - 1] > arr[i]) return false //se o item anterior for maior que o item analisado, retornar falso. 
    }

   return true // se for menor, retornar verdadeiro
}
undefined



function bubbleSort(arr) { //[6,2,9,1]
    let isSorted = false

	while(!isSorted) { 
        isSorted = true  
        for (let i = 1; i < arr.length; i++) { //1 
			if (arr[i - 1] > arr[i]) { // 2 > 6 ? false  // 6>2? true // 9>6? true // 1>9? false
                isSorted = false

				const aux = arr[i]  // 2 // 1
				arr[i] = arr[i - 1] // arr[1]= 6 // 6,6,9,1 // arr[1]=1
				arr[i - 1] = aux  // arr[0] = 2 // 2,6,9,1 //arr[0]= 9 
			}
	    }
	}

	return arr
}

/*[6,2,9,1]

2 e 6 >> 2,6,9,1
6 e 9 >> 2,6,9,1
9 e 1 >> 2,6,1,9
2 e 6 >> 2,6,1,9
6 e 1 >> 2,1,6,9
6 e 9 >> 2,1,6,9
2 e 1 >> 1,2,6,9 */


function isSorted(arr) {
    for (var i = 1; i < arr.length; i++) { //para cada segundo item da lista, analisar q está dentro (menor que o comprimento da lista)da lista menos 1, e a cada nova interação, adicione i
        if (arr[i - 1] > arr[i]) return false //se o item anterior for maior que o item analisado, retornar falso. 
    }

   return true // se for menor, retornar verdadeiro
}
undefined



function bogoSort(arr) {
	let count = 0

	while(!isSorted(arr)) { // enquanto isSorted for falso, continua rodando, se verdadeiro, para. 
		count++ // adiciona 1 à variável
		if (count > 10000) {
			throw "Iteração demais! Antes que seu computador trave, tente novamente." // se o numero for mais que 10000, colocar um novo numero
		}
		
		for (let i = 0; i < arr.length; i++) { // a interação começa em 0, sendo que i tem quer ser menor q o comprimento da linha, e depois adicionar um numero 'a interação
	        const random_index = Math.floor(Math.random() * arr.length) // criar a constante random_index que é: um numero randomico que esteja dentra da linha.
	        const aux = arr[i] // criar a constante auxiliar que equivale a interação 
	        arr[i] = arr[random_index] // a interação passa a valer o random_index
	        arr[random_index] = aux //o random index passa a valer o numero do auxiliar
	    }
	}

	return arr
}



function selectionSort(arr) {
	let sorted = [] // uma nova lista vazia

	while (arr.length > 0) { // comprimento da lista maior que zero
		let lowest = Infinity // o mais baixo é infito
		let lowest_index 
        for (const [index, item] of arr.entries()) {  //para a constante q inclui Index e Item da linha 
			if (item < lowest) { // se o item é menor que o item mais baixo
				lowest = item // o mais baixo vira item
                lowest_index = index // o index mais baixo vira index
                
                console.log("lowest",lowest)
                console.log("lowest_index",lowest_index)
                console.log("index",index)
            }
            
            
		}
        sorted.push(lowest) // cria um item no final da lista
        
        console.log("sorted", sorted)

        arr.splice(lowest_index, 1) //
        // 1, 2, 3.splice(0, 1) -> 2, 3
        // 6, 7, 8.splice(1, 2) -> 6

        console.log("sorted", sorted)
	}

	return sorted

}
