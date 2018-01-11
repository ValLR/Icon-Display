import React, { Component } from 'react'

class Favicon extends Component {
	render(){
		const service = this.props.service;
		const initialPath = "/images/";
		const finalPath = ".png";
		const source = initialPath + service + finalPath;
		console.log(source);

		return <img class={this.props.style} src={source} />		
	}
}

export default Favicon