// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = [];

    moviesArray.forEach(movie => {
        
        if(movie && movie.director)
            directors[directors.length] = movie.director;
        
    });

    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;

    moviesArray.forEach(element => {
        if(element.director == "Steven Spielberg" && element.genre.indexOf("Drama") != -1)
            count++;
    });

    return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = 0;
    let avg = 0;

    if(moviesArray.length == 0)
        return 0;

    moviesArray.forEach(element => {
        if(element.score)
            sum += element.score;
    });

    avg = Math.round((sum / moviesArray.length) * 100)/100;

    return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let count = 0;
    let sum = 0;
    let avg = 0;

    moviesArray.forEach(element => {
        if(element.genre.indexOf("Drama") != -1) {
            sum += element.score;
            count++;
        }
    });

    if(count == 0)
        avg= 0;
    else
        avg = Math.round((sum / count) * 100)/100;

    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let backupElement = null;
    let returnArray = [...moviesArray];

    
    for(i=0;i<(returnArray.length-1);i++) {
        for(j=i+1;j<returnArray.length;j++) {
            if (
                (returnArray[i].year > returnArray[j].year) ||
                (returnArray[i].year == returnArray[j].year && 
                    returnArray[i].title > returnArray[j].title)
                ) {
                    backupElement = returnArray[i];
                    returnArray[i] = returnArray[j];
                    returnArray[j] = backupElement;                    
                } 
        }
        
    }

    return returnArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let backupElement = null;
    let returnArray = [];

    if(moviesArray.length > 0) {
        for(i=0;i<(moviesArray.length-1) && i<20;i++) {
            
            for(j=i+1;j<moviesArray.length;j++) {
                if (moviesArray[i].title > moviesArray[j].title) {
                    backupElement = moviesArray[i];
                    moviesArray[i] = moviesArray[j];
                    moviesArray[j] = backupElement;                    
                } 
            }
            
            returnArray[returnArray.length] = moviesArray[i].title;
        }
    
        if(i==moviesArray.length-1)
            returnArray[returnArray.length] = moviesArray[i].title;
    }

    return returnArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let returnArray = [];
    let timeArr;    
    let hourAux;
    let minAux;

    for(i=0;i<(moviesArray.length);i++) {
        timeArr = moviesArray[i].duration.split(' ');
        
        hourAux = parseInt(timeArr[0]);
        if(timeArr[1] == undefined)
            minAux = 0;
        else
            minAux = parseInt(timeArr[1]);
        
        returnArray[i] = {...moviesArray[i]};
        returnArray[i].duration = hourAux * 60 + minAux;
    }
    
    return returnArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let yearsInfo = [];
    let bestYear = null;

    if(moviesArray.length == 0)
        return null;

    moviesArray.forEach(function(movie) {
      if(yearsInfo[movie.year] == undefined) {
        yearsInfo[movie.year] = {
            year: movie.year,
            sum: 0,
            count: 0,
            avg: 0
        }
      }

      yearsInfo[movie.year].sum += movie.score;
      yearsInfo[movie.year].count++;

    });

    yearsInfo.forEach(function(year) {
        year.avg = year.sum / year.count;

        if( 
                (bestYear == null || bestYear.avg < year.avg) || 
                (bestYear.avg == year.avg && year.year < bestYear.year)
        )
            bestYear = year;
    });

    return "The best year was "+bestYear.year+" with an average score of " + bestYear.avg;
}
