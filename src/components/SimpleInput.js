import useInput from "../hooks/input-hook";

const SimpleInput = () => {
    const {
        enteredValue: enteredName,
        hasError: nameHasError,
        onEnteredValueChangeHandler: onEnteredNameChangeHandler,
        blurHandler: nameBlurHandler,
        valueIsvalid: nameIsValid,
        reset: nameReset,
    } = useInput((value) => value.trim() !== "");
    const {
        enteredValue: enteredEmail,
        hasError: emailHasError,
        onEnteredValueChangeHandler: onEnteredEmailChangeHandler,
        blurHandler: emailBlurHandler,
        valueIsvalid: emailIsValid,
        reset: emailReset,
    } = useInput((value) => value.trim() !== "" && value.includes("@"));

    const isFormValid = nameIsValid && emailIsValid;

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        nameReset();
        emailReset();
    };
    const nameValidityClasses = !nameHasError
        ? "form-control"
        : "form-control invalid";
    const emailValidityClasses = !emailHasError
        ? "form-control"
        : "form-control invalid";

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className={nameValidityClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={enteredName}
                    onBlur={nameBlurHandler}
                    onChange={onEnteredNameChangeHandler}
                />
                {nameHasError && (
                    <small className="error-text">Name should not empty!</small>
                )}
            </div>
            <div className={emailValidityClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={enteredEmail}
                    onBlur={emailBlurHandler}
                    onChange={onEnteredEmailChangeHandler}
                />
                {emailHasError && (
                    <small className="error-text">
                        Email should not empty! and must contain @
                    </small>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
