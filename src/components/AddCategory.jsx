import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onChangeInput = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim());
        setinputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder='buscar gifs'
                onChange={onChangeInput}
                value={inputValue}
            />
        </form>
    )
}
