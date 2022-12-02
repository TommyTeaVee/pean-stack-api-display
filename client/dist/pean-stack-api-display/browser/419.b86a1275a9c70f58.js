"use strict";(self.webpackChunkpean_stack_api_display=self.webpackChunkpean_stack_api_display||[]).push([[419],{9419:(E,b,u)=>{u.r(b),u.d(b,{GoogleChartModule:()=>U});var C=u(6895),y=u(7905),S=u(2340),e=u(1571);const v=JSON.parse('[{"year":"2008","sales":1020,"expenses":570},{"year":"2009","sales":1060,"expenses":700},{"year":"2010","sales":1020,"expenses":550},{"year":"2011","sales":1250,"expenses":800},{"year":"2012","sales":1090,"expenses":900},{"year":"2013","sales":900,"expenses":800}]');let f=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.ez]}),t})(),g=(()=>{class t{constructor(){this.google=google}getGoogle(){return this.google}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:f}),t})();var Z=u(529);const h="http://localhost:5050";let m=(()=>{class t{constructor(a){this.http=a}getAllMetals(){return this.http.get(`${h}/metals`)}getCompanyPerformance(){return this.http.get(`${h}/companyPerformance`)}getFrameworkMarketshare(){return this.http.get(`${h}/frameworkMarketshare`)}getGaugeData(){return this.http.get(`${h}/gaugeData`)}getCountryData(){return this.http.get(`${h}/CountryData`)}createMetal(a){return this.http.post(h,a)}update(a,r){return this.http.put(`${h}/${a}`,r)}deleteMetal(a){return this.http.delete(`${h}/${a}`)}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(Z.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),L=(()=>{class t{constructor(a,r){this.gChartService=a,this.crudService=r,this.isProd=!0,this.compPerfData=v,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["corechart","table"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const a=[],r=[],l={subtitle:"in millions of euro (EUR)",vAxis:{title:"Revenue (million euro)"},hAxis:{title:"Year"},width:350,height:300,curveType:"function",legend:{position:"bottom"}};this.isProd?this.crudService.getCompanyPerformance().subscribe(n=>{a.push(...n),a.forEach(p=>r.push([p.year,p.sales,p.expenses]));const i=this.gLib.visualization.arrayToDataTable([["Year","Sales","Expenses"],...r]);new this.gLib.visualization.LineChart(document.getElementById("divLineChart")).draw(i,l)}):v.forEach(n=>r.push([n.year,n.sales,n.expenses]));const s=this.gLib.visualization.arrayToDataTable([["Year","Sales","Expenses"],...r]);new this.gLib.visualization.LineChart(document.getElementById("divLineChart")).draw(s,l)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(g),e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-line-chart"]],inputs:{isProd:"isProd"},decls:3,vars:0,consts:[[1,"title"],["id","divLineChart"]],template:function(a,r){1&a&&(e.TgZ(0,"h6",0),e._uU(1,"Yearly Company Performance (MM euro)"),e.qZA(),e._UZ(2,"div",1))},styles:["#divLineChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]}),t})();const w=JSON.parse('[{"framework":"React","share":57.5},{"framework":"Angular","share":31.5},{"framework":"Vue","share":11}]');let x=(()=>{class t{constructor(a,r){this.gChartService=a,this.crudService=r,this.isProd=!0,this.frameworkMarketData=w,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["corechart"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const a=[],r=[];this.isProd?this.crudService.getFrameworkMarketshare().subscribe(n=>{a.push(...n),a.forEach(i=>r.push([i.framework,+i.share]))}):w.forEach(n=>r.push([n.framework,+n.share]));const s=new this.gLib.visualization.DataTable,c=new this.gLib.visualization.PieChart(document.getElementById("divPieChart"));s.addColumn("string","Framework"),s.addColumn("number","%"),s.addRows([...r]),c.draw(s,{chartArea:{left:"3%",top:"3%",height:"94%",width:"94%"},is3D:!0,pieHole:.2,pieSliceTextStyle:{color:"white",margin:0,padding:0}})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(g),e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pie-chart"]],inputs:{isProd:"isProd"},decls:3,vars:0,consts:[[1,"title"],["id","divPieChart"]],template:function(a,r){1&a&&(e.TgZ(0,"h6",0),e._uU(1,"Top JS Framework Market Share"),e.qZA(),e._UZ(2,"div",1))},styles:["#divPieChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]}),t})();const P=JSON.parse('[{"name":"Russia","population":146,"bordersMed":false},{"name":"Germany","population":84,"bordersMed":false},{"name":"Turkey","population":85,"bordersMed":true},{"name":"France","population":65,"bordersMed":true},{"name":"UK","population":68,"bordersMed":false},{"name":"Italy","population":60,"bordersMed":true},{"name":"Spain","population":47,"bordersMed":true},{"name":"Poland","population":38,"bordersMed":false},{"name":"Ukraine","population":44,"bordersMed":false},{"name":"Romania","population":19,"bordersMed":false}]');let A=(()=>{class t{constructor(a,r){this.gChartService=a,this.crudService=r,this.isProd=!0,this.countryData=P,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["table"]}),this.gLib.charts.setOnLoadCallback(this.drawTable.bind(this))}drawTable(){const a=[],r=[];this.isProd?this.crudService.getCountryData().subscribe(i=>{a.push(...i),a.forEach(d=>r.push([d.name,d.population,d.bordersMed]))}):P.forEach(i=>r.push([i.name,i.population,i.bordersMed]));const c=new this.gLib.visualization.Table(document.getElementById("divTableChart")),n=new this.gLib.visualization.DataTable;n.addColumn("string","Country"),n.addColumn("number","Pop. (MM)"),n.addColumn("boolean","Borders Med."),n.addRows([...r]),c.draw(n,{showRowNumber:!1,allowHtml:!0,cssClassNames:{tableCell:"cssTableCell"}})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(g),e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table-chart"]],inputs:{isProd:"isProd"},decls:3,vars:0,consts:[[1,"title"],["id","divTableChart"]],template:function(a,r){1&a&&(e.TgZ(0,"h6",0),e._uU(1,"Top Ten European Countries by Population"),e.qZA(),e._UZ(2,"div",1))},styles:["#divTableChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;text-align:center}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}.cssTableCell[_ngcontent-%COMP%]{align-items:center}"]}),t})();const T=JSON.parse('[{"label":"Memory","reading":80},{"label":"CPU","reading":55},{"label":"Network","reading":68}]');let D=(()=>{class t{constructor(a,r){this.gChartService=a,this.crudService=r,this.isProd=!0,this.gaugeData=T,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["gauge"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const a=[],r=[],l={width:400,height:110,redFrom:90,redTo:100,yellowFrom:75,yellowTo:90,minorTicks:5};this.isProd?this.crudService.getGaugeData().subscribe(n=>{a.push(...n),a.forEach(i=>r.push([i.label,i.reading]))}):T.forEach(n=>r.push([n.label,n.reading]));const s=this.gLib.visualization.arrayToDataTable([["Label","Value"],...r]),c=new this.gLib.visualization.Gauge(document.getElementById("divGaugeChart"));c.draw(s,l),setInterval(()=>{s.setValue(0,1,40+Math.round(60*Math.random())),c.draw(s,l)},13e3),setInterval(()=>{s.setValue(1,1,40+Math.round(60*Math.random())),c.draw(s,l)},5e3),setInterval(()=>{s.setValue(2,1,60+Math.round(20*Math.random())),c.draw(s,l)},26e3)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(g),e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-gauge-chart"]],inputs:{isProd:"isProd"},decls:3,vars:0,consts:[[1,"title"],["id","divGaugeChart"]],template:function(a,r){1&a&&(e.TgZ(0,"h6",0),e._uU(1,"Gauges Displaying Data From Backend Postgres Database"),e.qZA(),e._UZ(2,"div",1))},styles:["#divGaugeChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]}),t})();const M=JSON.parse('[{"element":"Magnesium","density":1.74,"color":"#696969","symbol":"Mg"},{"element":"Titanium","density":4.5,"color":"blue","symbol":"Ti"},{"element":"Vanadium","density":4.5,"color":"#d4b8cf","symbol":"V"},{"element":"Chromium","density":7.19,"color":"#fff500","symbol":"Cr"},{"element":"Iron","density":7.87,"color":"#d4661b","symbol":"Fe"},{"element":"Cobalt","density":8.9,"color":"#0047ab","symbol":"Co"},{"element":"Copper","density":8.94,"color":"#b87333","symbol":"Cu"},{"element":"Silver","density":10.49,"color":"silver","symbol":"Ag"},{"element":"Gold","density":19.3,"color":"gold","symbol":"Au"},{"element":"Platinum","density":21.45,"color":"#e5e4e2","symbol":"Pt"}]');let G=(()=>{class t{constructor(a,r){this.gChartService=a,this.crudService=r,this.isProd=!0,this.metals=M,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["corechart"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const a=[],r=[];this.isProd?this.crudService.getAllMetals().subscribe(d=>{a.push(...d),a.forEach(p=>r.push([p.element,p.density,p.color,p.symbol]))}):M.forEach(d=>r.push([d.element,d.density,d.color,d.symbol]));const s=[["Element","Density",{role:"style"},{role:"annotation"}],...r],c=this.gLib.visualization.arrayToDataTable(s);new this.gLib.visualization.DataView(c).setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]),new this.gLib.visualization.BarChart(document.getElementById("divBarChart")).draw(c,{width:500,height:300,bar:{groupWidth:"95%"},legend:{position:"none"}})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(g),e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-bar-chart"]],inputs:{isProd:"isProd"},decls:3,vars:0,consts:[[1,"title"],["id","divBarChart"]],template:function(a,r){1&a&&(e.TgZ(0,"h6",0),e._uU(1,"Density of Precious Metals, in g/cm^3"),e.qZA(),e._UZ(2,"div",1))},styles:["#divBarChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]}),t})();const _=[{path:"",component:(()=>{class t{constructor(){this.isProd=!0}ngOnInit(){S.N.production||(this.isProd=!1)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-google-chart"]],decls:49,vars:5,consts:[["name","description","content","Shows google charts data"],[1,"main-div"],[1,"card","rounded"],[1,"card-header","bg-light"],[1,"row"],[1,"col-2"],["src","../../../../assets/svgs/chart.svg","alt","Chart logo",1,"header-image"],[1,"col-10"],[1,"card-title","text-dark","float-left","p-0"],[1,"card-subtitle","font-italic","float-left","p-0"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"accordion-button"],["id","collapseOne","aria-labelledby","headingOne","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse","show"],[1,"accordion-body"],[3,"isProd"],["id","headingTwo",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"accordion-button","collapsed"],["id","collapseTwo","aria-labelledby","headingTwo","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],["id","headingThree",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"accordion-button","collapsed"],["id","collapseThree","aria-labelledby","headingThree","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],["id","headingFour",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseFour","aria-expanded","false","aria-controls","collapseFour",1,"accordion-button","collapsed"],["id","collapseFour","aria-labelledby","headingFour","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],["id","headingFive",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseFive","aria-expanded","false","aria-controls","collapseFive",1,"accordion-button","collapsed"],["id","collapseFive","aria-labelledby","headingFive","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"]],template:function(a,r){1&a&&(e.TgZ(0,"head"),e._UZ(1,"meta",0),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.qZA(),e.TgZ(8,"div",7)(9,"h5",8),e._uU(10,"Google Charts"),e.qZA(),e.TgZ(11,"h6",9),e._uU(12," Data from POSTgreSQL "),e.qZA()()()()(),e.TgZ(13,"div",10)(14,"div",11)(15,"h2",12)(16,"button",13),e._uU(17," Line Chart "),e.qZA()(),e.TgZ(18,"div",14)(19,"div",15),e._UZ(20,"app-line-chart",16),e.qZA()()(),e.TgZ(21,"div",11)(22,"h2",17)(23,"button",18),e._uU(24," Pie Chart "),e.qZA()(),e.TgZ(25,"div",19)(26,"div",15),e._UZ(27,"app-pie-chart",16),e.qZA()()(),e.TgZ(28,"div",11)(29,"h2",20)(30,"button",21),e._uU(31," Gauges "),e.qZA()(),e.TgZ(32,"div",22)(33,"div",15),e._UZ(34,"app-gauge-chart",16),e.qZA()()(),e.TgZ(35,"div",11)(36,"h2",23)(37,"button",24),e._uU(38," Countries "),e.qZA()(),e.TgZ(39,"div",25)(40,"div",15),e._UZ(41,"app-table-chart",16),e.qZA()()(),e.TgZ(42,"div",11)(43,"h2",26)(44,"button",27),e._uU(45," Bar Chart "),e.qZA()(),e.TgZ(46,"div",28)(47,"div",15),e._UZ(48,"app-bar-chart",16),e.qZA()()()()()),2&a&&(e.xp6(20),e.Q6J("isProd",r.isProd),e.xp6(7),e.Q6J("isProd",r.isProd),e.xp6(7),e.Q6J("isProd",r.isProd),e.xp6(7),e.Q6J("isProd",r.isProd),e.xp6(7),e.Q6J("isProd",r.isProd))},dependencies:[L,x,A,D,G],styles:[".main-div[_ngcontent-%COMP%]{justify-content:center;align-items:center}.card[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{max-width:700px;margin:auto}.header-image[_ngcontent-%COMP%]{background-size:cover;width:48px;height:48px;margin-right:8px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[y.Bz.forChild(_),y.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),F=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),U=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.ez,f,k,O,F]}),t})()}}]);
