import badge from "./assets/badge.svg";

const SubListItem = ({
  item,
  activeItem,
  setActiveItem,
}: {
  item: {
    title: string;
    isSpicy: boolean;
  };
  activeItem: any;
  setActiveItem: any;
}) => {
  return (
    <li className="py-2 text-sm flex items-center">
      <span className="w-3 h-[1px] bg-[#FFC0CB]" />
      <h5
        className={
          "pl-2 font-medium cursor-pointer text-white text-opacity-70 hover:text-opacity-100 " +
          (activeItem.title === item.title
            ? "text-[#FFC0CB] text-opacity-100"
            : "")
        }
        onClick={() => setActiveItem(item)}
      >
        {item.title}
      </h5>
      {item.isSpicy && (
        <img src={badge} alt="Spicy AF" className="ml-2 w-[5rem]" />
      )}
    </li>
  );
};

export default SubListItem;
