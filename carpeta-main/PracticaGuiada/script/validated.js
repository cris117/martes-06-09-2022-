const validatedString = (cad) =>{
    //ternario
    let response = (cad.legth > 3) ? true : false;
    return response;
}

const validatedAverage = (value) =>{
    let result = (value >=0 && value <= 5) ? true : false;
    return result;
}

export { validatedString, validatedAverage};