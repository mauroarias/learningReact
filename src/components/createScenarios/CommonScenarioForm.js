import './CommonScenarioForm.css'
import IdList from './IdList';
import React, {useState} from 'react';

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
            <div>
                <div className='scenario__label'>
                    <label>name</label>
                </div>
                <div value={name} onChange={scenarioNameChangeHandler} className='scenario__input'>
                    <input type='text'/>
                </div>
            </div>
            <div>
                <IdList onChangeId={scenarioIdChangeHandler}/>
            </div>
            <div>
                <div className='scenario__label'>
                    <label>endDate</label>
                </div>
                <div className='scenario__input'>
                    <select onChange={scenarioEndDateChangeHandler} >
                        <option></option>
                        <option>yesterday</option>
                        <option>today</option>
                        <option>tomorrow</option>
                    </select>
                </div>
            </div>
            <div>
                <div className='scenario__label'>
                    <label>parameter 1</label>
                </div>
                <div className='scenario__input'>
                    <input onChange={scenarioParam1ChangeHandler} type='text'/>
                </div>
            </div>
            <div>
                <div className='scenario__label'>
                    <label>parameter 2</label>
                </div>
                <div className='scenario__input'>
                    <input onChange={scenarioParam2ChangeHandler} className='scenario__input_small' type='number' min='0.01' step='0.01'/>
                </div>
            </div>                
        </div>
    );
}

export default CommonScenarioForm;