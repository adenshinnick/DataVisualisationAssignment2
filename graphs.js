 var genretrends = "Movies/genrearea/genre_trends_spec.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#genre-trends-chart', genretrends, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

 var movielength = "Movies/movielength/runtime_scatter_plot.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#runtimescatterplot', movielength, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

 var map = "Movies/map/map_filtered.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#map', map, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

 var genreratings = "ratings/genreratings/genre_ratings.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#genreratings', genreratings, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

 var lengthvsratings = "ratings/lengthvsratings/ratingvsruntime.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#runtimevsratings', lengthvsratings, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

 var studiobar= "Studios/studiodashboard.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#studiobar', studiobar, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

 var avgratings1= "ratings/avgratings/avgratings.vl.json"; 
        
        // Embed the chart into its respective div
        vegaEmbed('#avgratings', avgratings1, { "actions": false }).then(function (result) {
            // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);
