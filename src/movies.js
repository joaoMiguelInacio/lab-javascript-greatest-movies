// Iteration 1: All directors? - Get the array of all directors. (NOT COMPLETE)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");


function getAllDirectors(movies) {
  let arrayOfDirectors = movies.map(x => x.director);
  return arrayOfDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? (READY)

function howManyMovies(array) {
  if (array.length === 0){
    return 0;
  } else {
    const stevensDramas= array.filter((x) => x.genre === "Drama" || x.genre.includes("Drama") && x.director === "Steven Spielberg");
    return stevensDramas.length                          
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals (NOT COMPLETE)

//Function "scoresAverage" //should return average even if one of the movies does not have score

function scoresAverage(array) {
  if (array.length === 0){
    return 0;
  } else {
  const avg =	array.reduce((acc, val) => {
		return acc + val.score;
	}, 0) / array.length;
  return (Number(avg.toFixed(2)));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies (NOT COMPLETE)
function dramaMoviesScore(array) {
  const avg =	(array.filter((x) => x.genre === "Drama" || x.genre.includes("Drama"))).reduce((acc, val) => {
		return acc + val.score;
	}, 0) / (array.filter((x) => x.genre === "Drama" || x.genre.includes("Drama"))).length;
  return (Number(avg.toFixed(2)));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) (NOT COMPLETE)
function orderByYear(array) {
  const sortedByYearArray = array.sort((a, b) => {
    return a.year - b.year;
  }); return sortedByYearArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles (NOT COMPLETE)
function orderAlphabetically(array) {
  const sortedAphabetically = array.sort((a, b) => {
    return a.title - b.title;
  }); return sortedAphabetically
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
