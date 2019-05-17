import {useState} from 'react';
// This will be used to generate uuid strings (keys)
const uuidv1 = require('uuid/v1');

/*
    State Manager for managing a list of "Players" (Player Objects)
*/
export default (initialValue) => {
    const [values, setValues] = useState(initialValue);
    
    // Update an existing player
    const editItem = (obj) => {
        // Shallow copy the player
        let updatedPlayer = {...obj};
        // Filter out existing player - and make a new array in the process
        let newPlayers = values.filter(el => el.id !== obj.id);
        // Add the edited player
        newPlayers.push(updatedPlayer);
        // Re-sort the entire array (Insertion sort would be good here)
        let sorted = newPlayers.sort(comparator);
        setValues(sorted);
    };

    // Add new player - Generate unique .id
    const addItem = (obj) => {
        let newPlayer = {...obj, id: uuidv1()};
        let newPlayers = [...values, newPlayer];
        let sorted = newPlayers.sort(comparator);
        setValues(sorted);
    }

    // Delete existing player - Find/Delete by .id
    const deleteItemById = (id) => {
        setValues( values.filter(el => el.id !== id) );
    };

    // Sorts player objects
    // Sorts players from lowest score to highest (ascending order)
    // If two players have the same score, then they are sorted by their
    // last name, also in Ascending (a first, z last) (case-insensitive)
    const comparator = (a, b) => {
        // If scores matches, check last_names
        if (a.score == b.score) {
            // Case Insensitive
            let a_ln = a.last_name.toLowerCase();
            let b_ln = b.last_name.toLowerCase();
            if (a_ln === b_ln) { return 0; } 
            return (a_ln < b_ln) ? -1 : 1;
        }   
        // Compare scores
        return (a.score - b.score);
    };

    const sort = () => {
        let sorted = values.sort(comparator);
        setValues([...sorted]);
    };

    /*
        The Public Interface:
        [0] = The list of players
        [1] = A function to add a new player
        [2] = A function to delete a player
        [3] = A function to edit/update an existing player
        [4] = A function to force the sorting of the players list
    */
    return [values, addItem, deleteItemById, editItem, sort];
};