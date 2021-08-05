import monstera from '../../assets/monstera.jpg'
import lyrata from '../../assets/lyrata.jpg'
import pothos from '../../assets/pothos.jpg'
import succulent from '../../assets/succulent.jpg'
import olivier from '../../assets/olivier.jpg'
import basil from '../../assets/basil.jpg'
import mint from '../../assets/mint.jpg'
import calathea from '../../assets/calathea.jpg'
import cactus from '../../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price:15,
		describe:'pour decoration de maison'
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price:16,
		describe:'typique a la decoration immobiliere'
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		light: 1,
		water: 2,
		cover: pothos,
		price:9,
		describe:'si vous voulez rendre votre espace pleine de vie'
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: succulent,
		price:20,
		describe:'elle aime la lumiere et vous transmet sa bonne mine'
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price:25,
		describe:'espece rare et riche en vertue spirituelle'
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: basil,
		price:6,
		describe:'Offre sa a bae et elle te quite sur le champ haha'
    },
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		light: 2,
		water: 3,
		cover: mint,
		price:5,
		describe:'autant manifique que capricieuse elle a pleine de vertues'
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		light: 2,
		water: 1,
		cover: calathea,
		price:8,
		describe:'tres facile a entretenir'
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: cactus,
		price:4,
		describe:'plante desertique rare'
	}
]