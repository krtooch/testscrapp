var express = require('express');
var scrapper= require('scrapper');
var ejs= require('ejs');
var app = express();
var tableauRes=scrapper.test();


   app
   .get('/', function (req, res) {
     res.render('index.ejs', {
       liste: tableauRes
     });
   })
   .listen(8082);
// var osmosis = require('osmosis');
// var Firebase = require("firebase");
//var listegocar=[];
// var myFirebaseRef = new Firebase("https://scrapptest-7b9e3.firebaseio.com/");
//   myFirebaseRef.set({
//     title: "Hello World!",
//     author: "Firebase",
//     location: {
//       city: "San Francisco",
//       state: "California",
//       zip: 94103
//     }
//   });
//   myFirebaseRef.child("location/city").on("value", function(snapshot) {
//     alert(snapshot.val());  // Alerts "San Francisco"
//   });
//
// for (var i=1; i<3; i++){
//   osmosis.get('http://gocar.be/fr/autovlan/voiture-occasion/toutes-marques/tous-modele/page'+i+'?country=be&sort=upsellOnTop%3ADESC||days_in_stock%3ADESC&ctype=1&manufacturer=&model=&searchstring=&build=&zip=&radius=500&warranty_program=&mkey=G1-21203-895645&dkey=&_qualityLabel=&km_from=101&km_to=150000&reg_date_from=&reg_date_to=2009&price_from=&price_to=&gas=&kw_from=&kw_to=&_hp_from=&_hp_to=&gears=&doors_grouped=&seats=&euronorm=&age=&private_ad=1&_private_ad=1&color=&accident=')
//   .find('.item-vehicle__description a:first-child')
//   .follow('@href')
//   .set({prix:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(1) > div.cost > div',
//   nom:'.page_vehicle-details_main_head h2',
//   couleur:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(7) > span',
//   kilometrage:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(3) > span:nth-child(2)',
//   annee:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(4) > span:nth-child(2)',
//   carburant:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(1) > span:nth-child(2)',
//   categorie:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(1) > span',
//   puissance:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(2) > span',
//   porte:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(4) > span',
//   dateannonce:'body > div.root-a > section > article>div:nth-child(1)',
//   phone:'body > div.root-a > section > div:nth-child(5) > section > article > div.box_seller-details > div > div > p.showtel > span > img @data-src',
//   ville:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(2)',
//   codepostal:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(1)',
//   equipement:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(2) > ul'})
//   .then(function(context, data, next) {
//     data.type="";
//     for(var j=2; j<data.nom.split(" ").length; j++){
//       data.type=data.type+data.nom.split(" ")[j]+" "
//     };
//     data.phone ="http://gocar.be"+data.phone;
//     //  data.url= document.request.url;
//     //   console.log(data.url);
//     data.marque=data.nom.split(" ")[1];
//     data.url = context.doc().request.href;
//     data.equipement= data.equipement.split('\t').join('').split('\n');
//     data.idannonce= "GC_"+ data.url.split("details-")[1].split("?")[0];
//     listegocar.push(data);
//   })
// }


// for(var i=1; i<4; i++){
//   osmosis.get('http://www.kapaza.be/fr/auto?pe=150000&rs=2009&me=149999&f=p&o='+i)
//   .find('#hl li[title]>a')
//   .follow('@href')
//   .set({prix:'#adview > div.AdWrapper > div:nth-child(1) > div:nth-child(3) > div.AdParams > ul.price_location_adparams > li:nth-child(1) > strong',
//   nom:'h1',
//   //couleur:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(7) > span',
//   // kilometrage:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(3) > span:nth-child(2)',
//   // annee:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(4) > span:nth-child(2)',
//   // carburant:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(1) > span:nth-child(2)',
//   // categorie:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(1) > span',
//   // puissance:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(2) > span',
//   // porte:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(4) > span',
//   // dateannonce:'body > div.root-a > section > article>div:nth-child(1)',
//   // phone:'body > div.root-a > section > div:nth-child(5) > section > article > div.box_seller-details > div > div > p.showtel > span > img @data-src',
//   // ville:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(2)',
//   // codepostal:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(1)',
//   // equipement:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(2) > ul'
// })
//   .then(function(context, data, next) {
//
//     console.log(data);
    // data.type="";
    // for(var j=2; j<data.nom.split(" ").length; j++){
    //   data.type=data.type+data.nom.split(" ")[j]+" "
    // };
    // data.phone ="http://gocar.be"+data.phone;
    // //  data.url= document.request.url;
    // //   console.log(data.url);
    // data.marque=data.nom.split(" ")[1];
    // data.url = context.doc().request.href;
    // data.equipement= data.equipement.split('\t').join('').split('\n');
    // data.idannonce= "GC_"+ data.url.split("details-")[1].split("?")[0];
    // listegocar.push(data);
//   })
//   .log(console.log)
//   .error(console.log)
//   .debug(console.log)
// }

  // osmosis.get('http://www.2ememain.be/autos/?km_stand__tot=160000&p=nl&p=be&language=nl&language=fr&bulk_user=0&offset=10')
  // .paginate('#page > main > div > div.view-layout.two-column-layout > div.page-layout.search-result-layout > div.content > div.main > div.navigation.pagination > nav > a')
  // .find('.listed-adv-item-link')
  // .follow('@href')
  // .set({prix:'#item-id > div.item-info > div.item-price > span',
  //  nom:'h1',
//   couleur:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(7) > span',
//   kilometrage:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(3) > span:nth-child(2)',
//   annee:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(4) > span:nth-child(2)',
//   carburant:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(1) > span:nth-child(2)',
//   categorie:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(1) > span',
//   puissance:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(2) > span',
//   porte:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(4) > span',
//   dateannonce:'body > div.root-a > section > article>div:nth-child(1)',
//   phone:'body > div.root-a > section > div:nth-child(5) > section > article > div.box_seller-details > div > div > p.showtel > span > img @data-src',
//   ville:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(2)',
//   codepostal:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(1)',
//   equipement:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(2) > ul'
//})
//   .then(function(context, data, next) {
//     console.log(data);
//     data.type="";
//     for(var j=2; j<data.nom.split(" ").length; j++){
//       data.type=data.type+data.nom.split(" ")[j]+" "
//     };
//     data.phone ="http://gocar.be"+data.phone;
//     //  data.url= document.request.url;
//     //   console.log(data.url);
//     data.marque=data.nom.split(" ")[1];
//     data.url = context.doc().request.href;
//     data.equipement= data.equipement.split('\t').join('').split('\n');
//     data.idannonce= "GC_"+ data.url.split("details-")[1].split("?")[0];
//     listegocar.push(data);
   //})
//.log(console.log)




  // osmosis.get('http://vehicul  //  .get('/', function (req, res) {
  //
  //  })es.autoscout24.be/?atype=C&fregfrom=2008&kmto=150000&cy=B&ustate=N,U&custtype=P&sort=age&desc=1&results=80&page=1&event=sort&dtr=s')
  // .find('a')
  // .log(console.log)
  // .debug(console.log);
//   .set('url')
//     .data(function(data){console.log(data);})
//   .follow('@href')
// .find('#detailsContent > div:nth-child(1) > h1')
//   .set('nom')
//   .then(function(context, data, next) {console.log(data)})
//    .log(console.log)
//    .error(console.log)
//    .debug(console.log);

  // .follow('@href')
  // .set({prix:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(1) > div.cost > div',
  // nom:'.page_vehicle-details_main_head h2',
  // couleur:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(7) > span',
  // kilometrage:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(3) > span:nth-child(2)',
  // annee:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(4) > span:nth-child(2)',
  // carburant:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.basics > ul > li:nth-child(1) > span:nth-child(2)',
  // categorie:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(1) > span',
  // puissance:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(2) > span',
  // porte:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(1) > ul > li:nth-child(4) > span',
  // dateannonce:'body > div.root-a > section > article>div:nth-child(1)',
  // phone:'body > div.root-a > section > div:nth-child(5) > section > article > div.box_seller-details > div > div > p.showtel > span > img @data-src',
  // ville:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(2)',
  // codepostal:'body > div.root-a > section > article > div.page_vehicle-details_main_body > div.info > div:nth-child(2) > div.seller > div > p:nth-child(2) > span:nth-child(1)',
  // equipement:'body > div.root-a > section > div:nth-child(5) > section > article > div:nth-child(2) > ul'})
  // .then(function(context, data, next) {
  //   data.type="";
  //   for(var j=2; j<data.nom.split(" ").length; j++){
  //     data.type=data.type+data.nom.split(" ")[j]+" "
  //   };
  //   data.phone ="http://gocar.be"+data.phone;
  //   //  data.url= document.request.url;
  //   //   console.log(data.url);
  //   data.marque=data.nom.split(" ")[1];
  //   data.url = context.doc().request.href;
  //   data.equipement= data.equipement.split('\t').join('').split('\n');
  //   data.idannonce= "GC_"+ data.url.split("details-")[1].split("?")[0];
  //   listegocar.push(data);
  // })

//
//   var noodle = require('noodlejs');
//
//   noodle.query({
//     url: 'http://vehicules.autoscout24.be/?atype=C&fregfrom=2008&kmto=150000&cy=B&ustate=N,U&custtype=P&sort=age&desc=1&results=80&page=1&event=sort&dtr=s',
//     type: 'html',
// //    selector: '.articleListItem >div:nth-child(2) > a.adInLink',
//     extract: 'text'
//   })
//   .then(function (results) {
//     listegocar.push(results)
//   });
//
//    console.log(listegocar);
