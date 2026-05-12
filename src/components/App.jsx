import { useState, useEffect } from "react";

function App() {
  // Stores the dog image URL
  const [dogImage, setDogImage] = useState("");

  // Controls loading message
  const [loading, setLoading] = useState(true);

  // Fetch random dog image from API
  function fetchDogImage() {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
  }

  // Runs once when component first loads
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Generator</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={dogImage}
          alt="Random Dog"
          width="300"
        />
      )}

      <button onClick={fetchDogImage}>
        New Dog
      </button>
    </div>
  );
}

export default App;
