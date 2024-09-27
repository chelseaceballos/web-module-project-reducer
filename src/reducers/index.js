import { ADD_ONE, 
        APPLY_NUMBER, 
        CHANGE_OPERATION, 
        CLEAR_DISPLAY,
        MEMORY_ADD,
        MEMORY_APPLY,
        MEMORY_CLEAR,
    }
from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        // dummy action to see if it works (add1)
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });
        // Reducer case for ApplyNumber
        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        // reducer case to changeOperations
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        // reducer case to Clear total
        case (CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });
        case(MEMORY_ADD):
        return({
            ...state,
            memory: state.total
        });
        case(MEMORY_APPLY):
        return({
            ...state,
            total: calculateResult(state.total, state.memory, state.operation)
        });
        case(MEMORY_CLEAR):
        return({
            ...state,
            memory: 0
        });

        default:
            return state;
    }
}

export default reducer;