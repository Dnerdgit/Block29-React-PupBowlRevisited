import { useState, useEffect } from 'react';
import { dogPlayers } from '../API'
//import { useNavigate } from 'react-router-dom'
import SinglePlayer from './SinglePlayer'
import RemovePlayer from './RemovePlayer';


export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        async function getAllPlayers() {
            const player = await dogPlayers();
    
            setPlayers(player);
        }
        getAllPlayers();
    }, [])


    console.log(players, "players");

    return (

        <div>
            {players.map((player) => {
                    return  (
                        <div 
                            onClick={() => {setPlayers(player.id)}}
                            key = {player.id}>
                            <SinglePlayer player={player}/>
                            <RemovePlayer player={player}/>
                        </div>
                        )   
                    }
                )
            }

        </div>
        
    )

}