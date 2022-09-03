import React from 'react'
import style from './Select.module.scss'

export default function Select({ changeButton, button }) {
    return (
        <div>
            <div className={style.container}>
                <h3>Group by: </h3>
                <div className={style.container__buttons}>
                    <button name="continent" className={button === "continent" ? style.select : style.button} onClick={e => changeButton(e)}>Continent</button>
                    <button name="languages" className={button === "languages" ? style.select : style.button} onClick={e => changeButton(e)}>Languages</button>
                </div>

            </div>
        </div>
    )
}
