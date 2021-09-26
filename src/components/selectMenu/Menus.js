import './Menus.css'
import Menu from './Menu';
import React, {useState} from 'react';

const Menus = (props) => {

    const [isShowMenu, setShowMenu] = useState(false)
    const [menuChoose, setMenu] = useState('')

    const showCreateCollectionHandler = (props) => {
        setShowMenu(true);
        setMenu('create')
    }

    const showCollectionHandler = (props) => {
        setShowMenu(true);
        setMenu('show')
    }

    const resetHandler = () => {
        setShowMenu(false);
        setMenu('')
    }

    return (
        <div>
            <div className="menus">
                <div className="menus__div">
                    <button onClick={showCreateCollectionHandler}>Create collection</button>
                </div>
                <div className="menus__div">
                    <button onClick={showCollectionHandler}>Collections</button>
                </div>
            </div>
            {isShowMenu && <Menu onReset={resetHandler} type={menuChoose}/>}
        </div>
    )
};

export default Menus;