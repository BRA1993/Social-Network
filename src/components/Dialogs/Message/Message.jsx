import s from '../../Dialogs.module.css'
import React from "react";


const Message = (props) => {
    let NewText = React.createRef()
    let NewMessage = () => {
        let text = NewText.current.value;
        alert(text);
    }
    return <div className={s.dialog}>{props.message}</div>

}

export default Message;


