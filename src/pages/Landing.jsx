import React, { useEffect, useState, useRef } from "react";

import Hero from "../components/Hero";
import styled from "styled-components";
import { FaHandPointLeft, FaSearch } from "react-icons/fa";
import {
  get_categories,
  get_recipes,
  search_recipe,
} from "../services/Services";
import { Link } from "react-router-dom";

const LandingWrapper = styled.main`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    .main_section {
      .cate_container {
        @media (max-width: 768px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .category {
        padding: 20px;
        cursor: pointer;

        border: 1px solid var(--gray-color);
        margin: 10px 0;
        font-size: 12px;
        color: var(--gray-color);
        font-weight: 400;
        border-radius: 5px;

        category:hover {
          background-color: var(--accent-color);
        }
      }
      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 250px 1fr;
        align-items: start;
        gap: 20px;
        margin-top: 40vh;
      }
    }

    .recipe_container {
      .recipe {
        margin-bottom: 20px;
        // max-width: 250px;
        img {
          height: 200px;
        }
      }
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      gap: 20px;
      margin-top: 20px;
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin-top: 0;
      }
    }
  }
`;
function Landing() {
  const [category, setCategory] = useState([]);
  const [cate, setCate] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    setCate(e.target.innerText);
    get_recipes(cate).then((response) => {
      setRecipes(response.data.meals);
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    search_recipe(search).then((response) => {
      setRecipes(response.data.meals);
    });
  };

  useEffect(() => {
    get_categories().then((response) => {
      setCategory(response.data.categories);
    });
  }, []);

  useEffect(() => {
    get_recipes(cate).then((response) => {
      setRecipes(response.data.meals);
    });
  }, []);

  return (
    <LandingWrapper>
      <Hero />

      <div className='container'>
        <section className='main_section'>
          <div>
            <h1>Categories</h1>
            <div className='cate_container'>
              {category.map((item, index) => (
                <div key={index} className='category'>
                  <h4
                    onClick={handleClick}
                    //   ref={categoryRef}
                    value={item.strCategory}
                  >
                    {item.strCategory}
                  </h4>
                  {/* <img
                  src={`${item.trCategoryThumb}/preview`}
                  alt={item.strCategory}
                /> */}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='header'>
              <FaSearch />
              <input
                type='text'
                name='search'
                id='search'
                placeholder='search for recipe'
                onChange={handleChange}
                value={search}
              />
            </div>

            <div className='recipe_container'>
              {recipes.map((item, index) => (
                <Link to={`recipes/${item.idMeal}`}>
                  <div key={index} className='recipe'>
                    <div className='recipe-img'>
                      <img
                        src={`${item.strMealThumb}/preview`}
                        alt={item.strMeal}
                      />
                    </div>
                    <div className='recipe-info'>
                      <h3>{item.strMeal}</h3>
                      <p>{item.strCategory}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LandingWrapper>
  );
}

export default Landing;
