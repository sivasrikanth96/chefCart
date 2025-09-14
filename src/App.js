import React, { useState } from "react";
import "./App.css";

const tabsList = [
  { tabId: 1, tabName: "Starter" }, { tabId: 2, tabName: "Main Course" }, { tabId: 3, tabName: "Dessert" }, { tabId: 4, tabName: "Sides" }
]

// Sample Dishes
const dishes = [
  {
    id: 1,
    tabId: 2,
    name: "Tandoori Chicken",
    cuisine: "North Indian",
    description:
      "Tandoori chicken is a dish made from chicken marinated with spices and yogurt.",
    image:
      "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Cauliflower", qty: "1 Pc" },
      { name: "Mustard oil", qty: "1/2 litres" },
      { name: "Tomato", qty: "1 Pc" },
    ],
  },
  {
    id: 2,
    tabId: 2,
    name: "Dal Makhni",
    cuisine: "North Indian",
    description:
      "Dal makhni is an Indian dish originating from the Punjab region.",
    image:
      "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Urad Dal", qty: "200g" },
      { name: "Butter", qty: "50g" },
    ],
  },
  {
    id: 3,
    name: "Cabbage",
    tabId: 2,
    cuisine: "North Indian",
    description: "Cabbage, comprising several cultivars of Brassica oleracea.",
    image:
      "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Cabbage", qty: "1 Pc" },
      { name: "Salt", qty: "1 tsp" },
    ],
  },
  {
    id: 4,
    name: "Kadhai Paneer",
    tabId: 2,
    cuisine: "North Indian",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://res.cloudinary.com/dzbm1waqm/image/upload/v1757857160/kadai_panner_fymmet.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    id: 5,
    name: "Gulab Jamun",
    tabId: 3,
    cuisine: "Indian",
    description:
      "Soft deep-fried milk solids soaked in sugar syrup flavored with cardamom and rose water.",
    image:
      "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", qty: "200g" },
      { name: "Sugar", qty: "2 cups" },
      { name: "Cardamom", qty: "1 tsp" },
      { name: "Rose Water", qty: "1 tsp" },
    ],
  },
  {
    id: 6,
    name: "Rasgulla",
    tabId: 3,
    cuisine: "Bengali",
    description:
      "Spongy white cheese balls soaked in light sugar syrup.",
    image:
      "https://res.cloudinary.com/dzbm1waqm/image/upload/v1757860730/rasagulla_zix7wk.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Chenna (Paneer)", qty: "250g" },
      { name: "Sugar", qty: "2 cups" },
      { name: "Water", qty: "5 cups" },
    ],
  },
  {
    id: 7,
    name: "Gajar Ka Halwa",
    tabId: 3,
    cuisine: "North Indian",
    description:
      "A rich carrot-based dessert made with milk, sugar, and ghee, garnished with nuts.",
    image:
      "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Carrots", qty: "500g" },
      { name: "Milk", qty: "1 litre" },
      { name: "Sugar", qty: "1 cup" },
      { name: "Ghee", qty: "3 tbsp" },
      { name: "Cashews", qty: "10 pcs" },
    ],
  },
  {
    id: 8,
    name: "Chocolate Brownie",
    tabId: 3,
    cuisine: "Western",
    description:
      "Fudgy chocolate dessert with a crisp top and gooey center.",
    image:
      "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Dark Chocolate", qty: "200g" },
      { name: "Butter", qty: "100g" },
      { name: "Flour", qty: "100g" },
      { name: "Sugar", qty: "150g" },
      { name: "Eggs", qty: "2 pcs" },
    ],
  },
  {
    id: 9,
    name: "Cheesecake",
    tabId: 3,
    cuisine: "Western",
    description:
      "Rich and creamy dessert with a biscuit base and smooth cream cheese filling.",
    image:
      "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Cream Cheese", qty: "250g" },
      { name: "Sugar", qty: "100g" },
      { name: "Eggs", qty: "2 pcs" },
      { name: "Digestive Biscuits", qty: "150g" },
      { name: "Butter", qty: "50g" },
    ],
  },
  {
    id: 10,
    name: "Paneer Tikka",
    tabId: 1,
    cuisine: "North Indian",
    description:
      "Cubes of paneer marinated in yogurt and spices, grilled to perfection.",
    image:
      "https://www.themealdb.com/images/media/meals/hqaejl1695738910.jpg",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", qty: "200g" },
      { name: "Yogurt", qty: "1/2 cup" },
      { name: "Red Chili Powder", qty: "1 tsp" },
      { name: "Capsicum", qty: "1 large" },
      { name: "Onion", qty: "1 large" },
    ],
  },
  {
    id: 11,
    name: "Chicken Tikka",
    tabId: 1,
    cuisine: "North Indian",
    description:
      "Chunks of chicken marinated in spices and yogurt, cooked in a tandoor.",
    image:
      "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", qty: "250g" },
      { name: "Yogurt", qty: "1/2 cup" },
      { name: "Ginger Garlic Paste", qty: "1 tbsp" },
      { name: "Red Chili Powder", qty: "1 tsp" },
      { name: "Lemon Juice", qty: "1 tbsp" },
    ],
  },
  {
    id: 12,
    name: "Hara Bhara Kabab",
    tabId: 1,
    cuisine: "North Indian",
    description:
      "Vegetarian kababs made with spinach, peas, and potatoes, shallow fried until crisp.",
    image:
      "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Spinach", qty: "100g" },
      { name: "Green Peas", qty: "50g" },
      { name: "Potato", qty: "2 pcs" },
      { name: "Green Chili", qty: "2 pcs" },
      { name: "Breadcrumbs", qty: "1/2 cup" },
    ],
  },
  {
    id: 13,
    name: "Fish Amritsari",
    tabId: 1,
    cuisine: "Punjabi",
    description:
      "Deep fried batter-coated fish fillets, seasoned with Indian spices.",
    image:
      "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish Fillets", qty: "200g" },
      { name: "Gram Flour", qty: "1/2 cup" },
      { name: "Carom Seeds", qty: "1/2 tsp" },
      { name: "Red Chili Powder", qty: "1 tsp" },
      { name: "Lemon Juice", qty: "1 tbsp" },
    ],
  },
  {
    id: 14,
    name: "Spring Rolls",
    tabId: 1,
    cuisine: "Indo-Chinese",
    description:
      "Crispy fried rolls stuffed with a mixture of vegetables and noodles.",
    image:
      "https://www.themealdb.com/images/media/meals/20p79y1560461687.jpg",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Cabbage", qty: "1/2 cup" },
      { name: "Carrot", qty: "1/2 cup" },
      { name: "Noodles", qty: "1/2 cup" },
      { name: "Spring Roll Sheets", qty: "10 pcs" },
      { name: "Soy Sauce", qty: "1 tbsp" },
    ],
  },
  {
    id: 15,
    name: "Naan",
    tabId: 4,
    cuisine: "North Indian",
    description:
      "Soft and fluffy Indian flatbread baked in a tandoor, served with curries.",
    image:
      "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "All-purpose Flour", qty: "2 cups" },
      { name: "Yogurt", qty: "1/2 cup" },
      { name: "Yeast", qty: "1 tsp" },
      { name: "Salt", qty: "1 tsp" },
      { name: "Butter", qty: "2 tbsp" },
    ],
  },
  {
    id: 16,
    name: "Jeera Rice",
    tabId: 4,
    cuisine: "North Indian",
    description:
      "Fragrant basmati rice tempered with cumin seeds and ghee.",
    image:
      "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", qty: "1 cup" },
      { name: "Cumin Seeds", qty: "1 tsp" },
      { name: "Ghee", qty: "1 tbsp" },
      { name: "Salt", qty: "to taste" },
    ],
  },
  {
    id: 17,
    name: "Raita",
    tabId: 4,
    cuisine: "Indian",
    description:
      "Refreshing yogurt-based side dish with cucumber and spices.",
    image:
      "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Yogurt", qty: "1 cup" },
      { name: "Cucumber", qty: "1 small" },
      { name: "Cumin Powder", qty: "1/2 tsp" },
      { name: "Salt", qty: "to taste" },
      { name: "Coriander Leaves", qty: "1 tbsp" },
    ],
  },
  {
    id: 18,
    name: "French Fries",
    tabId: 4,
    cuisine: "Western",
    description:
      "Crispy deep-fried potato sticks, lightly salted.",
    image:
      "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Potatoes", qty: "3 pcs" },
      { name: "Oil", qty: "for frying" },
      { name: "Salt", qty: "to taste" },
    ],
  },
  {
    id: 19,
    name: "Chicken Wings (Side Portion)",
    tabId: 4,
    cuisine: "American",
    description:
      "Crispy fried chicken wings tossed in tangy hot sauce, served as a side dish.",
    image:
      "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    mealType: "SIDES",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken Wings", qty: "6 pcs" },
      { name: "Hot Sauce", qty: "1/4 cup" },
      { name: "Butter", qty: "2 tbsp" },
      { name: "Flour", qty: "1/2 cup" },
      { name: "Oil", qty: "for frying" },
    ],
  },
];


export default function MenuApp() {
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [activeTabId, setActiveTabId] = useState(1)
  const [viewDish, setViewDish] = useState(null);
  const [showIngredients, setShowIngredients] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const onClickTab = (id) => {
    setActiveTabId(id)
  }
  const filteredData = dishes.filter(each => {
    if (searchValue === "") {
      return each
    }
    else {
      return each.name.toLowerCase().includes(searchValue.toLowerCase())
    }
  })

  const dataFromActiveTab = filteredData.filter(each => each.tabId===activeTabId)

  const toggleDish = (dish) => {
    if (selectedDishes.find((d) => d.id === dish.id)) {
      setSelectedDishes(selectedDishes.filter((d) => d.id !== dish.id));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="app-container">
      <div className="search-container">
        <button className="backbutton" type="button"><img src="https://res.cloudinary.com/dzbm1waqm/image/upload/v1757669556/Group_1000007397_h94jst.png" alt="backbutton" /></button>
        <input className="input" value={searchValue} placeholder="Search a dish for your party." onChange={onChangeSearchValue} />
        <button className="searchbutton" type="button"><img src="https://res.cloudinary.com/dzbm1waqm/image/upload/v1757669556/fi_711319_ymhece.png" alt="searchbutton" /></button>
      </div>
      <ul className="tabs-container">
        {tabsList.map(each => {
          const tabClassName = activeTabId === each.tabId ? 'active-tab' : ''
          return (
            <li key={each.id} onClick={() => onClickTab(each.tabId)} className={`tab-item ${tabClassName}`}>{each.tabName}</li>
          )
        })}
      </ul>

      {/* Dish List */}
      <div className="dishes-container">
        {dataFromActiveTab.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div className="dish-info" onClick={() => setViewDish(dish)}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setViewDish(dish);
                  setShowIngredients(true);
                }}
              >
                Ingredient
              </span>
            </div>
            <div className="dishimage-button-container">
              <img src={dish.image} alt={dish.name} className="dish-img" />
              <button
                className={`dish-btn ${selectedDishes.find((each) => each.id === dish.id)
                  ? "remove-btn"
                  : "add-btn"
                  }`}
                onClick={() => toggleDish(dish)}
              >
                {selectedDishes.find((each) => each.id === dish.id)
                  ? "Remove"
                  : "Add +"}
              </button>
            </div>
          </div>
        ))}</div>

      {/* Footer */}
      <div className="footer-bar">
        <div className="footer-totaldishes-container">
          <p>Total Dish Selected {selectedDishes.length}</p>
          <button className="totaldishes-button">
            <img className="totaldishes-button" src="https://res.cloudinary.com/dzbm1waqm/image/upload/v1757870850/right_arrow_d9wqxg.png" alt="right-arrow" />
          </button>
        </div>
        <button className="continue-btn">Continue</button>
      </div>

      {/* Dish Detail Modal */}
      {viewDish && !showIngredients && (
        <div className="modal-overlay">
          <div className="modal-box">
            <img src={viewDish.image} alt={viewDish.name} />
            <h2>{viewDish.name}</h2>
            <p>
              <strong>{viewDish.cuisine}:</strong> {viewDish.description}
            </p>
            <div className="modal-actions">
              <button
                className="primary"
                onClick={() => toggleDish(viewDish)}
              >
                {selectedDishes.find((d) => d.id === viewDish.id)
                  ? "Remove"
                  : "Add"}
              </button>
              <button
                className="secondary"
                onClick={() => setViewDish(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ingredient List */}
      {viewDish && showIngredients && (
        <div className="ingredient-page">
          <button
            onClick={() => {
              setShowIngredients(false);
              setViewDish(null);
            }}
          >
            ← Back
          </button>
          <h2>{viewDish.name} Ingredients</h2>
          <ul>
            {viewDish.ingredients.map((ing, idx) => (
              <li key={idx}>
                <span>{ing.name}</span>
                <span>{ing.qty}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
