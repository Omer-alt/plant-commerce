import {plantList} from './datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import {useState} from 'react'

function ShoppingList({cart,updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant)=> 
        acc.includes(plant.category)? acc:acc.concat(plant.category),
        [] 
        )

    function addToCart(name,price){
        const currentPlantSaved = cart.find((plant)=>plant.name === name)
        if (currentPlantSaved){
			const cartFilteredCurrentPlant = cart.filter(
                (plant)=>plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name,price,amount:currentPlantSaved.amount+1}
            ])     
        }else{
            updateCart([...cart,{name,price,amount:1}])
        }
    }
    function removeToCart(name,price,amount){
        const currentPlantSaved = cart.find((plant)=>plant.name === name)
        if (currentPlantSaved && currentPlantSaved.amount === 1){
            currentPlantSaved.amount = 0
			const cartFilteredCurrentPlant1 = cart.filter(
                (plant)=>plant.name !== name
            )
            updateCart(cartFilteredCurrentPlant1) 
            

        }else if(currentPlantSaved && currentPlantSaved.amount > 1){
            const cartFilteredCurrentPlant2 = cart.filter(
                (plant)=>plant.name !== name
            )
            updateCart([
				...cartFilteredCurrentPlant2,
				{ name, price, amount: currentPlantSaved.amount - 1 }
			])
        }else if(!currentPlantSaved){
            alert(`votre panier ne contient pas de ${name}`)
        }
    }
    return(
        <div className='pc-shopping-list'>
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className='pc-plant-list'>
                {plantList.map(({name,category,id,light,water,cover,price,describe}) => (
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem 
                            name={name}
                            light={light}
                            water={water}
                            cover={cover}
                            price={price}
                            describe={describe}
                            />
                            <div className='pc-plant-list-button'>
                                <button className='pc-plant-list-button-add' onClick={()=>addToCart(name,price)} >Ajouter</button>
                                <button className='pc-plant-list-button-remove' onClick={()=>removeToCart(name,price)}>Supprimer</button>
                            </div>
                        </div>
                    ):null    
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;