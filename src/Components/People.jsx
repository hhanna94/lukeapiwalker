import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import obiwan from './obi-wan.jpg'

const People = props => {
    const {id} = useParams();
    const [personData, setPersonData ] = useState("")
    
    console.log("I'm here")
    useEffect( () => {
        return axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                let data = response.data
                axios.get(data.homeworld)
                .then(response => data = { ...data, 'homeWorldName': response.data.name })
                .then(data => setPersonData(data))
                
            })
            .catch(error => { setPersonData(null) })
    }, [id])
    
    if (personData) {
        return (
            <div className="container w-25 mt-4">
                <h3>{personData.name}</h3>
                <p><strong>Height:</strong> {personData.height} cm</p>
                <p><strong>Mass:</strong> {personData.mass} kg</p>
                <p><strong>Hair Color:</strong> {personData.hair_color}</p>
                <p><strong>Skin Color:</strong> {personData.skin_color}</p>
                <p><strong>Homeworld: </strong>{personData.homeWorldName}</p>
            </div>
        )
    } else {
        return (
            <div className="container w-25 mt-4">
                <h3>These are not the droids you're looking for.</h3>
                <img style={{width: 250+"px"}} src={obiwan} alt="obi-wan kenobi" />
            </div>
        )
    }
}

export default People