(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,i)=>{const a=i(377),{lightningChart:s,AxisTickStrategies:n,OHLCFigures:g,AxisScrollStrategies:r,emptyLine:m,Themes:w}=a,T=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:w[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});T.getDefaultAxisX().setTickStrategy(n.DateTime),T.setTitle("Open-High-Low-Close"),T.setCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(m)}));const o=T.addOHLCSeries({positiveFigure:g.Bar}).setName("Open-High-Low-Close"),D=[[new Date(2019,6,29).getTime(),208.46,210.64,208.44,209.68],[new Date(2019,6,30).getTime(),208.76,210.16,207.31,208.78],[new Date(2019,6,31).getTime(),216.42,221.37,211.3,213.04],[new Date(2019,7,1).getTime(),213.9,218.03,206.74,208.43],[new Date(2019,7,2).getTime(),205.53,206.43,201.63,204.02],[new Date(2019,7,5).getTime(),197.99,198.65,192.58,193.34],[new Date(2019,7,6).getTime(),196.31,198.07,194.04,197],[new Date(2019,7,7).getTime(),195.41,199.56,193.82,199.04],[new Date(2019,7,8).getTime(),200.2,203.53,199.39,203.43],[new Date(2019,7,9).getTime(),201.3,202.76,199.29,200.99],[new Date(2019,7,12).getTime(),199.62,202.05,199.15,200.48],[new Date(2019,7,13).getTime(),201.02,212.14,200.48,208.97],[new Date(2019,7,14).getTime(),203.16,206.44,202.59,202.75],[new Date(2019,7,15).getTime(),203.46,205.14,199.67,201.74],[new Date(2019,7,16).getTime(),204.28,207.16,203.84,206.5],[new Date(2019,7,19).getTime(),210.62,212.73,210.03,210.35],[new Date(2019,7,20).getTime(),210.88,213.35,210.32,210.36],[new Date(2019,7,21).getTime(),212.99,213.65,211.6,212.64],[new Date(2019,7,22).getTime(),213.19,214.44,210.75,212.46],[new Date(2019,7,23).getTime(),209.43,212.05,201,202.64]];o.setPositiveStyle((e=>e.setStrokeStyle((e=>e.setThickness(2))))).setNegativeStyle((e=>e.setStrokeStyle((e=>e.setThickness(2))))).setFigureWidth(10),o.add(D),o.add([new Date(2019,7,26).getTime(),205.86,207.19,205.06,206.49]),T.getDefaultAxisY().setTitle("USD").setInterval({start:195,end:220,stopAxisAfter:!1}).setScrollStrategy(r.expansion),T.getDefaultAxisX().fit(!1)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);