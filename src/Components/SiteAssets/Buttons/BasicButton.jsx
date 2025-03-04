import { colors } from "@mui/material"
export default function BasicButton(props) {
    return (
        <button
            onClick={props.handleClick}
            className={`
                px-4 py-2 
                border-2 
                border-[#e7107e] 
                ${props.filled ? 'bg-[#e90e7f] text-white' : 'bg-transparent text-[#e90e7f]'}
                hover:bg-[#e90e7f] 
                hover:text-white 
                font-semibold
                transition-colors 
                duration-300
                rounded-3xl
            `}
        >
            {props.ButtonText}
        </button>
    );
}