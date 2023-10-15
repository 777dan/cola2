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
    printProducts(products.sort((a, b) => (a.name < b.name ? -1 : a.name == b.name ? 0 : 1)));
}

let sortByNameReverse = () => {
    printProducts(products.sort((a, b) => (a.name > b.name ? -1 : a.name == b.name ? 0 : 1)));
}

//by sold
let sortBySold = () => {
    printProducts(products.sort((a, b) => (a.sold - b.sold)));
}

let sortBySoldReverse = () => {
    printProducts(products.sort((a, b) => (b.sold - a.sold)));
}

//by color
let sortByColor = () => {
    printProducts(products.sort((a, b) => (a.color < b.color ? -1 : a.color == b.color ? 0 : 1)));
}

let sortByColorReverse = () => {
    printProducts(products.sort((a, b) => (a.color > b.color ? -1 : a.color == b.color ? 0 : 1)));
}