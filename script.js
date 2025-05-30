/*PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()

PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!
*/

const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]
/*
  let resultLocation = [];
  function locationSearch() { 
    let location = document.getElementById("location").value;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].location.toLowerCase().includes(location.toLowerCase())) 
        resultLocation.push(jobs[i].title);
      }}
    console.log(resultLocation);
  
  let resultTitle = [];
  function titleSearch() {
    let title = document.getElementById("title").value;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].title.toLowerCase().includes(title.toLowerCase())) 
        resultTitle.push(jobs[i].location);
      }}
    console.log(resultTitle);
    */

    function locationSearch() {
      let location = document.getElementById("location").value;
      let resultBox = document.getElementById("result1");
      let result = [];
    
      for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].location.toLowerCase().includes(location.toLowerCase())) {
          result.push(jobs[i].title);
        }
      }
    
      if (result.length > 0) {
        resultBox.innerHTML = "<ol>" + result.map(title => `<li>${title}</li>`).join('') + "</ol>";
      } else {
        resultBox.innerHTML = "<p style='text-align: center; padding: 20px;'> Nessun lavoro trovato per la località inserita.";
      }
    }
    function titleSearch() {
      let title = document.getElementById("title").value;
      let resultBox = document.getElementById("result2");
      let result = [];
    
      for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].title.toLowerCase().includes(title.toLowerCase())) {
          result.push(jobs[i].location);
        }
      }
    
      if (result.length > 0) {
        resultBox.innerHTML = "<ol>" + result.map(location => `<li>${location}</li>`).join('') + "</ol>";
      } else {
        resultBox.innerHTML = "<p style='text-align: center; padding: 20px;'> Nessun lavoro trovato per il titolo inserito.";
      }
    }
    function locationTitleSearch() {
      let location = document.getElementById("location").value;
      let title = document.getElementById("title").value;
      let resultBox = document.getElementById("result3");
      let result = [];
    
      for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].location.toLowerCase().includes(location.toLowerCase()) && jobs[i].title.toLowerCase().includes(title.toLowerCase())) {
          result.push(jobs[i]);
        }
      }
    
      if (result.length > 0) {
        resultBox.innerHTML = "<ol>" + result.map(job => `<li>${job.title} - ${job.location}</li>`).join('') + "</ol>";
      } else {
        resultBox.innerHTML = "<p style='text-align: center; padding: 20px;'>Nessun lavoro trovato per la località e il titolo inseriti.";
      }
    }