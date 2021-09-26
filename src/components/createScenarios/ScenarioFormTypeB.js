import './ScenarioFormTypeB.css'
import CommonScenarioForm from './CommonScenarioForm'
import FormActions from '../UI/FormActions'
import React, {useState} from 'react'

const ScenarioFormTypeB = (props) => {

    const [perso, setPerso] = useState({});
    const [data, setData] = useState({});

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
            const clone = {...data, perso: JSON.stringify(perso)};
            props.onSummit(clone);
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
                <CommonScenarioForm onChangeData={changeDataHander} type='Adding scenario Type B'/>
            </div>
            <div>
                <div>
                    <div className='scenario__label'>
                        <label>personalization A</label>
                    </div>
                    <div className='scenario__input'>
                        <input onChange={personalizationAChangeHandler} type='text'/>
                    </div>
                </div>
                <div>
                    <div className='scenario__label'>
                        <label>personalization B</label>
                    </div>
                    <div className='scenario__input'>
                        <input onChange={personalizationBChangeHandler}  className='scenario__input_small' type='number' min='0.01' step='0.01'/>
                    </div>
                </div>                
            </div>
            <div>
                <FormActions onReset={resetHandler} resetLabel='cancel' onSummit={summitHandler} summitLabel='summit scenario'/>
            </div>
        </div>
    )
}

export default ScenarioFormTypeB;