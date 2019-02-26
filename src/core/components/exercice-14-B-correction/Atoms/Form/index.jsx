import React from 'react'

export const Form = props => {
    const { className, onSubmit, children } = props;
    return <form className={ ` ${ className } pure-form pure-form-stacked` } onSubmit={ onSubmit }>
        { children }
    </form>
}