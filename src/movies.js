// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = ((movieArray) => {
    return movieArray.map((movies) => {
        return movies.director;
    });
}); 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = ((movieArray) => {
    if(movieArray.length === 0) {
        return 0;
    };
let amountOfMovies = movieArray.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
});

return amountOfMovies.length;
});




// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0  
    } 
let total = movies.reduce((accumulator, currentValue) => {
    if (currentValue.rate) {
        return accumulator + currentValue.rate;
    } else {
        return accumulator
    }
}, 0)

return Number((total/movies.length).toFixed(2)); 

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
            //teacher code to check if it goes green
function orderByYear(movies) {
    return movies.sort((movie1, movie2) => {

            if (movie1.year === movie2.year){
                //order by title
            return movie1.title.localeCompare(movie2.title); //this is a little trick to check
            }else {
                return movie1.year - movie2.year; //little trick
            }
    }).map((item) => {
        return item;
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
