import React from 'react'

export class FocusedInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        const { type, value, name, onChange, placeholder, className } = this.props;
        return <input type={ type }
                      value={ value }
                      name={ name }
                      onChange={ onChange }
                      placeholder={ placeholder }
                      className={ className }
                      ref={this.textInput}/>
    }
}