import React from 'react'
import { connect } from 'react-redux'

import Card from "./Card";

function Soma( props) {    
    return (
        <div>
            <Card title="Soma dos numero " blue>
                <div className="Intervalo">
                    <span>
                        <strong>{props.max + props.min}</strong>
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

export default connect(mapStateToProps)(Soma)