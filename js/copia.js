document.addEventListener('DOMContentLoaded', () =>{
    const random = getRandomInt(1,201);
    feachData(random);
})

const getRandomInt=(min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const feachData = async(id) => {
    try{
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json();
        pintCard(data);
    }
    catch(error){
    }
}

const pintCard  = (personaje) => {
        
        const main = document.querySelector('.content-main');
        const template = document.getElementById('grid-template').content;
        const clone = template.cloneNode(true);
        const fragment = document.createDocumentFragment();

        clone.querySelector('.img-api').setAttribute('src', personaje.image);
        clone.querySelector('#nombre').innerHTML = personaje.name;
        clone.querySelector('#especie').innerHTML = `${personaje.status} - <span>${personaje.species}</span>`;
        clone.querySelector('#lugar').innerHTML = personaje.location.name;
        clone.querySelector('#episodio').innerHTML = personaje.origin.name;

        fragment.appendChild(clone);
        main.appendChild(fragment);
        
}
