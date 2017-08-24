import React from 'react';

class Fish extends React.Component {
	render() {
        const details = this.props.details;
		return (
            <li className="menu-fish">
                <img src={details.image} alt={this.props.details.name} />
                <h3>{details.name}</h3>
                <span className="price">{details.price}</span>
                <p className="description">{details.desc}</p>
                <button>Add to Order</button>
            </li>
		)
	}
}

export default Fish;
