import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "./data";
function App() {
  const [menuItem, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  // console.log(allCategories);
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Grab Restaurant</h2>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
            ></input>
          </div>
        </section>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://food-cms.grab.com/compressed_webp/items/THITE2020081715044836769/detail/menueditor_item_b9ff9b404ad64dcdb22b7d12ab796589_1597676672404704476.webp"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}

export default App;
