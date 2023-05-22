
const SortStations = (data, type) =>{

    return data.sort((a,b)=>{
    switch (type) {
        case "id":
            return a.id - b.id
        case "name":
            return a.name.localeCompare(b.name);
        case "year":
            return a.year - b.year 
        default:
            return 0
    }
})

}


export default SortStations