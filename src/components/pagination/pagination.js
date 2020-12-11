import React from 'react';
import './pagination.css'

const Pagination = props => {
    return(
        <div className="pagination">
            {
                props.page > 1 ?
                <p onClick={()=>props.onPress(props.page - 1)} className="arrow"><ion-icon name="arrow-back-outline"></ion-icon></p>
                :null
            }
            <p>{props.page}</p>
            <p onClick={()=>props.onPress(props.page + 1)} className="arrow"><ion-icon name="arrow-forward-outline"></ion-icon></p>
        </div>
    )
}

export default Pagination;