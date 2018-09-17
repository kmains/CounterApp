/*
 * 
 *  Filter and sort data (hotels by rating and price) 
 * 
 */
const properties = [{
    "name": "Hotel 1",
    "starRating": 2.5,
    "avgNightlyRate": 165.88,
    "amenities": [{
      "name": "Free Wifi",
      "code": "WIFI",
    }, {
      "name": "24-hour Concierge",
      "code": "24HC"
    }],
    "description": "...",
    "coordinates": ["32.9107572","-96.8788353"]
  },
  {
    "name": "Hotel 2",
    "starRating": 3.5,
    "avgNightlyRate": 235.88,
    "amenities": [{
      "name": "Free Wifi",
      "code": "WIFI",
    }, {
      "name": "24-hour Concierge",
      "code": "24HC"
    }],
    "description": "...",
    "coordinates": ["32.9107572","-96.8788353"]
  },
  {
    "name": "Hotel 3",
    "starRating": 2.25,
    "avgNightlyRate": 126.78,
    "amenities": [{
      "name": "Free Wifi",
      "code": "WIFI",
    }, {
      "name": "24-hour Concierge",
      "code": "24HC"
    }],
    "description": "...",
    "coordinates": ["32.9107572","-96.8788353"]
  },
  {
    "name": "Hotel 4",
    "starRating": 3,
    "avgNightlyRate": 324.85,
    "amenities": [{
      "name": "Free Wifi",
      "code": "WIFI",
    }, {
      "name": "24-hour Concierge",
      "code": "24HC"
    }],
    "description": "...",
    "coordinates": ["32.9107572","-96.8788353"]
  },{
    "name": "Hotel 5",
    "starRating": 1.5,
    "avgNightlyRate": 65.88,
    "amenities": [{
      "name": "Free Wifi",
      "code": "WIFI",
    }],
    "description": "...",
    "coordinates": ["32.9107572","-96.8788353"]
  }];


  //function takes in min and max star ratings and returns new array containing only
  //properties that fall within range
 const starRating = (min, max) => {

  const hotels =  properties.filter((hotel) => hotel.starRating>=min && hotel.starRating<=max);
    return hotels;
 }

//takes in a list of properties and cycles through 
//reordering the list based on price (low to high)
 const lowestPrice = (props) => {
    props.sort((x, y) =>  x.avgNightlyRate-y.avgNightlyRate );
 };

 console.log(starRating(1,2.33));
 console.log(lowestPrice(properties));