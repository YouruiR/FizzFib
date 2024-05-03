import React, { useState } from "react"
import { runFib, runFizzBuzzList } from "../../HelperFunctions/helperFunctions"
import styles from './fizzfib.module.css'

export const FizzFib = () => {
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
    const [unfizzed, setUnfizzed] = useState([]);
    const [number, setNumber] = useState(null);
    const [displayValues, setDisplayValues] = useState([]);
    const [yInput, setYInput] = useState(1);
    const [zInput, setZInput] = useState(2);
    const [divisorInput, setDivisorInput] = useState(null);
    const [outputInput, setOutputInput] = useState('');
    const onChangeText = (e, setState) => {
        const input = e.target.value;
        setState(input);
    }

    const onClickRun = (e) => {
        e.preventDefault();
        const values = runFib(number, yInput, zInput);
        setUnfizzed(values);
        const fizzedValues = runFizzBuzzList(rules, values)
        setDisplayValues(fizzedValues);
    }

    const onClickDeleteRule = (e, index) => {
        e.preventDefault();
        const newRules = structuredClone(rules);
        newRules.splice(index, 1)
        setRules(newRules);
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
        <div>
            <h1>FizzFib</h1>
            <h2>Fibonacci(x) = Fibonacci(x - y) + Fibonacci(x - z)</h2>
            <div id='rules'>
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
            </div>
            <form>
                Change y and z
                <label> 
                    y: <input name='yInput' placeholder="Default: 1" onChange={(e) => onChangeNumber(e, setYInput, 1)}></input>
                </label>
                <label>
                    z: <input name='zInput' placeholder="Default: 2" onChange={(e) => onChangeNumber(e, setZInput, 2)}></input>
                </label>
            </form>
            <form onSubmit={onClickRun}>
                <label>
                    FizzFib of: <input name='numberInput' placeholder={'Enter a value'} onChange={(e) => onChangeNumber(e, setNumber, 4)}></input>
                    <button type='submit'>Run</button>
                </label>
            </form>
            <div className={styles.lists}>
                <div className={styles.displayContainer}>
                    <h5>UnFizzed</h5>
                    <ul title='UnFizzed Values'>
                        {unfizzed.map((value, index) => {
                            return (
                            <li key={index}>
                                {value}
                            </li>
                            )
                        })}
                    </ul> 
                </div>
                <div className={styles.displayContainer}>
                    <h5>Fizzed</h5>
                    <ul>
                        {displayValues.map((value, index) => {
                            return (
                            <li key={index}>
                                {value}
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}