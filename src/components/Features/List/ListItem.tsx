import menu from "./assets/menu.svg";
import SubListItem from "./SubListItem";

const ListItem = ({
  item,
  setActiveTab,
  activeTab,
  activeItem,
  setActiveItem,
}: {
  item: any;
  setActiveTab: any;
  activeTab: any;
  activeItem: any;
  setActiveItem: any;
}) => {
  return (
    <div>
      <div className="flex items-center py-2 text-sm">
        <span
          className="w-3 h-[1px] "
          style={{
            background: activeTab.title === item.title ? "#47F09F" : "",
          }}
        />
        <span className="pl-2">{item.icon}</span>
        <h4
          className={
            "pl-2 font-medium cursor-pointer text-white " +
            (activeTab.title === item.title
              ? "text-[#47F09F]"
              : "hover:text-opacity-70")
          }
          onClick={() => {
            if (activeTab.title === item.title) return;
            setActiveTab(item);
            setActiveItem(item.items[0]);
          }}
        >
          {item.title}
        </h4>
      </div>
      <ul
        className="ml-7 border-l border-l-[#FFC0CB] "
        style={{ display: activeTab.title === item.title ? "block" : "none" }}
      >
        {item.items.map((item: any) => (
          <SubListItem
            key={item.title}
            item={item}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
        <button className=" mt-2 ml-4">
          <img src={menu} alt="menu" className="w-10" />
        </button>
      </ul>
    </div>
  );
};

export default ListItem;
