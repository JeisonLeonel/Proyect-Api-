document.addEventListener('DOMContentLoaded', () =>{
    const random = getRandomInt(1,42);
    feachData(random);
})

const getRandomInt=(min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const feachData = async(pages) => {
    try{
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`)
        const data = await res.json();

        pintCard(data);
    }
    catch(error){
    }
}

    const main = document.getElementById('content-main');
    const template = document.getElementById('grid-template').content;
    const fragment = document.createDocumentFragment();
    
const pintCard  = data => {
    Object.values(data.results).forEach((personaje) => {
        console.log(personaje);

            template.querySelector('.img-api').setAttribute('src', personaje.image);
            template.querySelector('#nombre').innerHTML = personaje.name;
            template.querySelector('#especie').innerHTML = `${personaje.status} - <span>${personaje.species}</span>`;
            template.querySelector('#lugar').innerHTML = personaje.location.name;
            template.querySelector('#episodio').innerHTML = personaje.origin.name;

            const clone = template.cloneNode(true);
            fragment.appendChild(clone);
    })            
            main.appendChild(fragment); 
            console.log(main)
}
