import React from 'react'
import RecipeCateg from './RecipeCategory'
import RecipeCountry from './RecipeCountry'
import RecipeIngerdient from './RecipeIngredient'
import RecipeName from './RecipeName'
import RandomRecipe from './RandomRecipe'



class Formssearch  extends React.Component{
    render(){
        return(
            <React.Fragment>
                <RecipeCateg  history={this.props.history}/>
                <RecipeCountry  history={this.props.history}/>
                <RecipeIngerdient  history={this.props.history}/>
                <RecipeName  history={this.props.history}/>
                <RandomRecipe  history={this.props.history}/>
            </React.Fragment>
        )
    }
};

export default Formssearch;