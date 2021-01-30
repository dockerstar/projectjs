"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

let askFilmPerson1 = prompt("Один из последних просмотренных фильмов?", ""),
    askFilmPerson2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[askFilmPerson1] =  askFilmPerson2;
console.log(personalMovieDB.movies);


