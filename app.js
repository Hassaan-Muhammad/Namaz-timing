function getNamazTime() {

    // get city name
    let city = document.getElementById('city').value;

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=pakistan&method=1`)
        .then(function (response) {
            // handle success
            const data = response.data;
            console.log(data);

            document.querySelector("#fajar").innerText ="FAJAR:  "+ data.data.timings.Fajr ;
            document.querySelector("#zuhar").innerText ="DHUHR: "+ data.data.timings.Dhuhr ;
            document.querySelector("#asar").innerText = "ASR:  "+ data.data.timings.Asr;
            document.querySelector("#maghrib").innerText = "MAGHRIB:   "+ data.data.timings.Maghrib;
            document.querySelector("#isha").innerText ="ISHA:    "+ data.data.timings.Isha;


        })

    }