import './CreateCollection.css'
import React, {useState} from 'react';
import FormActions from '../UI/FormActions';
import InputValidationPanel from '../UI/InputValidationPanel';

const CreateCollection = (props) => {

    const [collectionName, setCollectionName] = useState('');
    const [showError, setShowError] = useState(false);

    const collectionNameChangeHandler = (event) => {
        setCollectionName(event.target.value);
    };

    const summitHandler = () => {
        if (collectionName) {
            props.onSummit(collectionName);
        } else {
            setShowError(true);
        }
    }

    return (
        <div>
            <InputValidationPanel showError={showError} invalid={!collectionName}>
                <label className='collection__label'>collection name</label>
                <input value={collectionName} onChange={collectionNameChangeHandler} type='text'/>
            </InputValidationPanel>
            <div>
                <FormActions resetVisible='false' onSummit={summitHandler} summitLabel='create collection'/>
            </div>
        </div>
    );
}

export default CreateCollection;