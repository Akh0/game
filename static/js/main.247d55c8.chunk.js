(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(9),r=a.n(c),l=(a(15),a(16),a(7)),i=a(1),o=a(3),m=a(4),u=a(6),p=a(5),f=(a(17),a(18),a(19),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"battle-text-content"},s.a.createElement("p",null,this.props.messageOne," ",s.a.createElement("br",null)," ",this.props.messageTwo))}}]),a}(n.Component)),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"expectedEffect",value:function(e,t){switch(t){case"melee":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-fist-raised"})," ",s.a.createElement("span",{className:"small"},e));case"range":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-bolt"})," ",s.a.createElement("span",{className:"small"},e));case"heal":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-hand-holding-medical"})," ",s.a.createElement("span",{className:"small"},e));case"movement":return s.a.createElement("i",{className:"fas fa-shoe-prints"});default:return""}}},{key:"disabledAction",value:function(e,t){return"melee"!==t||e?"":"disabled"}},{key:"render",value:function(){var e=this,t=this.props.action,a=t.name,n=t.amount,c=t.effect;return s.a.createElement("div",{className:"attack-container btn ".concat(this.disabledAction(this.props.frontPlayer,c))},s.a.createElement("div",null,s.a.createElement("span",{className:"move-pointer",onClick:function(){null===e.disabledAction(e.props.frontPlayer,c)&&e.props.onClick(e.props.action)}},a," ",this.expectedEffect(n,c))))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"animation",value:function(){var e=this.props,t=e.faint;return!0===e.isHit?"animated headShake":!0===t?"animated fadeOut slow":null===t?"animated fadeInUp":void 0===t?"hide":void 0}},{key:"render",value:function(){return s.a.createElement("div",{className:this.animation()},s.a.createElement("img",{className:this.props.className,src:"/game/img/"+this.props.logoName+".png",alt:this.props.logoName}))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"expectedAction",value:function(e){if(void 0===e)return s.a.createElement("br",null);switch(e.effect){case"melee":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-fist-raised"})," ",s.a.createElement("span",{className:"small"},e.amount));case"range":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-bolt"})," ",s.a.createElement("span",{className:"small"},e.amount));case"heal":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-hand-holding-medical"})," ",s.a.createElement("span",{className:"small"},e.amount));case"movement":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-wind"})," ",s.a.createElement("span",{className:"small"},e.amount));case"unknown":return s.a.createElement("i",{className:"fas fa-question"});default:return s.a.createElement("br",null)}}},{key:"render",value:function(){var e=this.props.enemy.hp/this.props.enemy.maxHp*100+"%";return s.a.createElement("div",{id:"enemy-container"},s.a.createElement("div",{id:"enemy-info-box"},s.a.createElement("div",{className:"justify-content-between align-items-center"},s.a.createElement("h2",null,this.props.enemy.name)),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"progress both-progress"},s.a.createElement("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:e},"aria-valuemin":"0","aria-valuemax":"100"}),s.a.createElement("div",{className:"hp-progress-bar"},s.a.createElement("span",null,this.props.enemy.hp,"/",this.props.enemy.maxHp))))),s.a.createElement("div",{className:"action-intention"},this.expectedAction(this.props.expectedAction)),s.a.createElement("div",{className:"avatar-box"},s.a.createElement(d,{faint:this.props.enemy.faint,isHit:this.props.enemy.isHit,logoName:this.props.enemy.name.toLowerCase(),className:"avatar mt-4"}),s.a.createElement("div",{className:"oval"})))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"expectedAction",value:function(e,t){return t?s.a.createElement("i",{className:"far fa-hand-point-down"}):e?s.a.createElement("i",{className:"fas fa-long-arrow-alt-down"}):s.a.createElement("br",null)}},{key:"render",value:function(){var e=this,t=this.props.player.hp/this.props.player.maxHp*100+"%";return s.a.createElement("div",{id:"hero-container",className:this.props.player.isSelectable?"hero-container-selected":null,onClick:function(){return e.props.onClick(e.props.player)}},s.a.createElement("div",{id:"hero-info-box"},s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"progress both-progress"},s.a.createElement("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:t},"aria-valuemin":"0","aria-valuenow":"75","aria-valuemax":"100"}),s.a.createElement("div",{className:"hp-progress-bar"},this.props.player.hp,"/",this.props.player.maxHp)))),s.a.createElement("div",{className:"action-intention"},this.expectedAction(this.props.player.me,this.props.player.isSelectable)),s.a.createElement("div",{className:"avatar-box"},s.a.createElement(d,{faint:this.props.player.faint,isHit:this.props.player.isHit,logoName:this.props.player.name.toLowerCase(),className:"avatar mt-5"}),s.a.createElement("div",{className:"oval ".concat(this.props.player.isSelectable?"hero-oval-selected":"")})))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"battle-text-content"},s.a.createElement("p",{id:"play-again-text",onClick:function(){return e.props.handlePlayAgain()}},"Cliquez ici pour recommencer une partie"))}}]),a}(n.Component),g=a(2),O=a.n(g),E={players:[{name:"Pikachu",me:!1,level:50,hp:300,maxHp:300,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Coup de poing",amount:10,effect:"melee"},{name:"Morsure",amount:30,effect:"melee"},{name:"Eclair",amount:50,effect:"range"},{name:"Soin \xe9clair",amount:100,effect:"heal"},{name:"M\xe9ga tonnerre",amount:100,effect:"range"},{name:"D\xe9placement",amount:null,effect:"movement"}]},{name:"Emolga",me:!1,level:45,hp:250,maxHp:250,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee"},{name:"Eclair",amount:30,effect:"melee"},{name:"Tonnerre",amount:35,effect:"melee"},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee"}]},{name:"Teddiursa",me:!1,level:35,hp:150,maxHp:150,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee"},{name:"Eclair",amount:30,effect:"melee"},{name:"Tonnerre",amount:35,effect:"melee"},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee"}]},{name:"Togepi",me:!1,level:40,hp:200,maxHp:200,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee"},{name:"Eclair",amount:30,effect:"melee"},{name:"Tonnerre",amount:35,effect:"melee"},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee"}]},{name:"Rondoudou",me:!1,level:50,hp:300,maxHp:300,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee"},{name:"Eclair",amount:30,effect:"melee"},{name:"Tonnerre",amount:35,effect:"melee"},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee"}]}],enemy:{name:"Mewtwo",level:60,hp:600,maxHp:600,faint:void 0,isHit:!1,actions:[{name:"Frappe",amount:50,effect:"melee"},{name:"Bouclier de l'ombre",amount:50,effect:"heal"},{name:"Pouss\xe9e du chaos",amount:30,effect:"movement"},{name:"R\xeave \xe9veill\xe9",amount:100,effect:"range"},{name:"Cauchemard",amount:200,effect:"unknown"}],expectedAction:void 0},textMessageOne:" ",textMessageTwo:"",playerActionSelectable:void 0,round:1,gameOver:!1},x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).enemyTurn=function(){var e=n.state.enemy.expectedAction,t=e.amount,a=e.name,s=e.effect,c=function e(t,a){for(var n=[],s=0;s<t.length;s++)t[s].hp>0&&n.push(s);var c="melee"===a||"movement"===a?O.a.last(n):Math.floor(Math.random()*t.length);return O.a.includes(n,c)?c:e(t,a)}(n.state.players,s);if(0===n.state.enemy.hp)n.setState({textMessageOne:"".concat(n.state.enemy.name," a perdu."),textMessageTwo:"Vous avez gagn\xe9!",enemy:Object(i.a)(Object(i.a)({},n.state.enemy),{},{faint:!0,isHit:!1})},(function(){setTimeout((function(){n.setState({gameOver:!0})}),3e3)}));else if("heal"===s)n.setState({textMessageOne:"".concat(n.state.enemy.name," se soigne pour ").concat(t,"pts de vie."),enemy:Object(i.a)(Object(i.a)({},n.state.enemy),{},{hp:n.state.enemy.hp+t})},(function(){setTimeout((function(){n.setState({textMessageOne:""}),n.nextEnemyAction()}),3e3)}));else if("movement"===s){var r=function(e,t,a){var n="".concat(a.name," utilise ").concat(a.expectedAction.name," sur ").concat(e[t].name," et lui inflige ").concat(a.expectedAction.amount,"pts de d\xe9gats.");e[t]=Object(i.a)(Object(i.a)({},e[t]),{},{isHit:!0,hp:e[t].hp-a.expectedAction.amount<=0?0:e[t].hp-a.expectedAction.amount});var s=e.length-2,c=O.a.slice(O.a.cloneDeep(e),0,s),r=O.a.slice(O.a.cloneDeep(e),s);return O.a.remove(r,{name:e[t].name}),c.push(e[t]),{players:e=c.concat(r),textMessageOne:n}}(n.state.players,c,n.state.enemy),o=r.players,m=r.textMessageOne;n.setState({textMessageOne:m,players:o},(function(){setTimeout((function(){n.setState({textMessageOne:""}),n.checkIfPlayerAlive(c)}),3e3)}))}else n.setState((function(e){var s=Object(l.a)(n.state.players);return s[c]=Object(i.a)(Object(i.a)({},s[c]),{},{isHit:!0,hp:e.players[c].hp-t<=0?0:e.players[c].hp-t}),{players:s,textMessageOne:"".concat(n.state.enemy.name," utilise ").concat(a," sur ").concat(n.state.players[c].name," pour ").concat(t,"pts de d\xe9gats!")}}),(function(){setTimeout((function(){n.checkIfPlayerAlive(c)}),3e3)}))},n.handleClickOnPlayerToAction=function(e){var t=n.state.playerActionSelectable;if("heal"===t.effect){var a=function(e,t,a){for(var n=0;n<e.length;n++)if(e[n]=Object(i.a)(Object(i.a)({},e[n]),{},{isSelectable:!1}),t.name===e[n].name&&"heal"===a.effect){var s=e[n].hp+a.amount<e[n].maxHp?e[n].hp+a.amount:e[n].maxHp;e[n]=Object(i.a)(Object(i.a)({},e[n]),{},{hp:s})}return{players:e,textMessageOne:"".concat(O.a.find(e,"me").name,"\n   utilise ").concat(a.name," pour soigner ").concat(t.name," de ").concat(a.amount,"pts de vie!")}}(Object(l.a)(n.state.players),e,t),s=a.players,c=a.textMessageOne;n.setState({textMessageOne:c,players:s})}else if("movement"===t.effect){var r=function(e,t){for(var a=0,n=0;n<e.length;n++)e[n]=Object(i.a)(Object(i.a)({},e[n]),{},{isSelectable:!1}),t.name===e[n].name&&(a=n);a=O.a.find(O.a.slice(O.a.cloneDeep(e),0,a+1),"me")?a+1:a;var s=O.a.slice(O.a.cloneDeep(e),0,a),c=O.a.slice(O.a.cloneDeep(e),a);return O.a.remove(s,"me"),O.a.remove(c,"me"),s.push(O.a.find(e,"me")),{players:e=s.concat(c),textMessageOne:"".concat(O.a.find(e,"me").name," se positionne \xe0 la place de ").concat(t.name,".")}}(Object(l.a)(n.state.players),e),o=r.players,m=r.textMessageOne;n.setState({textMessageOne:m,players:o})}setTimeout((function(){n.setState({playerActionSelectable:void 0}),n.enemyTurn()}),3e3)},n.handleClickOnActionBar=function(e){var t=e.effect,a=e.name,s=e.amount;if("melee"===t||"range"===t)n.setState({enemy:Object(i.a)(Object(i.a)({},n.state.enemy),{},{hp:n.state.enemy.hp-s<=0?0:n.state.enemy.hp-s,isHit:!0}),textMessageOne:"".concat(O.a.find(n.state.players,"me").name," utilise ").concat(a," pour ").concat(s,"pts de d\xe9gats!")}),setTimeout((function(){n.setState({enemy:Object(i.a)(Object(i.a)({},n.state.enemy),{},{isHit:!1,faint:!1})}),n.enemyTurn()}),3e3);else if("heal"===t){for(var c=Object(l.a)(n.state.players),r=0;r<n.state.players.length;r++)n.state.players[r].hp>0&&(c[r]=Object(i.a)(Object(i.a)({},c[r]),{},{isSelectable:!0}));n.setState({textMessageOne:"Veuillez selectionner un joueur \xe0 soigner.",playerActionSelectable:e,players:c})}else if("movement"===t){for(var o=Object(l.a)(n.state.players),m=0;m<n.state.players.length;m++)n.state.players[m]!==O.a.find(n.state.players,"me")&&n.state.players[m].hp>0&&(o[m]=Object(i.a)(Object(i.a)({},o[m]),{},{isSelectable:!0}));n.setState({textMessageOne:"Veuillez selectionner la place que vous souhaitez.",playerActionSelectable:e,players:o})}},n.handlePlayAgain=function(){for(var e=Object(l.a)(n.state.players),t=0;t<n.state.players.length;t++)e[t]=Object(i.a)(Object(i.a)({},e[t]),{},{faint:!1,isHit:!1,hp:n.state.players[t].maxHp});n.setState({enemy:Object(i.a)(Object(i.a)({},n.state.enemy),{},{hp:n.state.enemy.maxHp,faint:!1,isHit:!1}),gameOver:!1,textMessageOne:"",textMessageTwo:"",round:1,players:e})},n.state=E,n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{textMessageOne:"".concat(e.state.enemy.name," apparait!"),enemy:Object(i.a)(Object(i.a)({},e.state.enemy),{},{faint:null})}}),(function(){setTimeout((function(){for(var t=Object(l.a)(e.state.players),a=0;a<e.state.players.length;a++)t[a]=Object(i.a)(Object(i.a)({},t[a]),{},{faint:null}),0===a&&(t[a]=Object(i.a)(Object(i.a)({},t[a]),{},{me:!0}));e.setState({textMessageOne:"Vous entrez pour le combattre !",players:t},(function(){setTimeout((function(){e.setState({textMessageOne:""}),e.nextEnemyAction()}),3e3)}))}),3e3)}))}),1e3)}},{key:"nextEnemyAction",value:function(){var e=Math.floor(Math.random()*this.state.enemy.actions.length);this.setState({enemy:Object(i.a)(Object(i.a)({},this.state.enemy),{},{expectedAction:this.state.enemy.actions[e]})})}},{key:"checkIfPlayerAlive",value:function(e){var t=this,a=Object(l.a)(this.state.players);0===a[e].hp?(a[e]=Object(i.a)(Object(i.a)({},a[e]),{},{faint:!0,isHit:!1}),this.setState({textMessageOne:"".concat(a[e].name," a \xe9t\xe9 terrass\xe9."),players:a},(function(){setTimeout((function(){O.a.find(a,(function(e){return e.hp>0}))?(t.setState({textMessageOne:"",round:t.state.round+1}),t.nextEnemyAction()):t.setState({textMessageOne:"Toute l'\xe9quipe a perdu.",textMessageTwo:"".concat(t.state.enemy.name," a gagn\xe9!")},(function(){setTimeout((function(){t.setState({gameOver:!0})}),3e3)}))}),3e3)}))):(a[e]=Object(i.a)(Object(i.a)({},a[e]),{},{isHit:!1,faint:!1}),this.setState({textMessageOne:"",round:this.state.round+1,players:a}),this.nextEnemyAction())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container h-100"},s.a.createElement("div",{className:"row row h-100 justify-content-center align-items-center"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{id:"battle-container",className:"px-2 mx-auto"},s.a.createElement("div",{id:"turn-text"},s.a.createElement("i",{className:"fas fa-dice"})," Tour ",this.state.round),s.a.createElement("div",{className:"all-players-box"},O.a.map(this.state.players,(function(t){return s.a.createElement(v,{key:t.name,player:t,onClick:t.isSelectable?e.handleClickOnPlayerToAction:function(){return null}})})),s.a.createElement(y,{enemy:this.state.enemy,expectedAction:this.state.enemy.expectedAction})),s.a.createElement("div",{id:"text-box"},s.a.createElement("div",{id:"text-box-content"},""!==this.state.textMessageOne&&!1===this.state.gameOver&&s.a.createElement(f,{messageOne:this.state.textMessageOne,messageTwo:this.state.textMessageTwo}),""===this.state.textMessageOne&&!1===this.state.gameOver&&Object.keys(O.a.find(this.state.players,"me").actions).map((function(t,a){return s.a.createElement(h,{key:t,frontPlayer:O.a.find(e.state.players,"me")===O.a.last(e.state.players),action:O.a.find(e.state.players,"me").actions[t],onClick:e.handleClickOnActionBar})})),!0===this.state.gameOver&&s.a.createElement(b,{handlePlayAgain:this.handlePlayAgain})))))))}}]),a}(n.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.247d55c8.chunk.js.map