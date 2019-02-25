import React from 'react'

export const Input = props => {
    const { type, value, name, onChange, placeholder, className } = props;
    return <input type={ type }
                  value={ value }
                  name={ name }
                  onChange={ onChange }
                  placeholder={ placeholder }
                  className={ className }/>
}