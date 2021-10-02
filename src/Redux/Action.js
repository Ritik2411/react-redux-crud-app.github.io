import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./ActionType"

export const addContact = (data) => {
    return {
        type: ADD_CONTACT,
        payload:data
    }
}

export const deleteContact = (id) => {
    return{
        type:DELETE_CONTACT,
        payload:id
    }
}

export const updateContact = (data) => {
    return{
        type:EDIT_CONTACT,
        payload:data
    }
}