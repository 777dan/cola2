let products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

let printProducts = (products) => {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += "Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold + "</br>";
    }
    document.getElementById("list").innerHTML = str;
}

//by name
let sortByName = () => {
    products.sort(compareName);
    printProducts(products);
}

let sortByNameReverse = () => {
    products.sort(compareNameReverse);
    printProducts(products);
}

let compareName = (colaA, colaB) => {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}

let compareNameReverse = (colaA, colaB) => {
    if (colaA.name < colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}

//by sold
let sortBySold = () => {
    products.sort(compareSold);
    printProducts(products);
}

let sortBySoldReverse = () => {
    products.sort(compareSoldReverse);
    printProducts(products);
}

let compareSold = (colaA, colaB) => {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}
let compareSoldReverse = (colaA, colaB) => {
    if (colaA.sold < colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

//by color
let sortByColor = () => {
    products.sort(compareColor);
    printProducts(products);
}

let sortByColorReverse = () => {
    products.sort(compareColorReverse);
    printProducts(products);
}

let compareColor = (colaA, colaB) => {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}
let compareColorReverse = (colaA, colaB) => {
    if (colaA.color < colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}