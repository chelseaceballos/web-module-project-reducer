export const ADD_ONE = "ADD_ONE";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_APPLY = 'MEMORY_APPLY';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';


//action package for addOne
export const addOne = () => {
    return({type:ADD_ONE});
};
//action package for applyNumber
export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
};
// action package for changeOperation
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator });
};
// action package for clearDisplay
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
};

export const addMemory= () => {
    return({type:MEMORY_ADD});
};

export const applyMemory = () => {
    return({type:MEMORY_APPLY});
};

export const clearMemory = () => {
    return({type:MEMORY_CLEAR});
};