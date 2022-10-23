import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props =>{
    const [isformValid, SetIsFormValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5){
            SetIsFormValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
                id:'amount_'+ props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue: '1'
                }}/>
        <button>+ Add</button>
        {!isformValid && <p>Please enter correct value. Max is 5.</p>}
    </form>
};

export default MealItemForm;