function analizarFuncion(){
    // Valores
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // Elementos para mostrar resultados y gráfica
    let resultado = document.getElementById("resultado");
    let canvas = document.getElementById("grafica");

    // Validar que A no sea cero
    if(a === 0){
        resultado.innerHTML =
        "<p>No se trata de una función cuadrática.</p>";
    }else{
        // Calcular Discriminante = D = b² - 4ac
        let discriminante = (b**2) - (4*a*c);

        // Calcular Vertice
        // Fórmulas:  Xv = -b / 2a  -  Yv = f(Xv)
        let xv = -b / (2*a);
        let yv = a * (xv**2) + b * xv + c;

        // Crear Puntos para la Grafica
        let puntosX = [];
        let puntosY = [];
        for(let x = -10; x <= 10; x++){
            let y = a*(x**2) + b*x + c;
            puntosX.push(x);
            puntosY.push(y);
        }
        // Determinar tipo de raíces según el discriminante
        let mensajeRaices = "";
        if(discriminante > 0){
            mensajeRaices =
            "La función tiene 2 raíces reales distintas.";
        }else if(discriminante === 0){
            mensajeRaices =
            "La función tiene una raíz doble.";
        }else{
            mensajeRaices =
            "La función tiene raíces complejas.";
        }
        // Determinar concavidad según el signo de A
        let concavidad = "";
        if(a > 0){
            concavidad =
            "La parábola es cóncava hacia arriba.";
        }else{
            concavidad =
            "La parábola es cóncava hacia abajo.";
        }

        // Mostrar resultados en el HTML
        resultado.innerHTML = `
            <h3>Resultados</h3>

            <p>
            <strong>Función:</strong>
            f(x) = 
            ${a}x² 
            ${b < 0 ? '- ' + Math.abs(b) : '+ ' + b}x 
            ${c < 0 ? '- ' + Math.abs(c) : '+ ' + c}
            </p>

            <p>
            <strong>Discriminante:</strong>
            ${discriminante}
            </p>

            <p>
            <strong>Raíces:</strong>
            ${mensajeRaices}
            </p>

            <p>
            <strong>Vértice:</strong>
            (${xv}, ${yv})
            </p>

            <p>
            <strong>Concavidad:</strong>
            ${concavidad}
            </p>

            <p>
            <strong>Intersección con eje Y:</strong>
            (0, ${c})
            </p>
        `;

        // Limpiar Grafica
        if(window.miGrafica){
            window.miGrafica.destroy();
        }

        //Crear Nueva Grafica
        window.miGrafica = new Chart(canvas, {
            // Tipo de gráfica
            type: 'scatter',
            // Datos para la gráfica
            data: {
                // Valores X
                labels: puntosX,
                // Valores Y
                datasets: [
                    {
                        label: 'Función Cuadrática',
                        data: puntosY,
                        borderColor: '#3b82f6',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: false,
                        pointRadius: 0,
                        showLine: true
                    },
                    // Punto del Vértice
                    {
                        label: 'Vértice',
                        data: [
                            {
                                x: xv,
                                y: yv
                            }
                        ],
                        backgroundColor: 'red',
                        borderColor: 'red',
                        pointRadius: 7,
                        pointHoverRadius: 9,
                        showLine: false,
                        type: 'scatter'
                    }
                ]
            },

            // Opciones de la gráfica
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                // Ejes
                scales: {
                    // Eje X
                    x: {
                        position: 'center',
                        ticks: {
                            color: 'white',
                            maxRotation: 0,
                            minRotation: 0
                        },
                        grid: {
                            color: function(context){
                                if(context.tick.value === 0){
                                    return 'white';
                                }
                                return 'rgba(255,255,255,0.1)';
                            }
                        }
                    },
                    // Eje Y
                    y: {
                        position: 'center',
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: function(context){
                                if(context.tick.value === 0){
                                    return 'white';
                                }
                                return 'rgba(255,255,255,0)';
                            }
                        }
                    }
                }
            }
        });
    }
}