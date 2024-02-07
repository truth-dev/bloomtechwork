import React from 'react'
//import {useDispatch} from 'react-redux'
//import {uploadCast} from '../actions/castactions'

function CastForm() {
    //const dispatch = useDispatch()
    const [formData, setFormData] = React.UseState({
        title: '',
        description: '',
        category: '',
        file: null,
    })

    const handleChange = (e) => {
        const {name, value, files} = e.target
       setFormData((prevFormData) => {
              return {
                ...prevFormData,
                [name]: files ? files[0] : value
              }
       })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // onSubmit(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='title'
            placeholder='episode title'
            value={formData.title}
            onChange={handleChange}
            
            />
            <textarea 
            name='description'
            placeholder='episode description'
            value={formData.description}
            onChange={handleChange}

            
            />
            <select 
            name='category'
            value={formData.category}
            onChange={handleChange}
            >
                <option value='comedy'>Comedy</option>
                <option value='horror'>Horror</option>
                <option value='drama'>Drama</option>
                <option value='educational'>Educational</option>
                <option value='other'>Other</option>
            </select>
            <input type='file' name='file' onchange={handleChange}/>
            <button type='submit'>Upload</button>
        </form>
    )
}

export default CastForm