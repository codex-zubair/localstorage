import React from 'react';

const TodoList = ({item}) => {

    const {name , price} = item;

    return (
        <div>
           <span>{name} </span>
           <span>{price}</span>
        </div>
    );
};

export default TodoList;