const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Mi richiamo il container del DOM
const container = document.getElementById('container');

//Mi richiamo il select del DOM (il primo che trova con questa dicitura)
const selection = document.getElementsByTagName("select")[0];

//rendo visibili al refresh della pagina tutte le icone
iconeDOM(container, icone);
//riporto anche la selezione sul primo indice (quindi sul valore "all")
selection.selectedIndex = 0;

//Inserisco un ascoltatore di eventi sul select 
selection.addEventListener("change", function(){

    if (selection.value == "all") { //se impostata su "all" riporto tutte le icone
        
        iconeDOM(container, icone);

    } else {

        //Creo una variabile che racchiude i type corrispondenti al .value corrente
        let iconeFiltrate = icone.filter(oggetto => {

            if (oggetto.type == selection.value) { //se i valori in type corrispondo a quelli del valore corrente
                return true;                       //ritorno true, quindi automaticamente vengono pushati nella variabile creata iconeFiltrate 
            } 
            return false;

        });

        //mostro i risultati con la variabile corrente
        iconeDOM(container, iconeFiltrate);

    }

    } 
)






//Creo una funzione che richiama il container dove inserire gli elementi
function iconeDOM(container, icone) {

    let contenuto = "";

    //per ogni oggetto dell'array icone creo un contenuto che aggiungo alla sua variabile 
    icone.forEach(oggetto => {
        
        contenuto += `   <div class="icon">
                            <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name} ${oggetto.color}"></i>
                            <h3>${oggetto.name}</h3>
                        </div>  `;
    
    });

    //aggiungo tutti i contenuti creati dentro container
    container.innerHTML = contenuto;

}
