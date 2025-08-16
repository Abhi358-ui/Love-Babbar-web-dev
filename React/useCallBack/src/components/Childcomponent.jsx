import React from 'react'
// React.memo laga dene se wo hr baar render nhi hota jab tak ki props change na ho jate
// agr aap props me function bhejte ha to react.memo render hone se bacha nhi pata ha


const Childcomponent = React.memo(
    (props) => {

        console.log("child component re-renders");

        return (
            <div>

                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>

            </div>
        )
    }
);

export default Childcomponent