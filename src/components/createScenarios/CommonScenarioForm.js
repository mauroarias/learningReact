import './CommonScenarioForm.css'
import IdList from './IdList';
import React, {useState} from 'react';
import InputValidationPanel from '../UI/InputValidationPanel';

const CommonScenarioForm = (props) => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [endDate, setEndDate] = useState('');
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');
    
    const scenarioNameChangeHandler = (event) => {
        setName(event.target.value);
        props.onChangeData(buildData());
    }

    const scenarioIdChangeHandler = (id) => {
        setId(id);
        props.onChangeData(buildData());
    }

    const scenarioEndDateChangeHandler = (event) => {
        setEndDate(event.target.value);
        props.onChangeData(buildData());
    }

    const scenarioParam1ChangeHandler = (event) => {
        setParam1(event.target.value);
        props.onChangeData(buildData());
    }

    const scenarioParam2ChangeHandler = (event) => {
        setParam2(event.target.value);
        props.onChangeData(buildData());
    }

    const buildData = () => {
        return {name: name, id: id, endDate: endDate, param1: param1, param2: param2};
    }

    const now = new Date();
    return (
        <div>
            <label className='scenario__type_label'>{props.type}</label>
            <InputValidationPanel showError={props.summitEvent} invalid={!name}>
                <label>name</label>
                <input value={name} onChange={scenarioNameChangeHandler} type='text'/>
            </InputValidationPanel>
            <InputValidationPanel showError={props.summitEvent} invalid={!id}>
                <IdList onChangeId={scenarioIdChangeHandler}/>
            </InputValidationPanel>
            <InputValidationPanel showError={props.summitEvent} invalid={!endDate}>
                <label>endDate</label>
                <select onChange={scenarioEndDateChangeHandler}>
                    <option></option>
                    <option>yesterday</option>
                    <option>today</option>
                    <option>tomorrow</option>
                </select>
            </InputValidationPanel>
            <InputValidationPanel showError={props.summitEvent} invalid={!param1}>
                <label>parameter 1</label>
                <input onChange={scenarioParam1ChangeHandler} type='text'/>
            </InputValidationPanel>
            <InputValidationPanel showError={props.summitEvent} invalid={!param2}>
                <label>parameter 2</label>
                <input onChange={scenarioParam2ChangeHandler} className='scenario__input_small' type='number' min='0.01' step='0.01'/>
            </InputValidationPanel>                
        </div>
    );
}

export default CommonScenarioForm;