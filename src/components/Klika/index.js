import React, { PropTypes } from 'react'
import classes from './Counter.scss'
import TableRow from './TableRow'

class Klika extends React.Component {

    render () {
        const {songs} = this.props;
        const rows =  songs.map(song => <TableRow song = {song} key = {song.title}></TableRow>)
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
                <tbody>{rows}</tbody>
            </table>
        )
    }

}

export default Klika
