
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='pc-footer'>
			<div className='pc-footer-elem'>
                Chaque plante a une histoire;
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='pc-footer-elem'>Laissez-nous votre mail chez Omer :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer