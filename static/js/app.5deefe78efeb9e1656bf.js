webpackJsonp([0],{HZfJ:function(t,e){},IZno:function(t,e){},MGxy:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"link"},[n("router-link",{attrs:{to:"/"}},[t._v("Top")]),t._v(" "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("router-link",{attrs:{to:"/works"}},[t._v("Works")]),t._v(" "),n("router-link",{attrs:{to:"/languages"}},[t._v("Languages")]),t._v(" "),n("router-link",{attrs:{to:"/frameworks"}},[t._v("Frameworks")]),t._v(" "),n("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")]),t._v(" "),n("div",{staticClass:"clear"})],1)])},staticRenderFns:[]};var i=n("VU/8")({name:"myHeader"},o,!1,function(t){n("lZYm")},"data-v-13bf9098",null).exports,s=n("01M/");n.n(s).a.load({custom:{families:["Noto Sans Japanese"],urls:["https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"]},loading:function(){console.log("loading")},active:function(){console.log("active")},inactive:function(){console.log("inactive")},fontloading:function(t,e){console.log("fontloading",t,e)},fontactive:function(t,e){console.log("fontactive",t,e)},fontinactive:function(t,e){console.log("fontinactive",t,e)}});var r={name:"App",components:{myHeader:i}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("myHeader"),this._v(" "),e("transition",{attrs:{name:"page-fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(r,c,!1,function(t){n("rbSH")},null,null).exports,u=n("/ocq"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"share"},[e("h3",[this._v("Share")]),this._v(" "),e("div",{staticClass:"share-buttons"},[e("a",{attrs:{href:"http://twitter.com/share?url=https://naoki-kishi.github.io&text=Naoki Kishi's Portfolio Site&via=plus_kyoto",target:"_blank"}},[e("div",{staticClass:"button fa fa-twitter"})]),this._v(" "),e("a",{attrs:{href:"http://www.facebook.com/sharer.php?u=https://naoki-kishi.github.io",target:"_blank"}},[e("div",{staticClass:"button fa fa-facebook"})])])])}]};var v=n("VU/8")({name:"Top",title:" ",data:function(){return{msg:"Welcome to Naoki Kishi's Portfolio Site"}}},m,!1,function(t){n("YT0C")},"data-v-9024c0d2",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.title))])},staticRenderFns:[]};var _=n("VU/8")({name:"pageTitle",props:["title"]},h,!1,function(t){n("HZfJ")},"data-v-42fc2ac4",null).exports,p={name:"About",title:"About - ",components:{pageTitle:_}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"about-wrapper"},[e("pageTitle",{attrs:{title:"About"}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"self-introduction"},[n("table",[n("tbody",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("td",[t._v("岸 直輝 (Naoki Kishi)")])]),t._v(" "),n("tr",[n("th",[t._v("University")]),t._v(" "),n("td",[t._v("京都大学 工学部 電気電子工学科")])]),t._v(" "),n("tr",[n("th",[t._v("Birthday")]),t._v(" "),n("td",[t._v("1998/11/24")])]),t._v(" "),n("tr",[n("th",[t._v("GitHub")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/naoki-kishi",target:"_blank"}},[t._v("naoki-kishi")])])]),t._v(" "),n("tr",[n("th",[t._v("Qiita")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://qiita.com/plus_kyoto",target:"_blank"}},[t._v("plus_kyoto")])])]),t._v(" "),n("tr",[n("th",[t._v("Facebook")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://www.facebook.com/naokikishi.kyoto",target:"_blank"}},[t._v("岸 直輝")])])]),t._v(" "),n("tr"),n("tr",[n("th",[t._v("Twitter")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://twitter.com/plus_kyoto",target:"_blank"}},[t._v("@plus_kyoto")])])]),t._v(" "),n("tr",[n("th",[t._v("Blog")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://plus-blog.hatenablog.com",target:"_blank"}},[t._v("一人前のエンジニアになれますか？")])])]),t._v(" "),n("tr",[n("th",[t._v("Mail")]),t._v(" "),n("td",[t._v("naokikishi.kyoto[at]gmail.com")])])])])])}]};var k=n("VU/8")(p,f,!1,function(t){n("xCBc")},"data-v-360bfd73",null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box"},[n("h2",[t._v(t._s(t.item.name))]),t._v(" "),n("p",{staticClass:"box-content"},[t._v(t._s(t.item.content))]),t._v(" "),n("p",{staticClass:"sub-content"},[t._t("default")],2)])},staticRenderFns:[]};var d=n("VU/8")({name:"box",props:["item"]},g,!1,function(t){n("skJU")},"data-v-68762e5f",null).exports,b={name:"Languages",title:"Languages -",components:{pageTitle:_,box:d},data:function(){return{languages:[{name:"Python",content:"私が一番使っている言語です。Django REST Frameworkを使ったAPI実装やKU休講情報Bot(@KUBotver2)の開発などを行いました。",term:"2年"},{name:"Golang",content:"最近勉強を始めた言語です。REST APIやgRPCサーバーのサンプルを動かしたりして遊んでいます。",term:"1ヶ月"},{name:"HTML & SCSS",content:"このポートフォリオサイトを作成に当たって勉強しました。基本知識はProgateを使って学びました。",term:"3ヶ月"},{name:"JavaScript (ES6)",content:"こちらもポートフォリオサイト作成に当たって勉強しました。Progateを使って学んだ後は分からないところが見つかるたびに調べて勉強しました。",term:"3ヶ月"},{name:"C",content:"私が初めて学んだ言語です。高校生の時に1年ほど勉強しました。その後、大学の授業で基礎的なニューラルネットワークの実装などを行いました。",term:"2年"},{name:"Kotlin",content:"LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースにて使用しました。Spring Bootを用いたサーバーサイドAPIの実装やAndroidクライアントの作成を行いました。",term:"3ヶ月"}]}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"languages-wrapper"},[n("pageTitle",{attrs:{title:"Languages"}}),t._v(" "),n("div",{staticClass:"languages"},t._l(t.languages,function(e){return n("box",{key:e.name,attrs:{item:e}},[t._v("\n      使用歴 : "+t._s(e.term)+"\n    ")])}))],1)},staticRenderFns:[]};var w=n("VU/8")(b,C,!1,function(t){n("IZno")},"data-v-35e2f342",null).exports,S={name:"Works",title:"Works -",components:{pageTitle:_,box:d},data:function(){return{works:[{name:"えもじっく",content:"AWS Rekognitionの顔認識機能を使って、人の画像を絵文字に変換するWebサービスです。フロントエンドにはNuxt.jsを、バックエンドにはPythonを使い、Serverless Frameworkで構築しています。",link:"https://github.com/naoki-kishi/emojic.ch"},{name:"marshiv",content:"pixivの2018年冬インターンシップに参加した際に作成した画像ビューワーです。Intersection Observerを使ったイラストの無限スクロースやタグを用いた簡易的なレコメンドシステムを作成しました。",link:"https://plus-blog.hatenablog.com/entry/pixiv-intern-2018"},{name:"Portfolio Site",content:"今までフロントエンドの勉強をしたことがなかったので、勉強のために作成しました。デザインはiPhoneのApp StoreのようなドロップシャドウやInstagramのアイコンのようなグラデーションを意識しました。",link:"https://github.com/naoki-kishi/naoki-kishi.github.io"},{name:"KU休講情報Bot",content:"京都大学の休講情報を定期的につぶやくBotです。EC2上でcronを使って動かしています。Pythonで書かれており、休講情報はSeleniumとChrome Driverを使ってスクレイピングで取得しています。",link:"https://github.com/naoki-kishi/KUCancelAnnouncementBot"},{name:"SHABEL",content:"LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースで作成したメッセージングアプリです。STOMP over Websocketを使った通信やローカルDBにメッセージを保存して永続化することができます。",link:"https://github.com/line-school2018summer/kyoto-a-client"}]}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"works-wrapper"},[n("pageTitle",{attrs:{title:"Works"}}),t._v(" "),n("div",{staticClass:"works"},t._l(t.works,function(e){return n("box",{key:e.link,attrs:{item:e}},[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v("URL")])])}))],1)},staticRenderFns:[]};var y=n("VU/8")(S,x,!1,function(t){n("Za/B")},"data-v-269c07a4",null).exports,T={name:"Frameworks",title:"Frameworks -",components:{pageTitle:_,box:d},data:function(){return{tools:[{name:"Django",content:"Django REST Frameworkを使ったバックエンドAPIの実装の経験があります。また、Firebase Authenticationと連携させて認証ありAPIの実装も行いました。",term:"6ヶ月"},{name:"Vue.js / Nuxt.js",content:"ポートフォリオサイト作成のために勉強しました。.vueファイルを用いた単一コンポーネントやVue Routerを使ったSPAの実装を行いました。また、えもじっくの作成にはNuxt.jsを使いました。",term:"1ヶ月"},{name:"AWS",content:"EC2やECS、RDS、Lambda、CloudFront、Route53、RekognitionといったAWSの主要なサービスを使用したことがあります。",term:"3ヶ月"},{name:"Firebase",content:"Firebase Authenticationを使用したログイン機能の実装やJWTを使ったサーバーサイドとの連携の実装をしました。また、Cloud Firestoreを用いたデータベースの構築も行いました。",term:"3ヶ月"},{name:"GitHub",content:"基本的なgitの使い方を習得しています。また、プルリクエスト、レビューといった複数人での開発の経験があります。",term:"1年"},{name:"Docker",content:"Dockerやdocker-composeを用いて、コンテナ環境での開発を行っています。",term:"6ヶ月"},{name:"Circle CI",content:"Django REST Frameworkで作成したAPIの自動テストを行っています。Circle CI上のVMでdocker-composeを立ち上げてローカルと同じ環境でテストできるようにしています。",term:"3ヶ月"}]}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"tools-wrapper"},[n("pageTitle",{attrs:{title:"Frameworks & Tools"}}),t._v(" "),n("div",{staticClass:"tools"},t._l(t.tools,function(e){return n("box",{key:e.name,attrs:{item:e}},[t._v("\n      使用歴 : "+t._s(e.term)+"\n    ")])}))],1)},staticRenderFns:[]};var A=n("VU/8")(T,E,!1,function(t){n("QCsJ")},"data-v-1b86eb1e",null).exports,F={name:"Contacts",title:"Contacts -",components:{pageTitle:_}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"contacts-wrapper"},[e("pageTitle",{attrs:{title:"Contacts"}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacts"},[e("p",[this._v("私の"),e("a",{attrs:{href:"https://www.facebook.com/naokikishi.kyoto",target:"_blank"}},[this._v("Facebook")]),this._v("、"),e("a",{attrs:{href:"https://twitter.com/plus_kyoto",target:"_blank"}},[this._v("Twitter")]),this._v("、もしくはMail (naokikishi.kyoto[at]gmail.com)からお問い合わせください。")])])}]};var P=n("VU/8")(F,R,!1,function(t){n("MGxy")},"data-v-4f3a075a",null).exports;a.a.use(u.a);var U=new u.a({mode:"history",routes:[{path:"/",name:"Top",component:v},{path:"/about",name:"About",component:k},{path:"/languages",name:"Languages",component:w},{path:"/frameworks",name:"Frameworks",component:A},{path:"/works",name:"Works",component:y},{path:"/contacts",name:"Contacts",component:P}]}),I={mounted:function(){var t=this.$options.title;t&&(t="function"==typeof t?t.call(this):t,document.title=t+" Naoki Kishi's Portfolio")}},N=n("AYPi"),H=n.n(N);a.a.config.productionTip=!1,a.a.mixin(I),a.a.use(H.a,{id:"UA-127036212-1",router:U}),new a.a({el:"#app",router:U,components:{App:l},template:"<App/>"})},QCsJ:function(t,e){},YT0C:function(t,e){},"Za/B":function(t,e){},lZYm:function(t,e){},rbSH:function(t,e){},skJU:function(t,e){},xCBc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5deefe78efeb9e1656bf.js.map