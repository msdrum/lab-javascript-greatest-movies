// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//const movies = require("./data.js"); // importando a array 'movies' do arquivo data.js.

function getAllDirectors(moviesArray) {
  //para cada elemento da array moviesArray (variável movies) coloque dentro da array directorsArr todos os elementos com a key 'director'.
  const directorsArr = moviesArray.map((element) => {
    return element.director;
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDrama = moviesArray.filter((element) => {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const bestScores = moviesArray.map((element) => {
    return element.score || 0; // mapear todos os elementos mesmo que sejam zeros.
  });
  const sum = bestScores.reduce((sum, i) => {
    return sum + i; // somar todos os elementos mapeados
  });

  return Math.round((sum / bestScores.length) * 100) / 100; // calcular a média e retornar o número com 2 casas decimais
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
