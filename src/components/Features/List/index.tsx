import preview from "./assets/preview.svg";
import { useState } from "react";
import ListItem from "./ListItem";

// this data is just for demo purposes, real data will be fetched from a json file

const image = preview;
const description =
  "Build your teams playbooks, standard operating procedures, and FAQs with up to date aritcles in minutes without much effort. ";
const quote =
  "“In total, Helpjuice is the best option to spread knowledge in the company or within the customers in a user-friendly way which in the end saves time for your business and the readers.”";
const quoteAuthor = "Emil Hajric -- CEO, Helpjuice";

const item = { description, quote, image, quoteAuthor };

const items = [
  { ...item, title: "Simple, Full-Featured, Fast.", isSpicy: false },
  { ...item, title: "Wysiwyg & Markdown Support", isSpicy: false },
  { ...item, title: "Attach & Link To Files", isSpicy: false },
  { ...item, title: "Commmenting", isSpicy: false },
  { ...item, title: "Article Planner", isSpicy: true },
  { ...item, title: "Private & Internal Sections", isSpicy: false },
  { ...item, title: "Tabs & Accordians", isSpicy: false },
  { ...item, title: "Table Of Contents", isSpicy: false },
  { ...item, title: "Related articles", isSpicy: false },
];

const nav = [
  { items, title: "Editor / Authoring", icon: "✍" },
  { items, title: "Analytics", icon: "📈" },
  { items, title: "Branding / Customization", icon: "🎨" },
  { items, title: "Localization", icon: "🌎" },
  { items, title: "Knowledge Management", icon: "✨" },
  { items, title: "Editor / Authoring ", icon: "🔗" },
];

const List = () => {
  const [activeTab, setActiveTab] = useState(nav[0]);
  const [activeItem, setActiveItem] = useState(nav[0].items[0]);

  return (
    <div className="lg:grid lg:grid-cols-[auto,1fr] lg:grid-rows-[auto,1fr] py-8 flex flex-col items-start gap-4 lg:gap-0">
      <h3 className="col-span-2 text-sm">FEATURES</h3>
      <nav className="h-full border-l border-l-[#47F09F] mt-4">
        {nav.map(item => (
          <ListItem
            key={item.title}
            item={item}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </nav>
      <div className="max-w-[min(40rem,95vw)] lg:ml-24 flex flex-col gap-4 text-[#6CE9A6]">
        <img src={activeItem.image} alt="preview" className="" />
        <h4 className="font-medium text-white">{activeItem.title}</h4>
        <p className="text-sm text-white text-opacity-70">
          {activeItem.description}
        </p>
        <hr className="w-24 border-[#6CE9A6]" />
        <p className="text-sm">{activeItem.quote}</p>
        <p className="text-sm">{activeItem.quoteAuthor}</p>
      </div>
    </div>
  );
};

export default List;
