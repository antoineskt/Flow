//ENREGISTREMENT DES DONNES DANS ASYNCSTORAGE
const saveData = async () => {
  //on trie que les jours selectionnés (true)
  const trueDays = Object.keys(daysOfWeek).filter((day) => daysOfWeek[day]);
  console.log(`je log truedays : ${trueDays}`); //lundi mardi
  console.log(`je log title : ${title}`);

  //ici on a juste des truedays et title on peut transormer le truedays en date réelle

  // Initialiser un objet pour stocker les dates et les titres
  const réelleDate = {};

  // Parcourir les jours de la semaine
  [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ].forEach((day, index) => {
    // Vérifier si le jour est sélectionné par l'utilisateur
    if (trueDays.includes(day)) {
      console.log(
        "le if parsedata fonctionne, inclut donc un jour de la semaine"
      );
      // Créer une date pour ce jour
      const date = moment().day(index + 1);
      console.log(`Création de la date, je log date : ${date}`);

      //mise au bon format
      const dateString = date.format("YYYY-MM-DD");
      console.log(`Création du bon format, je log datestring : ${dateString}`);

      //créer d'une nouvelle liste pour cette date sous la bonne forme
      réelleDate[dateString] = parsedData[0].title;
      console.log(`je log calendardata : ${JSON.stringify(calendarData)}`);
    }
  });
  console.log(
    "Fin du formatage avec date et titre, je log réelleDate :" + réelleDate
  );

  // Récupère les données actuelles de la clé "myKey"
  const currentData = await AsyncStorage.getItem("myKey");
  // Parse les données JSON
  let data = JSON.parse(currentData);
  let dataInKey = JSON.stringify(data);
  console.log("log de dataInKey : " + dataInKey);

  // si il n'y a pas de donnée dans la clef async on crée un nouvel objet
  if (!data) {
    console.log("pas de donné dans la clé");
    data = [];

    data.push(réelleDate);
    console.log("envoi de réelle date dans la cle");
    console.log(`voici le nv objet: ${JSON.stringify(réelleDate)}`);
  }

  // si il y a deja des données

  console.log("il y a deja des donnée(data) dans la cle");

  let dayExist = null;
  // vérifier si une date similaire existe deja : 
  // Parcourir toutes les propriétés de l'objet 
  for (let date in réelleDate) {
    if (myObj.hasOwnProperty(date)) {
      console.log("Une Date  similaire est trouvée :", date);
      // Faire quelque chose si la propriété est présente...
      dayExist = dayExistTrue;
      // verif si il y'a deja le même title dans cette date   

      console.log("ajout d'un titre à une habitude existante");
    }};
    

  if (dayExist === null) {
    console.log("Le jour séléctionné n'éxiste pas dans les datas de la cle");
    //ajout du nouvel objet dans l'objet existant 
    Object.assign(data, réelleDate);
    console.log("ajout réussi du nouvel objet dans l'objet" + data); 
  }

  

  // Enregistrez les données mises à jour
  await AsyncStorage.setItem("myKey", JSON.stringify(data));
  console.log(`maj de la clef réussie`);
  setTitle("");
  setDaysOfWeek({
    Lundi: false,
    Mardi: false,
    Mercredi: false,
    Jeudi: false,
    Vendredi: false,
    Samedi: false,
    Dimanche: false,
  });
  navigation.navigate("Homepage");
};
