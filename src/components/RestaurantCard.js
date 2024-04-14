import {CDN_URL} from "./utils/constants"; 
const RestaurantCard = (props) => {
    const {resData} = props;
//   console.log(resData);

// Destructuring it on fly
const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.card?.card?.info;
const {deliveryTime} = resData?.card?.card?.info?.sla;

  return (
    <div className="res-card m-4 p-4 w-[220px] bg-blue-50 hover:bg-blue-200 transition cursor-pointer">
      <img className="res-logo rounded-xl w-[200px] h-[140px]"  src={CDN_URL+cloudinaryImageId}/>
      <h3 className="text-xl font-bold my-2"> {name} </h3>
      <h4 > {cuisines.join(" , ")} </h4>
      <h5> Rating of : {avgRating} </h5>
      <h5 className="font-bold"> {costForTwo} </h5>
      <h5 className="font-bold"> {deliveryTime} mins </h5>
    </div>
  );
};

export default RestaurantCard;