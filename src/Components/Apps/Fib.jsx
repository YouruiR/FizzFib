import React, { useState } from "react";
import { runFib } from "../../HelperFunctions/helperFunctions";
import styles from './fib.module.css'
export const Fib = () => {
    const [number, setNumber] = useState(null);
    const [displayValues, setDisplayValues] = useState([]);
    const [yInput, setYInput] = useState(1);
    const [zInput, setZInput] = useState(2);


    const onClickRun = (e) => {
        e.preventDefault();
        const values = runFib(number, yInput, zInput);
        setDisplayValues(values);
    }

    const onChangeNumber = (e, setState, defaultValue) => {
        const input = e.target.value;
        if (input === '') {
            setState(defaultValue);
        } else if (!isNaN(input)) {
            setState(input)
        } else {
            console.log('invalid input')
        }
    }

    return (
        <div className={styles.appContainer}>
            <h1>Fibonacci</h1>
            <h2>Fibonacci(x) = Fibonacci(x - y) + Fibonacci(x - z)</h2>
            <form>
                <h3>Change y and z</h3>
                <div id='input-container'>
                    <div>
                        <label> 
                            y: 
                        </label>
                        <input name='yInput' placeholder="Default: 1" onChange={(e) => onChangeNumber(e, setYInput, 1)}></input>
                    </div>
                    <div>
                        <label>
                            z: 
                        </label>
                        <input name='zInput' placeholder="Default: 2" onChange={(e) => onChangeNumber(e, setZInput, 2)}></input>
                    </div>
                </div>
            </form>
            <form onSubmit={onClickRun}>
                <label>
                    Fibonacci of: <input name='numberInput' placeholder={'Enter a value'} onChange={(e) => onChangeNumber(e, setNumber, 4)}></input>
                    <button type='submit'>Run</button>
                </label>
            </form>
            <div className={styles.displayContainer}>
                <ul>
                    {displayValues.map((value, index) => {
                        return (
                        <li key={index} className={styles.displayValues}>
                            {value}
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}