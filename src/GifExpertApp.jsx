import {  useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory= (newCategory) => {

        if(categories.includes(newCategory)) return;
        //setCategories([ 'Valorant', ...categories]);
        console.log(newCategory); 
        setCategories([newCategory,...categories]);
    }

  return (
    <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>
    
        {/*input*/}
        <AddCategory onNewCategory = {   event => onAddCategory(event)}
        />
        {
            categories.map( category=>(
                    <GifGrid 
                        key = { category } 
                        category={category}/>
                ))
        } 
    </>
  )
}
