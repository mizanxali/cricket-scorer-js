(this["webpackJsonpcricket-scorer-js"]=this["webpackJsonpcricket-scorer-js"]||[]).push([[0],{111:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=(a(111),a(91)),i=a(169),b=a(67),p=a(168),d=a(13),h=a(159),j=a(121),g=a(7),m=a(25),u=a(151),O=a(155),f=a(96),x=(a(116),a(72)),w=a.n(x),k=a(86),y=a.n(k),B=Object(m.b)((function(e){return{team1Name:e.team1,team2Name:e.team2,currentInnings:e.currentInnings,target:e.target,totalBalls:e.totalBalls,totalWickets:e.totalWickets,ballByBall:e.ballByBall,score:e.score,wickets:e.wickets,balls:e.balls,batsman1:Object(g.a)({},e.batsman1),batsman2:Object(g.a)({},e.batsman2),bowler:Object(g.a)({},e.bowler)}}))((function(e){return Object(s.jsxs)("div",{className:"LiveScore",children:[Object(s.jsx)(u.a,{variant:"outlined",style:{width:"90%",margin:"30px auto",backgroundColor:"#424242",color:"#fff",borderRadius:"25px"},children:Object(s.jsxs)(O.a,{children:[Object(s.jsxs)(f.a,{variant:"body1",children:["INNINGS ",e.currentInnings," ",e.target?Object(s.jsxs)("span",{children:[" - TARGET: ",e.target]}):Object(s.jsxs)("span",{children:[" (",e.totalBalls/6," overs)"]})]}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{variant:"h4",style:{fontWeight:"bold"},children:[e.target?e.team2Name.substring(0,3).toUpperCase():e.team1Name.substring(0,3).toUpperCase()," ",e.score,"-",e.wickets," (",Math.floor(e.balls/6),".",e.balls%6,")"]}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{variant:"h6",children:[Object(s.jsx)(w.a,{style:{marginRight:"12px"}}),e.batsman1.name," : ",e.batsman1.runsScored,"(",e.batsman1.ballsFaced,") ",e.batsman1.onStrike&&e.totalWickets!==e.wickets?Object(s.jsx)("span",{children:"*"}):null," "]}),Object(s.jsxs)(f.a,{variant:"h6",children:[Object(s.jsx)(w.a,{style:{marginRight:"12px"}}),e.batsman2.name," : ",e.batsman2.runsScored,"(",e.batsman2.ballsFaced,") ",e.batsman2.onStrike&&e.totalWickets!==e.wickets?Object(s.jsx)("span",{children:"*"}):null," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{variant:"h6",children:[Object(s.jsx)(y.a,{style:{marginRight:"12px"}}),e.bowler.name," : ",e.bowler.wicketsTaken,"/",e.bowler.runsConceded," (",Math.floor(e.bowler.ballsBowled/6),".",e.bowler.ballsBowled%6,")"]}),e.target&&e.target>e.score&&e.balls!==e.totalBalls&&e.wickets!==e.totalWickets?Object(s.jsx)("br",{}):null,e.target&&e.target>e.score&&e.balls!==e.totalBalls&&e.wickets!==e.totalWickets?Object(s.jsxs)(f.a,{variant:"body1",children:["TO WIN: ",e.target-e.score," off ",e.totalBalls-e.balls," balls"]}):null]})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(f.a,{variant:"h6",children:"Ball by Ball:"}),Object(s.jsx)(f.a,{variant:"body1",children:e.ballByBall.join(" ")})]})]})})),T=a(47),S=a(48),C=a(50),v=a(49),N="START_MATCH",W="RUNS_SCORED",H="WICKET_TAKEN",I="WIDE_BALL_BOWLED",F="NO_BALL_BOWLED",E="START_SECOND_INNINGS",R=a(156),A=a(157),D=a(173),M=function(e){Object(C.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(T.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={isNoBallChecked:!1},e.onNoBallCheckedHandler=function(t){e.setState({isNoBallChecked:t.target.checked})},e}return Object(S.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"ScoreButtons",style:{margin:"30px auto"},children:[1!==this.props.currentInnings||this.props.balls!==this.props.totalBalls&&this.props.wickets!==this.props.totalWickets?null:Object(s.jsxs)(f.a,{variant:"h5",color:"primary",children:["INNINGS OVER! ",Object(s.jsx)("span",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){return e.props.onStartSecondInnings(e.props.score,e.props.totalBalls,e.props.totalWickets)},children:"Click here to start new innings."})]}),2===this.props.currentInnings&&this.props.score>=this.props.target?Object(s.jsxs)(f.a,{variant:"h5",color:"primary",children:["MATCH OVER! ",this.props.team2Name," win by ",this.props.totalWickets-this.props.wickets," wickets."]}):null,2===this.props.currentInnings&&(this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets)&&this.props.score<this.props.target?Object(s.jsxs)(f.a,{variant:"h5",color:"primary",children:["MATCH OVER! ",this.props.team1Name," win by ",this.props.target-this.props.score-1," runs."]}):null,Object(s.jsx)("br",{}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(j.a,{style:{fontWeight:"bold"},variant:"contained",color:"primary",disabled:this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:this.state.isNoBallChecked?function(){return e.props.onNoBallBowled(0)}:function(){return e.props.onRunsScored(0)},children:"0"}),Object(s.jsx)(j.a,{style:{fontWeight:"bold"},variant:"contained",color:"primary",disabled:this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:this.state.isNoBallChecked?function(){return e.props.onNoBallBowled(1)}:function(){return e.props.onRunsScored(1)},children:"1"}),Object(s.jsx)(j.a,{style:{fontWeight:"bold"},variant:"contained",color:"primary",disabled:this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:this.state.isNoBallChecked?function(){return e.props.onNoBallBowled(2)}:function(){return e.props.onRunsScored(2)},children:"2"}),Object(s.jsx)(j.a,{style:{fontWeight:"bold"},variant:"contained",color:"primary",disabled:this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:this.state.isNoBallChecked?function(){return e.props.onNoBallBowled(3)}:function(){return e.props.onRunsScored(3)},children:"3"}),Object(s.jsx)(j.a,{style:{fontWeight:"bold"},variant:"contained",color:"primary",disabled:this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:this.state.isNoBallChecked?function(){return e.props.onNoBallBowled(4)}:function(){return e.props.onRunsScored(4)},children:"4"}),Object(s.jsx)(j.a,{style:{fontWeight:"bold"},variant:"contained",color:"primary",disabled:this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:this.state.isNoBallChecked?function(){return e.props.onNoBallBowled(6)}:function(){return e.props.onRunsScored(6)},children:"6"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(j.a,{style:{fontWeight:"bold",marginTop:"3px"},variant:"contained",color:"primary",disabled:this.state.isNoBallChecked||this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:function(){return e.props.onWideBallBowled()},children:"WIDE"}),Object(s.jsx)(j.a,{style:{fontWeight:"bold",marginTop:"3px"},variant:"contained",color:"primary",disabled:this.state.isNoBallChecked||this.props.balls===this.props.totalBalls||this.props.wickets===this.props.totalWickets||this.props.target&&this.props.score>=this.props.target,onClick:function(){return e.props.onWicketTaken()},children:"W"})]}),Object(s.jsx)("br",{}),Object(s.jsx)(A.a,{control:Object(s.jsx)(D.a,{checked:this.state.isNoBallChecked,onChange:this.onNoBallCheckedHandler,name:"noball"}),label:"NO BALL"})]})}}]),a}(n.Component),L=Object(m.b)((function(e){return{team1Name:e.team1,team2Name:e.team2,currentInnings:e.currentInnings,target:e.target,score:e.score,totalWickets:e.totalWickets,totalBalls:e.totalBalls,wickets:e.wickets,balls:e.balls}}),(function(e){return{onRunsScored:function(t){return e({type:W,payload:{runsScored:t}})},onWicketTaken:function(){return e({type:H})},onStartSecondInnings:function(t,a,s){return e({type:E,payload:{target:t+1,totalBalls:a,totalWickets:s}})},onWideBallBowled:function(){return e({type:I})},onNoBallBowled:function(t){return e({type:F,payload:{runsScored:t}})}}}))(M),_=a(29),P=a(87),G=a.n(P),U=function(){return Object(s.jsxs)(h.a,{className:"MatchPage",children:[Object(s.jsx)(B,{}),Object(s.jsx)(L,{}),Object(s.jsx)(_.b,{to:"/scorecard",style:{textDecoration:"none"},children:Object(s.jsx)(j.a,{startIcon:Object(s.jsx)(G.a,{}),variant:"contained",color:"secondary",children:"Scorecard"})}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"/cricket-scorer-js",style:{textDecoration:"none"},children:Object(s.jsx)(j.a,{variant:"text",style:{color:"red",marginTop:"30px"},children:"START NEW MATCH"})})]})},z=a(9),K=a(160),V=a(161),J=a(162),Y=a(163),q=a(164),Q=a(88),X=a.n(Q),Z=function(e){Object(C.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(T.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).newBowlingTeam2=[],e.newBowlingTeam1=[],e}return Object(S.a)(a,[{key:"render",value:function(){var e=this;return this.props.bowlingTeam2.forEach((function(t){var a=e.newBowlingTeam2.findIndex((function(e){return e.name===t.name}));-1===a?e.newBowlingTeam2.push(Object(g.a)({},t)):(e.newBowlingTeam2[a].ballsBowled=t.ballsBowled,e.newBowlingTeam2[a].runsConceded=t.runsConceded,e.newBowlingTeam2[a].wicketsTaken=t.wicketsTaken)})),this.props.bowlingTeam1.forEach((function(t){var a=e.newBowlingTeam1.findIndex((function(e){return e.name===t.name}));-1===a?e.newBowlingTeam1.push(Object(g.a)({},t)):(e.newBowlingTeam1[a].ballsBowled=t.ballsBowled,e.newBowlingTeam1[a].runsConceded=t.runsConceded,e.newBowlingTeam1[a].wicketsTaken=t.wicketsTaken)})),Object(s.jsxs)(h.a,{fixed:!0,className:"Scorecard",style:{marginTop:"30px"},children:[Object(s.jsxs)(f.a,{variant:"h3",children:[this.props.team1Name," Batting Scorecard"]}),Object(s.jsxs)(K.a,{children:[Object(s.jsx)(V.a,{children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Name"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Runs"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Balls"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Fours"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Sixes"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Strike Rate"})]})}),Object(s.jsxs)(q.a,{children:[1===this.props.currentInnings?this.props.batsman1.onStrike&&this.props.totalWickets===this.props.wickets?null:Object(s.jsxs)(J.a,{children:[Object(s.jsxs)(Y.a,{align:"center",style:{color:"#fff"},children:[this.props.batsman1.name,Object(s.jsx)("span",{children:"*"})]}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.runsScored}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.ballsFaced}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.foursHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.sixesHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:(this.props.batsman1.runsScored/this.props.batsman1.ballsFaced*100).toFixed(2)})]}):null,1===this.props.currentInnings?this.props.batsman2.onStrike&&this.props.totalWickets===this.props.wickets?null:Object(s.jsxs)(J.a,{children:[Object(s.jsxs)(Y.a,{align:"center",style:{color:"#fff"},children:[this.props.batsman2.name,Object(s.jsx)("span",{children:"*"})]}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.runsScored}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.ballsFaced}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.foursHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.sixesHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:(this.props.batsman2.runsScored/this.props.batsman2.ballsFaced*100).toFixed(2)})]}):null,this.props.battingTeam1.map((function(e){return Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.name}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.runsScored}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.ballsFaced}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.foursHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.sixesHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:(e.runsScored/e.ballsFaced*100).toFixed(2)})]},e.name)}))]})]}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{variant:"h3",children:[this.props.team2Name," Bowling Scorecard"]}),Object(s.jsxs)(K.a,{children:[Object(s.jsx)(V.a,{children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Name"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Overs"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Runs"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Wickets"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Economy"})]})}),Object(s.jsxs)(q.a,{children:[1===this.props.currentInnings?Object(s.jsxs)(J.a,{children:[Object(s.jsxs)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:[this.props.bowler.name,this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?null:Object(s.jsx)("span",{children:"*"})]}),Object(s.jsxs)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:[Math.floor(this.props.bowler.ballsBowled/6),".",this.props.bowler.ballsBowled%6]}),Object(s.jsx)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:this.props.bowler.runsConceded}),Object(s.jsx)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:this.props.bowler.wicketsTaken}),Object(s.jsx)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:(this.props.bowler.runsConceded/(this.props.bowler.ballsBowled/6)).toFixed(1)})]}):null,this.newBowlingTeam2.map((function(t){return t.name!==e.props.bowler.name?Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:t.name}),Object(s.jsxs)(Y.a,{align:"center",style:{color:"#808080"},children:[Math.floor(t.ballsBowled/6),".",t.ballsBowled%6]}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:t.runsConceded}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:t.wicketsTaken}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:(t.runsConceded/(t.ballsBowled/6)).toFixed(1)})]},t.name):null}))]})]}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{variant:"h3",children:[this.props.team2Name," Batting Scorecard"]}),Object(s.jsxs)(K.a,{children:[Object(s.jsx)(V.a,{children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Name"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Runs"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Balls"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Fours"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Sixes"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Strike Rate"})]})}),Object(s.jsxs)(q.a,{children:[2===this.props.currentInnings?this.props.batsman1.onStrike&&this.props.totalWickets===this.props.wickets?null:Object(s.jsxs)(J.a,{children:[Object(s.jsxs)(Y.a,{align:"center",style:{color:"#fff"},children:[this.props.batsman1.name,Object(s.jsx)("span",{children:"*"})]}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.runsScored}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.ballsFaced}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.foursHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman1.sixesHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:(this.props.batsman1.runsScored/this.props.batsman1.ballsFaced*100).toFixed(2)})]}):null,2===this.props.currentInnings?this.props.batsman2.onStrike&&this.props.totalWickets===this.props.wickets?null:Object(s.jsxs)(J.a,{children:[Object(s.jsxs)(Y.a,{align:"center",style:{color:"#fff"},children:[this.props.batsman2.name,Object(s.jsx)("span",{children:"*"})]}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.runsScored}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.ballsFaced}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.foursHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:this.props.batsman2.sixesHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:(this.props.batsman2.runsScored/this.props.batsman2.ballsFaced*100).toFixed(2)})]}):null,this.props.battingTeam2.map((function(e){return Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.name}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.runsScored}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.ballsFaced}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.foursHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:e.sixesHit}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:(e.runsScored/e.ballsFaced*100).toFixed(2)})]},e.name)}))]})]}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{variant:"h3",children:[this.props.team1Name," Bowling Scorecard"]}),Object(s.jsxs)(K.a,{children:[Object(s.jsx)(V.a,{children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Name"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Overs"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Runs"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Wickets"}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#fff"},children:"Economy"})]})}),Object(s.jsxs)(q.a,{children:[2===this.props.currentInnings?Object(s.jsxs)(J.a,{children:[Object(s.jsxs)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:[this.props.bowler.name,this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?null:Object(s.jsx)("span",{children:"*"})]}),Object(s.jsxs)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:[Math.floor(this.props.bowler.ballsBowled/6),".",this.props.bowler.ballsBowled%6]}),Object(s.jsx)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:this.props.bowler.runsConceded}),Object(s.jsx)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:this.props.bowler.wicketsTaken}),Object(s.jsx)(Y.a,{align:"center",style:{color:this.props.totalBalls===this.props.balls||this.props.totalWickets===this.props.wickets?"#808080":"#fff"},children:(this.props.bowler.runsConceded/(this.props.bowler.ballsBowled/6)).toFixed(1)})]}):null,this.newBowlingTeam1.map((function(t){return t.name!==e.props.bowler.name?Object(s.jsxs)(J.a,{children:[Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:t.name}),Object(s.jsxs)(Y.a,{align:"center",style:{color:"#808080"},children:[Math.floor(t.ballsBowled/6),".",t.ballsBowled%6]}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:t.runsConceded}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:t.wicketsTaken}),Object(s.jsx)(Y.a,{align:"center",style:{color:"#808080"},children:(t.runsConceded/(t.ballsBowled/6)).toFixed(1)})]},t.name):null}))]})]}),Object(s.jsx)(_.b,{to:"/match",style:{textDecoration:"none"},children:Object(s.jsx)(j.a,{startIcon:Object(s.jsx)(X.a,{}),variant:"contained",color:"secondary",style:{margin:"30px auto"},children:"Back"})})]})}}]),a}(n.Component),$=Object(m.b)((function(e){return{team1Name:e.team1,team2Name:e.team2,currentInnings:e.currentInnings,totalBalls:e.totalBalls,totalWickets:e.totalWickets,score:e.score,wickets:e.wickets,balls:e.balls,batsman1:Object(g.a)({},e.batsman1),batsman2:Object(g.a)({},e.batsman2),bowler:Object(g.a)({},e.bowler),battingTeam1:Object(z.a)(e.battingTeam1),bowlingTeam2:Object(z.a)(e.bowlingTeam2),battingTeam2:Object(z.a)(e.battingTeam2),bowlingTeam1:Object(z.a)(e.bowlingTeam1)}}))(Z),ee=a(170),te=a(5),ae=a(92),se=a(93),ne=a(174),le=a(165),re=a(166),oe=a(167),ce=a(158),ie=a(89),be=a.n(ie),pe=a(90),de=a.n(pe),he=a(172),je=Object(te.a)((function(e){return{root:{margin:0,padding:e.spacing(2),backgroundColor:"#424242",color:"#808080"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,l=Object(se.a)(e,["children","classes","onClose"]);return Object(s.jsxs)(le.a,Object(g.a)(Object(g.a)({disableTypography:!0,className:a.root},l),{},{children:[Object(s.jsx)(f.a,{variant:"h6",children:t}),n?Object(s.jsx)(ce.a,{"aria-label":"close",className:a.closeButton,onClick:n,children:Object(s.jsx)(be.a,{})}):null]}))})),ge=Object(te.a)((function(e){return{root:{padding:e.spacing(2),backgroundColor:"#424242",color:"#fff"}}}))(re.a),me=Object(te.a)((function(e){return{root:{margin:0,padding:e.spacing(1),backgroundColor:"#424242"}}}))(oe.a);function ue(){var e=l.a.useState(!1),t=Object(ae.a)(e,2),a=t[0],n=t[1],r=function(){n(!1)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(j.a,{startIcon:Object(s.jsx)(de.a,{}),variant:"contained",color:"primary",onClick:function(){n(!0)},children:"HOW TO USE"}),Object(s.jsxs)(ne.a,{onClose:r,"aria-labelledby":"customized-dialog-title",open:a,children:[Object(s.jsx)(je,{id:"customized-dialog-title",onClose:r,children:"HOW TO USE THIS APP"}),Object(s.jsxs)(ge,{dividers:!0,children:[Object(s.jsx)(f.a,{gutterBottom:!0,children:"Enter the starting info on this page and click on START MATCH to start a new match with the entered details. You will be redirect to the match page."}),Object(s.jsx)(f.a,{gutterBottom:!0,children:"Enter outcome of each ball of the match by clicking on the appropriate buttons."}),Object(s.jsx)(f.a,{gutterBottom:!0,children:"Click on SCORECARD to view the detailed batting and bowling scorecards, updated in real time after every ball."}),Object(s.jsx)("br",{}),Object(s.jsx)(he.a,{severity:"warning",children:"Do not refresh the website during the match! Doing so will lead to loss of your data."})]}),Object(s.jsx)(me,{children:Object(s.jsx)(j.a,{autoFocus:!0,onClick:r,color:"primary",children:"GOT IT"})})]})]})}var Oe=function(e){Object(C.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(T.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={team1:"India",team2:"Australia",overs:20,wickets:10,openingStriker:"R Sharma",openingNonStriker:"S Dhawan",openingBowler:"M Starc"},e.onTeam1ChangedHandler=function(t){e.setState({team1:t.target.value})},e.onTeam2ChangedHandler=function(t){e.setState({team2:t.target.value})},e.onOversChangedHandler=function(t){e.setState({overs:parseInt(t.target.value)})},e.onWicketsChangedHandler=function(t){e.setState({wickets:parseInt(t.target.value)})},e.onOpeningStrikerChangedHandler=function(t){e.setState({openingStriker:t.target.value})},e.onOpeningNonStrikerChangedHandler=function(t){e.setState({openingNonStriker:t.target.value})},e.onOpeningBowlerChangedHandler=function(t){e.setState({openingBowler:t.target.value})},e}return Object(S.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(s.jsxs)(h.a,{className:"LandingPage",children:[Object(s.jsx)(f.a,{variant:"h3",children:"CRICKET SCORER"}),Object(s.jsx)(f.a,{variant:"h6",children:"Start a new match in under 30 seconds!"}),Object(s.jsx)("br",{}),Object(s.jsx)(ue,{}),Object(s.jsx)("br",{}),Object(s.jsxs)("form",{children:[Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"team1",children:"Name of team batting first"}),Object(s.jsx)(ee.a,{style:{display:"block",margin:"10px auto 20px"},InputProps:{className:t.input},id:"team1",type:"text",value:this.state.team1,onChange:this.onTeam1ChangedHandler}),Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"team2",children:"Name of team bowling first"}),Object(s.jsx)(ee.a,{style:{display:"block",margin:"10px auto 20px"},InputProps:{className:t.input},id:"team2",type:"text",value:this.state.team2,onChange:this.onTeam2ChangedHandler}),Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"overs",children:"Overs"}),Object(s.jsx)("input",{style:{display:"block",margin:"10px auto 20px"},id:"overs",type:"number",value:this.state.overs,onChange:this.onOversChangedHandler}),Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"wickets",children:"Wickets"}),Object(s.jsx)("input",{style:{display:"block",margin:"10px auto 20px"},id:"wickets",type:"number",value:this.state.wickets,onChange:this.onWicketsChangedHandler}),Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"openingStriker",children:"Opening Batsman (Striker)"}),Object(s.jsx)(ee.a,{style:{display:"block",margin:"10px auto 20px"},InputProps:{className:t.input},id:"openingStriker",type:"text",value:this.state.openingStriker,onChange:this.onOpeningStrikerChangedHandler}),Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"openingNonStriker",children:"Opening Batsman (Non-Striker)"}),Object(s.jsx)(ee.a,{style:{display:"block",margin:"10px auto 20px"},InputProps:{className:t.input},id:"openingNonStriker",type:"text",value:this.state.openingNonStriker,onChange:this.onOpeningNonStrikerChangedHandler}),Object(s.jsx)("label",{style:{display:"block",margin:"auto"},htmlFor:"openingBowler",children:"Opening Bowler"}),Object(s.jsx)(ee.a,{style:{display:"block",margin:"10px auto 20px"},InputProps:{className:t.input},id:"openingBowler",type:"text",value:this.state.openingBowler,onChange:this.onOpeningBowlerChangedHandler})]}),Object(s.jsx)(_.b,{to:"/match",style:{textDecoration:"none"},children:Object(s.jsx)(j.a,{onClick:function(){return e.props.onStartMatch(Object(g.a)({},e.state))},variant:"contained",color:"secondary",children:"START MATCH"})}),Object(s.jsx)("br",{}),Object(s.jsxs)(f.a,{color:"primary",variant:"subtitle2",style:{marginTop:"30px"},children:["Developed by ",Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/mizanxali",style:{textDecoration:"none",color:"inherit"},children:"@mizanxali"})]})]})}}]),a}(n.Component),fe=Object(m.b)(null,(function(e){return{onStartMatch:function(t){return e({type:N,payload:t})}}}))(Object(te.a)({input:{color:"white"}})(Oe)),xe=Object(c.a)({palette:{primary:{main:b.a[500]},secondary:{main:p.a[800]}}}),we=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(i.a,{theme:xe,children:[Object(s.jsx)(d.a,{path:"/",exact:!0,component:fe}),Object(s.jsx)(d.a,{path:"/match",exact:!0,component:U}),Object(s.jsx)(d.a,{path:"/scorecard",exact:!0,component:$})]})})},ke=a(58),ye={team1:"Dummy Team 1",team2:"Dummy Team 2",currentInnings:1,target:null,totalWickets:10,totalBalls:120,ballByBall:[],score:0,wickets:0,balls:0,batsman1:{name:"Dummy Batsman",runsScored:0,ballsFaced:0,foursHit:0,sixesHit:0,onStrike:!0},batsman2:{name:"Dummy Batsman",runsScored:0,ballsFaced:0,foursHit:0,sixesHit:0,onStrike:!1},bowler:{name:"Dummy Bowler",ballsBowled:0,runsConceded:0,wicketsTaken:0},battingTeam:[],bowlingTeam:[]},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{team1:t.payload.team1,team2:t.payload.team2,currentInnings:1,target:null,totalWickets:t.payload.wickets,totalBalls:6*t.payload.overs,ballByBall:[],score:0,wickets:0,balls:0,batsman1:{name:t.payload.openingStriker,runsScored:0,ballsFaced:0,foursHit:0,sixesHit:0,onStrike:!0},batsman2:{name:t.payload.openingNonStriker,runsScored:0,ballsFaced:0,foursHit:0,sixesHit:0,onStrike:!1},bowler:{name:t.payload.openingBowler,ballsBowled:0,runsConceded:0,wicketsTaken:0},battingTeam1:[],bowlingTeam2:[],battingTeam2:[],bowlingTeam1:[]};case W:var a=Object(g.a)({},e.batsman1),s=Object(g.a)({},e.batsman2),n=Object(g.a)({},e.bowler),l=null;if(a.onStrike&&(a.runsScored+=t.payload.runsScored,a.ballsFaced++,4===t.payload.runsScored&&a.foursHit++,6===t.payload.runsScored&&a.sixesHit++),s.onStrike&&(s.runsScored+=t.payload.runsScored,s.ballsFaced++,4===t.payload.runsScored&&s.foursHit++,6===t.payload.runsScored&&s.sixesHit++),n.ballsBowled++,n.runsConceded+=t.payload.runsScored,(e.balls+1)%6===0&&(l=Object(g.a)({},n),e.balls!==e.totalBalls-1)){var r=prompt("Over up! Enter new bowler name.");n.name=r,n.ballsBowled=0,n.runsConceded=0,n.wicketsTaken=0,1===e.currentInnings?e.bowlingTeam2.forEach((function(e){e.name===r&&(n.ballsBowled=e.ballsBowled,n.runsConceded=e.runsConceded,n.wicketsTaken=e.wicketsTaken)})):e.bowlingTeam1.forEach((function(e){e.name===r&&(n.ballsBowled=e.ballsBowled,n.runsConceded=e.runsConceded,n.wicketsTaken=e.wicketsTaken)}))}return((e.balls+1)%6===0&&1!==t.payload.runsScored&&3!==t.payload.runsScored||(e.balls+1)%6!==0&&(1===t.payload.runsScored||3===t.payload.runsScored))&&(a.onStrike=!a.onStrike,s.onStrike=!s.onStrike),Object(g.a)(Object(g.a)({},e),{},{ballByBall:[].concat(Object(z.a)(e.ballByBall.slice(0,e.ballByBall.length)),[t.payload.runsScored],Object(z.a)(e.ballByBall.slice(e.ballByBall.length))),score:e.score+t.payload.runsScored,balls:e.balls+1,batsman1:a,batsman2:s,bowler:n,bowlingTeam2:1===e.currentInnings&&l?[].concat(Object(z.a)(e.bowlingTeam2.slice(0,e.bowlingTeam2.length)),[Object(g.a)({},l)],Object(z.a)(e.bowlingTeam2.slice(e.bowlingTeam2.length))):e.bowlingTeam2,bowlingTeam1:2===e.currentInnings&&l?[].concat(Object(z.a)(e.bowlingTeam1.slice(0,e.bowlingTeam1.length)),[Object(g.a)({},l)],Object(z.a)(e.bowlingTeam1.slice(e.bowlingTeam1.length))):e.bowlingTeam1});case H:var o=Object(g.a)({},e.batsman1),c=Object(g.a)({},e.batsman2),i=Object(g.a)({},e.bowler),b=null,p=null;if(o.onStrike&&(o.ballsFaced++,b=Object(g.a)({},o),e.wickets!==e.totalWickets-1&&e.balls!==e.totalBalls-1)){var d=prompt("Out! Enter new batsman name.");o.name=d,o.runsScored=0,o.ballsFaced=0,o.foursHit=0,o.sixesHit=0}if(c.onStrike&&(c.ballsFaced++,b=Object(g.a)({},c),e.wickets!==e.totalWickets-1&&e.balls!==e.totalBalls-1)){var h=prompt("Out! Enter new batsman name.");c.name=h,c.runsScored=0,c.ballsFaced=0,c.foursHit=0,c.sixesHit=0}if(i.ballsBowled++,i.wicketsTaken++,(e.balls+1)%6===0&&(p=Object(g.a)({},i),e.wickets!==e.totalWickets-1&&e.balls!==e.totalBalls-1)){var j=prompt("Over up! Enter new bowler name.");i.name=j,i.ballsBowled=0,i.runsConceded=0,i.wicketsTaken=0,1===e.currentInnings?e.bowlingTeam2.forEach((function(e){e.name===j&&(i.ballsBowled=e.ballsBowled,i.runsConceded=e.runsConceded,i.wicketsTaken=e.wicketsTaken)})):e.bowlingTeam1.forEach((function(e){e.name===j&&(i.ballsBowled=e.ballsBowled,i.runsConceded=e.runsConceded,i.wicketsTaken=e.wicketsTaken)}))}return(e.balls+1)%6===0&&(o.onStrike=!o.onStrike,c.onStrike=!c.onStrike),Object(g.a)(Object(g.a)({},e),{},{ballByBall:[].concat(Object(z.a)(e.ballByBall.slice(0,e.ballByBall.length)),["W"],Object(z.a)(e.ballByBall.slice(e.ballByBall.length))),wickets:e.wickets+1,balls:e.balls+1,batsman1:o,batsman2:c,bowler:i,battingTeam1:1===e.currentInnings?[].concat(Object(z.a)(e.battingTeam1.slice(0,e.battingTeam1.length)),[Object(g.a)({},b)],Object(z.a)(e.battingTeam1.slice(e.battingTeam1.length))):e.battingTeam1,battingTeam2:2===e.currentInnings?[].concat(Object(z.a)(e.battingTeam2.slice(0,e.battingTeam2.length)),[Object(g.a)({},b)],Object(z.a)(e.battingTeam2.slice(e.battingTeam2.length))):e.battingTeam2,bowlingTeam2:1===e.currentInnings&&p?[].concat(Object(z.a)(e.bowlingTeam2.slice(0,e.bowlingTeam2.length)),[Object(g.a)({},p)],Object(z.a)(e.bowlingTeam2.slice(e.bowlingTeam2.length))):e.bowlingTeam2,bowlingTeam1:2===e.currentInnings&&p?[].concat(Object(z.a)(e.bowlingTeam1.slice(0,e.bowlingTeam1.length)),[Object(g.a)({},p)],Object(z.a)(e.bowlingTeam1.slice(e.bowlingTeam1.length))):e.bowlingTeam1});case I:return Object(g.a)(Object(g.a)({},e),{},{ballByBall:[].concat(Object(z.a)(e.ballByBall.slice(0,e.ballByBall.length)),["WD"],Object(z.a)(e.ballByBall.slice(e.ballByBall.length))),score:e.score+1,bowler:Object(g.a)(Object(g.a)({},e.bowler),{},{runsConceded:e.bowler.runsConceded+1})});case F:var m=Object(g.a)({},e.batsman1),u=Object(g.a)({},e.batsman2),O=Object(g.a)({},e.bowler);return m.onStrike&&(m.runsScored+=t.payload.runsScored,m.ballsFaced++,4===t.payload.runsScored&&m.foursHit++,6===t.payload.runsScored&&m.sixesHit++),u.onStrike&&(u.runsScored+=t.payload.runsScored,u.ballsFaced++,4===t.payload.runsScored&&u.foursHit++,6===t.payload.runsScored&&u.sixesHit++),O.runsConceded+=t.payload.runsScored+1,1!==t.payload.runsScored&&3!==t.payload.runsScored||(m.onStrike=!m.onStrike,u.onStrike=!u.onStrike),Object(g.a)(Object(g.a)({},e),{},{ballByBall:[].concat(Object(z.a)(e.ballByBall.slice(0,e.ballByBall.length)),["NB+"+t.payload.runsScored.toString()],Object(z.a)(e.ballByBall.slice(e.ballByBall.length))),score:e.score+t.payload.runsScored+1,batsman1:m,batsman2:u,bowler:O});case E:var f=prompt("Enter opening batsman name (striker)."),x=prompt("Enter opening batsman name (non-striker)."),w=prompt("Enter opening bowler name.");return Object(g.a)(Object(g.a)({},e),{},{currentInnings:2,target:t.payload.target,totalWickets:t.payload.totalWickets,totalBalls:t.payload.totalBalls,ballByBall:[],score:0,wickets:0,balls:0,batsman1:{name:f,runsScored:0,ballsFaced:0,foursHit:0,sixesHit:0,onStrike:!0},batsman2:{name:x,runsScored:0,ballsFaced:0,foursHit:0,sixesHit:0,onStrike:!1},bowler:{name:w,ballsBowled:0,runsConceded:0,wicketsTaken:0},battingTeam1:1===e.currentInnings?[].concat(Object(z.a)(e.battingTeam1.slice(0,e.battingTeam1.length)),[Object(g.a)({},e.batsman1),Object(g.a)({},e.batsman2)],Object(z.a)(e.battingTeam1.slice(e.battingTeam1.length))):e.battingTeam1,battingTeam2:2===e.currentInnings?[].concat(Object(z.a)(e.battingTeam2.slice(0,e.battingTeam2.length)),[Object(g.a)({},e.batsman1),Object(g.a)({},e.batsman2)],Object(z.a)(e.battingTeam2.slice(e.battingTeam2.length))):e.battingTeam2,bowlingTeam2:1===e.currentInnings?[].concat(Object(z.a)(e.bowlingTeam2.slice(0,e.bowlingTeam2.length)),[Object(g.a)({},e.bowler)],Object(z.a)(e.bowlingTeam2.slice(e.bowlingTeam2.length))):e.bowlingTeam2,bowlingTeam1:2===e.currentInnings?[].concat(Object(z.a)(e.bowlingTeam1.slice(0,e.bowlingTeam1.length)),[Object(g.a)({},e.bowler)],Object(z.a)(e.bowlingTeam1.slice(e.bowlingTeam1.length))):e.bowlingTeam1});default:return e}},Te=Object(ke.b)(Be);o.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(m.a,{store:Te,children:Object(s.jsx)(_.a,{basename:"/cricket-scorer-js",children:Object(s.jsx)(we,{})})})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.0891f17b.chunk.js.map