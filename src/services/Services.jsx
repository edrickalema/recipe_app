import axios from "axios";

const base_url = "www.themealdb.com/api/json/v1/1/list.php";
export const get_categories = () =>
  axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
export const get_recipes = ( category ) =>
  axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category || 'Miscellaneous'}`
  );
export const get_recipe = (id) =>
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
export const search_recipe = (search) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
}