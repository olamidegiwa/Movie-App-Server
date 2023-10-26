const Movie = require("../models/movies");

const allData = async (req, res) => {
  const allData = await Movie.find({});
  res.status(200).json({
    data: allData,
  });
};
const allMovies = async (req, res) => {
  const movies = await Movie.find({ type: "movie" });
  res.status(200).json({
    data: movies,
  });
};
const allSeries = async (req, res) => {
  const series = await Movie.find({ type: "series" });
  res.status(200).json({
    data: series,
  });
};

module.exports = { allData, allMovies, allSeries };
