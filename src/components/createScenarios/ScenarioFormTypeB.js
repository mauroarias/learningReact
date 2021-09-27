import './ScenarioFormTypeB.css'
import CommonScenarioForm from './CommonScenarioForm'
import FormActions from '../UI/FormActions'
import React, {useState} from 'react'
import InputValidationPanel from '../UI/InputValidationPanel'

const ScenarioFormTypeB = (props) => {

    const [perso, setPerso] = useState({});
    const [data, setData] = useState({});
    const [summitEvent, setSummitEvent] = useState(false);

    const personalizationAChangeHandler = (event) => {
        setPerso({...perso, persoA: event.target.value});
        setData({...data, perso: perso});
    }

    const personalizationBChangeHandler = (event) => {
        setPerso({...perso, persoB: event.target.value});
        setData({...data, perso: perso});
    }

    const summitHandler = () => {
        if (data && data.name && data.id && data.endDate && data.param1 && data.param2 && data.perso && data.perso.persoA && data.perso.persoB) {
            const clone = {...data, perso: JSON.stringify(perso), type:'typeB'};
            props.onSummit(clone);
        } else {
            setSummitEvent(true);
        }
    } 

    const resetHandler = () => {
        props.onReset();
    } 

    const changeDataHander = (newData) => {
        setData({...newData, perso: perso});
    }

    return (
        <div>
            <div>
                <CommonScenarioForm summitEvent={summitEvent} onChangeData={changeDataHander} type='Adding scenario Type B'/>
            </div>
            <div>
                <InputValidationPanel showError={summitEvent} invalid={!(perso && perso.persoA)}>
                    <label>personalization A</label>
                    <input onChange={personalizationAChangeHandler} type='text'/>
                </InputValidationPanel>
                <InputValidationPanel showError={summitEvent} invalid={!(perso && perso.persoB)}>
                    <label>personalization B</label>
                    <input onChange={personalizationBChangeHandler}  className='scenario__input_small' type='number' min='0.01' step='0.01'/>
                </InputValidationPanel>                
            </div>
            <div>
                <FormActions onReset={resetHandler} resetLabel='cancel' onSummit={summitHandler} summitLabel='summit scenario'/>
            </div>
        </div>
    )
}

export default ScenarioFormTypeB;