import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
    handleInputChange = (event) => {
        const newText = event.target.value;
        this.props.onChangeFilter(newText);
    };
    render() {
        const {filter, countryCount, totalPopulation} = this.props;
        return (
            <div className={css.flexRow}>
                  <input style={{minWidth: '150px', maxWidth: '600px'}}type="text" placeholder="Buscar" value={filter} onChange={this.handleInputChange}/>
                  <span className="info">Países: <strong>{countryCount}</strong></span>
                  <span className="info">População: <strong>{formatNumber(totalPopulation)}</strong></span>
            </div>
        );
    };
}
