import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import obiwan from './obi-wan.jpg'

const Planet = props => {
    const {id} = useParams();
    const [planetData, setPlanetData ] = useState("")

    useEffect( () => {
        axios.get(`http://swapi.dev/api/planets/${id}`)
            .then(response => {setPlanetData(response.data)})
            .catch(error => { setPlanetData(null)})
    }, [id])
    if (planetData) {
        return (
            <div className="container w-25 mt-4">
                <h3>{planetData.name}</h3>
                <p><strong>Climate:</strong> {planetData.climate}</p>
                <p><strong>Terrain:</strong> {planetData.terrain}</p>
                <p><strong>Surface Water:</strong> {planetData.surface_water}</p>
                <p><strong>Population:</strong> {planetData.population}</p>
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

export default Planet