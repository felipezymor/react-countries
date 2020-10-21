import React, { Component } from 'react';
import css from './countries.module.css';

export default class Country extends Component {
    render() {
        const { country } = this.props;
        const {name, flag} = country;

        return (
            <div className={css.country}>
                <img className={css.flag} src={flag} alt={name}/>
                <span style={{textAlign: 'center'}}>{country.name}</span>
            </div>
        )
    }
}
