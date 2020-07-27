import React from 'react'
import { connect } from 'react-redux'

import Card from "./Card";

function Sorteio(props) {
    return (
        <div>
            <Card title="Sorteio do numero " purple>
                <div className="Intervalo">
                    <span>
                        <strong>{parseInt(Math.random() * (props.max - props.min)) + props.min}</strong>
                    </span>
                </div>
            </Card>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)