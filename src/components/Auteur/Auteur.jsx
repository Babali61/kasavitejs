import data from '../../json/data.json'
import { useParams } from 'react-router-dom';



const Auteur = () => {
    const { id } = useParams();
    const apartment = data.find(item => item.id === id);
    return (
        <div className='parentTitreImageAuteur'>
            <h3 className='titleAuteur'>{apartment.host.name}</h3>
            <img className='imageAuteur' src={apartment.host.picture} alt={ apartment.host.name} />
        </div>
    );
};

export default Auteur;