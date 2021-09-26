import React, {useState} from "react";
import './CreateScenario.css'
import ScenarioFromTypeA from './ScenarioFormTypeA'
import ScenarioFromTypeB from './ScenarioFormTypeB'
import FormActions from "../UI/FormActions";


const CreateScenario = (props) => {

    const cancelingScenarion = () => {
        props.onReset();
    }

    const summitingScenario = (data) => {
        props.onSummit(data)
    }

    const scenariosType = [
        {
            type: 'typeA', 
            form: <ScenarioFromTypeA onSummit={summitingScenario} onReset={cancelingScenarion}/>
        },
        {
            type: 'typeB', 
            form: <ScenarioFromTypeB onSummit={summitingScenario} onReset={cancelingScenarion}/>
        }]

    const [scenarioType, setScenarioType] = useState(scenariosType[0].type);
    const [isSelected, setEditingMode] = useState(true);

    const editingScerarioHanlder = () => {
        setEditingMode(false)
    };

    const changingSsenarionType = (event) => {
        setScenarioType(event.target.value);
    };

    return (
        <div>
            <div>
                {isSelected && 
                    (<div>
                        <div>
                            <div className='create_scenarios__label'>
                                <label>Scenario type</label>
                            </div>
                            <div className='create_scenarios__input'>
                                <select onChange={changingSsenarionType}>
                                    {scenariosType.map((scenarioType) => (<option>{scenarioType.type}</option>))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <FormActions resetVisible='false' onSummit={editingScerarioHanlder} summitLabel='create new scenario'/>
                        </div>
                    </div>)}
                {!isSelected && scenariosType.filter((scenario) => scenarioType == scenario.type).map((scenario) => scenario.form)}
            </div>
        </div>
    );
}

export default CreateScenario;