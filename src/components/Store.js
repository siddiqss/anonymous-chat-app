import React from 'react';
import io from 'socket.io-client';
const faker = require('Faker');

/*
   msg {
        from: 'user',
        msg: 'hi',
        topic: 'general'
    }

    state {
        topic1: [
            {msg},{msg}, {msg}
        ]
        topic2: [
            {msg}, {msg}, {msg}
        ]
    }

*/





    
const firstName = faker.Name.firstName();
const usState = faker.random.us_state();
const startingNameGeneral = faker.Name.firstName();
const startingNameTopic = faker.Name.firstName();

const phrases = [`Hey, I'm from ${usState} !`, 'Did you watch the Last Season of GOT?', 'Trump Memes are lit!', 'These 14 years old Nibbas are so cooool!!!', 'Ronaldo is sexy!', 'Sarfaraz should be fired!', 'What\'s up!'];
const gamesPhrases = ['I Love FIFA!', 'Witcher 3 has tough missions!', 'I just played Watch Dogs 3. Man, it\'s hot!', 'Do you play strategic games?']
export const CTX = React.createContext();

const initialState = {
    General: [
        {from: startingNameGeneral, msg: phrases[Math.floor(Math.random() * phrases.length)] }
    ],
    GamersZone: [
        {from: startingNameTopic, msg: gamesPhrases[Math.floor(Math.random() * gamesPhrases.length)]},
    ]
}

const reducer = (state, action)=> {
    const { from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MSG':
            return {
                ...state, 
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg
                    }

                ]
            }
        default:
            return state
    }
}

let socket;
function sendChatAction(value){
    socket.emit('chat message', value);
}


export default function Store(props){
    const [allChats, dispatch] = React.useReducer(reducer, initialState);

    if(!socket){
        socket = io('');
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MSG',payload: msg});
        });
    }

    
    const user = firstName;
    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}