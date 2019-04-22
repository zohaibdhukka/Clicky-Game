import React from 'react';
import ImageCards from './image';

const Container = ({characters, onImageClick }) => {
	const Characters = characters.map((character, index) => {
		return (
			<ImageCards
				key={character}
				selectedCharacter={characters[index]}
				onImageClick={onImageClick}
			/>
		)
	})
	return (
		<div className='container'>
			<div className="row">
			
				{Characters}
			</div>
			
		</div>
	);
};

export default Container;