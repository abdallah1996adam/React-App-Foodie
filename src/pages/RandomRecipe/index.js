import React, { Component } from 'react'
import recipesList from "../../services";
import RandomRecipe from '../../components/Forms/RandomRecipe'
import RecipeDetailsRandom from '../../components/RecipeDetails/RecipeDetailsRandom'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomMeal: [],
            error: [],
        }
    }


    async componentDidMount(){
        try {
            const randomRecipe = await recipesList.getRandomRecipe();
            
            this.setState({randomMeal: randomRecipe.data.meals[0]})
        }catch(e){
            this.setState({error: "error server"})
        }
    }
    render() {
        return (
            <div>
              
               <RecipeDetailsRandom data={this.state.randomMeal}/>
            </div>
        )
    }
}

