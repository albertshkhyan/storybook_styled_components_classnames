import React, {useState} from 'react';
import {TextField} from '../../components/moleculs';
const Home = ()  => {
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value);
    return(
        <section>
            <h1>Home</h1>
            <TextField
            placeholder = "Enter something"
            value={value}
            className="new"
            onChange={handleChange}
            />
        </section>
    )
}

export default Home;