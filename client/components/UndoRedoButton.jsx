import React from 'react';

function UndoRedo({ name, perform, isDisabled }) {
    return (
      <span style={ { paddingLeft : '10px' } }>
        <button onClick={ perform } disabled={ isDisabled }> {name} </button>
      </span>
    );
}

export default UndoRedo;
