import { CLOUD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //console.log(props);
    const {resData} = props;

    const {name, avgRating, cuisines,slaString, cloudinaryImageId, costForTwo} = resData?.data;
    return(
        <div className="restaurant-card">
            <div className="restaurant-card-img-container">
                <img
                    alt="restaurant image"
                    className="restaurant-card-img"
                    src={CLOUD_URL+cloudinaryImageId}
                />
            </div>
            <h3>{name}</h3>
            <div>{cuisines.join(',')}</div>
            <div>{avgRating}</div>
            <div>₹{costForTwo/100} FOR TWO</div>
            <div>{slaString}</div>
        </div>
    )
}

export default RestaurantCard;
