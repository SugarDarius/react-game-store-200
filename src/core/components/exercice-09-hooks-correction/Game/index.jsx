import React, {useState, useEffect, useCallback} from 'react';
import {Game} from "./Game";
import {GameFetchError} from "./GameFetchError";
import {GameListEmpty} from "./GameListEmpty";

const GameStore = () => {
	// States from hooks (Functional Component) can be split into different parts,
	// Contrary to this.setState (ClassComponent), which merge the object passed as first parameter
	// with the previous state
	const [games, setGames] = useState([]);
	const [formGame, setFormGame] = useState({
		games: [],
		error: '',
		gameTitle: '',
		gameDescription: '',
		gamePlatforms: [],
		gameDevelopers: [],
		gameGenders: [],
		gamePrice: 0,
		gameRating: 0,
		gameReleaseDate: '',
		gameThumbnail: '',
		gameUpdatedAt: '',
	});
	const [error, setError] = useState('');

	useEffect(() => {
			fetch('http://localhost:5010/api/game/9af3c847-4c1a-471a-a7eb-b768cb8887d5')
				.then(response => response.json())
				.then(game => setGames([game]))
				// shortcut for : .catch(error => setError(error))
				.catch(setError);
		},
		[]) // Don't forget the empty dependency array, so that we only fetch on first render (same as componentDidMount)

	const onInputValueChange = (event) => {
		setFormGame({
			...formGame, // With Hooks, object is not merged, so we need to copy the previous object
			[event.target.name]: event.target.value
		})
	}

	// Optional : Use useCallback so that we don't create a new function for each render
	const onFormSubmit = useCallback((e) => {
			e.preventDefault()
			const game = {
				title: formGame.gameTitle,
				description: formGame.gameDescription,
				platforms: formGame.gamePlatforms,
				genders: formGame.gameGenders,
				developers: formGame.gameDevelopers,
				price: formGame.gamePrice,
				rating: formGame.gameRating,
				releaseDate: formGame.gameReleaseDate,
				thumbnail: formGame.gameThumbnail,
				updatedAt: formGame.gameUpdatedAt
			}

			fetch('http://localhost:5010/api/game', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(game)
			})
				.then(response => response.json())
				.then(gameAdded => {
					const games = [{
						_id: gameAdded._id,
						...game
					}, ...games];
					setGames([...games]);
				})
				.catch(setError);
		},
		[formGame]); // Don't forget the dependency, or selected values will be wrong

	return (
		<div className='pure-g'>
			<div className='pure-u-12-24'>
				{
					error !== '' ? (
						<GameFetchError className='fetchError'>An error occurred, please come back
							later</GameFetchError>
					) : (
						games.length > 0 ? (
							<Game className='game' game={games[0]}/>
						) : (
							<GameListEmpty className='listEmpty'>No games to show :/</GameListEmpty>
						)
					)
				}
			</div>
			<div className='pure-u-12-24'>
				<form className='pure-form pure-form-stacked' onSubmit={onFormSubmit}>
					<h1>Add a new Game</h1>
					<fieldset>
						<input
							type='text'
							value={formGame.gameTitle}
							name='gameTitle'
							onChange={onInputValueChange}
							placeholder='Title'
						/>
						<input
							type='text'
							value={formGame.gameDescription}
							name='gameDescription'
							onChange={onInputValueChange}
							placeholder='Description'
						/>
						<input
							type='number'
							value={formGame.gamePrice}
							name='gamePrice'
							onChange={onInputValueChange}
							placeholder='Price'
						/>
						<input
							type='number'
							value={formGame.gameRating}
							name='gameRating'
							onChange={onInputValueChange}
							placeholder='Rating'
						/>
						<button type='submit' className='pure-button pure-button-primary' value='Add game'>Add game
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export {GameStore};
