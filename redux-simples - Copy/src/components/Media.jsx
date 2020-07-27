import React from 'react'

import Card from "./Card";

export default props => (
    <div>
        <Card title="Media dos numero " green>
            <div className="Intervalo">
                <span>
                    <strong>{(props.max + props.min) / 2}</strong>
                </span>
            </div>
        </Card>
    </div>
)