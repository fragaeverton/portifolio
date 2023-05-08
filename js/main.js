updateTime();

function updateTime(){
    window.setInterval(function(){
		let timeText = document.getElementById("timing");
        timeText.innerHTML = getTime();
	}, 1000);
}

function getTime(){
    let startDate = Date.parse('22 Feb 2017 00:00:00 GMT');
    let currDate = new Date();
    return (currDate - startDate) / 1000;
}