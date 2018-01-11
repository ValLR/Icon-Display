import React, { Component } from 'react'
import Favicon from './Favicon'

class Normal extends Component {
	render(){
	  	return (
	  		<a href={this.props.href} class="normal">
				<Favicon service={this.props.service} style="full-access"/>
	  		</a>
	  	);		
	}
}

export default Normal