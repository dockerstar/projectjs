"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let askFilmPerson1 = prompt("Один из последних просмотренных фильмов?", ""),
    askFilmPerson2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies = {askFilmPerson1: askFilmPerson2};


