$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Quepos&appid=478dd46efe4dc6ad88891862c12676d3",
    function (data) {
        console.log(data);

        var icono = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        var nombre = data.name;

        var pais = data.sys.country;

        var clima = data.weather[0].main;

        var temperatura = Math.floor(data.main.temp - 273.15);

        var humedad = data.main.humidity;

        var viento = data.wind.speed;

        $('.icono').attr('src', icono);

        $('.nombre').append(nombre);

        $('.pais').append("Pais: ").append(pais);

        $('.clima').append(clima);

        $('.temperatura').append(temperatura).append(" grados");

        $('.humedad').append(humedad).append("% de humedad");

        $('.viento').append("Viento: ").append(viento).append("km/h");
    });