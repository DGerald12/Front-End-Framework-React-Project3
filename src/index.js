import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    const favoriteCars = [
        {name: "Honda CR=V " }, 
        {name: "Toyota Highlander" }, 
        {name: "Ford F-150" }, 
        {name: "BMW X3" }, 
        {name: "Subaru Crosstrek" },
        {name: "Lincoln Navigator" }
    ];

    return <List favoriteCars={favoriteCars} />;
};

const List = props => {
    const listFavoriteCars = props.favoriteCars.map((item, index) => (
        <li key={index}>
            {item.name}
        </li>
    ));
    return <ul>{listFavoriteCars}</ul>;
};
ReactDOM.render(<App />, document.getElementById('root'));
