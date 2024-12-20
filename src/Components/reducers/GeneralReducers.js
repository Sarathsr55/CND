


export const initialState = {
    section : 0,
    scrollData : []
}

export const GeneralReducer = (state=initialState,action) => {
    switch(action.type){
        case 'APP':
            return  action.payload

        case 'SCROLL_DATA':
            return{
                ...state,
                scollData : action.payload
            }
        
    }
}

