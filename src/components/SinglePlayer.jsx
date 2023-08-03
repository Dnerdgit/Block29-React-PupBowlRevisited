import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { dogPlayers } from '../API'


export default function SinglePlayer({player}) {
    const singleDog = useState(`${player.id}`);
    const [pupSelect, setPupSelect] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        // const form = e.target;
        // const data = newFormData(form);
        // console.log(data);
        setPupSelect(currentPupSelect => { 
            return [
              ...currentPupSelect, 
              { id: crypto.randomUUID(), title: singleDog, completed: false},
            ]
          })
    }
    

    return (

        <>
            <form onSubmit={handleSubmit} className='single-player-form'>
                <div className='player-form'>
                    <label htmlFor='select-pup'>
                    <br/>
                       
                    </label>
                    </div>
                    <button type='submit' className="btn add-player" onClick= {() => navigate(singleDog)}>ADD</button>
                    
                
                </form> 
                    <h2 className="header"> </h2>
                        <ul>
                            {/* <h4>{player.teamId} </h4> */}
                            <img src= {`${player.imageUrl}`} />
                            <h4>{player.breed} </h4>
                            <h4>{player.status}</h4>
                        </ul>
                   
            


        </>
        
    )
}



