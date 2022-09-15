import React, { useState } from 'react'
//import FileUploaded from '../Formulario/FileUploaded'
//import axios from 'axios'

function Formulario() {
    const [text, setText] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('name', text)
        formData.append('image', selectedFile);
        fetch(
            'http://localhost:5000/user/',
            {
                method: 'POST',
                body: formData,


            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (
        <div className="App">

            <input
                type="text"
                value={text}
                placeholder="Text"
                onChange={(e) => setText(e.target.value)}
            />
            <input type="file" name="file" onChange={changeHandler} />
            <button type="submit" onClick={handleSubmission}>Create</button>

        </div>
    )
}

export default Formulario