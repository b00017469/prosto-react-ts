import React, {MouseEventHandler, useState} from 'react';
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    /*value: any
    onChange: (value:any) => void*/
    items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {
    const [value, setValue] = useState<number>(1)
    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(false)

    const selectedItem = props.items.find(el => el.value === value)
    const onclickSelectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setSelectCollapsed(!selectCollapsed)
    }
    const onclickOptionHandler = (value: any) => {
        setValue(value)
        setSelectCollapsed(!selectCollapsed)
    }

    return (
        <div className={s.select}>
            <span onClick={onclickSelectHandler} className={s.main}>
                {selectedItem && selectedItem.title}</span>
            {selectCollapsed &&
                <div>{props.items.map((el, index) => <div
                    key={index} onClick={() => onclickOptionHandler(el.value)}
                    className={s.items}>
                    {el.title}
                </div>)}
                </div>
            }
        </div>
    );
};
