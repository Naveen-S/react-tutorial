import React, { useState, useEffect } from 'react';

export default ({
    filterTodos
}) => {

    const [ search, setSearch ] = useState('');

    useEffect(() => {
        // calls here
        // console.log("use effect", search);

        filterTodos(search);


    }, [search]);

    useEffect(() => {
        // calls here
        // console.log("use effect", search);
        console.log("first");

    }, []);

    return <div>
        <input type="text" className="todo-area border-bottom wt-100" placeholder="Search todo..." value={search} onChange={(e) => setSearch(e.target.value) } /> 
    </div>
}