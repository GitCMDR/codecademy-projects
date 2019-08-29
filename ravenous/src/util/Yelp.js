const apiKey = 'TODO:Set Up ENV'

const Yelp = {
    search(term, location, sortBy) {
        const urlToHit = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;    
        const headersForURL = {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
        return fetch(urlToHit, headersForURL).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {}
                });
            }
        })
    }

};