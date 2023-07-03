const loadCountries = () =>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHTML =countries.map(country =>getCountryHtml(country))
    //console.log(countriesHTML)
    const container =document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHtml = ({name,flags,area,region}) =>{
    return`
        <div class="country">
        <h2>${name.common}</h2>
        <p>Area:${area}</p>
        <p>Container:${region}</p>
        <img src="${flags.png}">
        </div>
    
    `
}

/*
original--
const getCountryHtml =country=>{
    return`
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
        </div>
    
    `
}

optional--1
const getCountryHtml =country=>{
    const{name,flags} =country
    return`
        <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
        </div>
    
    `
}
*/
loadCountries();