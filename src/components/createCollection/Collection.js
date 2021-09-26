import './Collection.css'
import CreateCollection from './CreateCollection';
import Scenarios from '../createScenarios/Scenarios';
import React, {useState} from 'react';

const Collection = (props) => {

    const [collectionName, setCollectionName] =  useState('');

    const summitHandler = (name) => {
        setCollectionName(name);
    }

    return (
        <div className='collection'>
            {!collectionName && <CreateCollection onSummit={summitHandler}/>}
            {collectionName && <Scenarios collectionName={collectionName}/>}
        </div>
    );
};

export default Collection;