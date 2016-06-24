import React, { PropTypes } from 'react'


class TableRow extends React.Component {
    static propTypes = {
        song: PropTypes.object.isRequired
    }
    render () {
        const {song} = this.props;
        const {artist, year, title, img_url: img} = song;
        return (
            <tr>
                <td>{artist}</td>
                <td>{title}</td>
                <td>{year}</td>
                <td><img src={img} alt={title} /></td>
            </tr>
        )

    }
}

export default TableRow