export const products = [
    {
        id: 0,
        name: "Cabernet",
        price: 17.00,
        image: "img/wines-best-deals/cabernet.jpg"
    },
    {
        id: 1,
        name: "Suvignon Blanc",
        price: 12.00,
        image: "img/wines-best-deals/sauvignon-blanc.jpg"
    },
    {
        id: 2,
        name: "Syrah",
        price: 13.00,
        image: "img/wines-best-deals/syrah.jpg"
    },
    {
        id: 3,
        name: "Pinot Grigio",
        price: 10.00,
        image: "img/wines-best-deals/pinot-grigio.jpg"
    },
    {
        id: 4,
        name: "Pinot Noir",
        price: 12.00,
        image: "img/wines-for-craft-wines-partial/pinot-noir.jpg"
    },
    {
        id: 5,
        name: "Riesling",
        price: 16.00,
        image: "img/wines-for-craft-wines-partial/riesling.jpg"
    },
    {
        id: 6,
        name: "Zifandel",
        price: 14.00,
        image: "img/wines-for-craft-wines-partial/zifandel.jpg"
    },
    {
        id: 7,
        name: "Soave",
        price: 12.00,
        image: "img/wines-for-craft-wines-partial/soave.jpg"
    }
]

export function getProductById(id) {
    return products.find(product => product.id === id);
}