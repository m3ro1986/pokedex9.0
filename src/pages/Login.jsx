import '../styles/login.css';
import React, { useEffect, useState } from 'react';
import MessageLogin from '../components/MessageLogin';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Login = () => {

    const loading = useSelector( state => state.loading );
    const [ pokemon, setPokemon ] = useState({});
    const [ name, setName ] = useState('');
    const [ wall, setWall ] = useState( () => Math.floor( Math.random() * 10 ));
    const [ random, setRandom ] = useState( () => Math.ceil( Math.random() * 648 ));

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then( res => setPokemon( res.data ))
    }, [])


    return (
        <div className='loginBox' style={{ backgroundImage: `url('wall${wall}.gif')` }}>
            <main>
                <figure>
                    <span className={`${loading}`}></span>
                    <MessageLogin />
                    <input
                         type="text"
                         placeholder='your name'
                         value={name}
                         onChange={ e => setName( e.target.value )}
                    />
                    <div className='pokegifBox'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${random}.gif`} alt="" />
                        <span>{pokemon.name}</span>
                        <span>{pokemon.id}</span>
                    </div>
                </figure>
            </main>
        </div>
    );
};

export default Login;