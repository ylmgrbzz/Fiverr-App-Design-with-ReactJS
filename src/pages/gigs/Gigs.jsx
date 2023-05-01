import React, { useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value, maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="contain">
        <span className="breadcrumbs">Liverr, Graphics & Design</span>
        <h1>AI ARTİSTS</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min"></input>
            <input ref={maxRef} type="number" placeholder="max"></input>
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy"> Sort by</span>
            <span className="sortType">
              {" "}
              {sort === "sales" ? "Best Selling" : "Newest Arrival"}{" "}
            </span>
            <img onClick={() => setOpen(!open)} src="./img/down.png" alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
