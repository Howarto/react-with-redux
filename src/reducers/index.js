export default (state, action) => {
    switch (action.type) {
        case 'SET_TECHNOLOGY':
        debugger;
            return{
                ...state,
                tech: action.text
            };

        default:
            return state;
    }
};