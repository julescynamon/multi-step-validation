import React from "react";
import "./Card.css";

export default function CardBegin(props) {
	return (
		<div className='card'>
			<h1>🍣 Aides-nous à ravir tes pailles 🌶️</h1>
			<button onClick={() => props.modifyIndex(2)}>COMMENCER</button>
		</div>
	);
}
