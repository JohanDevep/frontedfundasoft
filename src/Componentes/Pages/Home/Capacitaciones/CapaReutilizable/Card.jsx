import React from 'react'
import PropTypes from 'prop-types';
export default function Card({ imagen, descripcion }) {
    return (
        <div>
            <div className="xl:w-60 rounded-lg overflow-hidden shadow-lg">
                <img className="h-40 w-25" src={imagen} alt={descripcion} />
                <h3>{descripcion}</h3>
            </div>
        </div>
    )
}
Card.propTypes = {
    descripcion: PropTypes.string.isRequired,
}