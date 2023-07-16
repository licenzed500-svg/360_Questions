import React from "react";
import clasess from './SendMessageForm.module.css'

const SendMessageForm = () => {

    return (

        <form
            className={clasess.sendMessageForm}>
            <input
                placeholder="Message"
                type="text" />
        </form>
    )

}

export default SendMessageForm