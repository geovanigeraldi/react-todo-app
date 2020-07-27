import './Interval.css'
import React from 'react'

import Card from "./Card";

export default props => {
    const { min, max } = props
    return (
        <div>
            <Card title="Intervalo de numeros " red>
                <div className="Intervalo">
                    <span>
                        <strong>Minimo</strong>
                        <input type="number" value={min}
                            onChange={e => props.onMinChanged(+e.target.value)}
                        />
                    </span>
                    <span>
                        <strong>Maximo</strong>
                        <input type="number" value={max}
                            onChange={e => props.onMaxChanged(+e.target.value)}
                        />
                    </span>
                </div>
            </Card>
        </div>
    )
}