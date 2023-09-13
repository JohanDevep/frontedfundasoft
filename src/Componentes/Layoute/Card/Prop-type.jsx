import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
export default function CardCorporativos({ href, descripcion }) {
    return (
        <div>
            <NavLink to={href}
                className="md:bg-transparent md:text-[#9A1B76] md:p-0 md:hover:text-[#db43b0] text-[#9A1B76] hover:text-[#db43b0]">
                {descripcion}
            </NavLink>
        </div>
    )
}

CardCorporativos.propTypes = {
    href: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}