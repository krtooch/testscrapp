var phantom = require('phantom');

var sitepage = null;
var phInstance = null;

//var test='aaahttp://fr.ww3.autoscout24.be/classified/295824431?asrc=st|asppp'.match(/http:\/\/fr\.ww3\.autoscout24\.be\/classified\/[0-9]{9}\?asrc=st\|as/)

//console.log(test)

phantom.create()
    .then(instance => {
        phInstance = instance;
        return instance.createPage();
    })
    .then(page => {
        sitepage = page;
        return page.open('http://vehicules.autoscout24.be/?atype=C&fregfrom=2008&kmto=150000&cy=B&ustate=N,U&custtype=P&sort=age&desc=1&results=80&page=1&event=sort&dtr=s');
        //http://vehicules.autoscout24.be/?atype=C&fregfrom=2008&kmto=150000&cy=B&ustate=N,U&custtype=P&sort=age&desc=1&results=80&page=1&event=sort&dtr=s
    })
    .then(status => {
        //console.log(status);
        return sitepage.property('content');
    })
    .then(content => {
       var tab=content.match(/http:\/\/fr\.ww3\.autoscout24\.be\/classified\/[0-9]{9}\?asrc=st\|as/g);
        console.log(tab);
        sitepage.close();
        phInstance.exit();
    })
    .catch(error => {
      //  console.log(error);
        phInstance.exit();
    });
