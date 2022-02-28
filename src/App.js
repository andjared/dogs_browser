import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [breedsList, setBreedsList] = useState(null);
  const [dogImg, setDogImg] = useState(null);

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
  const getBreedImage = async (breed) => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setDogImg(data.message);
    console.log(dogImg);
  };
  return (
    <div className="container">
      <List breedsList={breedsList} handleClick={getBreedImage} />
      {dogImg && <img alt="dogImg" src={dogImg}></img>}
    </div>
  );
}

export default App;
