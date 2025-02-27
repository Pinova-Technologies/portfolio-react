
import cardData from '../data/smallcard.json'; // Import the JSON data

const SmallCards = () => {
  return (
<div className="flex justify-center gap-4 bg-[#292929] p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="inline-flex w-[146px] h-[51px] px-[14px] py-[9px] items-center gap-[15px] bg-[#7A7A7A] rounded-lg shadow-md"
        >
          <img src={card.icon} alt={card.name} className="w-6 h-6" />
          <span className="text-white font-medium">{card.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SmallCards;