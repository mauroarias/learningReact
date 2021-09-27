import './IdList.css'
import React from 'react';

const IdList = (props) => {

    const idChangeHandler = (event) => {
        props.onChangeId(event.target.value)
    }

    const ids = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6'];
    return (
        <div>
            <label>id</label>
            <select onChange={idChangeHandler}>
                <option></option>
                {ids.map((id) => (<option>{id}</option>))}
            </select>
        </div>
    )
}

export default IdList;