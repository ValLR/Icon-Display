import React, { Component } from 'react'
import NoAccess from './NoAccess'
import NoProject from './NoProject'
import Normal from './Normal'

class Icon extends Component {

	constructor(props){
		super(props)
		this.state={
			resources:[
				{
					type: "papertrail",
					name: "censip-prod",
					url: "https://papertrailapp.com/systems/censip-prod",
					access:false
				},
				{
					type: "github",
					name: null,
					url: null,
					access:false	
				},
				{
					type: "sentry",
					name: "CEN - SIP (Producción)",
					url: "https://sentry.io/unholster/cen-sip-prd",
					access:true
				},
				{
					type: "codeship",
					name: "censip-prod",
					url: null,
					access:false
				},
				{
					type: "pivotal",
					name: "CEN Proyectos",
					url: "https://www.pivotaltracker.com/n/projects/1422472",
					access:true
				}
			]
		}
	}

	
	render() {
		const column = this.state.resources.map(dynamicData =>{
		return(
				<div class="col-lg-2 col-mg-2 text-center">
					<Logo service={dynamicData.type} url={dynamicData.url} userAccess={dynamicData.access}/>
				</div>
		)
		});
		return(
			<div class="container">
				<div class="row">
					{column}
				</div>
			</div>
		)
	}
}

function Logo(props) {
	if(props.url !== null && props.userAccess !== false){
		return <Normal service={props.service} href={props.url}/>	
	}
	else if(props.url === null){
		return <NoProject service={props.service} />
	}
	else {
		return <NoAccess service={props.service} href={props.url}/>
	}
}

export default Icon