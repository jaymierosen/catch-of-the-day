import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import samplesFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		// cannot use 'this' until we use super
		super();
		// initial state
		// get initial state
		this.state = {
			fishes: {},
			order: {}
		}
	}
	addFish(fish) {
		// update our state
		// spead operator
		// take every time from object
		// spread it into an object
		const fishes = {...this.state.fishes}
		// add in our new fishes
		const timeStamp = Date.now();
		fishes[`fish-${timeStamp}`] = fish;
		// set state
		this.setState({
			// const fishes is the value
			fishes: fishes
		})
	}
	loadSamples() {
		this.setState({
			fishes: samplesFishes
		})
	}
	render() {
		return (
		<div className="catch-of-the-day">
			<div className="menu">
				<Header tagline="Fresh Seafood Market" />
				<ul className="list-of-fishes">
					{/* returning a fish component */}
					{/* using the map method */}
					{/* object.keys returns an array from an object */}
					{/* .map() loops over the array to append the fish component on the page */}
					{ Object.keys(this.state.fishes).map(fish => <Fish key={fish} details={this.state.fishes[fish]} />) }
				</ul>
			</div>
			<Order />
			<Inventory addFish={this.addFish.bind(this)} loadSamples={this.loadSamples.bind(this)} />
		</div>
		)
	}
}

export default App;
