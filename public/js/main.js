const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');


const data_hide = document.querySelector('.middle_layer')
// ************
// console.log(curMonth)

// window.onload(document.getElementById("today_day".innerHTML = curWeekDay));
const getInfo = async(event) =>{
    event.preventDefault();

    let cityVal = cityName.value;
    if(cityVal ===""){
        city_name.innerText = `Please Write The Name Of City Before You Want To Search`;
        data_hide.classList.add('data_hide');

    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=36927439c051711ce5ab3380dac0d2a8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temp_real_val.innerHTML = arrdata[0].main.temp;
            // document.getElementById("today_day".innerHTML = curWeekDay)
            // temp_status.innerHTML = arrdata[0].weather[0].main;
            city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`

            const tempMod = arrdata[0].weather[0].main;

            if (tempMod == "Clear") {
                // temp_status.innerHTML = "<i class='fas fa-solid fa-sun sun  ' style='color: #FFA500;'></i>"
                temp_status.innerHTML = '<i class="fas fa-solid fa-sun" style="color: #FBB454;"></i>'
            } else if (tempMod == "Clouds") {
                // temp_status.innerHTML = "<i fas fa-solid fa-cloud cloud ' style='color: #34B3F1;'></i>"
                temp_status.innerHTML = "<i class='fas fa-solid fa-cloud' style='color: #34B9F1;'></i>"
                // temp_status.innerHTML = '<i class="fas fa-solid fa-cloud style="color:#000;"></i>'
                // <i class="fa-solid fa-cloud"></i>
                // fas fa-solid fa-cloud cloud 
                // <i class="fas fa-solid fa-clouds clouds"></i>
            } else if (tempMod == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-solid fa-cloud-showers-heavy' style='color: #34B3F1;'></i>"
                // temp_status.innerHTML = "<i class='fa-solid fa-cloud-drizzle' style='color: #AEDBCE;'></i>"
                // temp_status.innerHTML = "<i class=fa-solid fa-cloud-rain style='color: red;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-solid fa-cloud cloud ' style='color: #34B3F1;'></i>"
            }
            data_hide.classList.remove('data_hide');

            // console.log(data);
            // console.log(response);

        }catch{
            city_name.innerText = `Please Write The Name Of City`;
            data_hide.classList.add('data_hide');
            
        }


    }
    // alert("hi");
}
submitBtn.addEventListener('click',getInfo);