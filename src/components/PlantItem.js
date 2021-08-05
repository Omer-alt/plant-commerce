import ScaleCare from './ScaleCare'
import '../styles/PlantItem.css'

function apreciate(plantName,plantDescription){
    alert(`✨ Tres bon choix de plante ${plantName} ${plantDescription}`)
}
function PlantItem({name,category,id,light,water,cover,price,describe}){
    return(
        <li key={id} className='pc-plant-item'>
            <span className='pc-plant-item-price'>{price}€</span>
            <img onClick={()=>apreciate(name,describe)} src={cover} alt={`${name}`} className='pc-plant-item-cover' />{name}
            <div>
                <ScaleCare careType='water' scaleValue={water} />
                <ScaleCare careType='light' scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;