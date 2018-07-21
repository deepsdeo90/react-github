import React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import '../css/bootstrap.css';
import '../css/style.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'dipali',
			userData:[],
			userRepos:[],
			perPage:5
		}
	}

	render(){
		return(
				<div>
				My app
				</div>
			)
	}
}

App.propTypes = {
	clientId: PropTypes.string,	
	clientSecret: PropTypes.string,

};
App.defaultProps = {
	clientId: '4f64a10050d816424f59',	
	clientSecret:'c85694b643c2d2d4acfba70f315d03ae78a7ae0e',

}
export default App