import React, { Component } from 'react'
import Favicon from './Favicon'

class NoAccess extends Component {
	render(){
	  	return (
		  	<a href={this.props.href} class="noAccess">
				<Favicon service={this.props.service} style="no-access"/>
		  		<br />
	  			<i class="fa fa-minus-circle" aria-hidden="true"></i>	  			
		  	</a>	  			
	  	);		
	}
}

export default NoAccess