import React from 'react'
import style from './Card.module.scss'

export default function Card({ name, capital, emoji, currency, phone, languages, continent }) {
    return (
        <div className={style.container}>
            <div className={style.container__header}>
                <p>{emoji}</p>
                <h3>{name}</h3>
            </div>
            <div className={style.container__body}>
                <p>Capital: {capital ? capital : "Is not declared"}</p>
                <p>Phone: +{phone}</p>
                <p>Currency: {currency ? currency : "Is not declared"}</p>
                {/* <p>languages: {languages[0]?.name ? languages[0].name : "Is not declared"}</p>
                <p>Continent: {continent?.name ? continent?.name : "Is not declared"}</p> */}
            </div>
        </div>
    )
}
