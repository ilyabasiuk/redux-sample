import React, { PropTypes } from 'react'
import classes from './Counter.scss'

class Counter extends React.Component {

    render () {
        const props = this.props
        return (
            <table>
                <thead>
                <tr>
                    <th>Исполнитель</th>
                    <th>Песня</th>
                    <th>Жанр</th>
                    <th>Год</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        )
    }

}

export default Counter
