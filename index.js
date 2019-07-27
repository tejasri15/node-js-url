var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);
const Store = require('data-store');
const store = new Store({ path: 'config.json' });
 
store.set({'year':qdata.year});store.set({'month': qdata.month}); 
console.log(store.data);  
console.log(store.get());
console.log(store.data);