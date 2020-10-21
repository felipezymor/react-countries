import React from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default function Header({filter, countryCount, totalPopulation, onChangeFilter}) {
    const handleInputChange = (event) => {
        const newText = event.target.value;
        onChangeFilter(newText);
    };
        return (
            <div className={css.flexRow}>
                  <input style={{minWidth: '150px', maxWidth: '600px'}}type="text" placeholder="Buscar" value={filter} onChange={handleInputChange}/>
                  <span className="info">Países: <strong>{countryCount}</strong></span>
                  <span className="info">População: <strong>{formatNumber(totalPopulation)}</strong></span>
            </div>
        );
    
}
