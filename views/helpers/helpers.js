var Handlebars = require('handlebars');
Handlebars.registerHelper('stateOfPerson', function(text) {
    if (text > 2012)
        return "<span class='green'> Permanent</span>";
    else
        return "<span class='red'>Probitionary</span>";
});