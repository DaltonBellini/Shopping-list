alert('Com esse programa, você conseguirá criar uma lista de compras com até 10 itens. Poderá  adicionar um item por vez')

let items = [];
for(let item = 0; item < 10; item ++){ 
    let itemName = prompt('Digite o item da lista' + (item + 1))
items[item] = itemName
}
alert(`Segue sua lista de compra: ${items}`)