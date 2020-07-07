import React from 'react';

const SideNav = props => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;
    return (
        <div className="mt-5">
            <ul className="list-group">
                {
                    items.map(item => (
                        <li 
                            onClick={() => onItemSelect(item)} 
                            key={item[valueProperty]}
                            className='list-group-item'
                        >
                            <a href="#" 
                                className={item === selectedItem ? 'list-group-item list-group-item-action list-group-item-primary active' : 'list-group-item list-group-item-action list-group-item-primary'}
                            >
                                { item[textProperty] }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

SideNav.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default SideNav;