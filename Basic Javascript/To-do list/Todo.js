var listArr = ["Eat", "Sleep", "Game"];
var input = prompt("what would you like to do?");

while (input !== 'quit') {
    if (input === 'list') {
        alert(listArr);

    } else if (input === 'new'||input === 'add') {
        var newItem = prompt('Enter new todo');
        listArr.push(newItem);
    } else if (input === 'delete'||input === 'remove') {
        var itemToDelete = prompt('which item would you like to delete?');
        if (itemToDelete == Number) {
            listArr.splice((itemToDelete === 0? itemToDelete: itemToDelete--),1);
            alert("Item " + itemToDelete + " has been removed!")
        } else if (itemToDelete !== Number) {
            listArr.splice(listArr.indexOf(itemToDelete), 1);
            alert("Item " + itemToDelete + " has been removed!")
        }
    }
    input = prompt('what would you like to do?');
}

prompt('bye bye!');