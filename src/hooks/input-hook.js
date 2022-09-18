import { useReducer } from "react";

const useInput = (validateValue) => {
    const formReducer = (state, action) => {
        switch (action.type) {
            case "ONCHANGE":
                return {
                    enteredValue: action.value,
                    isTouched: state.isTouched,
                };
            case "BLUR":
                return { isTouched: true, enteredValue: state.enteredValue };

            case "RESET":
                return { isTouched: false, enteredValue: "" };
            default:
                return state;
        }
    };

    const [data, dispatchedData] = useReducer(formReducer, {
        enteredValue: "",
        isTouched: false,
    });

    // input validation
    const valueIsvalid = validateValue(data.enteredValue);
    const hasError = !valueIsvalid && data.isTouched;

    const onEnteredValueChangeHandler = (e) => {
        dispatchedData({ type: "ONCHANGE", value: e.target.value });
    };

    const blurHandler = (e) => {
        dispatchedData({ type: "BLUR" });
    };
    const reset = () => {
        dispatchedData({ type: "RESET" });
    };
    const valueValidityClasses = !hasError
        ? "form-control"
        : "form-control invalid";

    return {
        enteredValue: data.enteredValue,
        hasError,
        onEnteredValueChangeHandler,
        blurHandler,
        valueIsvalid,
        reset,
        validClass: valueValidityClasses,
    };
};
export default useInput;
