// var fruit = ["orange","ananas","banane"];
	// 	for(var i = 0 ; i < fruit.length; i++){
	// 		console.log(fruit[i]);
	// 	}
		
		 // var fruit = ["orange","ananas","banane"];
		 // 	fruit.push('pomme');
		 // 	console.log(fruit);

		 // var homme = {
		 // 	nom : "adjobi",
		 // 	premon : "micjel",
		 // 	age : 28,
		 // };

		 // console.log(homme.age);


		 // OBJET JAVASCRIPT
		 // var homme = new Object();
		 // homme.nom = "adjobi";
		 // homme.prenom = "michel";
		 // homme.age = 23;
		 // // METHODE DE L'OBJET JAVASCRIPT
		 // 	homme.marche = function(number)
		 // 	{

		 // 		while(number>0){
		 // 			console.log(number.toString() + "partir au wc");
		 // 			number--;
		 // 		}
		 		
		 // 	}
		 // 	homme.marche(4);


		 // FONCTION CONSTRUCTEUR

		 function homme(nom,prenom,age) {
		 	// body...
		 	this.name = nom;
		 	this.username = prenom;
		 	this.age = age;

		 	// methode
		 	this.marche = function(){

		 		console.log("marche" + this.name);
		 	}

		 }
		 	var jeune = new homme("frejus","atte",20);
		 	var femme = new homme("emma","grace",20);
		 	// console.log(femme);
		 	// console.log(jeune);

		 		jeune.marche(); // marche frejus
		 		femme.marche(); // marche grace

