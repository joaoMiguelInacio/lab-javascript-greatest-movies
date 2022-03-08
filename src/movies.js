const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors. (READY - Missing BONUS)

function getAllDirectors(movies) {
  let arrayOfDirectors = movies.map(x => x.director);
  return arrayOfDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? (READY)

function howManyMovies(array) {
  if (array.length === 0){
    return 0;
  } else {
    const stevensDramas= array.filter((x) => x.genre.includes("Drama") && x.director === "Steven Spielberg");
    return stevensDramas.length                          
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals (READY)

//Function "scoresAverage" //should return average even if one of the movies does not have score

function scoresAverage(array) {
  if(array.length === 0){
    return 0;
  }
  const avg = array.reduce((acc, val) => {
    if(typeof(val.score) === "number") {
      return acc + val.score
    }
    return acc
  }, 0) / array.length
  return Math.round(avg * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies (READY)

function dramaMoviesScore(array) {
    const allDramas = array.filter(function(x){
      if(x.genre.includes("Drama")){
        return true;
      }
      return false; 
    })
    if(allDramas.length === 0){
      return 0;
    } 
    const sum = allDramas.reduce((acc, val) => {
      if(typeof(val.score) === "number") {
        return acc + val.score
      }      
      return acc 
    },0)
    const averageScoreDramas = sum / allDramas.length
    return Math.round(averageScoreDramas * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) (READY)
function orderByYear(array) {
  const clonedArray =  JSON.parse(JSON.stringify(array))
  const sortedByYearArray = clonedArray.sort((a, b) =>{
    if (a.year < b.year ){
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else { 
      if (a.title < b.title ){
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    } 
  }) 
  return sortedByYearArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles (READY)
function orderAlphabetically(array) {
  const clonedArray =  JSON.parse(JSON.stringify(array));
  const sortedAphabetically = clonedArray.sort((a, b) => {
    if (a.title < b.title ){
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  })
    const titles = sortedAphabetically.map(function(movie){
      return movie.title;
}); 
  return titles.slice(0, 20)
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
