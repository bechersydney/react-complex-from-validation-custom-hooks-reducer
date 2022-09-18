import useInput from "../hooks/input-hook";

const BasicForm = (props) => {
    const {
        enteredValue: fNameValue,
        hasError: fNameHasError,
        onEnteredValueChangeHandler: fNameValueChangeHandler,
        blurHandler: fNameBlurHandler,
        valueIsvalid: fNameIsValid,
        reset: fNameReset,
        validClass: fNameValidClass,
    } = useInput((value) => value.trim() !== "");
    const {
        enteredValue: lNameValue,
        hasError: lNameHasError,
        onEnteredValueChangeHandler: lNameValueChangeHandler,
        blurHandler: lNameBlurHandler,
        valueIsvalid: lNameIsValid,
        reset: lNameReset,
        validClass: lNameValidClass,
    } = useInput((value) => value.trim() !== "");
    const {
        enteredValue: emailValue,
        hasError: emailHasError,
        onEnteredValueChangeHandler: emailValueChangeHandler,
        blurHandler: emailBlurHandler,
        valueIsvalid: emailIsValid,
        reset: emailReset,
        validClass: emailValidClass,
    } = useInput((value) => value.trim() !== "" && value.includes("@"));
    const isFormValid = fNameIsValid && lNameIsValid && emailIsValid;

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (!isFormValid) return;
        fNameReset();
        lNameReset();
        emailReset();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={fNameValidClass}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        value={fNameValue}
                        onChange={fNameValueChangeHandler}
                        onBlur={fNameBlurHandler}
                        id="fname"
                    />
                    {fNameHasError && (
                        <small className="error-text">
                            First name is invalid.
                        </small>
                    )}
                </div>
                <div className={lNameValidClass}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        value={lNameValue}
                        onChange={lNameValueChangeHandler}
                        onBlur={lNameBlurHandler}
                        id="lname"
                    />
                    {lNameHasError && (
                        <small className="error-text">
                            Last name is invalid.
                        </small>
                    )}
                </div>
            </div>
            <div className={emailValidClass}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    value={emailValue}
                    onChange={emailValueChangeHandler}
                    onBlur={emailBlurHandler}
                    id="email"
                />
                {emailHasError && (
                    <small className="error-text">Email is invalid.</small>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
