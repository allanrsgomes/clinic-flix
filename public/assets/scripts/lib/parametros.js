function getParameters(){
    const queryString = window.location.search;

    if (queryString !== "") {

        const urlParams = new URLSearchParams(queryString);
        
        const parameters = [];

        for(const [index, value] of urlParams){
            parameters[index] = ( value.indexOf('%') > 0 ? value.replace(/%/g, " ") : value);
        }

        return parameters;
    }
}

function dataFiltering(array, prop, query) {

    return array.filter(
        (el) => {
            if (el.id == 0)
                return true;
            if (el.hasOwnProperty(prop) && el[prop] == query)
                return true;
            else
                return false;
        }
    );
}