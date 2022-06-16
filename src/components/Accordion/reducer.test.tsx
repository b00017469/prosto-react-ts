import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test("Uncontroled accordion reducer should be work)", ()=>{
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type:TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)
    expect(()=>{reducer(state, {type:'FAKE_TYPE'})}).toThrowError()

})
