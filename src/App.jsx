import './App.css'
import {useState} from "react";
import strawberry from "./assets/strawberry.png"
import banana from "./assets/banana.png"
import apple from "./assets/apple.png"
import kiwi from "./assets/kiwi.png"
import Fruit from "./components/Fruit.jsx";

function App() {
    const [counter, setCounter] = useState({Aardbei: 0, Banaan: 0, Appel: 0, Kiwi: 0})

    const handleClick = (fruit, action) => {

        setCounter((prevState) => {
                return {
                    ...prevState,

                    [fruit]: action === 'up'
                        ? counter[fruit] + 1 : counter[fruit] - 1
                }
            }
        )
    }

    function handleReset(prevState) {

        return (
            prevState(0)
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState.firstname, formState.lastname, formState.age, formState.zip, counter)
    }

    const [formState, setFormState] = useState({
        firstname: '', lastname: '', age: '', zip: '', delivery: '', time: 'daytime', remarks: '', agree: false,

    })

    function handleChange(e) {
        const changeFieldName = e.target.name;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState(
            {
                ...formState, [changeFieldName]: newValue
            }
        )
    }

    return (
        <>
            <div>
                <h1>Fruitmand bezorgservice</h1>


                <Fruit
                src={strawberry}
                alt='foto van Aardbei'
                fruitName='Aardbei'
                counter='counter.Aardbei'
                clickOne={()=> handleClick('Aardbei', 'down')}
                clickTwo={()=> handleClick('Aardbei', 'up')}

                />

                {/*<article><img src={strawberry} alt="foto van aardbei"/><span><strong>Aardbeien</strong></span>*/}
                {/*    <button type='button' disabled={counter.Aardbei === 0}*/}
                {/*            onClick={() => handleClick('Aardbei', 'down')}>-*/}
                {/*    </button>*/}
                {/*    {counter.Aardbei}*/}
                {/*    <button type='button' onClick={() => handleClick('Aardbei', 'up')}>+</button>*/}
                {/*</article>*/}


                <article><img src={banana} alt="foto van banaan"/><span><strong>Bananen</strong></span>
                    <button type='button' disabled={counter.Banaan === 0}
                            onClick={() => handleClick('Banaan', 'down')}>-
                    </button>
                    {counter.Banaan}
                    <button type='button' onClick={() => handleClick('Banaan', 'up')}>+</button>
                </article>

                <article><img src={apple} alt="foto van Appels"/><span><strong>Appels</strong></span>
                    <button type='button' disabled={counter.Appel === 0} onClick={() => handleClick('Appel', 'down')}>-
                    </button>
                    {counter.Appel}
                    <button type='button' onClick={() => handleClick('Appel', 'up')}>+</button>
                </article>

                <article><img src={kiwi} alt="foto van Kiwi's"/><span><strong>Kiwi's</strong></span>
                    <button type='button' disabled={counter.Kiwi === 0} onClick={() => handleClick('Kiwi', 'down')}>-
                    </button>
                    {counter.Kiwi}
                    <button type='button' onClick={() => handleClick('Kiwi', 'up')}>+</button>
                </article>

                <button className='resetbutton' type='button' onClick={() => handleReset(setCounter)}>Reset
                </button>

            </div>


            <div className='formulier'>
                <form onSubmit={handleSubmit}>


                    <label htmlFor='fn'>Voornaam
                        <input id='fn' type="text" name='firstname' value={formState.firstname}
                               onChange={handleChange}/></label>

                    <label htmlFor='ln'>Achternaam
                        <input id='ln' type="text" name='lastname' value={formState.lastname}
                               onChange={handleChange}/></label>

                    <label htmlFor='age'>Leeftijd
                        <input id='age' type="number" name='age' value={formState.age}
                               onChange={handleChange}/></label>

                    <label htmlFor='zip'>Postcode
                        <input id='zip' type="text" name='zipcode' value={formState.zip}
                               onChange={handleChange}/></label>

                    <p>Bezorgfrequentie</p>
                    <br/>
                    <select name="delivery" value={formState.delivery}   onChange={handleChange}>
                        <option value='Iedere week'>Iedere week</option>
                        <option value='Om de week'>Om de week</option>
                        <option value='Iedere maand'>Iedere maand</option>
                    </select>

                    <br/>
                    <input id='daytime' type="radio" name='time' value='daytime' checked={formState.time=== "daytime"}
                           onChange={handleChange}/>
                    <label htmlFor='daytime'>Overdag</label>

                    <input id='evening' type="radio" name='time' value='evening' checked={formState.time === 'evening'}
                           onChange={handleChange}/>
                    <label htmlFor='evening'>'s Avonds</label>

                    <br/>

                    <p>Opmerkingen</p>
                    <textarea name="remarks" id="remarks" cols="50" rows="10" value={formState.remarks}
                              onChange={handleChange}></textarea>

                    <input id='agree' type="checkbox" name='agree' value={formState.agree}
                           onChange={handleChange}/>
                    <label id="agree">Ik ga akkoord met de voorwaarden</label>
                    <br/>
                    <br/>
                    <button>Verzenden</button>

                </form>


            </div>
        </>
    )
}

export default App
