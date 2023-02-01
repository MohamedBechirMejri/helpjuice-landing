import { motion } from "framer-motion";
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
      <motion.ul
        className="ml-7 border-l border-l-[#FFC0CB] origin-top"
        initial={{
          height: activeTab.title === item.title ? "max-content" : 0,
          scaleY: activeTab.title === item.title ? 1 : 0,
          opacity: activeTab.title === item.title ? 1 : 0,
        }}
        animate={{
          height: activeTab.title === item.title ? "max-content" : 0,
          scaleY: activeTab.title === item.title ? 1 : 0,
          opacity: activeTab.title === item.title ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {item.items.map((item: any, i: number) => (
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
      </motion.ul>
    </div>
  );
};

export default ListItem;
