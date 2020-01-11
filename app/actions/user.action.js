import { UserActions } from "./constants";



export const updateUser = (user) => ({
    type: UserActions.SET_USER,
    user
});