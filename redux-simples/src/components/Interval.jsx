import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from "./Card";
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

function Interval(props) {
    return (
        <div>
            <Card title="Intervalo de numeros " red>
                <div className="Intervalo">
                    <span>
                        <strong>Minimo</strong>
                        <input type="number" value={props.min}
                            onChange={e => props.alterarMinimo(+e.target.value)} />
                    </span>
                    <span>
                        <strong>Maximo</strong>
                        <input type="number" value={props.max}
                            onChange={e => props.alterarMaximo(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            //action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            //action creator -> action
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)