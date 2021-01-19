const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Va'},


    ],


    messages: [
        {id: 1, message: 'Hellow'},
        {id: 2, message: 'Good'},
        {id: 3, message: 'Very well'},
        {id: 4, message: 'Love JS'}
    ],
    newMessageBody: ""


}
const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            };

        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;