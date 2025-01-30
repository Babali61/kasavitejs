import data from '../../json/data.json'
import { useParams } from 'react-router-dom';


function Appartements() {
    const { id } = useParams();
    const apartment = data.find(item => item.id === id);
    return (
        <div className="divParentTag">
            {apartment.tags.map((tag) => (
                <div key={`${tag}-${apartment.id}`} className='tagEnfant'>
                    <p className="titrelocation">{tag}</p>
                </div>
            ))}
        </div>
    );
}


export default Appartements;
