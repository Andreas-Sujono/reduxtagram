
export const initializeAction = {
	type:'initialize',
	payload: [
			{	
				id:0,
				url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg',
				like: 5,
				caption: '#my dog',
				comment: ['amazing!!!','wow so cute','it really looks like my dog']
			},
			{	
				id:1,
				url: 'http://a.rgbimg.com/users/a/ay/ayla87/600/r70bnCm.jpg',
				like: 10,
				caption: '#Nature',
				comment: ['where is it?','are u on holiday?']
			},
			{	
				id:2,
				url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1540811779000/photosp/4f909e9c-850c-493c-96a7-74ff803e5cd0/stock-photo-nature-sunlight-black-green-meadow-morning-lifestyle-scene-background-4f909e9c-850c-493c-96a7-74ff803e5cd0.jpg',
				like: 5,
				caption: '“Love is a grave mental disease.” – Plato',
				comment: ['what happened?','are u okay?','stay strong dude',"it's a great view"]
			},
			{	
				id:3,
				url: 'https://img2.thejournal.ie/inline/3620106/original/?width=630&version=3620106',
				like: 5,
				caption: '#Colorful',
				comment: ['is it photo from the internet','so pretty','amazing!!!']
			},
			{	
				id:4,
				url: 'https://img2.thejournal.ie/inline/1997418/original/?width=630&version=1997418',
				like: 5,
				caption: '#parade in disneyland',
				comment: ['where is it?','wow amazing!!!','its so many peole on there']
			},
			{	
				id:5,
				url: 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/08/19/yq-jjlin-19082022.jpg?itok=Nk5d5WJr&timestamp=1566197858',
				like: 5,
				caption: '#concert',
				comment: ['what concert is it?','is it free?','woww!!!']
			},
			]
}

export function incrementLikes(id){
	return {
		type:'INCREMENT_LIKES',
		payload: id
	}
}


export function addComments(id,comment){
	return{
		type:'ADD_COMMENT',
		payload:{id:id,comment:comment}
	}
}

export function deleteComments(id,index){
	return{
		type:'DELETE_COMMENT',
		payload:{id:id,index:index}
	}
}




