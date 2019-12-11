import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) { //classes = [red]
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){ //classes = [red, bold]
        assignedClasses.push(classes.bold);
    }
    //use join in the className in order to convert an array to a string

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            alt={props.showPersons}
            onClick={() => props.togglePersonsHandler()}>Switch Name
            </button>
            {/* better to use binding */}
        </div>
    );
}

export default cockpit;