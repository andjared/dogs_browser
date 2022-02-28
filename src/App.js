import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [breedsList, setBreedsList] = useState(null);

  useEffect(() => {
    const getList = async () => {
      let list = [];
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      for (let prop in data.message) {
        list.push(`${prop} `);
      }
      setBreedsList(list);
    };
    getList();
  }, []);
  return (
    <div className="container">
      <List breedsList={breedsList} />
    </div>
  );
}

export default App;
