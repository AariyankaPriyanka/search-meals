import axiosClient from '../axiosClient';

export function searchMeals({ commit}, keyword){
  axiosClient.get(`search.php?s=${keyword}`)
  //axiosClient.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(({ data }) => {
      commit('setSearchMeals', data.meals)
    })
}

export function searchMealsByLetter({ commit}, letter){
  axiosClient.get(`search.php?f=${letter}`)
  //axiosClient.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit}, ingredient){
  axiosClient.get(`filter.php?i=${ingredient}`)
  //axiosClient.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(({ data }) => {
      commit('setMealsByIngredients', data.meals)
    })
}

export function searchIngredientByRandomMeals({ commit}, randomIngredient){
  axiosClient.get(`randomselection.php${randomIngredient}`)
  //axiosClient.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(({ data }) => {
      commit('setIngredientByRandomMeals', data.meals)
    })
}