(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(9),r=a.n(c),l=(a(15),a(16),a(3)),o=a(1),i=a(4),m=a(5),u=a(7),p=a(6),f=(a(17),a(18),a(19),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"battle-text-content"},s.a.createElement("p",null,this.props.messageOne," ",s.a.createElement("br",null)," ",this.props.messageTwo))}}]),a}(n.Component)),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"expectedEffect",value:function(e,t){switch(t){case"melee":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("i",{className:"fas fa-fist-raised"})," ",s.a.createElement("span",{className:"small"},e));case"range":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("i",{className:"fas fa-bolt"})," ",s.a.createElement("span",{className:"small"},e));case"dot":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("i",{className:"fas fa-burn"})," ",s.a.createElement("span",{className:"small"},e));case"heal":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("i",{className:"fas fa-hand-holding-medical"})," ",s.a.createElement("span",{className:"small"},e));case"hot":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("i",{className:"fas fa-medkit"})," ",s.a.createElement("span",{className:"small"},e));case"movement":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("i",{className:"fas fa-shoe-prints"}));default:return""}}},{key:"isBlocked",value:function(e,t){return e>0?s.a.createElement("span",{className:"small"},"(",e," ",s.a.createElement("i",{className:"fas fa-lock"})," ",s.a.createElement("i",{className:"fas fa-lock"}),") "):t?s.a.createElement("span",{className:"small"},"(",t," ",s.a.createElement("i",{className:"fas fa-clock"}),") "):""}},{key:"disabledAction",value:function(e,t,a){return"melee"===t&&!e||0!==a?"disabled":""}},{key:"render",value:function(){var e=this,t=this.props.action,a=t.name,n=t.amount,c=t.effect,r=t.duration,l=t.nbBlockedTurns;return s.a.createElement("div",{className:"attack-container btn ".concat(this.disabledAction(this.props.frontPlayer,c,l))},s.a.createElement("div",null,s.a.createElement("span",{className:"move-pointer",onClick:function(){""===e.disabledAction(e.props.frontPlayer,c,l)&&e.props.onClick(e.props.action)}},this.isBlocked(l,r),a,this.expectedEffect(n,c))))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"animation",value:function(){var e=this.props,t=e.faint;return!0===e.isHit?"animated headShake":!0===t?"animated fadeOut slow":null===t?"animated fadeInUp":void 0===t?"hide":void 0}},{key:"render",value:function(){return s.a.createElement("div",{className:this.animation()},s.a.createElement("img",{className:this.props.className,src:"/game/img/"+this.props.logoName+".png",alt:this.props.logoName}))}}]),a}(n.Component),y=a(2),b=a.n(y),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"expectedAction",value:function(e){if(void 0===e)return s.a.createElement("br",null);switch(e.effect){case"melee":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-fist-raised"})," ",s.a.createElement("span",{className:"small"},e.amount));case"range":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-bolt"})," ",s.a.createElement("span",{className:"small"},e.amount));case"dot":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("span",{className:"small"},"(",e.duration," ",s.a.createElement("i",{className:"fas fa-clock"}),")")," ",s.a.createElement("i",{className:"fas fa-burn"})," ",s.a.createElement("span",{className:"small"},e.amount));case"heal":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-hand-holding-medical"})," ",s.a.createElement("span",{className:"small"},e.amount));case"hot":return s.a.createElement(s.a.Fragment,null," ",s.a.createElement("span",{className:"small"},"(",e.duration," ",s.a.createElement("i",{className:"fas fa-clock"}),")")," ",s.a.createElement("i",{className:"fas fa-hand-holding-medical"})," ",s.a.createElement("span",{className:"small"},e.amount));case"skill_block":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-lock"})," ",s.a.createElement("span",{className:"small"},e.amount));case"movement":return s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-wind"})," ",s.a.createElement("span",{className:"small"},e.amount));case"unknown":return s.a.createElement("i",{className:"fas fa-question"});default:return s.a.createElement("br",null)}}},{key:"render",value:function(){var e=this.props.enemy.hp/this.props.enemy.maxHp*100+"%";return s.a.createElement("div",{id:"enemy-container"},s.a.createElement("div",{id:"enemy-info-box"},s.a.createElement("div",{className:"justify-content-between align-items-center"},s.a.createElement("h2",null,this.props.enemy.name)),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"progress both-progress"},s.a.createElement("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:e},"aria-valuemin":"0","aria-valuemax":"100"}),s.a.createElement("div",{className:"hp-progress-bar"},s.a.createElement("span",null,this.props.enemy.hp,"/",this.props.enemy.maxHp))))),s.a.createElement("div",{className:"action-intention"},this.expectedAction(this.props.expectedAction)),s.a.createElement("div",{className:"avatar-box"},s.a.createElement(h,{faint:this.props.enemy.faint,isHit:this.props.enemy.isHit,logoName:this.props.enemy.name.toLowerCase(),className:"avatar mt-4"}),!this.props.enemy.faint&&b.a.map(this.props.enemy.hot,(function(e,t){var a=e.amount;return s.a.createElement("span",{key:t,className:"small avatar-effect"},a,s.a.createElement("i",{className:"fas fa-medkit"}))})),!this.props.enemy.faint&&b.a.map(this.props.enemy.dot,(function(e,t){var a=e.amount;return s.a.createElement("span",{key:t,className:"small avatar-effect"},a,s.a.createElement("i",{className:"fas fa-burn"}))}))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"expectedAction",value:function(e,t){return t?s.a.createElement("i",{className:"far fa-hand-point-down"}):e?s.a.createElement("i",{className:"fas fa-long-arrow-alt-down"}):s.a.createElement("br",null)}},{key:"render",value:function(){var e=this,t=this.props.player.hp/this.props.player.maxHp*100+"%";return s.a.createElement("div",{id:"hero-container",className:this.props.player.isSelectable?"hero-container-selected":null,onClick:function(){return e.props.onClick(e.props.player)}},s.a.createElement("div",{id:"hero-info-box"},s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"progress both-progress"},s.a.createElement("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:t},"aria-valuemin":"0","aria-valuenow":"75","aria-valuemax":"100"}),s.a.createElement("div",{className:"hp-progress-bar"},this.props.player.hp,"/",this.props.player.maxHp)))),s.a.createElement("div",{className:"action-intention"},this.expectedAction(this.props.player.me,this.props.player.isSelectable)),s.a.createElement("div",{className:"avatar-box"},s.a.createElement(h,{faint:this.props.player.faint,isHit:this.props.player.isHit,logoName:this.props.player.name.toLowerCase(),className:"avatar mt-5 ".concat(this.props.player.isSelectable?"hero-hover-selected":"")}),!this.props.player.faint&&b.a.map(this.props.player.hot,(function(e,t){var a=e.amount;return s.a.createElement("span",{key:t,className:"small avatar-effect"},a,s.a.createElement("i",{className:"fas fa-medkit"}))})),!this.props.player.faint&&b.a.map(this.props.player.dot,(function(e,t){var a=e.amount;return s.a.createElement("span",{key:t,className:"small avatar-effect"},a,s.a.createElement("i",{className:"fas fa-burn"}))}))))}}]),a}(n.Component),O=function(e){for(var t=0,a=0;a<e.dot.length;a++)t+=e.dot[a].amount;return{user:e=Object(o.a)(Object(o.a)({},e),{},{hp:e.hp-t<=0?0:e.hp-t})}},E=function(e){for(var t=0,a=0;a<e.hot.length;a++)t+=e.hot[a].amount;return{user:e=Object(o.a)(Object(o.a)({},e),{},{hp:e.hp+t>e.maxHp?e.maxHp:e.hp+t})}},x=function(e){for(var t=0;t<e.length;t++)e[t]=k(e[t]),e[t]=N(e[t]);return e},j=function(e){return N(e)},k=function(e){for(var t=0;t<e.actions.length;t++)e.actions[t].nbBlockedTurns=0===e.actions[t].nbBlockedTurns?0:e.actions[t].nbBlockedTurns-1;return e},N=function(e){for(var t=0;t<e.hot.length;t++)e.hot[t].duration=e.hot[t].duration-1;e.hot=b.a.filter(e.hot,(function(e){return e.duration>0}));for(var a=0;a<e.dot.length;a++)e.dot[a].duration=e.dot[a].duration-1;return e.dot=b.a.filter(e.dot,(function(e){return e.duration>0})),e},T={players:[{name:"Pikachu",me:!1,level:50,hp:300,maxHp:300,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:30,effect:"melee",nbBlockedTurns:0},{name:"Eclair continue",amount:40,effect:"dot",duration:3,nbBlockedTurns:0},{name:"Soin \xe9clair",amount:100,effect:"heal",nbBlockedTurns:0},{name:"Soin \xe9clair continue",amount:50,effect:"hot",duration:3,nbBlockedTurns:0},{name:"M\xe9ga tonnerre",amount:100,effect:"range",nbBlockedTurns:0},{name:"D\xe9placement",amount:null,effect:"movement",nbBlockedTurns:0}],hot:[],dot:[]},{name:"Emolga",me:!1,level:45,hp:250,maxHp:250,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee",nbBlockedTurns:0},{name:"Eclair",amount:30,effect:"melee",nbBlockedTurns:0},{name:"Tonnerre",amount:35,effect:"melee",nbBlockedTurns:0},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee",nbBlockedTurns:0}],hot:[],dot:[]},{name:"Teddiursa",me:!1,level:35,hp:150,maxHp:150,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee",nbBlockedTurns:0},{name:"Eclair",amount:30,effect:"melee",nbBlockedTurns:0},{name:"Tonnerre",amount:35,effect:"melee",nbBlockedTurns:0},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee",nbBlockedTurns:0}],hot:[],dot:[]},{name:"Togepi",me:!1,level:40,hp:200,maxHp:200,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee",nbBlockedTurns:0},{name:"Eclair",amount:30,effect:"melee",nbBlockedTurns:0},{name:"Tonnerre",amount:35,effect:"melee",nbBlockedTurns:0},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee",nbBlockedTurns:0}],hot:[],dot:[]},{name:"Rondoudou",me:!1,level:50,hp:300,maxHp:300,faint:void 0,isHit:!1,isSelectable:!1,actions:[{name:"Morsure",amount:10,effect:"melee",nbBlockedTurns:0},{name:"Eclair",amount:30,effect:"melee",nbBlockedTurns:0},{name:"Tonnerre",amount:35,effect:"melee",nbBlockedTurns:0},{name:"M\xe9ga \xe9clair",amount:45,effect:"melee",nbBlockedTurns:0}],hot:[],dot:[]}],enemy:{name:"Mewtwo",level:60,hp:600,maxHp:600,faint:void 0,isHit:!1,actions:[{name:"Frappe",amount:50,effect:"melee"},{name:"Blocage de l'ombre",amount:300,effect:"dot",duration:5},{name:"Soin de l'ombre",amount:50,effect:"hot",duration:3},{name:"Bouclier de l'ombre",amount:50,effect:"heal"},{name:"Pouss\xe9e du chaos",amount:30,effect:"movement"},{name:"R\xeave \xe9veill\xe9",amount:100,effect:"range"},{name:"Cauchemard",amount:200,effect:"unknown"}],hot:[],dot:[],expectedAction:void 0},textMessageOne:" ",textMessageTwo:"",playerActionSelectable:void 0,round:1,gameOver:!1},M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).enemyTurn=function(){var e=n.state.enemy.expectedAction,t=e.amount,a=e.name,s=e.effect,c=e.duration,r=function e(t,a){for(var n=[],s=0;s<t.length;s++)t[s].hp>0&&n.push(s);var c="melee"===a||"movement"===a?b.a.last(n):Math.floor(Math.random()*t.length);return b.a.includes(n,c)?c:e(t,a)}(n.state.players,s);if(n.checkIfEnemyAlive())if("heal"===s)n.setState({textMessageOne:"".concat(n.state.enemy.name," se soigne pour ").concat(t,"pts de vie."),enemy:Object(o.a)(Object(o.a)({},n.state.enemy),{},{hp:n.state.enemy.hp+t})},(function(){setTimeout((function(){n.setState({textMessageOne:""}),n.endTurn()}),3e3)}));else if("hot"===s)n.setState({textMessageOne:"".concat(n.state.enemy.name," se soignera de ").concat(t,"pts de vie \xe0 la fin des ").concat(c," prochains tours."),enemy:Object(o.a)(Object(o.a)({},n.state.enemy),{},{hot:[].concat(Object(l.a)(n.state.enemy.hot),[{amount:t,duration:c}])})},(function(){setTimeout((function(){n.setState({textMessageOne:""}),n.endTurn()}),3e3)}));else if("movement"===s){var i=function(e,t,a){var n="".concat(a.name," utilise ").concat(a.expectedAction.name," sur ").concat(e[t].name," et lui inflige ").concat(a.expectedAction.amount,"pts de d\xe9gats.");e[t]=Object(o.a)(Object(o.a)({},e[t]),{},{isHit:!0,hp:e[t].hp-a.expectedAction.amount<=0?0:e[t].hp-a.expectedAction.amount});var s=e.length-2,c=b.a.slice(b.a.cloneDeep(e),0,s),r=b.a.slice(b.a.cloneDeep(e),s);return b.a.remove(r,{name:e[t].name}),c.push(e[t]),{players:e=c.concat(r),textMessageOne:n}}(n.state.players,r,n.state.enemy),m=i.players,u=i.textMessageOne;n.setState({textMessageOne:u,players:m},(function(){setTimeout((function(){n.setState({textMessageOne:""}),n.checkIfPlayerAlive(r),n.endTurn()}),3e3)}))}else if("skill_block"===s){var p=function(e,t,a){var n=Math.floor(Math.random()*e[t].actions.length),s="".concat(a.name," utilise ").concat(a.expectedAction.name," sur ").concat(e[t].name,", lui inflige ").concat(a.expectedAction.amount,"pts de d\xe9gats et lui bloque la comp\xe9tence ").concat(e[t].actions[n].name," pour ").concat(a.expectedAction.duration," tours."),c=Object(l.a)(e[t].actions);return c[n]=Object(o.a)(Object(o.a)({},c[n]),{},{nbBlockedTurns:a.expectedAction.duration}),e[t]=Object(o.a)(Object(o.a)({},e[t]),{},{isHit:!0,hp:e[t].hp-a.expectedAction.amount<=0?0:e[t].hp-a.expectedAction.amount,actions:c}),{players:e,textMessageOne:s}}(n.state.players,r,n.state.enemy),f=p.players,d=p.textMessageOne;n.setState({textMessageOne:d,players:f},(function(){setTimeout((function(){n.setState({textMessageOne:""}),n.checkIfPlayerAlive(r),n.endTurn()}),3e3)}))}else"dot"===s?n.setState((function(e){var s=Object(l.a)(n.state.players);return s[r]=Object(o.a)(Object(o.a)({},s[r]),{},{isHit:!0,dot:[].concat(Object(l.a)(e.players[r].dot),[{amount:t,duration:c}])}),{players:s,textMessageOne:"".concat(n.state.enemy.name," utilise ").concat(a," sur ").concat(n.state.players[r].name," ce qui fera ").concat(t,"pts de d\xe9gats \xe0 la fin des ").concat(c," prochains tours!")}}),(function(){setTimeout((function(){n.endTurn()}),3e3)})):n.setState((function(e){var s=Object(l.a)(n.state.players);return s[r]=Object(o.a)(Object(o.a)({},s[r]),{},{isHit:!0,hp:e.players[r].hp-t<=0?0:e.players[r].hp-t}),{players:s,textMessageOne:"".concat(n.state.enemy.name," utilise ").concat(a," sur ").concat(n.state.players[r].name," pour ").concat(t,"pts de d\xe9gats!")}}),(function(){setTimeout((function(){n.checkIfPlayerAlive(r),n.endTurn()}),3e3)}))},n.handleClickOnPlayerToAction=function(e){var t=n.state.playerActionSelectable;if("heal"===t.effect||"hot"===t.effect){var a=function(e,t,a){for(var n="",s=0;s<e.length;s++){e[s]=Object(o.a)(Object(o.a)({},e[s]),{},{isSelectable:!1});var c=Object(l.a)(e[s].hot),r=e[s].hp;t.name===e[s].name&&"heal"===a.effect&&(r=e[s].hp+a.amount<e[s].maxHp?e[s].hp+a.amount:e[s].maxHp),t.name===e[s].name&&"hot"===a.effect&&(n=" pendant ".concat(a.duration," tours"),c=[].concat(Object(l.a)(e[s].hot),[{amount:a.amount,duration:a.duration}])),e[s]=Object(o.a)(Object(o.a)({},e[s]),{},{hp:r,hot:c})}return{players:e,textMessageOne:"".concat(b.a.find(e,"me").name,"\n   utilise ").concat(a.name," pour soigner ").concat(t.name," de ").concat(a.amount,"pts de vie").concat(n,"!")}}(Object(l.a)(n.state.players),e,t),s=a.players,c=a.textMessageOne;n.setState({textMessageOne:c,players:s})}else if("movement"===t.effect){var r=function(e,t){for(var a=0,n=0;n<e.length;n++)e[n]=Object(o.a)(Object(o.a)({},e[n]),{},{isSelectable:!1}),t.name===e[n].name&&(a=n);a=b.a.find(b.a.slice(b.a.cloneDeep(e),0,a+1),"me")?a+1:a;var s=b.a.slice(b.a.cloneDeep(e),0,a),c=b.a.slice(b.a.cloneDeep(e),a);return b.a.remove(s,"me"),b.a.remove(c,"me"),s.push(b.a.find(e,"me")),{players:e=s.concat(c),textMessageOne:"".concat(b.a.find(e,"me").name," se positionne \xe0 la place de ").concat(t.name,".")}}(Object(l.a)(n.state.players),e),i=r.players,m=r.textMessageOne;n.setState({textMessageOne:m,players:i})}setTimeout((function(){n.setState({playerActionSelectable:void 0}),n.enemyTurn()}),3e3)},n.handleClickOnActionBar=function(e){var t=e.effect,a=e.name,s=e.amount,c=e.duration;if("melee"===t||"range"===t||"dot"===t){var r=Object(l.a)(n.state.enemy.dot),i=n.state.enemy.hp-s<=0?0:n.state.enemy.hp-s,m="".concat(b.a.find(n.state.players,"me").name," utilise ").concat(a," pour ").concat(s,"pts de d\xe9gats!");"dot"===t&&(r=[].concat(Object(l.a)(n.state.enemy.dot),[{amount:s,duration:c}]),i=n.state.enemy.hp,m="".concat(b.a.find(n.state.players,"me").name," utilise ").concat(a," ce qui infligera ").concat(s,"pts de d\xe9gats \xe0 la fin des ").concat(c," prochains tours!")),n.setState({enemy:Object(o.a)(Object(o.a)({},n.state.enemy),{},{hp:i,isHit:!0,dot:r}),textMessageOne:m}),setTimeout((function(){n.setState({enemy:Object(o.a)(Object(o.a)({},n.state.enemy),{},{isHit:!1,faint:!1})}),n.enemyTurn()}),3e3)}else if("heal"===t||"hot"===t){for(var u=Object(l.a)(n.state.players),p=0;p<n.state.players.length;p++)n.state.players[p].hp>0&&(u[p]=Object(o.a)(Object(o.a)({},u[p]),{},{isSelectable:!0}));n.setState({textMessageOne:"Veuillez selectionner un joueur \xe0 soigner.",playerActionSelectable:e,players:u})}else if("movement"===t){for(var f=Object(l.a)(n.state.players),d=0;d<n.state.players.length;d++)n.state.players[d]!==b.a.find(n.state.players,"me")&&n.state.players[d].hp>0&&(f[d]=Object(o.a)(Object(o.a)({},f[d]),{},{isSelectable:!0}));n.setState({textMessageOne:"Veuillez selectionner la place que vous souhaitez.",playerActionSelectable:e,players:f})}},n.state=T,n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{textMessageOne:"".concat(e.state.enemy.name," apparait!"),enemy:Object(o.a)(Object(o.a)({},e.state.enemy),{},{faint:null})}}),(function(){setTimeout((function(){for(var t=Object(l.a)(e.state.players),a=0;a<e.state.players.length;a++)t[a]=Object(o.a)(Object(o.a)({},t[a]),{},{faint:null}),0===a&&(t[a]=Object(o.a)(Object(o.a)({},t[a]),{},{me:!0}));e.setState({textMessageOne:"Vous entrez pour le combattre !",players:t},(function(){setTimeout((function(){e.setState({textMessageOne:""}),e.nextEnemyAction()}),3e3)}))}),3e3)}))}),1e3)}},{key:"nextEnemyAction",value:function(){var e=Math.floor(Math.random()*this.state.enemy.actions.length);this.setState({enemy:Object(o.a)(Object(o.a)({},this.state.enemy),{},{expectedAction:this.state.enemy.actions[e]})})}},{key:"endTurn",value:function(){var e=this,t=Object(l.a)(this.state.players),a=this.state.enemy;if(a.dot.length>0){var n=O(a).user;this.setState({enemy:n})}if(this.checkIfEnemyAlive()){for(var s=function(a){if(t[a].dot.length>0&&t[a].hp>0){var n=O(e.state.players[a]).user;t[a]=n,e.setState({players:t},(function(){setTimeout((function(){e.checkIfPlayerAlive(a)}),3e3)}))}},c=0;c<t.length;c++)s(c);if(a.hot.length>0){var r=E(a).user;this.setState({enemy:r})}for(var o=0;o<t.length;o++)if(t[o].dot.length>0){var i=E(this.state.players[o]).user;t[o]=i,this.setState({players:t})}this.setState({round:this.state.round+1,players:x(this.state.players),enemy:j(this.state.enemy)}),this.nextEnemyAction()}}},{key:"checkIfPlayerAlive",value:function(e){var t=this,a=Object(l.a)(this.state.players);0===a[e].hp?(a[e]=Object(o.a)(Object(o.a)({},a[e]),{},{faint:!0,isHit:!1}),this.setState({textMessageOne:"".concat(a[e].name," a \xe9t\xe9 terrass\xe9."),players:a},(function(){setTimeout((function(){b.a.find(a,(function(e){return e.hp>0}))?t.setState({textMessageOne:""}):t.setState({textMessageOne:"Toute l'\xe9quipe a perdu.",textMessageTwo:"".concat(t.state.enemy.name," a gagn\xe9!")},(function(){setTimeout((function(){t.setState({gameOver:!0})}),3e3)}))}),3e3)}))):(a[e]=Object(o.a)(Object(o.a)({},a[e]),{},{isHit:!1,faint:!1}),this.setState({textMessageOne:"",players:a}))}},{key:"checkIfEnemyAlive",value:function(){var e=this;return 0!==this.state.enemy.hp||(this.setState({textMessageOne:"".concat(this.state.enemy.name," a perdu."),textMessageTwo:"Vous avez gagn\xe9!",enemy:Object(o.a)(Object(o.a)({},this.state.enemy),{},{faint:!0,isHit:!1})},(function(){setTimeout((function(){e.setState({gameOver:!0})}),3e3)})),!1)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container h-100"},s.a.createElement("div",{className:"row row h-100 justify-content-center align-items-center"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{id:"battle-container",className:"px-2 mx-auto"},s.a.createElement("div",{id:"turn-text-number"},s.a.createElement("i",{className:"fas fa-dice"})," Tour ",this.state.round),s.a.createElement("div",{className:"all-players-box"},b.a.map(this.state.players,(function(t){return s.a.createElement(g,{key:t.name,player:t,onClick:t.isSelectable?e.handleClickOnPlayerToAction:function(){return null}})})),s.a.createElement(v,{enemy:this.state.enemy,expectedAction:this.state.enemy.expectedAction})),s.a.createElement("div",{id:"text-box"},s.a.createElement("div",{id:"text-box-content"},""!==this.state.textMessageOne&&!1===this.state.gameOver&&s.a.createElement(f,{messageOne:this.state.textMessageOne,messageTwo:this.state.textMessageTwo}),""===this.state.textMessageOne&&!1===this.state.gameOver&&Object.keys(b.a.find(this.state.players,"me").actions).map((function(t,a){return s.a.createElement(d,{key:t,frontPlayer:b.a.find(e.state.players,"me")===b.a.last(e.state.players),action:b.a.find(e.state.players,"me").actions[t],onClick:e.handleClickOnActionBar})}))))))))}}]),a}(n.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(M,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f93f695a.chunk.js.map