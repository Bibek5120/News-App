import React, { useState, useEffect } from 'react';
import Card from './card';

const News = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "590338763b3041fa8d83d8c5b5bd47f7"; // Replace with actual API key

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (event) => {
    const category = event.target.value;
    setSearch(category);
    setTimeout(getData, 0); // ensure state is updated before API call
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <li><a href="#">All News</a></li>
          <li><a href="#">Trending</a></li>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Updated with Trendy News</p>
      </div>

      <div className="categoryBtn">
        <button onClick={handleCategoryClick} value="sports">Sports</button>
        <button onClick={handleCategoryClick} value="politics">Politics</button>
        <button onClick={handleCategoryClick} value="entertainment">Entertainment</button>
        <button onClick={handleCategoryClick} value="health">Health</button>
        <button onClick={handleCategoryClick} value="education">Education</button>
        <button onClick={handleCategoryClick} value="fitness">Fitness</button>
      </div>

      <div>
        {newsData ? <Card data={newsData} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default News;
