import React from 'react';
import Collaps from '../components/Collaps/Collaps';


import ImgAbout from '../components/Image/ImageAbout/ImgAbout';

const About = () => {
    return (
        <div className="about-container">
            <ImgAbout />
            <div className='about-page' page='about'>
                <Collaps title='Fiabilité' body={<p className='descriptionTexte'>Notre site web de location immobilière est fiable et sécurisé pour vous aider à trouver votre prochaine maison.
                    Nous vérifions les propriétaires et les propriétés pour garantir la qualité de nos annonces.
                    Rejoignez notre plateforme en toute confiance pour trouver votre nouveau chez-vous.</p>} />
            </div>
            <div className='about-page' page='about'>
                <Collaps title='Respect' body={<p className='descriptionTexte'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
                        ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
            </div>
            <div className='about-page' page='about'>
                <Collaps title='Service' body={<p className='descriptionTexte'>Notre site web propose une plateforme de location immobilière simple et efficace. 
                        Nos services incluent la mise en relation avec des propriétaires et des locataires, la gestion des demandes et des paiements,
                        ainsi qu'un soutien tout au long du processus de location. Rejoignez notre communauté pour une expérience de location en toute confiance.</p>} /> 
            </div>

            <div className='about-page'page='about'>
                <Collaps title='Responsabilité' body={<p className='descriptionTexte'>Chez nous, la responsabilité est une valeur clé.
                        Nous sommes entièrement responsables de la qualité et de la sécurité de nos services, et nous travaillons sans relâche pour garantir la satisfaction de nos clients. 
                        Nous prenons également en compte les impacts de nos activités sur la société et l'environnement, et nous agissons de manière responsable à chaque étape de notre travail.</p>} /> 
            </div>


        </div>
    );
};

export default About;