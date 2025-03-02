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
            color: `white`,
            textShadow: `2px 2px 2px #e7107e`,
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