import React, { useEffect, useState } from 'react'
import { t } from 'i18next'

import styles from './example.module.css'

type ExampleComponentProps = {
    title: string
}

export const ExampleComponent = ({ title }: ExampleComponentProps) => {
    const [parrots, setParrots] = useState<null | number>(null)
    console.log('%c%s', 'color: #00e600', parrots);

    // временное решение, нужное только для демо
    useEffect(() => {
        fetch('http://localhost:3000/parrots', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((response) => response.json())
            .then(parrots => setParrots(parrots.count))
    }, [])

    return (
        <div className={styles.example}>
            <p>{title}</p>
            <span>{t<string>('hello.world')}</span>
            {parrots && (
                <p>{t<string>('parrots', { parrots })}</p>
            )}
        </div>
    )
}
