import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./ActionType"

const initialState = {
    data:[
        { id: 0, name: "Post Malone", email: "post123@scum.com", phone: 1234567890 },
        { id: 1, name: "Juice WRLD", email: "juice999@scum.com", phone: 4567891230 }
    ]
}


export const contactReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_CONTACT:return{
            ...state,
            data:[...state.data,action.payload]
        }

        case DELETE_CONTACT:return{
            ...state,
            data:state.data.filter(data=>data.id !== action.payload)
        }
            
        case EDIT_CONTACT: return{
            ...state,
            data:state.data.map(
                (data,i)=>data.id === action.payload.id ?
                    {...data,name:action.payload.name,email:action.payload.email,phone:action.payload.phone}:data
                )
        }

        default:{
            return state
        }
    }
}