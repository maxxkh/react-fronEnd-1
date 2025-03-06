import { colors } from "@mui/material"
export default function BasicButton(props) {
    return (
        <button
            onClick={props.handleClick}
            className={`
                px-10 
                py-2
                font-semibold
                border-2 
                border-[#e7107e] 
                ${props.filled ? 'bg-[#e90e7f] text-white' : 'bg-transparent text-[#e90e7f]'}
                hover:bg-[#e90e7f] 
                hover:text-white 
                font-semibold
                transition-colors 
                min-w-40
                duration-300
                rounded-3xl
            `}
        >
            {props.ButtonText}
        </button>
    );
}