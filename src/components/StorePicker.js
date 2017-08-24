import React from 'react';
{/* the reason why we do getFunName is because this is the name of the function */}
{/* helpers is where we store our functions */}
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// the constructor sets up the initial states
	// constructor() {
		// super();
		//{/* this is equal to the StorePicker component */}
		// this.goToStore = this.goToStore.bind(this);
	// }
	goToStore(e) {
		// e.preventDefault();
		//first, grab the text from the box
		//second, going to transition from / to /store/:storeId
		// const storeId = this.storeInput.value;
		// this.context.router.transitionTo(`/store${storeId}`);
		e.preventDefault();
		// console.log('You Changed the URL');
		// first grab the text from the box
		const storeId = this.storeInput.value;
		// second we're going to transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
				{/* $r.storeInput is the input dom element */}
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	//tell react the storepicker component expects a router
	router: React.PropTypes.object
}

export default StorePicker;
