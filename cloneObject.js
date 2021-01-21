const myObject = {
    name: "Przemek"
}

function Clone(object) { // tworzymy funkcję jako argumnet przekazujuemy obiekt do skopiowania
    const newObject = {}; // tworzymy nowy obiekt
    for (let key in object) {
        newObject[key] = object[key]; // kopiujemy obiekt
    }
    newObject.name = "test"; // przypisujemy wartość name by sprawdzić czy obiekt jest poprawnie sklonowany
    return newObject; // zwracamy nowy obiekt
}

console.log(myObject);  // wynik { name: 'Przemek' }
console.log(Clone(myObject));  // wynik { name: 'test' }