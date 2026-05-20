Algoritmo AlgebraUniversitaria
	// Variables
	Definir a, b, c Como Real
	Definir discriminante Como Real
	Definir Xv, Yv Como Real
	// Ingreso de Datos
	// A
	Escribir 'Ingrese el Valor de A : '
	Leer a
	// B
	Escribir 'Ingrese el Valor de B : '
	Leer b
	// C
	Escribir 'Ingrese el Valor de C : '
	Leer c
	Escribir '---------------------------------'
	// Validar si es una función cuadratica
	Si a=0 Entonces
		// Si A vale 0 ya no existe x²
		Escribir 'No se trata de una función cuadrática'
	SiNo
		// Mostramos la funcion con los valores de a b c
		Escribir 'La función ingresada es:'
		Escribir 'f(x) = ', a, 'x² + ', b, 'x + ', c
		Escribir '---------------------------------'
		// Calculamos Discriminante
		// Formula D = b² - 4ac
		discriminante <- (b^2)-(4*a*c)
		Escribir 'Discriminante : ', discriminante
		// Determinamos las Raices :
		// D > 0 : Dos raíces reales distintas //  D = 0 : Una raíz doble // D < 0 : Raíces complejas
		Si discriminante>0 Entonces
			Escribir 'La Función tiene 2 Raíces Reales Distintas.'
		SiNo
			Si discriminante=0 Entonces
				Escribir 'La Función tiene una Raíz Doble'
			SiNo
				// discriminante < 0
				Escribir 'La Función tiene Raíces Complejas'
			FinSi
		FinSi
		// Calculamos el Vertice de la Parabola
		// Formulas
		Xv <- -b/(2*a)
		Yv <- a*(Xv^2)+b*Xv+c
		Escribir '---------------------------------'
		Escribir 'Vertice de la Parabola: '
		Escribir '(', Xv, ',', Yv, ')'
		// Determinamos la Concavidad
		// Abre hacia arriba
		Si a>0 Entonces
			Escribir 'La Parabola es concava hacia arriba'
		SiNo
			// Abre hacia abajo
			// a < 0
			Escribir 'La Parabola es concava hacia abajo'
		FinSi
		// Interseccion con el Eje Y
		// Cuando x = 0 ,  el valor es C
		Escribir '---------------------------------'
		Escribir 'Interseccion con el eje Y: (0,', c, ')'
	FinSi
FinAlgoritmo
