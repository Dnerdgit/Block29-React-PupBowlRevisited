import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dogPlayers } from '../API'


export default function SinglePlayer({player}) {
    const singleDog = useState(`${player.id}`);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
    }
    

    return (

        <>
            < form onSubmit={handleSubmit} className='single-player-form'>
                <div className='player-form'>
                    <h4>{player.breed} </h4>
                    <h4>{player.status}</h4>
                    {/* <h4>{player.teamId} </h4> */}
                    <img src= {`${player.imageUrl}`} />

                    <label htmlFor='select-pup'>Select Player
                    <br/>
                    <input 
                        value={player}
                        // onChange={e => player(e.target.value) }
                        input='submit'
                        type='submit'
                        />
                    </label>
                    
                    <button className="btn add" onClick= {() => navigate(singleDog)}>See Details</button>
                </div>
            </form>    
        </>
        
    )
}



