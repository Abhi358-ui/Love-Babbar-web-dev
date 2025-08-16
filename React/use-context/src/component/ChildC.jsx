
import React, { useContext } from 'react'
// import { userContext } from '../App'
import { themeContext } from '../App';

const ChildC = () => {
    // let user = useContext(userContext);
    let {Theme,setTheme} = useContext(themeContext);

    function handleClick(){
        if(Theme === 'light')
        {
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

    return (
        <div>
          <button onClick={handleClick}>
            Clicked
          </button>
        </div>
    )
}

export default ChildC