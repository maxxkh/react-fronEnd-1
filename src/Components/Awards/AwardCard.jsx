export default function AwardCard({ img }) {
    return (
        <img 
            src={img} 
            alt="Award" 
            className="w-full h-full object-contain"
        />
    );
}
