import React, {useState} from 'react';

const Input = props => {

    const [urlNumber, setUrlNumber] = useState('');


    let sendData = (urlNumber) => {
        props.sendData(urlNumber);
    }

    sendData(urlNumber);

    let inputHandler = () => {
        setUrlNumber(document.getElementById('url').value.split("").filter(n => (Number(n) || n == 0)).join(""));
    }

    return (
        <div>
            <label for="url">URL da playlist</label>
            <input id='url'></input>
            <button onClick={inputHandler}>Enviar</button>
        </div>
    )
}

export default Input;