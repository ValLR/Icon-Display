import React, { Component } from 'react'
import Favicon from './Favicon'

class NoProject extends Component {
  render(){
  	return (
  		<a href="#" class="disabled">
  			<Favicon service={this.props.service} style="disabled-icon"/>
  		</a>
  	);
  }
}

export default NoProject