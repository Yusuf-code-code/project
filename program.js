async function myFunction() {
    let n = document.getElementById('input');
    let b = document.getElementById('body');
    b.style.color = '#fff';

    let delhi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c79a620e18309d40720f873f58ab32dc`);
    let fdelhi = await delhi.json();
    let delhiWeather = fdelhi;
    let delhiTemp = Math.floor(delhiWeather.main.temp - 273.1);
  
    
    let delhiSky = delhiWeather.weather[0].id;
    
    document.getElementById('delhi-temp').innerHTML = delhiTemp + '<sup>&deg;C</sup>';

     if(delhiSky>=801 && delhiSky<=804) {
        document.getElementById('delhiSkyImg').src = "cloud.png"
        document.getElementById('delhiSky').innerHTML = "Cloud"

    }
  if(delhiSky>=300 && delhiSky<=531) {
        document.getElementById('delhiSkyImg').src = "cloud-rain.png"
        document.getElementById('delhiSky').innerHTML = "Rain"

    }
     if(delhiSky>=200 && delhiSky<=232) {
        document.getElementById('delhiSkyImg').src = "thunderstorm.png"
        document.getElementById('delhiSky').innerHTML = "ThunderStorm"

    }
     if(delhiSky>=600 && delhiSky<=622) {
        document.getElementById('delhiSkyImg').src = "snow.png"
        document.getElementById('delhiSky').innerHTML = "Snow"

    }
     if(delhiSky>=701 && delhiSky<=781) {
        document.getElementById('delhiSkyImg').src = "mist-fog.png"
        document.getElementById('delhiSky').innerHTML = "Haze"

    }
     if(delhiSky==800) {
        document.getElementById('delhiSkyImg').src = "sun.png"
        document.getElementById('delhiSky').innerHTML = "Clear"

    }
    
    
  

    let nyc =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=c79a620e18309d40720f873f58ab32dc`);
    let fnyc = await nyc.json();
    let nycWeather = fnyc;
    let nycSky = nycWeather.weather[0].id;
    let nycTemp = Math.floor(nycWeather.main.temp - 273.1);
   
    document.getElementById('nyc-temp').innerHTML = nycTemp + '<sup>&deg;C</sup>' ;

    if(nycSky>=801 && nycSky<=804) {
        document.getElementById('nycSkyImg').src = "cloud.png"
        document.getElementById('nycSky').innerHTML = "Cloud"

    }
  if(nycSky>=300 && nycSky<=531) {
        document.getElementById('nycSkyImg').src = "cloud-rain.png"
        document.getElementById('nycSky').innerHTML = "Rain"

    }
     if(nycSky>=200 && nycSky<=232) {
        document.getElementById('nycSkyImg').src = "thunderstorm.png"
        document.getElementById('nycSky').innerHTML = "ThunderStorm"

    }
     if(nycSky>=600 && nycSky<=622) {
        document.getElementById('nycSkyImg').src = "snow.png"
        document.getElementById('nycSky').innerHTML = "Snow"

    }
     if(nycSky>=701 && nycSky<=781) {
        document.getElementById('nycSkyImg').src = "mist-fog.png"
        document.getElementById('nycSky').innerHTML = "Haze"

    }
     if(nycSky==800) {
        document.getElementById('nycSkyImg').src = "sun.png"
        document.getElementById('nycSky').innerHTML = "Clear"

    }
  


    let tokyo  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=c79a620e18309d40720f873f58ab32dc`);
    let ftokyo = await tokyo.json();
    let tokyoWeather = ftokyo;
    let tokyoTemp = Math.floor(tokyoWeather.main.temp - 273.1);
    let tokyoSky = tokyoWeather.weather[0].id;
    
    document.getElementById('tokyo-temp').innerHTML = tokyoTemp + '<sup>&deg;C</sup>';
   

    if(tokyoSky>=801 && tokyoSky<=804) {
        document.getElementById('tokyoSkyImg').src = "cloud.png"
        document.getElementById('tokyoSky').innerHTML = "Cloud"

    }
  if(tokyoSky>=300 && tokyoSky<=531) {
        document.getElementById('tokyoSkyImg').src = "cloud-rain.png"
        document.getElementById('tokyoSky').innerHTML = "Rain"

    }
     if(tokyoSky>=200 && tokyoSky<=232) {
        document.getElementById('tokyoSkyImg').src = "thunderstorm.png"
        document.getElementById('tokyoSky').innerHTML = "ThunderStorm"

    }
     if(tokyoSky>=600 && tokyoSky<=622) {
        document.getElementById('tokyoSkyImg').src = "snow.png"
        document.getElementById('tokyoSky').innerHTML = "Snow"

    }
     if(tokyoSky>=701 && tokyoSky<=781) {
        document.getElementById('tokyoSkyImg').src = "mist-fog.png"
        document.getElementById('tokyoSky').innerHTML = "Haze"

    }
     if(tokyoSky==800) {
        document.getElementById('tokyoSkyImg').src = "sun.png"
        document.getElementById('tokyoSky').innerHTML = "Clear"

    }
      if(n.value) {
    let pdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n.value}&appid=c79a620e18309d40720f873f58ab32dc`);
   
    let fdata = await pdata.json();
    let data = fdata;
    let otherCards = document.getElementsByClassName('card');
    if(!data.main) {
        console.log("error");
         otherCards[0].style.display = "none";
        otherCards[1].style.display = "none";
    otherCards[2].style.display = "none";
    let g = document.getElementsByClassName('cards');
    g[0].innerHTML = '<h1>City not found</h1>'
    setTimeout(function(){window.location.reload()},1000)
    return;
   
    
        
    }
    let temperature = Math.round(data.main.temp - 273.15)
    

    let citySky = data.weather[0].id;
  
    
    otherCards[1].style.display = "none";
    otherCards[2].style.display = "none";
      document.getElementById('cityName').innerHTML = data.name;
    document.getElementById('delhi-temp').innerHTML = temperature + '<sup>&deg;C</sup>';
    console.log(data);

     if(citySky>=801 && citySky<=804) {
        document.getElementById('delhiSkyImg').src = "cloud.png"
        document.getElementById('delhiSky').innerHTML = "Cloud"

    }
  if(citySky>=300 && citySky<=531) {
        document.getElementById('delhiSkyImg').src = "cloud-rain.png"
        document.getElementById('delhiSky').innerHTML = "Rain"

    }
     if(citySky>=200 && citySky<=232) {
        document.getElementById('delhiSkyImg').src = "thunderstorm.png"
        document.getElementById('delhiSky').innerHTML = "ThunderStorm"

    }
     if(citySky>=600 && citySky<=622) {
        document.getElementById('delhiSkyImg').src = "snow.png"
        document.getElementById('delhiSky').innerHTML = "Snow"

    }
     if(citySky>=701 && citySky<=781) {
        document.getElementById('delhiSkyImg').src = "mist-fog.png"
        document.getElementById('delhiSky').innerHTML = "Haze"

    }
     if(citySky==800) {
        document.getElementById('delhiSkyImg').src = "sun.png"
        document.getElementById('delhiSky').innerHTML = "Clear"

    }
    
    
    
   
    
    
   
    }
  

}
myFunction();