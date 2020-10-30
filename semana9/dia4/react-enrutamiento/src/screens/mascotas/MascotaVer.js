import React from 'react'

const MascotaVer = (props) => {
    console.log(props);

    // console.log(props.match.params.mascota_id);

    const {mascota_id} = props.match.params;

    return (
        <div>
            VIENDO LA INFORMACION DE LA MASCOTA: <strong>{mascota_id}</strong>
        </div>
    )
}

export default MascotaVer
