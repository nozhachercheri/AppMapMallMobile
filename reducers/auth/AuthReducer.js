const initialState = {
    authToken: null,
    userInfo: [],
    isLoading: false,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                authToken: action.payload,  
                isLoading: true,  
            }
            case 'logout':
                return {
                    ...state,
                    authToken: null,    
                    isLoading: false,
                }
            case 'AUTH_LOADING': 
                 return {
                  ...state,
                  isLoading: true,
                  // error: false,
                };
                  
        default:
            return state;
    }
}