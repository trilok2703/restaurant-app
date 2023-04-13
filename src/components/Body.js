import { useState, useEffect } from "react";
import ShimComponent from "./ShimComponent";
import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";

const Body = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants ] = useState([]);

    // function to reterive the restaurant list based on searchTerm
    const searchList= (searchTerm, restList ) => {
        // console.log(searchTerm);
        // console.log(restList);

        const searchFilterList = restList.filter((restaurant)=>{
            return restaurant?.data?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        });

        setFilteredRestaurants(searchFilterList);
    }

    useEffect(()=>{
        console.log("effect render");
        getAllRestaurants();
    },[]);

    async function getAllRestaurants () {
        const resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await resData.json();
        console.log(jsonData);

        setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    console.log("component render");
    return( (listOfRestaurants.length === 0) ? (<ShimComponent/>) :
        (<div className="restaurant-container">
            {/* Search box container */}
            <div className="search">
                <input
                    type="text"
                    placeholder="Search the restaurant"
                    value={searchTerm}
                    name="search"
                    onChange={(e)=>{
                        setSearchTerm(e.target.value);
                    }}
                />
                <button
                    onClick={()=>{
                        searchList(searchTerm,listOfRestaurants);
                    }}
                >
                    Search
                </button>
            </div>
            {/* <div className="filter-btn">
                <button
                    onClick={
                        () => {
                            console.log("Filter button clicked");
                            const filterResByRating = listOfRestaurants.filter((restaurant)=>( restaurant.data.avgRating > 4));
                            setFilteredRestaurants(filterResByRating);
                        }
                    }
                >
                    Filter restaurant by 
                </button>
            </div> */}

            {/* Restaurant card container */}
            <div className="restaurant-card-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
            </div>

        </div>)
    )
}

export default Body;
