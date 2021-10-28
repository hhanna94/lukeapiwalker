import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Home = props => {
    const [searchOption, setSearchOption] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        history.push(`/${searchOption}/${id}`)
    }
    
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>Welcome</h1>
            <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center gap-5">
                <div>
                    <label>Search for: </label>
                    <select className="ms-2" value={searchOption} onChange={e => setSearchOption(e.target.value)}>
                        <option value=""></option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input style={{width: 50+"px"}} type="number" name="id" className="ms-2" onChange={(e) => setId(e.target.value)}/>
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Home