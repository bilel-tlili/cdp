

const count = (data) => {
  
   return  data.reduce((countedData , country )=>{
   let tmpCountry = {} ;
   let tmpPeople = {} ;
   tmpCountry.name = country.name ;

    country.people.forEach((people)=> {
    tmpCountry.people = tmpCountry.people || [] ;
    tmpPeople = {...people} 
    tmpPeople.name +=  ` [${tmpPeople.animals.length}]` 
    tmpCountry.people.push(tmpPeople)
   })
   countedData.push(tmpCountry) ;
   return countedData ;
   }, [])
}

export default count;