
var mapping = {
    "australia": "Australian Dollar",
    "india": "Indian Rupee"
}

function currency(country) {
    console.log("executing currency");
    var currency = mapping[country.toLowerCase()];
    if(currency == undefined) {
        throw 400;
    }

    return currency;
}

module.exports = currency;