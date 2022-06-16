import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";
import PageTitle from "./components/Rating/PageTitle";
import {Rating, RatingValuePropsType} from './components/Rating/Rating';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {ControledCheckbox, ControledSelect, Input} from "./components/Input/Input";
import {Select} from "./components/Select/Select";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [isOn, setIsOn] = useState<boolean>(false)
    const items = [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Sasha', value: 3},
        {title: 'Masha', value: 4}]

    return (
        <div className="App">
            <PageTitle title={"My friends"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion title={"Menu"} collapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={items}/>

            <UncontrolledAccordion title={"Uncontrolled Users"}/>

            <OnOff isOn={isOn} onClick={setIsOn}/>
            <UncontrolledOnOff/>
            <Input/>
            <ControledCheckbox/>
            <ControledSelect/>
            <hr/>
            <Select items={items}/>
            <hr/>
        </div>
    );
}

export default App;



