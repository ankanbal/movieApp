import axios from "axios";

var api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export var insertMovie = (payload) => api.post(`/movie`, payload);
export var getAllMovies = () => api.get(`/movies`);
export var updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload);
export var deleteMovieById = (id) => api.delete(`/movie/${id}`);
export var getMovieById = (id) => api.get(`/movie/${id}`);

var apis = {
  insertMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieById,
};

export default apis;
