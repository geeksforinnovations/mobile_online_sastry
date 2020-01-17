import { AppActions } from "./constants";


/// Spinner actions
export const setSpinner = (spinner) => ({
    type: AppActions.SET_SPINNER,
    spinner
});

export const showSpinner = (message = null) => {
    const spinner = {
        show: true,
        message
    }
    return setSpinner(spinner)
}

export const hideSpinner = () => {
    const spinner = {
        show: false,
        message: null
    }
    return setSpinner(spinner)
}