import React from 'react';
{/* the reason why we do getFunName is because this is the name of the function */}
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	render() {
		// Any where else
		return (
			<form className="store-selector">
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

export default StorePicker;
