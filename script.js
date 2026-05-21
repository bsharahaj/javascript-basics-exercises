// Sample dataset for all exercises
const books = [
{
title: "The Hobbit",
author: "Tolkien",
year: 1937,
rating: 4.7,
genres: ["Fantasy"],
},
{
title: "1984",
author: "Orwell",
year: 1949,
rating: 4.8,
genres: ["Dystopian", "Political Fiction"],
},
{
title: "The Name of the Wind",
author: "Rothfuss",
year: 2007,
rating: 4.5,
genres: ["Fantasy", "Adventure"],
},
{
title: "Brave New World",
author: "Huxley",
year: 1932,
rating: 4.2,
genres: ["Dystopian"],
},
{
title: "Dune",
author: "Herbert",
year: 1965,
rating: 4.6,
genres: ["Science Fiction", "Adventure"],
},
{
title: "Fahrenheit 451",
author: "Bradbury",
year: 1953,
rating: 4.3,
genres: ["Dystopian", "Science Fiction"],
},
{
title: "The Road",
author: "McCarthy",
year: 2006,
rating: 4.0,
genres: ["Post-Apocalyptic"],
},
{
title: "To Kill a Mockingbird",
author: "Lee",
year: 1960,
rating: 4.9,
genres: ["Classic", "Coming-of-Age"],
},
];

function getRecentBooks(books, afterYear) {
    let bookTitles =[];
    for (let i=0; i<books.length; i++){
        if(books[i].year >= afterYear){
            bookTitles.push(books[i].title);
    }
}
    return bookTitles;

}

function getAverageRating(books){
    let sum=0;
    for(let i=0; i<books.length; i++)
    {
        sum += books[i].rating;
    }
    return (sum/books.length).toFixed(2);
}
function sortBooksBy(books, key, asc = true){
    let sortedBooks =books.slice();
    sortedBooks.sort(function(a,b){
        if (a[key] < b[key]) return asc ? -1 : 1;
        if (a[key] > b[key]) return asc ? 1 : -1;
    });
    return sortedBooks;
}

function countGenres(books) {
    let genresCounter ={};
    for(let i=0; i<books.length; i++){
        for(let j=0; j<books[i].genres.length; j++){
            let genre=books[i].genres[j];
            if(genresCounter[genre]){
                genresCounter[genre]++;
            }else { genresCounter[genre]=1;}

        } 
    }
    return genresCounter;
}

function groupByAuthor(books){
    let authors={};
    for(let i=0; i<books.length; i++){
        let author=books[i].author;
        if(!authors[author]){
            authors[author]=[];

        }
        authors[author].push(books[i]);
    }
    return authors;
}

function hasHighlyRated(books, threshold) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].rating >= threshold) return true;
    }
    return false;
}

function allBeforeYear(books, year) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].year >= year) {
            return false;
        }
    }
    return true;
}

function findByTitle(books, title) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === title) {
            return books[i];
        }
    }
    return undefined;
}

function newArray(books){
    let upDated=[];
    for(let i=0; i<books.length; i++){
        if(books[i].year<1950){
            books[i].isClassic=true;
        }
        else {books[i].isClassic=false;}

        upDated.push(books[i]);
    }
    return upDated;
}

console.log(getRecentBooks(books,2020));
console.log(getAverageRating(books));
console.log(sortBooksBy(books, "rating",  true));
console.log(countGenres(books));
console.log(groupByAuthor(books));
console.log(hasHighlyRated(books, 4.5));
console.log(allBeforeYear(books, 2010));  // true
console.log(findByTitle(books, "Dune"));
console.log(newArray(books));