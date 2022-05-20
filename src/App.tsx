import React, {useState} from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";
import PageTitle from "./components/Rating/PageTitle";
import {Rating, RatingValuePropsType} from './components/Rating/Rating';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [isOn, setIsOn] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title={"My friends"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion title={"Menu"} collapsed={accordionCollapsed}
                       onClick={()=>setAccordionCollapsed(!accordionCollapsed)}/>

            <UncontrolledAccordion title={"UncontrolledMenu"}/>
            <UncontrolledAccordion title={"Uncontrolled Users"}/>

            <OnOff isOn={isOn}  onClick={setIsOn}/>
            <UncontrolledOnOff />
        </div>
    );
}

export default App;



