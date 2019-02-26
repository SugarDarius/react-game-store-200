import React from 'react'

const MyContext = React.createContext();

export class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme() {
        this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });
    }

    render() {
        const { children } = this.props;
        return <MyContext.Provider value={ {
            theme: this.state.theme,
            nextTheme: this.state.theme === 'light' ? 'dark' : 'light',
            toggleTheme: this.toggleTheme.bind(this)
        } }>
            { children }
        </MyContext.Provider>
    }
}

export const ContextConsumer = MyContext.Consumer;