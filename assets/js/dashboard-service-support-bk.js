$(function() {
    "use strict";
	  
	  // chart 1
	 
		  var ctx = document.getElementById('chart1').getContext('2d');
		
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["1st Month", "2nd Month", "3rd Month", "4th Month", "5th Month", "6th Month", "7th Month", "8th Month", "9th Month", "10th Month" , "11th Month", "12th Month"],
					datasets: [{
						label: 'Support Costs',
						data: [50, 45, 40, 35, 30, 23, 31, 30, 31, 25, 20, 18],
						backgroundColor: 'rgba(0, 0, 0, 0.13)',
						borderColor: "transparent",
						borderWidth: 3
					}, {
						label: 'Revenue',
						type: 'line',
						data: [10, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 30],
						backgroundColor: "rgba(243, 38, 89, 0.36)",
						borderColor: "#f32659",
						pointBackgroundColor:'transparent',
                        pointHoverBackgroundColor:'transparent',
						pointBorderWidth :0,
						pointRadius :0,
						pointHoverRadius :0,
						borderWidth: 2
						
					}]
				},
			options: {
				maintainAspectRatio: false,
				legend: {
				  display: true,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  displayColors:false
				},	
			  scales: {
				  xAxes: [{
					barPercentage: .3,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.05)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.05)"
					},
				  }]
				 }

			 }
			}); 
			
			
		// chart 2
	 
		  var ctx = document.getElementById('chart2').getContext('2d');
		
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [{
						label: 'Request Volume',
						data: [10, 40, 20, 40, 40, 60, 40, 80, 40, 70, 40, 70],
						backgroundColor: '#02ba5a',
						borderColor: "transparent",
						pointRadius :"0",
						lineTension :'0',
						borderWidth: 3
					}, {
						label: 'Service Level',
						data: [30, 60, 50, 60, 60, 80, 60, 120, 60, 100, 60, 100],
						backgroundColor: "rgba(2, 186, 90, 0.52)",
						borderColor: "transparent",
						pointRadius :"0",
						lineTension :'0',
						borderWidth: 1
					}]
				},
			options: {
				maintainAspectRatio: false,
				legend: {
				  display: true,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  displayColors:false
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.05)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.05)"
					},
				  }]
				 }

			 }
			}); 	
			
			
	    //pie
            $("span.pie").peity("pie",{
                width: 158,
                height: 158 
            });
        
        //donut

          $("span.donut").peity("donut",{
                width: 158,
                height: 158 
            });
			
			
			
			
			
			
			
			
	
	  });	