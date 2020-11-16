import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {ParaShow: false};

		this.showPara = this.showPara.bind(this);
	}

	showPara(){
    this.setState({ParaShow: true});
	}

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.showPara}>Click to see text</button>
				{this.state.ParaShow?
				<p id="para">Hello, I've learnt to use the full-stack evaluatsion tool. This makes me so happy</p>
				:null}
    		</div>
    	);
	}
	
}


export default App;

