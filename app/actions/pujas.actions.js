import { PujaActions } from '../actions/constants'

export const updateAllPujas = (pujas) => ({
    type: PujaActions.UPDATE_ALL_PUJAS,
    pujas: pujas
})

export const updateSelectedPuja = (puja) => ({
    type: PujaActions.UPDATE_ALL_PUJAS,
    puja: puja
})

export const clearAllPuja = () => ({
    type: PujaActions.CLEAR_ALL_PUJAS,
})
