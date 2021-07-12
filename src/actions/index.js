export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const CREATE_MEMORY = "CREATE_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY});
}

export const createMemory = (TotalDisplay) => {
    return({type: CREATE_MEMORY});
} 

// * [ ] When `M+` is pressed, the current memory value should be set to the current total value. Test by seeing the result of memory in the UI.