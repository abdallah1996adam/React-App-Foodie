import api from './api';




const recipesList = {
    getAll: async ()=>{
        return api.get("/search.php?s")
    },
    getRandomRecipe : async ()=>{
        return api.get("/random.php")
    },
    getMealById : async(id)=>{
        return api.get(`/lookup.php?i=${id}`)
    },
    getByName : async(Name)=>{
      
        return api.get(`/search.php?s=${Name}`)
       
    },
    getByIngredient : async(ingredient)=>{
        return api.get(`/filter.php?i=${ingredient}`)
       
    },
    getByCountry : async(area)=>{
        return api.get(`/filter.php?a=${area}`)
       
    },
    getbyCategory : async (category)=>{
        return api.get(`/filter.php?c=${category}`)
        
    }    
}

export default recipesList;