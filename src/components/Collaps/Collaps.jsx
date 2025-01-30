import React, { useState, useRef, useEffect } from 'react';

const Collaps = (props) => {
  // hook useState pour gérer l'état d'un élément cliquable
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className='titleContainer'>
      {/* setIsOpen est appelée avec la valeur actuelle de isOpen inversée, ce qui a pour effet de modifier l'état et de déclencher le rendu du composant */}
      <div onClick={() => setIsOpen(!isOpen)} className='divParentBurger'>
        <h3 className='ParaFiabilite'>{props.title}</h3>
        {/* Icône SVG qui change d'apparence en fonction de l'état "isOpen" */}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <svg className="fleche" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466V16.3466Z" fill="white" />
          </svg>
        </span>
      </div>
      {/* Affichage ou masquage du corps en fonction de l'état "isOpen" */}
      <div 
        ref={contentRef}
        className='collaps'
        style={{ height: isOpen ? `${contentHeight}px` : '0' }}
      >
        {props.body}
      </div>
    </div>
  );
}

export default Collaps;