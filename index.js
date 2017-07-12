var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    port: '3000',
    host: 'localhost'
})
server.register([{
        register: require('vision')
    },
    {
        register: require('inert')
    }
])
server.views({
    engines: {
        hbs: require('handlebars')
    },
    path: __dirname + "/views",
    partialsPath: __dirname + "/views/partials",
    helpersPath: __dirname + "/views/helpers"
});
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        var data = {
            people: [
                { first_name: "Yehuda", last_name: "Katz", phone: '1234567890', member_since: 2012 },
                { first_name: "Carl", last_name: "Lerche", phone: '9989765432', member_since: 2005 },
                { first_name: "Alan", last_name: "Johnson", phone: '887965432', member_since: 2015 }
            ]
        }
        reply.view('index', data);
        //reply.view('partials/person', data.people[0]);
    }
})
server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});