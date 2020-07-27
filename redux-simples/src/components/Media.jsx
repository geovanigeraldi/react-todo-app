import React from 'react'
import { connect } from 'react-redux'

import Card from "./Card";


function Media(props) {
    return (
        <div>
            <Card title="Media dos numero " green>
                <div className="Intervalo">
                    <span>
                        <strong>{(props.min + props.max) / 2}</strong>
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

export default connect(mapStateToProps)(Media)