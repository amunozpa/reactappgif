import { useState } from 'react';
import { AddCategory, Gifgrid } from './components'

export const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['One punch']);
    const addNewCategories = (newCategorie) => {
        //console.log('oa', categories.filter(e => e.toLowerCase() === newCategorie.toLowerCase()));

        //if (categories.filter(e => e.toLowerCase() === newCategorie.toLowerCase()).length >= 1) return;
        if (newCategorie.length <= 1) return;

        setCategories([newCategorie, ...categories]);
        console.log(newCategorie);
        return newCategorie;
    };

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onAddCategory={addNewCategories}
            />

            {
                categories.map((category) => (
                    <Gifgrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
};
