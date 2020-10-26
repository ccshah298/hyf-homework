const jWidth = 5;
const jDeep = 11;
const jHeight = 8;
const jVolumeInMeters = jWidth * jHeight * jDeep;
const jGardenSizeInM2 = 70;
const jHouseCost = 1000000;
jHousePrice = jVolumeInMeters * 2.5 * 1000 + jGardenSizeInM2 * 300
//console.log(' Julia house price ' + jHousePrice)
let jHousey;
if(jHouseCost >= jHousePrice){
    jHousey = 'Julia is Paying more';
}
else{
    jHousey = 'Julia is not paying more';
}
console.log(jHousey);



const pWidth = 8;
const pDeep = 10;
 const pHeight = 10;
 const pVolumeInMeters = pWidth * pHeight * pDeep;
const pGardenSizeInM2 = 100;
const pHouseCost = 2500000;
pHousePrice = pVolumeInMeters * 2.5 * 1000 + pGardenSizeInM2 * 300
//console.log(' Peter house price ' + pHousePrice)
let pHousey;
if(pHouseCost >= pHousePrice){
    pHousey = 'peter is Paying more';
}
else{
    pHousey = 'peter is not paying more';
}
console.log(pHousey);