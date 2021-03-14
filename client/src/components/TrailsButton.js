import React from "react";
let axios = require("axios").default;

//  This function sets up an options object and then makes a client-side axios get request to
//  the Trails API.
const callTrailApiSeattle = () => {
    const trailOptions = {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/',
        params: {
          'q-activities_activity_type_name_eq': 'hiking', 
          'q-city_cont': 'Seattle',
          'q-state_cont': 'Washington',
      // The longitude and latitude in the url path are for Seattle, Washington.
          lat: '47.6062',
          lon: '-122.3321',
          radius: '25',
        //   'q-country_cont': 'United States',
          limit: '25'
        },
        headers: {
          'x-rapidapi-key': '8ff0e46ef5msh49ddf32c8fc21f9p11dbd5jsn56ad2be3313b',
          'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com'
        }
      };
      
      axios
      .request(trailOptions)
      .then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

};

const TrailsButton = () => {
    return (
        <div>
            <button
            id="trailsBtn"
            onClick={() => {
                callTrailApiSeattle();
            }}>
                Call Trails API (Check Console)
            </button>
        </div>
    );
};

export default TrailsButton;


