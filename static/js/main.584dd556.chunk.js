(this["webpackJsonplexoj-al"]=this["webpackJsonplexoj-al"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lexojlogo.5052d102.png"},,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/baner.e2e08f80.png"},,,function(e,t,a){e.exports=a(55)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=(a(35),a(36),a(2)),o=a(3),s=a(14),m=a(4),u=a(6),p=(a(41),a(42),function(e){var t="/book/".concat(e.title);return r.a.createElement(i.c,{to:t,style:{textDecoration:"none"}},r.a.createElement("div",{className:"book-card"},r.a.createElement("img",{alt:"bookcard",src:e.img}),r.a.createElement("div",{className:"card-details"},r.a.createElement("p",{className:"card-title"},e.title),r.a.createElement("div",{className:"card-subdetails"},r.a.createElement("p",{className:"card-author"},e.author),r.a.createElement("div",{className:"card-views"},r.a.createElement("p",{className:"card-icon"},r.a.createElement("ion-icon",{name:"cart-sharp"})),r.a.createElement("p",null,e.views))))))}),d=a(27),E=a.n(d),h=(a(44),function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],l=a[1];return e.visible?r.a.createElement("div",{className:"menuContainer"},r.a.createElement("ion-icon",{onClick:e.closeMenu,name:"close"}),c?r.a.createElement("div",{className:"menuLogBar"},r.a.createElement("img",{alt:"user",src:"https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"}),r.a.createElement("span",null,"Elvi Miraka"),r.a.createElement(i.c,{to:"/llogaria",className:"links"},r.a.createElement("p",{onClick:function(){return l(!0)}},"Shiko Profilin"))):r.a.createElement("div",{className:"menuLogBar"},r.a.createElement(i.c,{to:"/hyr",className:"links"},r.a.createElement("p",null,"Hyr")),r.a.createElement(i.c,{to:"/regjistrohu",className:"links"},r.a.createElement("p",null,"Regjistrohu")))):null}),b=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(m.c)((function(e){return e.books.books}));return r.a.createElement("div",null,r.a.createElement("div",{className:"home-banner"},r.a.createElement("div",{className:"mobileMenu"},r.a.createElement("ion-icon",{onClick:function(){return l(!0)},name:"grid"}),r.a.createElement(h,{closeMenu:function(){return l(!1)},visible:c})),r.a.createElement("p",{className:"banner-title"},"Lexo pa limit"),r.a.createElement(i.c,{to:"/shfleto",style:{textDecoration:"none"}},r.a.createElement("p",{className:"banner-action"},"Shfleto librat"))),r.a.createElement("div",null,r.a.createElement("div",{className:"books-section"},r.a.createElement("p",{className:"section-h"},"Librat e fundit"),r.a.createElement("p",{className:"section-p"},"Lexo librat e sapo shtuar"),r.a.createElement("div",{className:"books-container-home"},o.map((function(e,t){return r.a.createElement(p,{title:e.title,author:e.author,views:e.views,img:e.img})}))),r.a.createElement("div",{className:"books-section section2"},r.a.createElement("div",null,r.a.createElement("p",{className:"section-h"},"Lexo Kudo"),r.a.createElement("p",{className:"section-p"},"Lexo nga kompjuteri, tableti ose celulari juaj.")),r.a.createElement("img",{alt:"banner",src:E.a})))))},g=(a(45),function(e){return r.a.createElement("div",{className:"pagination"},e.page>1?r.a.createElement("p",{onClick:function(){return e.onPress(e.page-1)},className:"arrow"},r.a.createElement("ion-icon",{name:"arrow-back-outline"})):null,r.a.createElement("p",null,e.page),r.a.createElement("p",{onClick:function(){return e.onPress(e.page+1)},className:"arrow"},r.a.createElement("ion-icon",{name:"arrow-forward-outline"})))}),f=(a(46),function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(1),o=Object(u.a)(i,2),s=o[0],d=o[1],E=Object(m.c)((function(e){return e.books.books}));return r.a.createElement("div",{className:"browse-screen"},r.a.createElement("div",{className:"categories-triggers"},r.a.createElement("p",{onClick:function(){return l(!1)}},"Te gjithe"),r.a.createElement("p",{onClick:function(){return l(!0)}},"Kategorite")),c?r.a.createElement("div",{className:"categories-container"},["Roman","Perralle","Novele","Fantashkence","Historik","Klasike","Shkencor","Biografi"].map((function(e,t){return r.a.createElement("p",{className:"category"},e)}))):null,r.a.createElement("div",{className:"books-container"},E.map((function(e,t){return r.a.createElement(p,{title:e.title,author:e.author,views:e.views,img:e.img})}))),r.a.createElement(g,{page:s,onPress:d}))}),k=(a(47),function(e){var t=Object(o.g)().title,a=Object(m.c)((function(e){return e.books.books})).filter((function(e){return e.title===t}))[0];console.log(a);var n=Object(m.b)();return r.a.createElement("div",{className:"book-screen"},r.a.createElement("div",{className:"book-info"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{alt:"book",src:a.img}),r.a.createElement("p",{onClick:function(){return n(function(e){return{type:"ADD_TO_CART",book:e}}(a))}},"Shto ne shporte")),r.a.createElement("div",{className:"book-details"},r.a.createElement("p",{className:"book-title"},a.title),r.a.createElement("div",null,r.a.createElement("p",{className:"book-detail"},"Autori",r.a.createElement("span",null,a.author)),r.a.createElement("p",{className:"book-detail"},"Publikuesi",r.a.createElement("span",null,a.publisher)),r.a.createElement("p",{className:"book-detail"},"Viti",r.a.createElement("span",null,a.year)),r.a.createElement("p",{className:"book-detail"},"Kategoria",r.a.createElement("span",null,a.category)),r.a.createElement("p",{className:"book-description"},a.description)))))}),v=a(12),N=a.n(v),j=(a(25),function(e){return r.a.createElement("div",{className:"sign-screen"},r.a.createElement("div",{className:"logo-side"},r.a.createElement("img",{alt:"logo",src:N.a})),r.a.createElement("div",{className:"sign-side"},r.a.createElement("div",{className:"sign-card"},r.a.createElement("p",null,"Hyr"),r.a.createElement("input",{type:"email",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"fjalekalimi"}),r.a.createElement("button",null,"Hyr"))))}),w=function(e){return r.a.createElement("div",{className:"sign-screen"},r.a.createElement("div",{className:"logo-side"},r.a.createElement("img",{alt:"logo",src:N.a})),r.a.createElement("div",{className:"sign-side"},r.a.createElement("div",{className:"sign-card"},r.a.createElement("p",null,"Regjistrohu"),r.a.createElement("input",{type:"text",placeholder:"emri"}),r.a.createElement("input",{type:"email",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"fjalekalimi"}),r.a.createElement("button",null,"Regjistrohu"))))},y=(a(48),a(49),function(e){return r.a.createElement("img",{className:"profileImgHeader",alt:"profileIcon",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCbQsmw9KpoBCi4Yabq8oau1Ksx3U8rmJBA&usqp=CAU"})}),O=(a(50),function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(m.c)((function(e){return e.books.books})),s=[];c.length>2&&(s=o.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})));return r.a.createElement("div",{onClick:function(t){return function(t){"input"!==t.target.name&&"book"!==t.target.name&&(console.log(t.target),e.onClick())}(t)},className:"searchComponent"},r.a.createElement("div",{className:"searchContainer"},r.a.createElement("input",{autoComplete:"off",autoFocus:!0,name:"input",onChange:function(e){return l(e.target.value)},className:"searchTitlesInput",type:"text"}),r.a.createElement("div",{name:"book",className:"booksResultsContainer"},s.slice(0,3).map((function(e){return r.a.createElement(i.c,{to:"/book/".concat(e.title),style:{width:"100%",color:"black",textDecoration:"none"}},r.a.createElement("div",{className:"bookResultContainer"},r.a.createElement("img",{className:"bookResultImage",alt:"bookImg",src:e.img}),r.a.createElement("p",{className:"bookResultTitle"},e.title),r.a.createElement("p",{className:"bookResultAuthor"},e.author)))})))))}),C=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"header-bar"},c?r.a.createElement(O,{onClick:function(){return l(!1)}}):null,r.a.createElement(i.c,{to:"/"},r.a.createElement("img",{className:"logo",alt:"logo",src:N.a})),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{onFocus:function(){return l(!0)},type:"text"}),r.a.createElement("ion-icon",{name:"search-outline"})),r.a.createElement("div",{className:"log-bar"},r.a.createElement(i.c,{to:"/llogaria",style:{textDecoration:"none"}},r.a.createElement(y,null))))},I=(a(51),function(e){var t=Object(o.f)();return t.pathname.includes("hyr")||t.pathname.includes("regjistrohu")||t.pathname.includes("shporte")||t.pathname.includes("llogaria")?null:r.a.createElement(i.c,{to:"/shporte",style:{textDecoration:"none"}},r.a.createElement("div",{className:"cartIconContainer"},r.a.createElement("ion-icon",{name:"cart-outline"})))}),x=a(28),q=function e(t,a,n,r,c,l,i,o,s){Object(x.a)(this,e),this.id=t,this.title=a,this.author=n,this.img=r,this.views=c,this.publisher=l,this.year=i,this.category=o,this.description=s},S={books:[new q(1,"Shqiperia dhe shqiptaret","Gent Ulqini","https://b3c4r2f7.stackpathcdn.com/18915-large_default/shqiperia-dhe-shqiptaret-3.jpg",200),new q(2,"Shqiptaret dhe princi Skanderbeg","Felice Cuniberti","https://www.botimpex.com/media/foto/books/thumb/a89cabb0bdc70b1746bbeebc54499303.jpg",300),new q(3,"Iliada","Homeri","https://www.dituria.al/uploads/books/medium_book1347881581.jpg",400,"Onufri",2015,"Klasike","Iliada (greqishte e lasht\xeb: \u1f38\u03bb\u03b9\u03ac\u03c2, Ili\xe1s) ose K\xebnga e Ilionit, \xebsht\xeb nj\xeb poem\xeb epike greke e lasht\xeb, n\xeb heksameter daktilik, tradicionalisht e atribuar Homerit. Vendosur gjat\xeb Luft\xebs s\xeb Troj\xebs \u2013 rrethimi dhjet\xebvje\xe7ar i qytetit t\xeb Troj\xebs (Ilioni) nga nj\xeb koalicion i shteteve ake \u2013 tregon p\xebr betejat dhe ngjarjet gjat\xeb jav\xebve t\xeb nj\xeb grindje midis mbretit Agamemnon dhe luft\xebtarit Akil.Edhe pse historia mbulon vet\xebm disa jav\xeb n\xeb vitin e fundit t\xeb luft\xebs, Iliada p\xebrmend shum\xeb nga legjendat greke rreth rrethimit; ngjarjet e m\xebhershme, si mbledhja e luft\xebtar\xebve p\xebr rrethimin, shkaku i luft\xebs dhe shqet\xebsimet q\xeb lidhen me t\xeb, duket t\xeb shfaqen af\xebr fillimit. Pastaj tregimi epik merr ngjarjet q\xeb profetizohen p\xebr t\xeb ardhmen, si\xe7 \xebsht\xeb vdekja e af\xebrt e Akilit dhe r\xebnia e Troj\xebs, megjith\xebse tregimi mbaron para se t\xeb ndodhin k\xebto ngjarje. Megjithat\xeb, pasi k\xebto ngjarje jan\xeb paracaktuar gjithnj\xeb e m\xeb shum\xeb, kur mbaron, poema ka dor\xebzuar nj\xeb tregim pak a shum\xeb t\xeb plot\xeb t\xeb Luft\xebs s\xeb Troj\xebs."),new q(4,"Aventurat e Hakelber Finit","Mark Twain","https://b3c4r2f7.stackpathcdn.com/12086-home_default/aventurat-e-hakelberi-finit.jpg",100),new q(5,"Mbreti Lir","Sheakspeare","https://bum.al/wp-content/uploads/2018/04/11_MBRETI_LIR.jpg",300),new q(6,"Ishulli i Thesarit","Stivenson","https://www.librat.al/show_logo.php?file_id=1441&uni=uniqueImg",300),new q(7,"Aventurat e Tom Sojerit","Mark Twain","https://b3c4r2f7.stackpathcdn.com/12087-large_default/aventurat-e-tom-sojerit.jpg",300),new q(8,"Odiseja","Homeri","https://b3c4r2f7.stackpathcdn.com/6819-large_default/odisea.jpg",700),new q(1,"Shqiperia dhe shqiptaret","Gent Ulqini","https://b3c4r2f7.stackpathcdn.com/18915-large_default/shqiperia-dhe-shqiptaret-3.jpg",200),new q(2,"Shqiptaret dhe princi Skanderbeg","Felice Cuniberti","https://www.botimpex.com/media/foto/books/thumb/a89cabb0bdc70b1746bbeebc54499303.jpg",300)]},T=a(29),A=a(10),L={cartItems:[]},R=(a(52),function(e){var t=Object(m.b)();return r.a.createElement("div",{className:"cartItemCard"},r.a.createElement("div",{className:"cartItemInfo"},r.a.createElement("img",{alt:"bookImage",src:e.img}),r.a.createElement("div",null,r.a.createElement("p",{className:"cartItemTitle"},"Titulli: ",e.title),r.a.createElement("p",{className:"cartItemPrice"},"Cmimi: 500 AL"),r.a.createElement("p",{className:"cartItemQuantity"},"Sasia: ",e.quantity))),r.a.createElement("div",{className:"cartItemDelete"},r.a.createElement("ion-icon",{onClick:function(){t({type:"REMOVE_FROM_CART",bookId:e.id})},name:"trash-outline"})))}),_=function(e){var t=Object(m.c)((function(e){return e.cartItems.cartItems})),a=0;return t.map((function(e){return a+=500*e.quantity})),console.log(t),r.a.createElement("div",{className:"cartPage"},r.a.createElement("div",{className:"cartItems"},t.map((function(e){return r.a.createElement(R,{img:e.img,title:e.title,quantity:e.quantity,id:e.id})}))),r.a.createElement("div",{className:"checkoutContainer"},r.a.createElement("p",{className:"checkoutAmount"},"Shuma totale: ",a," AL"),r.a.createElement("p",{className:"checkoutAction"},"Vazhdo me porosine")))},M=(a(53),function(e){var t=Object(m.c)((function(e){return e.books.books})),a=Object(n.useState)(!1),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement("div",{className:"accountPage"},r.a.createElement("div",{className:"accountLeft"},r.a.createElement("div",{className:"accountInfo"},r.a.createElement("div",{className:"userDetails"},r.a.createElement("img",{alt:"userimage",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCbQsmw9KpoBCi4Yabq8oau1Ksx3U8rmJBA&usqp=CAU"}),r.a.createElement("p",null,"Elvi Miraka"),r.a.createElement("div",{onClick:function(){i(!l)},className:"userMore"},r.a.createElement("ion-icon",{name:"ellipsis-vertical"})),l?r.a.createElement("div",{className:"accountSettings"},r.a.createElement("p",null,"Ndrysho te dhenat"),r.a.createElement("p",null,"Ndrysho fjalekalimin"),r.a.createElement("p",null,"Ckycu")):r.a.createElement("div",{className:"accountSettingsNone"},r.a.createElement("p",null,"Ndrysho te dhenat"),r.a.createElement("p",null,"Ndrysho fjalekalimin"),r.a.createElement("p",null,"Ckycu"))),r.a.createElement("div",{className:"userOrderHistory"},r.a.createElement("div",{className:"orderHistoryCard"},r.a.createElement("p",{className:"cardTitle"},"Porosi ne pritje"),r.a.createElement("p",null,"0 porosi")),r.a.createElement("div",{className:"orderHistoryCard"},r.a.createElement("p",{className:"cardTitle"},"Te gjitha porosite"),r.a.createElement("p",null,"1 porosi")))),r.a.createElement("div",{className:"booksSection"},r.a.createElement("div",{className:"section"},r.a.createElement("p",{className:"p"},"Te ruajtur"),r.a.createElement("div",{className:"booksSectionScroll"},t.map((function(e){return r.a.createElement("div",null,r.a.createElement(p,{title:e.title,author:e.author,views:e.views,img:e.img}))})))),r.a.createElement("div",{className:"section"},r.a.createElement("p",{className:"p"},"Duke lexuar"),r.a.createElement("div",{className:"booksSectionScroll"},t.map((function(e){return r.a.createElement("div",null,r.a.createElement(p,{title:e.title,author:e.author,views:e.views,img:e.img}))})))))))}),D=(a(54),[{name:"Na Kontaktoni",to:"/kontakte"},{name:"Rreth Nesh",to:"/rreth-nesh"},{name:"Privatesia",to:"/privatesia"},{name:"Transporti",to:"/transporti"},{name:"Lista e Librave",to:"/librat"}]),H=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"copyright"},"\xa9 Copyright 2020 Lexoj.al"),r.a.createElement("div",{className:"directions"},D.map((function(e){return r.a.createElement(i.c,{to:e.to,style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null,e.name))}))))},P=Object(s.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e},cartItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=t.book,n=e.cartItems.filter((function(e){return e.id===a.id}));if(n.length>0){n[0].quantity+=1;var r=n[0],c=e.cartItems.filter((function(e){return e.id!==a.id}));return c.push(r),Object(A.a)(Object(A.a)({},e),{},{cartItems:c})}var l=Object(A.a)(Object(A.a)({},a),{},{quantity:1});return Object(A.a)(Object(A.a)({},e),{},{cartItems:[].concat(Object(T.a)(e.cartItems),[l])});case"REMOVE_FROM_CART":return Object(A.a)(Object(A.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.bookId}))});case"CHANGE_QUANTITY":for(var i=e.cartItems,o=0;o<i.length;o++)i[o].id===t.bookId&&(i[o].quantity=t.quantity);return Object(A.a)(Object(A.a)({},e),{},{cartItems:i});default:return e}}}),K=Object(s.c)(P),B=function(e){return r.a.createElement(m.a,{store:K},r.a.createElement(i.b,null,r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:b}),r.a.createElement(o.a,{path:"/lexoj.al",exact:!0,component:b}),r.a.createElement(o.a,{path:"/shfleto",exact:!0,component:f}),r.a.createElement(o.a,{path:"/book/:title",exact:!0,component:k}),r.a.createElement(o.a,{path:"/hyr",exact:!0,component:j}),r.a.createElement(o.a,{path:"/regjistrohu",exact:!0,component:w}),r.a.createElement(o.a,{path:"/shporte",exact:!0,component:_}),r.a.createElement(o.a,{path:"/llogaria",exact:!0,component:M})),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.584dd556.chunk.js.map