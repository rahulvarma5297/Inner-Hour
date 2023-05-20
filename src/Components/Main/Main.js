import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import Modal from "../Modal/Modal";
import Box from "../Box/Box";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [data, setData] = useState();
  const [modal, setModal] = useState();
  const [search, setSearch] = useState("");
  const [searchArticles, setsearchArticles] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filterdata = data?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setsearchArticles(filterdata);
  }, [search]);

  const getData = async () => {
    const response = await axios.get(
      `https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10`
    );
    setData(response.data.data);
  };

  const getSlugData = (slug) => {
    axios
      .get(`https://api.theinnerhour.com/v1/blogdetail/${slug}`)
      .then((response) => {
        setModal(response.data.blog);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (slug) => {
    getSlugData(slug);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="nav2">
          <h1
            style={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "30px",
            }}
          >
            {searchArticles && search
              ? `Search results for: ${search}`
              : "All articles"}
          </h1>

          <div className="search">
            <input
              type="text"
              placeholder="Search articles"
              value={search}
              onChange={handleSearch}
            />
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
        </div>

        <div className="data">
          {searchArticles
            ? searchArticles?.map((element) => {
                return (
                  <div
                    key={element.id}
                    onClick={() => handleClick(element.slug)}
                  >
                    <Box
                      img={element.thumb}
                      title={element.title}
                      description={element.short_description}
                    />
                  </div>
                );
              })
            : data?.map((element) => {
                return (
                  <div
                    key={element.id}
                    onClick={() => handleClick(element.slug)}
                  >
                    <Box
                      img={element.thumb}
                      title={element.title}
                      description={element.short_description}
                    />
                  </div>
                );
              })}
        </div>

        <Modal
          img={modal?.thumb}
          title={modal?.title}
          description={modal?.body}
        />
      </div>
    </>
  );
};

export default Main;
