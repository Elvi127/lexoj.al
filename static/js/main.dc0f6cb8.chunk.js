(this["webpackJsonplexoj-al"]=this["webpackJsonplexoj-al"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lexojlogo.5052d102.png"},,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/baner.e2e08f80.png"},,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a.n(i),o=(a(31),a(32),a(3)),c=a(2),s=a(12),m=a(8),u=(a(37),a(38),function(e){var t="/book/".concat(e.title);return r.a.createElement(o.b,{to:t,style:{textDecoration:"none"}},r.a.createElement("div",{className:"book-card"},r.a.createElement("img",{alt:"bookcard",src:e.img}),r.a.createElement("div",{className:"card-details"},r.a.createElement("p",{className:"card-title"},e.title),r.a.createElement("div",{className:"card-subdetails"},r.a.createElement("p",{className:"card-author"},e.author),r.a.createElement("div",{className:"card-views"},r.a.createElement("p",{className:"card-icon"},r.a.createElement("ion-icon",{name:"eye-sharp"})),r.a.createElement("p",null,e.views))))))}),p=a(24),h=a.n(p),d=function(e){var t=Object(m.b)((function(e){return e.books.books}));return r.a.createElement("div",null,r.a.createElement("div",{className:"home-banner"},r.a.createElement("p",{className:"banner-title"},"Lexo pa limit"),r.a.createElement(o.b,{to:"/shfleto",style:{textDecoration:"none"}},r.a.createElement("p",{className:"banner-action"},"Shfleto librat"))),r.a.createElement("div",null,r.a.createElement("div",{className:"books-section"},r.a.createElement("p",{className:"section-h"},"Librat e fundit"),r.a.createElement("p",{className:"section-p"},"Lexo librat e sapo shtuar"),r.a.createElement("div",{className:"books-container-home"},t.map((function(e,t){return r.a.createElement(u,{title:e.title,author:e.author,views:e.views,img:e.img})}))),r.a.createElement("div",{className:"books-section section2"},r.a.createElement("div",null,r.a.createElement("p",{className:"section-h"},"Lexo Kudo"),r.a.createElement("p",{className:"section-p"},"Lexo nga kompjuteri, tableti ose celulari juaj.")),r.a.createElement("img",{alt:"banner",src:h.a})))))},b=a(19),E=(a(40),function(e){return r.a.createElement("div",{className:"pagination"},e.page>1?r.a.createElement("p",{onClick:function(){return e.onPress(e.page-1)},className:"arrow"},r.a.createElement("ion-icon",{name:"arrow-back-outline"})):null,r.a.createElement("p",null,e.page),r.a.createElement("p",{onClick:function(){return e.onPress(e.page+1)},className:"arrow"},r.a.createElement("ion-icon",{name:"arrow-forward-outline"})))}),g=(a(41),function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(1),c=Object(b.a)(o,2),s=c[0],p=c[1],h=Object(m.b)((function(e){return e.books.books}));return r.a.createElement("div",{className:"browse-screen"},r.a.createElement("div",{className:"categories-triggers"},r.a.createElement("p",{onClick:function(){return l(!1)}},"Te gjithe"),r.a.createElement("p",{onClick:function(){return l(!0)}},"Kategorite")),i?r.a.createElement("div",{className:"categories-container"},["Roman","Perralle","Novele","Fantashkence","Historik","Klasike","Shkencor","Biografi"].map((function(e,t){return r.a.createElement("p",{className:"category"},e)}))):null,r.a.createElement("div",{className:"books-container"},h.map((function(e,t){return r.a.createElement(u,{title:e.title,author:e.author,views:e.views,img:e.img})}))),r.a.createElement(E,{page:s,onPress:p}))}),k=(a(42),function(e){var t=Object(c.g)().title,a=Object(m.b)((function(e){return e.books.books})).filter((function(e){return e.title===t}))[0];return console.log(a),r.a.createElement("div",{className:"book-screen"},r.a.createElement("div",{className:"book-info"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{alt:"book",src:a.img}),r.a.createElement("p",null,"Shto ne shporte")),r.a.createElement("div",{className:"book-details"},r.a.createElement("p",{className:"book-title"},a.title),r.a.createElement("div",null,r.a.createElement("p",{className:"book-detail"},"Autori",r.a.createElement("span",null,a.author)),r.a.createElement("p",{className:"book-detail"},"Publikuesi",r.a.createElement("span",null,a.publisher)),r.a.createElement("p",{className:"book-detail"},"Viti",r.a.createElement("span",null,a.year)),r.a.createElement("p",{className:"book-detail"},"Kategoria",r.a.createElement("span",null,a.category)),r.a.createElement("p",{className:"book-description"},a.description)))))}),f=a(10),j=a.n(f),v=(a(22),function(e){return r.a.createElement("div",{className:"sign-screen"},r.a.createElement("div",{className:"logo-side"},r.a.createElement("img",{alt:"logo",src:j.a})),r.a.createElement("div",{className:"sign-side"},r.a.createElement("div",{className:"sign-card"},r.a.createElement("p",null,"Hyr"),r.a.createElement("input",{type:"email",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"fjalekalimi"}),r.a.createElement("button",null,"Hyr"))))}),w=function(e){return r.a.createElement("div",{className:"sign-screen"},r.a.createElement("div",{className:"logo-side"},r.a.createElement("img",{alt:"logo",src:j.a})),r.a.createElement("div",{className:"sign-side"},r.a.createElement("div",{className:"sign-card"},r.a.createElement("p",null,"Regjistrohu"),r.a.createElement("input",{type:"text",placeholder:"emri"}),r.a.createElement("input",{type:"email",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"fjalekalimi"}),r.a.createElement("button",null,"Regjistrohu"))))},N=(a(43),function(e){return r.a.createElement("div",{className:"header-bar"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{alt:"logo",src:j.a})),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text"}),r.a.createElement("ion-icon",{name:"search-outline"})),r.a.createElement("div",{className:"log-bar"},r.a.createElement(o.b,{to:"/hyr",style:{textDecoration:"none"}},r.a.createElement("div",null,"Hyr")),r.a.createElement(o.b,{to:"/regjistrohu",style:{textDecoration:"none"}},r.a.createElement("div",null,"Regjistrohu"))))}),x=(a(44),function(e){var t=Object(c.f)();return t.pathname.includes("hyr")||t.pathname.includes("regjistrohu")||t.pathname.includes("shporte")?null:r.a.createElement(o.b,{to:"/shporte",style:{textDecoration:"none"}},r.a.createElement("div",{className:"cartIconContainer"},r.a.createElement("ion-icon",{name:"cart-outline"})))}),y=a(25),q=function e(t,a,n,r,i,l,o,c,s){Object(y.a)(this,e),this.id=t,this.title=a,this.author=n,this.img=r,this.views=i,this.publisher=l,this.year=o,this.category=c,this.description=s},S={books:[new q(1,"Shqiperia dhe shqiptaret","Gent Ulqini","https://b3c4r2f7.stackpathcdn.com/18915-large_default/shqiperia-dhe-shqiptaret-3.jpg",200),new q(2,"Shqiptaret dhe princi Skanderbeg","Felice Cuniberti","https://www.botimpex.com/media/foto/books/thumb/a89cabb0bdc70b1746bbeebc54499303.jpg",300),new q(3,"Iliada","Homeri","https://www.dituria.al/uploads/books/medium_book1347881581.jpg",400,"Onufri",2015,"Klasike","Iliada (greqishte e lasht\xeb: \u1f38\u03bb\u03b9\u03ac\u03c2, Ili\xe1s) ose K\xebnga e Ilionit, \xebsht\xeb nj\xeb poem\xeb epike greke e lasht\xeb, n\xeb heksameter daktilik, tradicionalisht e atribuar Homerit. Vendosur gjat\xeb Luft\xebs s\xeb Troj\xebs \u2013 rrethimi dhjet\xebvje\xe7ar i qytetit t\xeb Troj\xebs (Ilioni) nga nj\xeb koalicion i shteteve ake \u2013 tregon p\xebr betejat dhe ngjarjet gjat\xeb jav\xebve t\xeb nj\xeb grindje midis mbretit Agamemnon dhe luft\xebtarit Akil.Edhe pse historia mbulon vet\xebm disa jav\xeb n\xeb vitin e fundit t\xeb luft\xebs, Iliada p\xebrmend shum\xeb nga legjendat greke rreth rrethimit; ngjarjet e m\xebhershme, si mbledhja e luft\xebtar\xebve p\xebr rrethimin, shkaku i luft\xebs dhe shqet\xebsimet q\xeb lidhen me t\xeb, duket t\xeb shfaqen af\xebr fillimit. Pastaj tregimi epik merr ngjarjet q\xeb profetizohen p\xebr t\xeb ardhmen, si\xe7 \xebsht\xeb vdekja e af\xebrt e Akilit dhe r\xebnia e Troj\xebs, megjith\xebse tregimi mbaron para se t\xeb ndodhin k\xebto ngjarje. Megjithat\xeb, pasi k\xebto ngjarje jan\xeb paracaktuar gjithnj\xeb e m\xeb shum\xeb, kur mbaron, poema ka dor\xebzuar nj\xeb tregim pak a shum\xeb t\xeb plot\xeb t\xeb Luft\xebs s\xeb Troj\xebs."),new q(4,"Aventurat e Hakelber Finit","Mark Twain","https://b3c4r2f7.stackpathcdn.com/12086-home_default/aventurat-e-hakelberi-finit.jpg",100),new q(5,"Mbreti Lir","Sheakspeare","https://bum.al/wp-content/uploads/2018/04/11_MBRETI_LIR.jpg",300),new q(6,"Ishulli i Thesarit","Stivenson","https://www.librat.al/show_logo.php?file_id=1441&uni=uniqueImg",300),new q(7,"Aventurat e Tom Sojerit","Mark Twain","https://b3c4r2f7.stackpathcdn.com/12087-large_default/aventurat-e-tom-sojerit.jpg",300),new q(8,"Odiseja","Homeri","https://b3c4r2f7.stackpathcdn.com/6819-large_default/odisea.jpg",700),new q(1,"Shqiperia dhe shqiptaret","Gent Ulqini","https://b3c4r2f7.stackpathcdn.com/18915-large_default/shqiperia-dhe-shqiptaret-3.jpg",200),new q(2,"Shqiptaret dhe princi Skanderbeg","Felice Cuniberti","https://www.botimpex.com/media/foto/books/thumb/a89cabb0bdc70b1746bbeebc54499303.jpg",300)]},O=(a(45),function(e){return r.a.createElement("div",null,"Coming Soon")}),I=Object(s.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e}}),T=Object(s.c)(I),_=function(e){return r.a.createElement(m.a,{store:T},r.a.createElement(o.a,{basename:"/lexoj.al"},r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:d}),r.a.createElement(c.a,{path:"/lexoj.al",exact:!0,component:d}),r.a.createElement(c.a,{path:"/shfleto",exact:!0,component:g}),r.a.createElement(c.a,{path:"/book/:title",exact:!0,component:k}),r.a.createElement(c.a,{path:"/hyr",exact:!0,component:v}),r.a.createElement(c.a,{path:"/regjistrohu",exact:!0,component:w}),r.a.createElement(c.a,{path:"/shporte",exact:!0,component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.dc0f6cb8.chunk.js.map