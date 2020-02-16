import React, {Component} from 'react'
import Card from './card.js'
import {connect} from 'react-redux'

class PhotoGrid extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="photoGrid"> 
				{
					this.props.img.map(
						item => <Card key={item.id} id={item.id} caption={item.caption} like={item.like} comment={item.comment} url={item.url} />
					)
				}
			</div>
				
		);
	}
}

const mapStateToProps = (state,props) =>{
	return {img:state};
}
export default connect(mapStateToProps)(PhotoGrid)
