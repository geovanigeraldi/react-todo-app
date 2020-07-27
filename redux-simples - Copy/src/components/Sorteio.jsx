import React from 'react'

import Card from "./Card";

export default props => (
    <div>
        <Card title="Sorteio do numero " purple>
            <div className="Intervalo">
                <span>
                    <strong>{parseInt(Math.random() * (props.max + props.min)) - props.min}</strong>
                </span>
            </div>
        </Card>
    </div>
)