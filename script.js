/*Se calcula de la siguiente manera:

Cuando el niño tiene hasta 10kg: 100cc por cada kilo.
Luego, por cada kilo arriba de 10 y hasta 20kg, se suman 50cc.
Finalmente, por cada kilo arriba de 20kg se suman 20cc.
El resultado de este calculo es el volumen diario de liquido que el paciente necesita, en cc o ml.

EJEMPLO:
Si un niño pesa 25kg:

Para los primeros 10kg hacemos 10*100 = 1000cc.
Los siguientes 10kg entran en la siguiente franja, asi que hacemos 10*50 = 500cc.
Finalmente nos quedan 5kg por arriba de 20kg, asi que vamos a calcular 5*20 = 100cc.
Sumamos todos nuestros resultados y obtenemos un volumen diario de 1600cc.

Ya tenemos el resultado final que es el volumen diario, pero los equipos que se utilizan para dosificar el suero funcionan con flujo horario.

Para calcular el flujo horario hacemos el volumen diario / 24hr, de esta forma 1600cc equivalen a 67cc/hr. Este valor también se conoce como mantenimiento.

Por otro lado, es muy común que el medico indique un mantenimiento un poco superior al calculado, asi que ademas de mostrar el volumen diario y el mantenimiento, tenemos que mostrar el valor conocido como m+m/2 (mantenimiento + medio mantenimiento).

m+m/2 es simplemente el mantenimiento x 1.5, en el ejemplo anterior es 100cc/hr.
*/

    let form = document.getElementById('calculadora');
    const CALCULAR = document.getElementById("calcular");
    const ERROR = document.getElementById("error");
    const FLU = document.getElementById("flu");
    const MAN = document.getElementById("man");
    const VOL = document.getElementById("vol");
    const PESO_INPUT = document.getElementById("peso");

    
    CALCULAR.addEventListener("click", () => {
        const PESO = parseFloat(PESO_INPUT.value);


        if ((PESO) && PESO > 0) {
            ERROR.style.display = "none";
            let flujo;
            if (PESO <= 10) {
                flujo = PESO * 100;
            } else if (PESO <= 20) {
                flujo = 10 * 100 + (PESO - 10) * 50;
            } else if (PESO <= 30) {
                flujo = 10 * 100 + 10 * 50 + (PESO - 20) * 20;
            } 
            const mantenimiento = flujo * 1.5;
            VOL.innerHTML = "Volumen Diario: " + flujo + "cc";
            FLU.innerHTML = "Flujo Horario: " + (flujo / 24).toFixed(2) + "cc/hr";
            MAN.innerHTML = "Mantenimiento: " + (flujo / 24).toFixed(2)*1.5 + "cc/hr";
            VOL.style.display = "block";
            FLU.style.display = "block";
            MAN.style.display = "block";
        } else {
            ERROR.style.display = "block";
            VOL.style.display = "none";
            FLU.style.display = "none";
            MAN.style.display = "none";
        }
    });


