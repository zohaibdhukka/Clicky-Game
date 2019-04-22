import React from 'react';

const ImageCard = ({selectedCharacter, onImageClick }) => {
	return (
		// <div className='col s1'>
		// 	<div className={`card hoverable blue lighten-3`} onClick={() => { onImageClick(selectedCharacter) }}>
		// 		<div className='card-image'>
		// 			<img src={`assets/img/${selectedCharacter}.png`} alt='Characters' />
		// 		</div>
		// 	</div>
		// </div>


	<div className="col s3">
		<div className="card" onClick={() => { onImageClick(selectedCharacter) }}>
			<div className="card-image">
				<img src={`assets/img/${selectedCharacter}.jpg`}></img>
			</div>
		</div>
	</div>
	);
};

export default ImageCard;