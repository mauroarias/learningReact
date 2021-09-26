import './CreateCollection.css'
import React, {useState} from 'react';
import FormActions from '../UI/FormActions';

const CreateCollection = (props) => {

    const [collectionName, setCollectionName] = useState('');

    const collectionNameChangeHandler = (event) => {
        setCollectionName(event.target.value);
    };

    const summitHandler = () => {
        if (collectionName) {
            props.onSummit(collectionName);
        }
    }

    return (
        <div>
            <div>
                <div className='.collection__label'>
                    <label className='collection__label'>collection name</label>
                </div>
                <div className='collection__input'>
                    <input value={collectionName} onChange={collectionNameChangeHandler} type='text'/>
                </div>
            </div>
            <div>
                <FormActions resetVisible='false' onSummit={summitHandler} summitLabel='create collection'/>
            </div>
        </div>
    );
}

export default CreateCollection;