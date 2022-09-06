import React from 'react'
import { t } from 'i18next'

import styles from './example.module.css'

type ExampleComponentProps = {
    title: string
}

export const ExampleComponent = ({ title }: ExampleComponentProps) => {
    return (
        <div className={styles.example}>
            <p>{title}</p>
            <span>{t<string>('hello.world')}</span>
        </div>
    )
}
