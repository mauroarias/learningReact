import './Scenarios.css'
import ScenarionsView from './ScenarionsView';
import CreateScenario from './CreateScenario';
import React, {useState} from 'react';
import FormActions from '../UI/FormActions';


const DATA = [];

const Scenarios = (props) => {

    const [addScenario, setAddScenario] = useState(false);
    const [data, setData] = useState(DATA);

    const addScenarioHadler = () => {
        setAddScenario(true);
    }

    const resetScenarioHadler = () => {
        setAddScenario(false);
    }

    const summitingScenario = (newData) => {
        const clone = [...data];
        clone.push([newData.name, newData.type, newData.id, newData.endDate, newData.param1, newData.param2, newData.perso]);
        setData(clone)
        setAddScenario(false);
    }

    const deleteHandler = (data) => {
        setData(data);
    }   

    return (
        <div>
            <div className='scenarios__collections'>
                <div className='scenarios__collection_name'>
                    <label>{props.collectionName}</label>
                </div>
                <div className='scenarios__button'>
                    <FormActions resetVisible='false' onSummit={addScenarioHadler} summitLabel='add scenario'/>
                </div>
            </div>
            {addScenario && 
                (<div className='scenario__panel'>
                    <CreateScenario onSummit={summitingScenario} onReset={resetScenarioHadler}/>
                </div>)}
            <div className='scenario__panel_not_border'>
                <ScenarionsView onDelete={deleteHandler} data={data}/>
            </div>
        </div>
    );
}

export default Scenarios;