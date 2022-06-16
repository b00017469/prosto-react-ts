import React, {ChangeEvent, useState} from 'react';

export const Input = () => {
    const [value, setValue]=useState<string>('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
    }
    return (
        <input value={value} onChange={onChangeHandler}/>
    );
};

export const ControledCheckbox = () => {
    const [value, setValue]=useState<boolean>(true)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return (
        <input type={"checkbox"} checked={value} onChange={onChangeHandler}/>
    );
};

export const ControledSelect = () => {
    const [value, setValue]=useState<string>('1')
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Kiev</option>
            <option value={'3'}>Brest</option>
        </select>
    );
};