import { countryList } from './countryList.js';

countryList.map((i) => {
    let list = `country name = ${i.name}  country-code = ${i.code}`
    console.log(list);
})
