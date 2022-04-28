import classes from './Button.module.css';

const Button = props => {
    const ButtonDisabled = props.disabled
    return( 
        <>
            {!ButtonDisabled ? 
                <button 
                    type={props.type} 
                    className={classes.button} 
                    disabled
                >
                    {props.children}
                </button> :
                <button 
                    type={props.type} 
                    className={classes.button} 
                >
                    {props.children}
                </button>
            }
        </>
    )
}

export default Button;