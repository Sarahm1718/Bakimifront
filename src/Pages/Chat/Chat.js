
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import React, { useState } from 'react';
import firebase, {db} from "../../functions/firebaseInit";
import { auth } from '../../functions/firebaseAuth';
import { useCollectionData } from "react-firebase-hooks/firestore";
import '@firebase/firestore'



function Chat() {
    const messageRef = db.collection("messages");
    const query = messageRef.orderBy("createdAt").limitToLast(200);
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });

        setFormValue('');
    }

    return <main>
        <div>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => {
                    setFormValue(e.target.value)
                }}
                    placeholder="Escribe aqui"
                />
                <button type="submit" disabled={!formValue} >Send
                </button>
            </form>
        </div>
        <div>
            {messages && messages.map(msn => <ChatMessage key={msn.id} message={msn} />)}
        </div>
    </main>
}

function ChatMessage({ message }) {
    const { text, uid, photoURL } = message;
    const messageOrderClass = uid === auth.currentUser.uid ? 'send' : 'received';

    return (<div children={"message" + messageOrderClass}>
        <img src={photoURL} alt={"avatar"} />

        <p>{text}</p>

    </div>)
}

export default Chat