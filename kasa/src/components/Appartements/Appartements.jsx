
import { Link } from 'react-router-dom';
import data from '../../json/data.json'

function Appartements() {
    return (
       
            <div className="divparent">
                {data.map(item => (
                    <div key={item.id} className='list'>
                        <Link to={`/${item.id}`}>
                            <div className="list2">
                                <div className="divEnfant">
                                    <img className="img" src={item.cover} alt={item.title} />
                                    <div className="paddingTitre">
                                        <h2 className="titrelocation">{item.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
      
    );
}


export default Appartements;
