const PricingCard = ({ name, cost, duration, description }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col justify-between min-h-[350px] min-w-[280px] w-full">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-xl font-semibold text-gray-400">{duration}</p>
      <h2 className="text-3xl lg:text-5xl font-bold">{cost}</h2>
      <p className="text-md font-semibold text-gray-600">{description}</p>
    </div>
  );
};
export default PricingCard;
