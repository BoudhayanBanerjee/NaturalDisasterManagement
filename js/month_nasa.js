$(document).ready(function(){
	
		var appToken = 'ybjffPtqWHZhbR6oYwceh7ceeZYwtm7CrnRMCiwd';
		var category = "";
		var days = 30;
		var url_categories = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories?api_key='+appToken
		var url_event;
		
		$("#month").click(function(){
			$.getJSON(url_categories,function(data){
				if(data){
					
					var Drought = $('input[value="Drought"]:checked').length;
					var Floods = $('input[value="Floods"]:checked').length;
					var Landslides = $('input[value="Landslides"]:checked').length;
					var Manmade = $('input[value="Manmade"]:checked').length;
					var Severe_Storms = $('input[value="Severe Storms"]:checked').length;
					var Volcanoes = $('input[value="Volcanoes"]:checked').length;
					var Water_Color = $('input[value="Water Color"]:checked').length;
					var Wildfires = $('input[value="Wildfires"]:checked').length;
					var Earthquakes = $('input[value="Earthquakes"]:checked').length;
					var All = $('input[value="All"]:checked').length;
					
					if(Drought == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Drought")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/drought.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
												
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#FFA726',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#FFA726',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
										}
									}
									
								});
							}
							
						}
					}
					
					if(Floods == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Floods")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/flood.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
												
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#2196F3',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#2196F3',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
										}
									}
									
								});
							}
							
						}
					}
					
					if(Landslides == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Landslides")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/landslide.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
												
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#8D6E63',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#8D6E63',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
										}
									}
									
								});
							}
							
						}
					}
					
					if(Manmade == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Manmade")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/manmade.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
												
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#009688',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#009688',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
										}
									}
									
								});
							}
							
						}
					}
					
					if(Severe_Storms == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Severe Storms")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/storm.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
												
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#78909C',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#78909C',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
										}
									}
									
								});
							}
							
						}
					}
					
					if(Volcanoes == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Volcanoes")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/volcano.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
												
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#F44336',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#F44336',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
										}
									}
									
								});
							}
							
						}
					}
					
					if(Water_Color == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Water Color")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/water.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].data.events[j].geometries[0].coordinates[0])}
												});
												
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#EC407A',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#EC407A',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
											
										}
									}
									
								});
							}
							
						}
					}
					
					if(Wildfires == 1)
					{
						for(var i=0;i<data.categories.length;i++){
							if(data.categories[i].title == "Wildfires")
							{
								category = data.categories[i].id;
								url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'+category+'?days='+days+'?api_key='+appToken;
								
								$.getJSON(url_event,function(data){
									if(data.events.length>0){
										for(var j=0;j<data.events.length;j++){
											
											if(data.events[j].geometries[0].type == "Point"){
												
												
												var image = {
												  url: "res/wildfire.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
												var marker = new google.maps.Marker({
												map: map,
												draggable: false,
												animation: google.maps.Animation.DROP,
												icon: image,
												position: {lat: parseFloat(data.events[j].geometries[0].coordinates[1]), lng: parseFloat(data.events[j].geometries[0].coordinates[0])}
												});
												
																								
											}
											else{
												  //console.log(data.events[j].geometries[0].coordinates[0].length);
												 var polyCoords = [];
												 for(var k=0;k<data.events[j].geometries[0].coordinates[0].length;k++){
													 polyCoords.push({lat: data.events[j].geometries[0].coordinates[0][k][1], lng:data.events[j].geometries[0].coordinates[0][k][0]});
													 //console.log(data.events[j].geometries[0].coordinates[0][k]);
												 }
												

												  // Construct the polygon.
												  var polygon = new google.maps.Polygon({
													paths: polyCoords,
													strokeColor: '#F57C00',
													strokeOpacity: 0.8,
													strokeWeight: 2,
													fillColor: '#F57C00',
													fillOpacity: 0.35
												  });
												polygon.setMap(map);
											}
											
										}
									}
									
								});
							}
							
						}
					}
					
					if(Earthquakes == 1)
					{
						var now = new Date();
						//var dd = now.getDate();
						var mm = parseInt(now.getUTCMonth())+1; //January is 0!
						var yyyy = now.getUTCFullYear();
						
						var endDate = now.getUTCFullYear()+'-'+mm+'-'+
						                now.getUTCDate()+'T'+now.getUTCHours()+':'+now.getUTCMinutes()+':'+
										now.getUTCSeconds();
						var startDate = mm-1;
						var startDate = now.getUTCFullYear()+'-'+startDate+'-'+
						                now.getUTCDate()+'T'+now.getUTCHours()+':'+now.getUTCMinutes()+':'+
										now.getUTCSeconds();
						url_event = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime='+startDate+'&endtime='+endDate+'&limit=100&orderby=magnitude';
						
						console.log(url_event);		
						$.getJSON(url_event,function(data){
							
							for(var i=0;i<data.features.length;i++){
								if(data.features[i].properties.mag < 6)
								{
									var quakeCircle = new google.maps.Circle({
									  strokeColor: '#4CAF50',
									  strokeOpacity: 0.8,
									  strokeWeight: 2,
									  fillColor: '#4CAF50',
									  fillOpacity: 0.35,
									  map: map,
									  center: {lat: parseFloat(data.features[i].geometry.coordinates[1]), lng: parseFloat(data.features[i].geometry.coordinates[0])},
									  radius: parseInt(data.features[i].properties.mag)*100000
									});
								}
								if(data.features[i].properties.mag >= 6 && data.features[i].properties.mag < 8)
								{
									//console.log(data.features[i].properties);
									
									var quakeCircle = new google.maps.Circle({
									  strokeColor: '#FFEB3B',
									  strokeOpacity: 0.8,
									  strokeWeight: 2,
									  fillColor: '#FFEB3B',
									  fillOpacity: 0.35,
									  map: map,
									  center: {lat: parseFloat(data.features[i].geometry.coordinates[1]), lng: parseFloat(data.features[i].geometry.coordinates[0])},
									  radius: parseInt(data.features[i].properties.mag)*100000
									});
									
									var image = {
												  url: "res/quake.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
									var marker = new google.maps.Marker({
									map: map,
									draggable: false,
									animation: google.maps.Animation.DROP,
									icon: image,
									position: {lat: parseFloat(data.features[i].geometry.coordinates[1]), lng: parseFloat(data.features[i].geometry.coordinates[0])}
									});
								}
								if(data.features[i].properties.mag >= 8)
								{
									//console.log(data.features[i].properties);
									var quakeCircle = new google.maps.Circle({
									  strokeColor: '#C62828',
									  strokeOpacity: 0.8,
									  strokeWeight: 2,
									  fillColor: '#C62828',
									  fillOpacity: 0.35,
									  map: map,
									  center: {lat: parseFloat(data.features[i].geometry.coordinates[1]), lng: parseFloat(data.features[i].geometry.coordinates[0])},
									  radius: parseInt(data.features[i].properties.mag)*100000
									});
									
									var image = {
												  url: "res/quake.svg",
												  size: new google.maps.Size(71, 71),
												  origin: new google.maps.Point(0, 0),
												  anchor: new google.maps.Point(17, 34),
												  scaledSize: new google.maps.Size(25, 25)
												};
											
									var marker = new google.maps.Marker({
									map: map,
									draggable: false,
									animation: google.maps.Animation.DROP,
									icon: image,
									position: {lat: parseFloat(data.features[i].geometry.coordinates[1]), lng: parseFloat(data.features[i].geometry.coordinates[0])}
									});
									
									
								}
							}
							//console.log(data);
						
						});
					}
					
					if(All == 1)
					{
						url_event = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days='+days+'?api_key='+appToken;
								
						$.getJSON(url_event,function(data){
							if(data.events.length>0){
								console.log(data);
							}
									
						});
							
					}
					
										
				}
			});
		});
});