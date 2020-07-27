import React from 'react'

import Card from "./Card";

export default props => (
    <div>
        <Card title="Soma dos numero " blue>
            <div className="Intervalo">
                <span>
                <strong>{(props.max + props.min)}</strong>
                </span>
            </div>
        </Card>
    </div>
)