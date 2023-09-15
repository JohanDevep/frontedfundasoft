import React from 'react'

function Registro() {
    return (
        <div>Registro
            <form className="row" onSubmit="">
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" name="apellido"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Registro