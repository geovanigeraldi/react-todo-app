import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="from-control"
                placeholder="Add a task"
                onChange={props.changeDescription}
                values={props.description} />
        </Grid>

        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus"
                onClick={props.handleAdd}></IconButton>

            <IconButton style="info" icon="search"
                onClick={props.handleSearch}></IconButton>
        </Grid>
    </div>
)

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)