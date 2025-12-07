function encodeBase62(number){
    let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQTUVWXYZ';
    let result = "";


    while(number >0){
        result = char[number%62] + result;
        number = Math.floor(number/62);

    }

    return result || "0";
}