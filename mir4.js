// DARK STEEL

	let minerada = 8.5042; // Cada Minerada 
	let dsporvez = 120; // Dark Steel por cada minerada
	let tempo = 60; 
	let meio_dia = 12;
	let dia = 24;

	let n1 = Number(minerada.toFixed(0));
	let n2 = Number(dsporvez.toFixed(0));
	let n3 = Number(tempo);

	let calculo1 = Number(n1 * n2);
	let n4 = Number(calculo1);

	let tempocalc = Number(tempo / n1);
	let n5 = Number(tempocalc);

	let calculo2 = Number(n5 * n2);
	let n6 = Number(calculo2);

	let n7 = Number(calculo2 * tempo);
	let n8 = Number(n7 * meio_dia);
	let n9 = Number(n7 * dia);

	let tempor = 30; // Tempo Restante em Minutos
	let n10 = Number(tempor.toFixed(0));
	let n11 = Number(n6 * n10);
	
	console.log("1 Minuto -", calculo2, "Dark Steel");
	console.log("1 Hora -", n7, "Dark Steel");
	console.log("12 Horas -", n8,  "Dark Steel");
	console.log("24 Horas -", n9, "Dark Steel");

