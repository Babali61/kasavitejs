
import Error from "./Error"
import { useParams } from 'react-router-dom';
import data from '../json/data.json'
import ImageApartment from "../components/Image/ImageAppart/ImageApartement";
import TitleLocation from "../components/TitleLocation/TitleLocation";
import Container from "../components/Container/Container";
import ContainerAuthRating from "../components/Container/ContainerChildren/ContainerAuthRating";
import Auteur from "../components/Auteur/Auteur"
import Tag from "../components/Tag/Tag"
import Rating from "../components/RatingStars/Rating"
import ContainerTitleTag from "../components/Container/ContainerChildren/ContainerTitleTag";
import Collaps from "../components/Collaps/Collaps";




const AppartementPage = () => {
    const { id } = useParams();
    const appartement = data.find(item => item.id === id);

    if (!appartement) {
        return <Error />
    }
    return (
        <div>

            <ImageApartment />
            <Container>
                <ContainerTitleTag>
                    <TitleLocation />
                    <Tag />
                </ContainerTitleTag>
                <ContainerAuthRating>
                    <Auteur />
                    <Rating />
                </ContainerAuthRating>
            </Container>
            <Container>
                <div className='appartment-page'>
                    <Collaps title='Description' body={<p className='descriptionAppartement'>{appartement.description}</p>} />
                </div>
                <div className='appartment-page'>
                    <Collaps title='Equipements' body={
                        <div>
                            <div className='listeBurgerEquipement'>
                                {appartement.equipments.map(equip => (
                                    <div className='equipment' key={equip}>{equip}</div>
                                ))}
                            </div>
                        </div>} equipments={appartement.equipments} page='appartement' />
                </div>

            </Container>

        </div>
    );
};

export default AppartementPage;