import React from 'react'
import { Form, Bloc, Title, Input, Button, FocusedInput } from '../index'

export class GameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = GameForm.initialState();
    }

    static initialState() {
        return {
            gameTitle: '',
            gameDescription: '',
            gamePrice: 0,
            gameRating: 0,
        };
    }

	handleOnChange(event) {
		this.setState({ [ event.target.name ]: event.target.value })
	}

    render() {
        const { handleOnSubmit } = this.props

        return <Bloc className='pure-u-12-24'>
            <Form className='pure-form pure-form-stacked' onSubmit={ e => {
            	e.preventDefault()
                handleOnSubmit({
					title: this.state.gameTitle,
					description: this.state.gameDescription,
					price: this.state.gamePrice,
					rating: this.state.gameRating,
				})
				this.setState(GameForm.initialState)
            } }>
                <Title>Add a new Game</Title>
                <fieldset>
                    <FocusedInput
                        type='text'
                        value={ this.state.gameTitle }
                        name='gameTitle'
                        onChange={ this.handleOnChange.bind(this) }
                        placeholder='Title'
                    />
                    <Input
                        type='text'
                        value={ this.state.gameDescription }
                        name='gameDescription'
                        onChange={ this.handleOnChange.bind(this) }
                        placeholder='Description'
                    />
                    <Input
                        type='number'
                        value={ this.state.gamePrice }
                        name='gamePrice'
                        onChange={ this.handleOnChange.bind(this) }
                        placeholder='Price'
                    />
                    <Input
                        type='number'
                        value={ this.state.gameRating }
                        name='gameRating'
                        onChange={ this.handleOnChange.bind(this) }
                        placeholder='Rating'
                    />
                    <Button type='submit'
                            className='pure-button pure-button-primary'>Add game
                    </Button>
                </fieldset>
            </Form>
        </Bloc>
    }
}
