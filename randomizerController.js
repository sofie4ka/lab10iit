const express = require('express');
const router = express.Router();

const Summaries = [
  "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
];

const Countries = [
  "Australia", "USA", "Canada", "UK", "Germany", "France", "Japan", "China", "India", "Brazil"
];

const Cities = [
  "New York", "London", "Paris", "Tokyo", "Sydney", "Beijing", "Berlin", "Rome", "Moscow", "Toronto"
];

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Flowers = [
  "Rose", "Tulip", "Sunflower", "Lily", "Daisy", "Orchid", "Carnation", "Daffodil", "Peony", "Hydrangea"
];

const Animals = [
  "Dog", "Cat", "Elephant", "Lion", "Tiger", "Giraffe", "Horse", "Monkey", "Penguin", "Dolphin"
];

const Colors = [
  "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White"
];

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

router.get('/home', (req, res) => {
  const forecasts = Array.from({ length: 5 }).map((_, index) => ({
    date: new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000),
    temperatureC: Math.floor(Math.random() * 75) - 20,
    summary: getRandomItem(Summaries)
  }));
  res.json(forecasts);
});

router.get('/city', (req, res) => {
  res.json(getRandomItem(Cities));
});

router.get('/country', (req, res) => {
  res.json(getRandomItem(Countries));
});

router.get('/number', (req, res) => {
  res.json(getRandomItem(Numbers));
});

router.get('/flower', (req, res) => {
  res.json(getRandomItem(Flowers));
});

router.get('/animal', (req, res) => {
  res.json(getRandomItem(Animals));
});

router.get('/color', (req, res) => {
  res.json(getRandomItem(Colors));
});

module.exports = router;
