const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

//  Question a) 

const headers = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant)));  
let average = [];

headers.map((head) => {
    let total = 0;
    let count = 0;
    const filteredratingData = ratingData.filter(obj => obj.restaurant == head);
    filteredratingData.map((item) => {
        total = filteredratingData.reduce((prev, next) => prev + next.rating, 0);
        count++;
    })
    average.push({ 'restaurant': head, 'averageRating': (total / count).toFixed(2) });   
})

console.log(average);

// Question b)

const above4Rating = average.filter(item => item.averageRating >= 4);

console.log(above4Rating);