
export default function reducer(state = [], action){
	if(action.type == 'initialize'){
		let newState = action.payload;
		return newState;
	}
	else if (action.type == 'INCREMENT_LIKES'){
		console.log(action)
		return [
			...state.slice(0,action.payload),
			{...state[action.payload], like:state[action.payload].like + 1},
			...state.slice(action.payload + 1)
		]
	}
	else if (action.type == 'ADD_COMMENT'){
		console.log([...state])
		action.payload.id = parseInt(action.payload.id)
		console.log(typeof(action.payload.id))
		console.log([...state.slice(0,action.payload.id)])
		console.log([...state.slice(action.payload.id + 1)])
		
		return [
			...state.slice(0,action.payload.id),
			{...state[action.payload.id],comment:state[action.payload.id].comment.concat(action.payload.comment)},
			...state.slice(action.payload.id + 1)
		]
		
		
		return [...state]
	}
	else if (action.type == 'DELETE_COMMENT'){
		action.payload.id = parseInt(action.payload.id)
		state[action.payload.id].comment.splice(action.payload.index,1)

		return [
			...state
		]
	}
	return state;
}