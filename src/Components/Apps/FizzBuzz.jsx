import React, { useState } from "react";
import styles from './fizzbuzz.module.css'
import { runFizzBuzz } from "../../HelperFunctions/helperFunctions";

export const FizzBuzz = () => {
    const [rules, setRules] = useState([
        {
            divisor: 3,
            output: 'fizz',
        },
        {
            divisor: 5,
            output: 'buzz'
        }
    ])
    const [number, setNumber] = useState(10);
    const [displayValues, setDisplayValues] = useState([]);
    const [divisorInput, setDivisorInput] = useState(null);
    const [outputInput, setOutputInput] = useState('');

    const onClickRun = (e) => {
        e.preventDefault();
        const values = runFizzBuzz(rules, number)
        setDisplayValues(values);
    }

    const onChangeNumber = (e, setState) => {
        const input = e.target.value;
        if (!isNaN(input)) {
            setState(input)
        } else {
            console.log('invalid input')
        }
    }

    const onClickDeleteRule = (e, index) => {
        e.preventDefault();
        const newRules = structuredClone(rules);
        newRules.splice(index, 1)
        setRules(newRules);
    }

    const onChangeText = (e, setState) => {
        const input = e.target.value;
        setState(input);
    }

    const onClickAddRule = (e) => {
        e.preventDefault();
        const newRules = structuredClone(rules);
        newRules.push({
            divisor: divisorInput,
            output: outputInput,
        })
        setRules(newRules);
    }

    return (
        <div className={`${styles.appContainer}`}>
            <h1>FizzBuzz</h1>
            <div id='rules'>
                <h3>Rules</h3>
                <div id='table-container'>
                    <table>
                        <tr>
                            <th>Divisor</th>
                            <th>Output</th>
                            <th></th>
                        </tr>
                        {rules.map((rule, index) => {
                            return (
                                <tr key={index}>
                                    <td>{rule.divisor}</td>
                                    <td>{rule.output}</td>
                                    <td><button onClick={(e) => onClickDeleteRule(e, index)}>Delete rule</button></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <div className='form-container'>
                <form onSubmit={onClickAddRule}>
                    <h3>Add New Rule</h3> 
                    <label> 
                        Divisor: <input name='divisorInput' placeholder="Dividing number" onChange={(e) => onChangeNumber(e, setDivisorInput)}></input>
                    </label>
                    <label>
                        Output: <input name='outputInput' placeholder="Desired text" onChange={(e) => onChangeText(e, setOutputInput)}></input>
                    </label>
                    <button type='submit'>Add new rule</button>
                </form>
                <form onSubmit={onClickRun}>
                    <label>
                        FizzBuzz up to: <input name='numberInput' placeholder={'Enter a value'} onChange={(e) => onChangeNumber(e, setNumber)}></input>
                        <button type='submit'>Run</button>
                    </label>
                </form>
            </div>
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