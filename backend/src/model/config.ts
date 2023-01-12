// import express, { Express, Request, Response, } from 'express';
// const router = express.Router();
// const Error = require("../error");
// import { ErrorType } from "./error";




// const save:any = {
//     stationName: 'divy', stationcity:'upleta'

// }

// const change = [{
//     "queryName" : "stationName",
//     "mongocolumn"  : "name"
// },
// {
//     "queryName" : "stationcity",
//     "mongocolumn" : "city",
// }
// ]


// let obj : any = {}

// const done = Object.keys(save);


// const users = done.forEach((x)=>{
//     // console.log(x);

//     const findconfig1:any =  change.find( a => a.queryName == x);
//     //  console.log('findconfig1', findconfig1);


//     const key = 'KeyName'; 
//      obj  = { 

//         ...obj,[findconfig1.mongocolumn]:save[x]
//     };
//     console.log(obj);

// });





// const FILTER_SCHEMA: any = [
//     { queryName: "stationName", mongocolumn: "Name" },
//     { queryName: "stationcity", mongocolumn: "City" },
// ];

// const handleSearchValues = (unFilteredData: any) => {
//     let filteredData = {};
//     Object.keys(unFilteredData).forEach((unFilteredKey) => {
//         const obj = FILTER_SCHEMA.find((a: any) => a.queryName == unFilteredKey);
//         filteredData = {
//             ...filteredData,
//             [obj.mongocolumn]: unFilteredData[unFilteredKey],
//         };
//     });
//     console.log(filteredData);
//     return filteredData;

// };
export const SortOrder = ["asc", "desc"]


const FILTER_SCHEMA: any = [
    { queryName: "stationName", mongocolumn: "Name" },
    { queryName: "stationcity", mongocolumn: "City" },

];
const extra = ["sortDir", "sortColumn", "pageSize", "pageNumber"]


export const handleSearchValues = (unFilteredData: any) => {
    let filteredData = {};
    Object.keys(unFilteredData).forEach((unFilteredKey) => {
        if (!extra.includes(unFilteredKey)) {
            const obj = FILTER_SCHEMA.find((a: any) => a.queryName == unFilteredKey);
            filteredData = {
                ...filteredData,
                [obj.mongocolumn]: unFilteredData[unFilteredKey],
            };
        }
    });
    return filteredData;
};

















