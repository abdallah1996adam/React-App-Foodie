import React from "react";
import recipesList from "../../services";
import Typical from 'react-typical';
import './style.scss'

class RecipeCateg extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      error:[],
    }
  }

  getByCategory = async (e) => {
    try{
      e.preventDefault();
      const recipeCategory = e.target.elements.Categorie.value;
      const response = await recipesList.getbyCategory(recipeCategory);
      const allCategories = response.data.meals.map((categorie)=> JSON.stringify(categorie) + "list")
      localStorage.setItem('allData', allCategories)
      this.props.history.push("/result");
    }catch(e){
      this.setState({error: "server error!"})
    }
   
  };


  render() {
 
    return (
      <React.Fragment>
        <div className="box">
          <form onSubmit={this.getByCategory}>
            <div className="Category_form">
              <input className='input_form1' 
                type="text"
                name="Categorie"
                placeholder="Search By Categorie"
              />
              <button className="Btn2" >Rechecher</button>
            </div>
          </form>
        </div>
        <div className='textAnim'>
          <h2 className='text'>
            Trouver votre recette par
            
            <span  > <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'Nom',
              1000,
              'Catégorie',
              1000,
              'Ingrédient principale',
              1000,
              `Pays d'origine`,
              1000
            ]}
            /></span>
           
            
          </h2>
       
        </div>
        
      </React.Fragment>
    );
  }
}

export default RecipeCateg;
