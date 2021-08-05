import sun from '../assets/sun.svg'
import water from '../assets/water.svg'
import '../styles/ScaleCare.css'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function ScaleCare({scaleValue,careType}){
    const scaleType = careType==='light'?(
    <img src={sun} alt='sun-image'/>
    ):(
    <img src={water} alt='water-image'/>
    );
    const range=[1,2,3]
    return (
        <div
            onClick={() =>
                alert(
                    `Cette plante requiert ${quantityLabel[scaleValue]} ${
                        careType === 'light' ? 'de lumière' : "d'arrosage"
                    }`
                )	
            }
        >
            {range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span className='pc-soins' key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
        </div>
    );
    
}

export default ScaleCare;