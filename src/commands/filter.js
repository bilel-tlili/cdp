

const filter = (data, criteria) => {
    const filtred = data.filter(country => {
        country.people = country.people.filter(p => {
            p.animals = p.animals.filter(animal => {
                return animal.name.toUpperCase().includes(criteria.toUpperCase());
            })
            return p.animals.length > 0;
        })
        return country.people.length > 0;
    });
    return filtred;
}

export default filter;