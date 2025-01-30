import data from '../../json/data.json'
import { useParams } from 'react-router-dom';


const TitleLocation = () => {
    const { id } = useParams();
    const apartment = data.find(item => item.id === id);
    return (
        <div className='parentTitreLocation'>
            <h1 className='titleApartment'>{apartment.title}</h1>
            <h2 className='titleLocation'>{ apartment.location }</h2>
        </div>
    );
};

export default TitleLocation;