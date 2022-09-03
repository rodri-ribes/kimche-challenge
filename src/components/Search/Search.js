import React from 'react'
import { BiSearch } from 'react-icons/bi'
import style from './Search.module.scss'

export default function Search({ setSearch }) {
    return (
        <div className={style.container}>
            <div className={style.container__input}>
                <BiSearch />
                <input type='text' placeholder='Search...' onChange={e => setSearch(e.target.value)} />
            </div>
        </div>
    )
}
