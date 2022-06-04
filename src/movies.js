// The `movies` array from the file `src/data.js`.
//const movies = require(./data);
//console.log('movies: ', movies));


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors=movies.map((movie)=>{
    return movie.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaStevSpielMovies =movies.filter((movie)=>{return movie.director==="Steven Spielberg" && movie.genre.includes("Drama")===true})
  
  return dramaStevSpielMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length===0) {return 0}
  let score = movies.reduce((totalScore,movie)=>{
    if (movie.score===undefined){return totalScore}
    else{return totalScore+movie.score}
  },0)
  let averageScore = score/movies.length
  return Number(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie)=>{
    return movie.genre.includes("Drama")===true});
    if (dramaMovies.length===0){return 0}
  let dramaScore = dramaMovies.reduce((totalScore, dramaMovie)=>{
    if (dramaMovie.score === undefined){
      return totalScore
    } else {
      return totalScore + dramaMovie.score}
      }, 0); 
    let averageDramaScore=dramaScore/dramaMovies.length
  return Number (averageDramaScore.toFixed(2))}  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
newMovies=JSON.parse( JSON.stringify( movies ))
const moviesSorted = newMovies.sort((first, second)=>{
  if (first.year===second.year){return (first.title<second.title)? -1:1}
  else {return (first.year<second.year)? -1:1}
   
})

return moviesSorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let cloneMovies=JSON.parse( JSON.stringify( movies ))
  let alphMovies=cloneMovies.map((movie)=>{return movie.title})
  return alphMovies.sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let minutes =movies.map(movie=>{return })

  return minutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length){return null}
  
  let moviesByYear={}

    movies.forEach((movie=>
     {if(!moviesByYear[movie.year]){
       moviesByYear[movie.year]=[movie]}
       else {moviesByYear[movie.year].push(movie)}
    } ));

    let bestAverageRate;
    let earlyBestYear;

    for (let year in moviesByYear)
    {if(moviesByYear[year].reduce((acc,score)=>{return acc+score},0)/moviesByYear[year].length>bestAverageRate)
      {bestAverageRate=moviesByYear[year].reduce((acc,score)=>{return acc+score},0)/moviesByYear[year].length;
      earlyBestYear=year}
      else if(bestAverageRate===moviesByYear[year].reduce((acc,score)=>{return acc+score},0)/moviesByYear[year].length)
      if(year<earlyBestYear)earlyBestYear=year}

  



return `The best year was ${earlyBestYear} with an average score of ${bestAverageRate}`
}



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
