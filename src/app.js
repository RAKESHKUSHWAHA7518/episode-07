

import React from 'react';

import ReactDOM from 'react-dom/client';
 import Header from './components/Header';
 import Body from './components/Body';
 import About from './components/About';
 import Error from './components/Error';
 import Contact from './components/Contact';
 import RestaurantMenu from './components/RestaurantMenu';


 import { createBrowserRouter ,RouterProvider,Outlet } from 'react-router-dom';
 
/**
 * Header
 * -logo
 * -Nav Item
 * Body 
 * -Search
 * -Card container
 * --Restocard
 *    -Img
 *     -Name of Res , Star Rating , cuisines and deve
 *   
 * 
 * Footer
 * -Copyright
 * -link
 * Address
 * Contact
 */


// <img  className='res-logo'   src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/e0vvulfbahjxjz6k4uwi" + 
// cloudinaryImageId
// } />    


 

// const resData = {
//   info: {
//     id: "303893",
//     name: "Haji Biryani House",
//     cloudinaryImageId: "hgzhzbqryqw59tzslics",
//     locality: "Kalyani",
//     areaName: "Kanchrapara Loco",
//     costForTwo: "₹350 for two",
//     cuisines: ["Biryani", "Mughlai", "Indian"],
//     avgRating: 3.7,
//     feeDetails: {
//       restaurantId: "303893",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 1900,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 1900,
//     },
//     parentId: "18592",
//     avgRatingString: "3.7",
//     totalRatingsString: "1K+",
//     sla: {
//       deliveryTime: 18,
//       lastMileTravel: 0.6,
//       serviceability: "SERVICEABLE",
//       slaString: "18 mins",
//       lastMileTravelString: "0.6 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-20 23:59:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     aggregatedDiscountInfoV2: {},
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
// };

//  const resData = {
//  "restaurants": [
//   {
//     "info": {
//       "id": "684427",
//       "name": "Cafe Amudham",
//       "cloudinaryImageId": "0bcdca61f3cd1e9135b98328593d044f",
//       "locality": "Lalbhagh  Siddapura",
//       "areaName": "Jayanagar",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "South Indian",
//         "Snacks"
//       ],
//       "avgRating": 4.5,
//       "veg": true,
//       "feeDetails": {
//         "restaurantId": "684427",
//         "fees": [
//           {
//             "name": "BASE_DISTANCE",
//             "fee": 4100
//           },
//           {
//             "name": "BASE_TIME"
//           },
//           {
//             "name": "ANCILLARY_SURGE_FEE"
//           }
//         ],
//         "totalFee": 4100
//       },
//       "parentId": "396620",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 24,
//         "lastMileTravel": 4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "24 mins",
//         "lastMileTravelString": "4.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2023-10-05 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "textExtendedBadges": [
//           {
//             "iconId": "guiltfree/GF_Logo_android_3x",
//             "shortDescription": "options available",
//             "fontColor": "#7E808C"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "iconId": "guiltfree/GF_Logo_android_3x",
//                   "description": "",
//                   "shortDescription": "options available",
//                   "fontColor": "#7E808C"
//                 }
//               }
//             ]
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=684427",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }

//  },
// ],
//  };

 

/* <RestaurantCard resData ={resList}/> */

const AppLayout= ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
           

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[

            {
                path:"/",
                element:<Body/>


            },
            {
                path:"/about",
                element:<About/>,
                 
             },
        
             {
                path: "/contact",
                element:<Contact/>,
                
             },
             {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
             }

        ],
        errorElement:<Error/>
     },
    
  
    
]);


// const Title =() =>(
//     <h1 className='head' tabIndex="5">
//         Namaste Rakesh using JSX
//     </h1>
//  )



//  const heading = (
//     <h1  className='head'tabIndex="1" >
//          Nanaste Rakesh Kushwaha in JSX</h1>
//          );


//  const HeadingComponent = () =>(
     
    
//     <div id= "container">
//         <Title/>
//         {heading}
//         {Title()}

// <h1 className='heading'> Namaste React Fucntional Component  <Title/></h1>
// <Title/>
// </div>
// );



const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter}/>)