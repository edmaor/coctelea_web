(function(){"use strict";var e={6079:function(e,t,i){var a=i(9242),l=i(3396);function s(e,t){const i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i)])}var o=i(89);const n={},r=(0,o.Z)(n,[["render",s]]);var c=r,d=i(2483),u=i(7139);const p={id:"landing"},h=(0,l._)("span",null,null,-1),g={class:"log-form"},m=(0,l._)("h2",null,"COCTELEA",-1),k={id:"log-buttons"},w={key:0,class:"form"},_=(0,l._)("p",null,null,-1),y={style:{color:"#F8F4EA","font-size":"18px"}},f=(0,l._)("button",{type:"submit"},"ENTRAR",-1),v={key:1,class:"form"},b=(0,l._)("br",null,null,-1),C={style:{color:"firebrick"}},E=(0,l._)("br",null,null,-1),I=(0,l._)("br",null,null,-1),S=(0,l._)("button",{type:"submit"},"REGISTRARSE",-1),x=(0,l._)("span",null,null,-1);function D(e,t,i,s,o,n){return(0,l.wg)(),(0,l.iD)("div",p,[h,(0,l._)("div",g,[m,(0,l._)("div",k,[(0,l._)("label",{class:(0,u.C_)({active:1===o.logtype})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.logtype=e),value:1,checked:""},null,512),[[a.G2,o.logtype]]),(0,l.Uk)("LOGIN")],2),(0,l._)("label",{class:(0,u.C_)({active:2===o.logtype})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.logtype=e),value:2},null,512),[[a.G2,o.logtype]]),(0,l.Uk)("REGISTER")],2)]),1===o.logtype?((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("form",{onSubmit:t[4]||(t[4]=(0,a.iM)(((...e)=>n.log_login&&n.log_login(...e)),["prevent"]))},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"nombre de usuario","onUpdate:modelValue":t[2]||(t[2]=e=>o.user.username=e)},null,512),[[a.nr,o.user.username]]),_,(0,l.wy)((0,l._)("input",{type:"password",placeholder:"contraseña","onUpdate:modelValue":t[3]||(t[3]=e=>o.user.password=e)},null,512),[[a.nr,o.user.password]]),(0,l._)("p",y,(0,u.zw)(o.loginError),1),f],32)])):((0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("form",{onSubmit:t[9]||(t[9]=(0,a.iM)(((...e)=>n.log_register&&n.log_register(...e)),["prevent"]))},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"nombre de usuario","onUpdate:modelValue":t[5]||(t[5]=e=>o.user.username=e)},null,512),[[a.nr,o.user.username]]),(0,l._)("p",null,(0,u.zw)(o.usrValErr),1),(0,l.wy)((0,l._)("input",{type:"password",placeholder:"contraseña","onUpdate:modelValue":t[6]||(t[6]=e=>o.user.password=e)},null,512),[[a.nr,o.user.password]]),b,(0,l._)("p",C,(0,u.zw)(o.pswdValErr),1),(0,l._)("label",null,[(0,l.Uk)("Fecha de nacimiento: "),(0,l.wy)((0,l._)("input",{type:"date","onUpdate:modelValue":t[7]||(t[7]=e=>o.birth=e)},null,512),[[a.nr,o.birth]])]),E,(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>o.agreement=e)},null,512),[[a.e8,o.agreement]]),(0,l.Uk)("Acepto las normas y condiciones de usuario")]),I,S],32)]))]),x])}i(7658);var U=i(8958),T=i.n(U),R=i(4161),O={name:"Start",data(){return{logtype:1,birth:null,agreement:!1,user:{id:"",username:"",password:"",icon:"",fav_cocktails:[],author_cocktails:[]},auxu:null,loginError:"",pswdValErr:"",usrValErr:""}},methods:{async getUserByName(){try{let e=await fetch("https://server.coctelea.app/coctelea_api/user/name/"+this.user.username);return!!e.ok&&(this.auxu=await e.json(),!0)}catch(e){console.error("Error:",e)}},async encrypt(e){const t=10;return await T().hash(e,t)},validateUser(){const e=/^\S+$/.test(this.user.username);return this.user.username.length<4?(this.usrValErr="Username must be at least 4 characters long and not contain spaces",!1):e?(this.usrValErr="",!0):(this.usrValErr="Username cannot contain blank spaces",!1)},validatePassword(){let e=this.user.password;const t=8,i=/[A-Z]/.test(e),a=/[a-z]/.test(e),l=/\d/.test(e);return e.length<t?(this.pswdValErr="Password should be at least "+t+" characters long.",!1):i?a?l?(this.pswdValErr="",!0):(this.pswdValErr="Password should contain at least one digit.",!1):(this.pswdValErr="Password should contain at least one lowercase letter.",!1):(this.pswdValErr="Password should contain at least one uppercase letter.",!1)},async log_login(){await this.getUserByName()?T().compare(this.user.password,this.auxu.password,(async(e,t)=>{e&&console.error(e),t?(this.user=this.auxu,window.user=this.user,await Ei.push({name:"app"})):this.loginError="User or password incorrect"})):this.loginError="User or password incorrect"},async log_register(){if(!await this.getUserByName()&&this.validatePassword()&&this.validateUser()){this.user.password=await this.encrypt(this.user.password);try{await R.Z.post("https://server.coctelea.app/coctelea_api/users",this.user);this.user={id:"",username:"",password:"",icon:"",fav_cocktails:[],author_cocktails:[]},this.logtype=1}catch(e){console.log(e)}}}}};const A=(0,o.Z)(O,[["render",D]]);var L=A,N=i.p+"img/icon.87510a95.png",V=i.p+"img/feature_save_cocktails.391c5154.png",M=i.p+"img/feature_create_cocktail.a82902ab.png",z=i.p+"img/feature_explore_cocktails.e46d5c28.png";const W={class:"landing-web"},j=(0,l._)("h1",{style:{"font-size":"72px",color:"rgba(248,244,234,0.88)"}},"COCTELEA",-1),Y=(0,l._)("span",{class:"material-symbols-outlined"},"polyline",-1),G={class:"web-content"},P={class:"web-section"},B=(0,l._)("div",{class:"subsection"},[(0,l._)("h3",null,"COCTELEA"),(0,l._)("p",null,[(0,l.Uk)("Most of the people think that cocktails are overly complicated or require many expensive ingredients, but we want to demonstrate that's not true."),(0,l._)("br"),(0,l.Uk)("So we created "),(0,l._)("strong",null,"COCTELEA"),(0,l.Uk)("... Our passion for mixology and the desire to provide cocktail lovers with an intuitive and comprehensive tool prompted us to create this app. We want to show that enjoying delicious cocktails does not have to be complicated or expensive.")]),(0,l._)("img",{src:N,alt:"",class:"subsection-resource"})],-1),H={class:"subsection"},K=(0,l._)("span",{class:"subsection-resource material-symbols-outlined"},"search",-1),Z={class:"subsection"},F=(0,l._)("h3",null,[(0,l._)("strong",null,"Create")],-1),q=(0,l._)("span",{class:"subsection-resource material-symbols-outlined"},"add_circle",-1),J={class:"subsection"},$=(0,l._)("span",{class:"subsection-resource material-symbols-outlined"},"ios_share",-1),Q={class:"subsection"},X=(0,l._)("h3",null,'Why "Coctelea"',-1),ee=(0,l._)("img",{src:N,alt:"",class:"subsection-resource"},null,-1),te={style:{margin:"72px 0 0"}},ie=(0,l._)("span",{class:"material-symbols-outlined"},"polyline",-1),ae=(0,l.uE)('<div id="subsection-features" class="web-section"><h3 class="features-tittle">Features</h3><div class="feature"><h3>Save your favourites</h3><p>Save your favourite cocktails, access them faster from your profile</p><img class="feature-resource" src="'+V+'" alt=""></div><div class="feature"><h3>Create your own</h3><p>Create your own cocktails, share them with your friends and the rest of the community.</p><img class="feature-resource" src="'+M+'" alt=""></div><div class="feature"><h3>Explore cocktails</h3><p>Comfortable and easy search system for cocktails by ingredients or name</p><img class="feature-resource" src="'+z+'" alt=""></div></div>',1),le=(0,l._)("h3",null,"Try Now",-1),se={class:"button-container"},oe=(0,l._)("a",{class:"pseudo-button",href:"https://play.google.com/store/games?gl=ES&utm_source=emea_Med&utm_medium=hasem&utm_content=Dec2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-es-1001280-Med-hasem-py-Evergreen-Dec2020-Text_Search_BKWS-test_ctrl_ca%7CONSEM_kwid_43700071469866771&gclid=EAIaIQobChMIoOzGo8CO_wIV1AUGAB00CQYCEAAYASAAEgIPyvD_BwE&gclsrc=aw.ds"},[(0,l._)("img",{alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",style:{width:"250px",height:"100px","margin-bottom":"20px"}})],-1),ne=(0,l._)("span",{class:"material-symbols-outlined"},"polyline",-1);function re(e,t,i,a,s,o){const n=(0,l.up)("router-link"),r=(0,l.up)("STRONG");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",W,[j,(0,l.Wm)(n,{to:"/start",class:"router-button"},{default:(0,l.w5)((()=>[(0,l.Uk)("TRY IT "),Y])),_:1})]),(0,l._)("div",G,[(0,l._)("div",P,[B,(0,l._)("div",H,[(0,l._)("h3",null,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Discover")])),_:1})]),(0,l._)("p",null,[(0,l.Uk)("With "),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("COCTELEA")])),_:1}),(0,l.Uk)(", you can explore a world of classic cocktail recipes and discover new creations. Our extensive database will allow you to find popular and lesser known cocktails, so you always have something exciting to try.")]),K]),(0,l._)("div",Z,[F,(0,l._)("p",null,[(0,l.Uk)(" There are no limits to your creativity in "),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("COCTELEA.")])),_:1}),(0,l.Uk)(" You can use our app to create your own custom cocktail recipes. Experiment with different ingredients, measurements, and preparation techniques for unique and surprising results. Unleash your talent as a bartender and surprise your friends and family with your creations! ")]),q]),(0,l._)("div",J,[(0,l._)("h3",null,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Share")])),_:1})]),(0,l._)("p",null,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("COCTELEA")])),_:1}),(0,l.Uk)(" not only gives you the ability to discover and create cocktails, but also allows you to share your favorite recipes with the community. You will be able to show your skills and knowledge in mixology by sharing your creations with other "),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("COCTELEA")])),_:1}),(0,l.Uk)(" users.")]),$]),(0,l._)("div",Q,[X,(0,l._)("p",null,[(0,l.Uk)("Our app was born out of a passion for mixology and the desire to provide cocktail lovers with an intuitive and complete tool. Designed to make it easy to find existing cocktails, as well as encourage creativity in creating new recipes, our app is the perfect companion for those who want to explore, enjoy and share the art of mixology from the comfort of their home or anywhere. "),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Download COCTELEA")])),_:1}),(0,l.Uk)(" now and immerse yourself in the exciting world of cocktails. Whether you're at home or on the go, our app will be your perfect companion to explore, enjoy, and share the art of mixology. Take your cocktail experiences to the next level with "),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)("COCTELEA!")])),_:1})]),ee])]),(0,l._)("div",te,[(0,l.Wm)(n,{to:"/start",class:"router-button"},{default:(0,l.w5)((()=>[(0,l.Uk)("TRY IT "),ie])),_:1})]),ae]),(0,l._)("div",null,[le,(0,l._)("div",se,[oe,(0,l.Wm)(n,{to:"/",class:"router-button"},{default:(0,l.w5)((()=>[(0,l.Uk)("TRY IT "),ne])),_:1})])])],64)}var ce={name:"WebHome"};const de=(0,o.Z)(ce,[["render",re]]);var ue=de;const pe={id:"coctelea-home"},he={id:"menu",role:"navigation"},ge={type:"checkbox",ref:"check_menu"},me=(0,l._)("span",null,null,-1),ke=(0,l._)("span",null,null,-1),we=(0,l._)("span",null,null,-1),_e={id:"links"},ye=(0,l._)("span",{class:"material-symbols-outlined"},"logout",-1),fe=(0,l._)("span",{class:"material-symbols-outlined"},"home",-1),ve=(0,l._)("span",{class:"material-symbols-outlined"},"search",-1),be=(0,l._)("span",{class:"material-symbols-outlined"},"person",-1),Ce=(0,l._)("h1",{style:{color:"#8E3A59"}},"COCTELEA",-1),Ee={id:"app-content"};function Ie(e,t,i,a,s,o){const n=(0,l.up)("router-link"),r=(0,l.up)("router-view"),c=(0,l.up)("Landing");return(0,l.wg)(),(0,l.iD)("div",pe,[(0,l._)("nav",he,[(0,l._)("input",ge,null,512),me,ke,we,(0,l._)("div",_e,[(0,l.Wm)(n,{to:"/start",onClick:o.logOut,title:"CERRAR SESION"},{default:(0,l.w5)((()=>[ye])),_:1},8,["onClick"]),(0,l.Wm)(n,{to:"/app",onClick:o.closeMenu,title:"INICIO"},{default:(0,l.w5)((()=>[fe])),_:1},8,["onClick"]),(0,l.Wm)(n,{to:"/cocktails",onClick:o.closeMenu,title:"BUSCAR"},{default:(0,l.w5)((()=>[ve])),_:1},8,["onClick"]),(0,l.Wm)(n,{to:"/profile",onClick:o.closeMenu,title:"PERFIL"},{default:(0,l.w5)((()=>[be])),_:1},8,["onClick"])])]),Ce,(0,l._)("div",Ee,[(0,l._)("div",null,["/app"!==e.$route.path?((0,l.wg)(),(0,l.j4)(r,{key:0})):((0,l.wg)(),(0,l.j4)(c,{key:1}))])])])}const Se={id:"home-landing"};function xe(e,t,i,a,s,o){return(0,l.wg)(),(0,l.iD)("div",Se,[(0,l._)("div",null,[(0,l._)("h3",null,"Welcome "+(0,u.zw)(s.user.username),1)])])}var De={name:"Landing",data(){return{user:window.user}}};const Ue=(0,o.Z)(De,[["render",xe]]);var Te=Ue,Re={name:"CocteleaHome",components:{Landing:Te},methods:{closeMenu(){this.$refs.check_menu.checked=!1},logOut(){window.user=null}}};const Oe=(0,o.Z)(Re,[["render",Ie]]);var Ae=Oe,Le=i.p+"img/cocktail_model.87510a95.png";const Ne={class:"content"},Ve={id:"client-tools"},Me={key:0,id:"cocktail-details"},ze=["src"],We={key:1,src:Le,id:"cocktail-image"},je={style:{display:"inline-flex",margin:"16px","flex-flow":"row-reverse"}},Ye={id:"cocktail-ingredients"},Ge=["src"],Pe={id:"cocktail-steps"},Be=(0,l._)("h3",{style:{"text-align":"start"}},"PASOS",-1),He={key:1},Ke=(0,l._)("h1",null,"PREPARING YOUR COCKTAIL",-1),Ze=[Ke];function Fe(e,t,i,a,s,o){return(0,l.wg)(),(0,l.iD)("div",Ne,[(0,l._)("div",Ve,[(0,l._)("span",{class:(0,u.C_)([{saved:s.isSaved},"material-symbols-outlined"]),onClick:t[0]||(t[0]=(...e)=>o.toggleSave&&o.toggleSave(...e)),style:{color:"#607d61","font-size":"24px"}},"bookmark",2)]),s.cocktailDetails?((0,l.wg)(),(0,l.iD)("div",Me,[s.cocktailDetails.icon?((0,l.wg)(),(0,l.iD)("img",{key:0,src:s.cocktailDetails.icon,alt:"la imagen del coctel",id:"cocktail-image"},null,8,ze)):((0,l.wg)(),(0,l.iD)("img",We)),(0,l._)("div",je,[(0,l._)("h2",null,(0,u.zw)(s.cocktailDetails.name),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.cocktailDetails.tags,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:(0,u.C_)(["tag",e.id])},(0,u.zw)(e.id),3)))),128))]),(0,l._)("h3",null,(0,u.zw)(s.cocktailDetails.description),1),(0,l._)("div",Ye,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.cocktailIngredientsList,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l._)("img",{src:e.symbol,alt:"",class:"ingredient-icon"},null,8,Ge),(0,l._)("h5",null,(0,u.zw)(e.id),1),(0,l._)("h5",null,(0,u.zw)(e.cant)+" "+(0,u.zw)(e.measure),1)])))),128))]),(0,l._)("div",Pe,[Be,(0,l._)("ol",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.cocktailDetails.recipe.split("/&ve&/"),(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},(0,u.zw)(e),1)))),128))])])])):((0,l.wg)(),(0,l.iD)("div",He,Ze))])}var qe={data(){return{id:"",cocktailDetails:{},cocktailIngredientsList:[],steps:[],isSaved:!1}},created(){this.getCocktailById(),this.isSaved=-1!==window.user.fav_cocktails.findIndex((e=>e.id===this.id))},async beforeUnmount(){try{await R.Z.put("https://server.coctelea.app/coctelea_api/user/"+window.user._id,window.user)}catch(e){console.log(e)}},methods:{async getCocktailById(){this.id=this.$route.params.id;let e=await fetch("https://server.coctelea.app/coctelea_api/cocktail/"+this.id);if(!e.ok)throw Error("could not fetch cocktail: "+this.id);this.cocktailDetails=await e.json(),console.log(this.cocktailDetails),await this.getCocktailIngredients()},async getCocktailIngredients(){try{for(let e of this.cocktailDetails.ingredients){let t=await fetch("https://server.coctelea.app/coctelea_api/ingredient/"+e.id);if(!t.ok)throw Error("Ingredient not found: "+e.id);this.cocktailIngredientsList.push(Object.assign({},e,await t.json()))}}catch(e){console.log(e.message)}},async toggleSave(){let e=window.user.fav_cocktails.findIndex((e=>e.id===this.id));-1===e?window.user.fav_cocktails.push({id:this.id}):window.user.fav_cocktails.splice(e,1),this.isSaved=!this.isSaved}}};const Je=(0,o.Z)(qe,[["render",Fe]]);var $e=Je;const Qe=(0,l._)("div",null,[(0,l._)("h2",null,"404"),(0,l._)("h3",null,"Page not found")],-1),Xe=[Qe];function et(e,t){return(0,l.wg)(),(0,l.iD)("div",null,Xe)}const tt={},it=(0,o.Z)(tt,[["render",et]]);var at=it;const lt={id:"profile",class:"multi-tab-menu"},st={id:"profile-options",class:"mtm-options"},ot=(0,l._)("span",null,"GUARDADOS",-1),nt=(0,l._)("span",{class:"material-symbols-outlined"},"bookmarks",-1),rt=(0,l._)("span",{class:"material-symbols-outlined",style:{"font-size":"32px"}},"add",-1),ct={class:"mtm-options-display"},dt={key:0},ut={key:1};function pt(e,t,i,s,o,n){const r=(0,l.up)("CocktailCardList"),c=(0,l.up)("CocktailForm");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[(0,l._)("h3",null,(0,u.zw)(o.user.username),1)]),(0,l._)("div",lt,[(0,l._)("div",st,[(0,l._)("label",{class:(0,u.C_)({active:1===o.opts})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.opts=e),onClick:t[1]||(t[1]=(...e)=>n.prepareFavCocktails&&n.prepareFavCocktails(...e)),value:1,checked:""},null,512),[[a.G2,o.opts]]),ot,nt],2),(0,l._)("label",{class:(0,u.C_)({active:2===o.opts})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.opts=e),onClick:t[3]||(t[3]=(...e)=>n.showAuthCocktails&&n.showAuthCocktails(...e)),value:2},null,512),[[a.G2,o.opts]]),(0,l.Uk)("MIS CÓCTELES")],2),(0,l._)("label",{class:(0,u.C_)({active:3===o.opts})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>o.opts=e),value:3},null,512),[[a.G2,o.opts]]),rt],2)]),(0,l._)("div",ct,[1===o.opts||2===o.opts?((0,l.wg)(),(0,l.iD)("div",dt,[(0,l.Wm)(r,{cocktails:o.cocktails},null,8,["cocktails"])])):3===o.opts?((0,l.wg)(),(0,l.iD)("div",ut,[(0,l.Wm)(c)])):(0,l.kq)("",!0)])])])}const ht={class:"cocktail-list"};function gt(e,t,i,a,s,o){const n=(0,l.up)("CocktailCard");return(0,l.wg)(),(0,l.iD)("div",ht,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.cocktails,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l.Wm)(n,{cocktail:e},null,8,["cocktail"])])))),128))])}const mt=["src"],kt={key:1,class:"icon",src:Le,alt:"icon"},wt={style:{"align-self":"center"}};function _t(e,t,i,a,s,o){return(0,l.wg)(),(0,l.iD)("div",{class:"cocktail-card",onClick:t[0]||(t[0]=(...e)=>o.goToCocktail&&o.goToCocktail(...e))},[i.cocktail.icon?((0,l.wg)(),(0,l.iD)("img",{key:0,class:"icon",src:i.cocktail.icon,alt:"icon"},null,8,mt)):((0,l.wg)(),(0,l.iD)("img",kt)),(0,l._)("h3",wt,(0,u.zw)(i.cocktail.name),1)])}var yt={props:["cocktail"],data(){return{cocktailAllergens:"",cocktailIngredients:""}},methods:{goToCocktail(){this.cocktail._id?Ei.push("/cocktail/"+this.cocktail._id):Ei.push("/cocktail/"+this.cocktail.id)},async searchIngredient(e){try{let t=await fetch("https://server.coctelea.app/coctelea_api/ingredient/"+e);if(!t.ok)throw Error("Ingredients not found");return await t.json()}catch(t){console.log(t.message)}},async searchAllergen(e){try{let t=await fetch("https://server.coctelea.app/coctelea_api/allergen/"+e);if(!t.ok)throw Error("Allergen not found");return await t.json()}catch(t){console.log(t.message)}}}};const ft=(0,o.Z)(yt,[["render",_t]]);var vt=ft,bt={props:["cocktails"],components:{CocktailCard:vt}};const Ct=(0,o.Z)(bt,[["render",gt]]);var Et=Ct;const It={id:"cocktail-form"},St=(0,l._)("h3",null,"NUEVO COCTEL",-1),xt=(0,l._)("label",null,"NOMBRE",-1),Dt=(0,l._)("label",null,"DESCRIPCIÓN",-1),Ut=(0,l._)("label",null,"INGREDIENTES",-1),Tt={style:{display:"flex"}},Rt={id:"selected-ingredient",style:{width:"16%",margin:"auto 3%"}},Ot={class:"item-list"},At=["onClick"],Lt={class:"item-list"},Nt=["onClick"],Vt=(0,l._)("label",null,"MATERIALES",-1),Mt={class:"item-list"},zt=["onClick"],Wt=(0,l._)("span",{class:"material-symbols-outlined"},"close",-1),jt={class:"tag-list"},Yt=["onClick"],Gt=(0,l._)("label",null,"PASOS",-1),Pt={class:"item-list",style:{display:"inline-block"}},Bt=["onClick"],Ht=(0,l._)("span",{class:"material-symbols-outlined"},"close",-1),Kt=(0,l._)("span",null,null,-1),Zt=(0,l._)("span",null,null,-1);function Ft(e,t,i,s,o,n){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",It,[(0,l._)("form",{onSubmit:t[11]||(t[11]=(0,a.iM)((()=>{}),["prevent"]))},[St,xt,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.cocktail.name=e),class:"no-button",placeholder:"NOMBRE"},null,512),[[a.nr,o.cocktail.name]]),Dt,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>o.cocktail.description=e),class:"no-button",placeholder:"DESCRIPCION"},null,512),[[a.nr,o.cocktail.description]]),Ut,(0,l._)("div",Tt,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"INGREDIENTE","onUpdate:modelValue":t[2]||(t[2]=e=>o.fieldIngredientName=e),style:{width:"44%"},onKeyup:t[3]||(t[3]=(...e)=>n.searchIngredients&&n.searchIngredients(...e))},null,544),[[a.nr,o.fieldIngredientName]]),(0,l._)("div",Rt,(0,u.zw)(o.ingredientSelected._id)+" "+(0,u.zw)(o.ingredientSelected.measure),1),(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>o.fieldIngredientCant=e),style:{width:"18%"},placeholder:"0"},null,512),[[a.nr,o.fieldIngredientCant]])]),(0,l._)("button",{onClick:t[5]||(t[5]=(...e)=>n.addIngredient&&n.addIngredient(...e)),class:"material-symbols-outlined"},"add"),(0,l._)("div",Ot,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.ingredientsResultSet,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e._id,class:"ingredient pill",onClick:t=>n.prepareAddIngredient(e)},(0,u.zw)(e.name),9,At)))),128))]),(0,l._)("div",Lt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.cocktail.ingredients,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,onClick:t=>n.delIngredient(e.id)},(0,u.zw)(e.id)+" "+(0,u.zw)(e.cant),9,Nt)))),128))]),Vt,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>o.fieldMaterial=e),placeholder:"COCTELERA, COPA MARTINI..."},null,512),[[a.nr,o.fieldMaterial]]),(0,l._)("button",{onClick:t[7]||(t[7]=(...e)=>n.addMaterial&&n.addMaterial(...e)),class:"material-symbols-outlined"},"add"),(0,l._)("div",Mt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.cocktail.materials,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,onClick:t=>n.delMaterial(e)},[(0,l.Uk)((0,u.zw)(e)+" | ",1),Wt],8,zt)))),128))]),(0,l._)("div",jt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.tags.items,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e._id,onClick:t=>n.toggleTag(e._id),class:(0,u.C_)([e._id,{unselected:n.isTagSelected(e._id)}])},(0,u.zw)(e.name.es),11,Yt)))),128))]),Gt,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>o.step=e),placeholder:"Meter en la coctelera..., Agitar bien..."},null,512),[[a.nr,o.step]]),(0,l._)("button",{onClick:t[9]||(t[9]=(...e)=>n.addStep&&n.addStep(...e)),class:"material-symbols-outlined"},"add"),(0,l._)("div",Pt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.stepList,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,onClick:t=>n.delStep(e)},[(0,l.Uk)((0,u.zw)(e)+" | ",1),Ht],8,Bt)))),128))]),Kt,(0,l._)("button",{type:"submit",style:{width:"64%"},class:"material-symbols-outlined",onClick:t[10]||(t[10]=(...e)=>n.uploadCocktail&&n.uploadCocktail(...e))},"publish"),Zt],32)])])}var qt={name:"CocktailForm",data(){return{cocktail:{_id:"",name:"",author:"",description:"",icon:"",ingredients:[],materials:[],tags:[],recipe:""},ingredientSelected:{},fieldIngredientName:"",fieldIngredientCant:0,ingredientsResultSet:[],fieldMaterial:"",tags:[],step:"",stepList:[],authCocktailList:[],ingredientsShow:[]}},methods:{async uploadCocktail(){let e=this.cocktail.name.toUpperCase();this.cocktail._id=e.replaceAll(" ","-"),this.cocktail.recipe=this.stepList.join("/&ve&/");let t=JSON.parse(JSON.stringify(this.cocktail));console.log(t),await R.Z.post("https://server.coctelea.app/coctelea_api/cocktails",t),window.user.author_cocktails.push({id:this.cocktail._id}),await R.Z.put("https://server.coctelea.app/coctelea_api/user/"+window.user._id,window.user)},prepareAddIngredient(e){this.ingredientSelected=e,this.fieldIngredientName="",this.ingredientsResultSet=[]},addIngredient(){this.ingredientSelected&&-1===this.cocktail.ingredients.findIndex((e=>e.id===this.ingredientSelected._id))&&this.cocktail.ingredients.push({id:this.ingredientSelected._id,cant:this.fieldIngredientCant}),this.ingredientSelected={},this.fieldIngredientName="",this.fieldIngredientCant=0},delIngredient(e){const t=this.cocktail.ingredients.findIndex((t=>t._id===e));this.cocktail.ingredients.splice(t,1),this.ingredientsShow.splice(t,1)},async searchIngredients(){if(this.ingredientsResultSet=[],!this.fieldIngredientName.length<1)try{let e=await fetch("https://server.coctelea.app/coctelea_api/ingredients/"+this.fieldIngredientName);if(!e.ok)throw Error("Ingredients not found");this.ingredientsResultSet=await e.json()}catch(e){console.log(e.message)}},addMaterial(){this.cocktail.materials.includes(this.fieldMaterial)||this.cocktail.materials.push(this.fieldMaterial),this.fieldMaterial=""},delMaterial(e){const t=this.cocktail.materials.findIndex((t=>t===e));this.cocktail.materials.splice(t,1)},async searchTags(){try{let e=await fetch("https://server.coctelea.app/coctelea_api/tags");this.tags=await e.json()}catch(e){console.log(e)}},toggleTag(e){let t=this.cocktail.tags.findIndex((t=>t.id===e));-1!==t?this.cocktail.tags.splice(t,1):this.cocktail.tags.push({id:e})},isTagSelected(e){return-1===this.cocktail.tags.findIndex((t=>t.id===e))},addStep(){this.stepList.push(this.step),this.step=""},delStep(e){const t=this.cocktail.steps.findIndex((t=>t===e));this.stepList.splice(t,1)}},async beforeMount(){await this.searchTags()}};const Jt=(0,o.Z)(qt,[["render",Ft]]);var $t=Jt,Qt={components:{CocktailForm:$t,CocktailCardList:Et},data(){return{opts:1,user:window.user,cocktails:[]}},beforeMount(){this.prepareFavCocktails()},methods:{async prepareFavCocktails(){this.cocktails=[];try{for(let e of this.user.fav_cocktails){const t=await fetch("https://server.coctelea.app/coctelea_api/cocktail/"+e.id);this.cocktails.push(await t.json())}}catch(e){console.log(e)}},async showAuthCocktails(){this.cocktails=[];try{for(let e of this.user.author_cocktails){const t=await fetch("https://server.coctelea.app/coctelea_api/cocktail/"+e.id);this.cocktails.push(await t.json())}}catch(e){console.log(e)}}}};const Xt=(0,o.Z)(Qt,[["render",pt]]);var ei=Xt;const ti={id:"search",class:"multi-tab-menu"},ii={id:"toggle-search",style:{padding:"20px 0 0"},class:"mtm-options"},ai={id:"search-form",class:"mtm-options-display"},li={key:0},si={class:"searchbar pill"},oi=(0,l._)("span",{class:"material-symbols-outlined"},"search",-1),ni=(0,l._)("br",null,null,-1),ri=["onClick"],ci=(0,l._)("hr",null,null,-1),di=["onClick"],ui={key:1},pi={class:"searchbar pill"},hi=(0,l._)("span",{class:"material-symbols-outlined"},"search",-1),gi={key:0,id:"cocktails-result",style:{"background-color":"transparent","box-shadow":"none"}};function mi(e,t,i,s,o,n){const r=(0,l.up)("CocktailCardList");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l._)("div",ti,[(0,l._)("div",ii,[(0,l._)("label",{class:(0,u.C_)({active:1===o.searchType})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchType=e),value:1,checked:"",onClick:t[1]||(t[1]=(...e)=>n.clearCocktailResulSet&&n.clearCocktailResulSet(...e))},null,512),[[a.G2,o.searchType]]),(0,l.Uk)("INGREDIENTES")],2),(0,l._)("label",{class:(0,u.C_)({active:2===o.searchType})},[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.searchType=e),value:2,onClick:t[3]||(t[3]=(...e)=>n.clearCocktailResulSet&&n.clearCocktailResulSet(...e))},null,512),[[a.G2,o.searchType]]),(0,l.Uk)("CÓCTEL")],2)]),(0,l._)("div",ai,[1===o.searchType?((0,l.wg)(),(0,l.iD)("div",li,[(0,l._)("div",si,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Search ingredient by name and select","onUpdate:modelValue":t[4]||(t[4]=e=>o.ingredientTextbox=e),onKeyup:t[5]||(t[5]=(...e)=>n.searchIngredient&&n.searchIngredient(...e))},null,544),[[a.nr,o.ingredientTextbox]]),oi]),ni,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.ingredientInputList,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"ingredient pill",onClick:t=>n.deleteIngredient(e.name)},(0,u.zw)(e.name),9,ri)))),128)),ci,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.ingredientResultSet,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"ingredient pill",onClick:t=>n.addIngredient(e)},(0,u.zw)(e.name),9,di)))),128))])):((0,l.wg)(),(0,l.iD)("div",ui,[(0,l._)("div",pi,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Search by cocktail name","onUpdate:modelValue":t[6]||(t[6]=e=>o.cocktailTextbox=e),onKeyup:t[7]||(t[7]=(...e)=>n.searchCocktailByName&&n.searchCocktailByName(...e))},null,544),[[a.nr,o.cocktailTextbox]]),hi])]))])])]),0!==o.cocktailsResultSet.length?((0,l.wg)(),(0,l.iD)("div",gi,[(0,l.Wm)(r,{cocktails:o.cocktailsResultSet},null,8,["cocktails"])])):(0,l.kq)("",!0)],64)}var ki=i(4870);const wi=()=>{const e=(0,ki.iH)([]),t=(0,ki.iH)(null),i=async()=>{try{let e=await fetch("https://server.coctelea.app/coctelea_api/cocktails");if(console.log(e),!e.ok)throw Error("No cocktails available");(void 0).cocktails=await e.json()}catch(e){t.value=e.message,console.log(t.value)}};return{cocktails:e,error:t,load:i}};var _i=wi,yi={components:{CocktailCardList:Et},data(){return{searchType:1,ingredientTextbox:"",ingredientResultSet:[],ingredientInputList:[],cocktailTextbox:"",cocktailsResultSet:[]}},methods:{async searchCocktailByName(){if(this.cocktailsResultSet=[],!this.cocktailTextbox.length<1)try{let e=await fetch("https://server.coctelea.app/coctelea_api/cocktails/"+this.cocktailTextbox);if(!e.ok)throw Error("Cocktails not found");this.cocktailsResultSet=await e.json()}catch(e){console.log(e.message)}},async clearCocktailResulSet(){this.cocktailsResultSet=[]},async searchCocktailByIngredients(){this.cocktailsResultSet=[];try{let e=await fetch("https://server.coctelea.app/coctelea_api/cocktails/");if(!e.ok)throw Error("Cocktails not found");let t=await e.json(),i=t.items;this.cocktailsResultSet=i.filter(this.cocktailsFilter),console.log(this.cocktailsResultSet)}catch(e){console.log(e.message)}},async searchIngredient(){if(!this.ingredientTextbox.length<1)try{let e=await fetch("https://server.coctelea.app/coctelea_api/ingredients/"+this.ingredientTextbox);if(!e.ok)throw Error("Ingredients not found");this.ingredientResultSet=await e.json(),console.log(this.ingredientResultSet)}catch(e){console.log(e.message)}else this.ingredientResultSet=[]},cocktailsFilter(e){let t=this.ingredientInputList;for(let i of t){i=JSON.parse(JSON.stringify(i));let t=e.ingredients;for(let e of t)if(e.id===i._id)return!0}return!1},addIngredient(e){this.ingredientInputList.includes(e.name)||(this.ingredientInputList.push(e),this.searchCocktailByIngredients()),this.ingredientTextbox="",this.searchIngredient()},deleteIngredient(e){const t=this.ingredientInputList.findIndex((t=>t.name===e));this.ingredientInputList.splice(t,1),this.searchCocktailByIngredients()}},setup(){const{cocktails:e,error:t,load:i}=_i();return i(),{cocktails:e,error:t}}};const fi=(0,o.Z)(yi,[["render",mi]]);var vi=fi;const bi=[{path:"/start",name:"start",component:L},{path:"/",name:"home",component:ue},{path:"/app",name:"app",component:Ae,meta:{requireAuth:!0},children:[{path:"/cocktails",name:"cocktails",component:vi},{path:"/cocktail/:id",name:"cocktail-details",component:$e,props:!0},{path:"/profile",name:"profile",component:ei},{path:"/:catchAll(.*)",name:"not-found",component:at}]}],Ci=(0,d.p7)({history:(0,d.PO)("/"),routes:bi});Ci.beforeEach(((e,t,i)=>e.meta.requireAuth&&!window.user?i("/"):i()));var Ei=Ci;(0,a.ri)(c).use(Ei).mount("#app")}},t={};function i(a){var l=t[a];if(void 0!==l)return l.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=e,function(){var e=[];i.O=function(t,a,l,s){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],l=e[d][1],s=e[d][2];for(var n=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](a[r])}))?a.splice(r--,1):(n=!1,s<o&&(o=s));if(n){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,l,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){i.p="/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,s,o=a[0],n=a[1],r=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in n)i.o(n,l)&&(i.m[l]=n[l]);if(r)var d=r(i)}for(t&&t(a);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},a=self["webpackChunkweb"]=self["webpackChunkweb"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(6079)}));a=i.O(a)})();
//# sourceMappingURL=app.28bb3e67.js.map