import React from 'react'

import styles from './example.module.css'

type ExampleComponentProps = {
    title: string
}

export const ExampleComponent = ({
    title
}: ExampleComponentProps) => {
    return (
        <div className={styles.example}>
            <p>{title}</p>
        </div>
    )
}
