import React from 'react'
import Card from '../Card/Card';
import style from './Home.module.scss'


export default function Home({ searchCountry, search, searchFilter, button }) {


    let aux = [];

    search && searchCountry.filter(searchFilter(search)).forEach(e => {
        if (button === "languages") {
            if (e.languages[0]) {
                if (!aux.includes(e.languages[0]?.name)) {
                    aux.push(e.languages[0]?.name)
                }
            }
        } else {
            if (e.continent)
                if (!aux.includes(e.continent?.name)) {
                    aux.push(e.continent.name)
                }
        }
    });

    return (
        <div className={style.container}>
            {search ?
                aux.length > 0 ? aux.map((f) => {
                    return (
                        <div key={f} className={style.container__group}>
                            <p className={style.container__group_name}>{f}</p>
                            {
                                searchCountry.filter(searchFilter(search)).map(c => {
                                    if (c.languages[0]?.name === f || c.continent?.name === f) {
                                        return (
                                            <Card
                                                name={c.name}
                                                currency={c.currency}
                                                capital={c.capital}
                                                phone={c.phone}
                                                emoji={c.emoji}
                                                languages={c.languages}
                                                continent={c.continent}
                                                key={c.name}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>
                    )
                })
                    :
                    <h1 className={style.notResults}>No results found</h1>
                :
                null
            }
        </div>
    )
}
