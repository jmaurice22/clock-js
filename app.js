function showTime() {
    //  Date Object to hold value of current date
            let date = new Date();
            
            // Hours , Mins, Secs properties of the date object
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();

            if (hour > 12) {
                hour -= 12; 
            }

            if (min < 10) {
                min = "0" + min;
            }

            if (sec < 10) {
                sec = "0" + sec;
            }

            // Cuurent time
            let time = hour + ":" + min + ":" + sec;
            document.getElementById("clock-container").innerText = time;
            document.getElementById("clock-container").textContent = time;
            
            setTimeout(showTime, 1000);
    }

   
    showTime();


