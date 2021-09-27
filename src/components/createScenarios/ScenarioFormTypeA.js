import './ScenarioFormTypeA.css'
import CommonScenarioForm from './CommonScenarioForm'
import FormActions from '../UI/FormActions'
import React, {useState} from 'react'

const ScenarioFormTypeA = (props) => {

    const [data, setData] = useState({});
    const [summitEvent, setSummitEvent] = useState(false);

    const summitHandler = () => {
        if (data && data.name && data.id && data.endDate && data.param1 && data.param2) {
            props.onSummit({...data, type:'typeA'});
        } else {
            setSummitEvent(true);
        }
    } 

    const resetHandler = () => {
        props.onReset();
    }
    
    const changeDataHander = (data) => {
        setData(data);
    }

    return (
        <div>
            <div>
                <CommonScenarioForm summitEvent={summitEvent} onChangeData={changeDataHander} type='Adding scenario Type A'/>
            </div>
            <div>
                <FormActions onReset={resetHandler} resetLabel='cancel' onSummit={summitHandler} summitLabel='summit scenario'/>
            </div>
        </div>
    )
}

export default ScenarioFormTypeA;