import React from 'react'
import './style.css';

import classname from 'classnames';

////variant 1

// const TextField = ({
//     textarea,
//     value,
//     onChange,
//     className,
//     ...restProps
// }) => {

////variant 2
    const TextField = (props) => {
    console.log('props', props);
    const {textarea, value, onChange, className, ...restProps} = props;
    
    return(
        textarea
        ? 
        <textarea 
        value={value}
        onChange={onChange}
        // className = {classname('someClass', className)}
        // className = {classname({'someClass':false}, className)}
        {...restProps}
        /> 
        :
        <input 
        value={value}
        onChange={onChange}
        // className = {classname('someClass', className)}
        // className = {classname({'someClass':true}, className)}
        className = {classname({'someClass':true}, {[className]:false})}
        
        {...restProps}

        />
    );
}

export default TextField;