import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hellow!', likesCount: 12},
                {id: 2, message: 'I love React))', likesCount: 10}

            ],
            newPostText: 'React.js'

        },
        dialogsPage: {
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


        },
        sideBar: {}

    },
    _callSubscriber() {
        console.log('123');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sitebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);

    }
}






export default store;
window.store = store;