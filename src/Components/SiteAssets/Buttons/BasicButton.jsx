export default function BasicButton(props) {
    let styles = {}
    if(props.filled){
        styles={
            backgroundColor: '#e7107e',
        }
    }
    else{
        styles ={
            border:'2px solid #e7107e',
            color: `${props.color}`
        }
    }


    return(
        <button 
                onClick={props.handleClick} 
                className="PrimaryButton"
                style={styles}>

                    
            {props.ButtonText}
        </button>
    )
}