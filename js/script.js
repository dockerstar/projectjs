"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    console.log('Просмотрено мало фильмов');
} else if (10 < numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
do {
    i++;
    let askFilmPerson1 = prompt("Один из последних просмотренных фильмов?", ""),
        askFilmPerson2 = +prompt("На сколько оцените его?", "");
    if (askFilmPerson1 != null && askFilmPerson2 != null && askFilmPerson1 != '' && askFilmPerson2 != '' && askFilmPerson1 < 50) {
        personalMovieDB.movies[askFilmPerson1] =  askFilmPerson2;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} while (i < 2);

   
    


console.log(personalMovieDB);