(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{209:function(n,e,t){"use strict";var r=t(32),a=t.n(r),o=t(31),s=t.n(o),i=t(33),c=t.n(i),l=t(30),u=t.n(l),m=t(29),d=t.n(m),p=t(0),h=t.n(p),f=t(206),v=t.n(f),E=function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,r=n.children,a=v()(""+e,t);return h.a.createElement("div",{className:a},r)}}]),e}(p.PureComponent),g=E;E.defaultProps={prefixCls:"za-panel"};var S=function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,r=n.title,a=n.more,o=v()(e+"-header",t);return h.a.createElement("div",{className:o},r&&h.a.createElement("div",{className:e+"-title"},r),a&&h.a.createElement("div",{className:e+"-more"},a))}}]),e}(p.PureComponent),_=S;S.defaultProps={prefixCls:"za-panel"};var y=t(207),T=t.n(y),N=t(215),A=t.n(N),R=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof A.a){var a=0;for(r=A()(n);a<r.length;a++)e.indexOf(r[a])<0&&(t[r[a]]=n[r[a]])}return t},D=function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,r=n.children,a=R(n,["prefixCls","className","children"]),o=v()(e+"-body",t);return h.a.createElement("div",T()({},a,{className:o}),r)}}]),e}(p.PureComponent),C=D;D.defaultProps={prefixCls:"za-panel"};var x=function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,r=n.title,a=n.more,o=v()(e+"-footer",t);return h.a.createElement("div",{className:o},r&&h.a.createElement("div",{className:e+"-title"},r),a&&h.a.createElement("div",{className:e+"-more"},a))}}]),e}(p.PureComponent),L=x;x.defaultProps={prefixCls:"za-panel"},g.Header=_,g.Body=C,g.Footer=L;e.a=g},210:function(n,e,t){"use strict";var r=t(32),a=t.n(r),o=t(31),s=t.n(o),i=t(33),c=t.n(i),l=t(30),u=t.n(l),m=t(29),d=t.n(m),p=t(0),h=t.n(p),f=(t(217),function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),c()(e,[{key:"render",value:function(){return h.a.createElement("footer",null,h.a.createElement("div",{className:"copyright"},h.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),h.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),e}(p.Component));e.a=f},211:function(n,e,t){"use strict";var r=t(208),a=t.n(r),o=t(32),s=t.n(o),i=t(31),c=t.n(i),l=t(33),u=t.n(l),m=t(30),d=t.n(m),p=t(29),h=t.n(p),f=t(0),v=t.n(f),E=t(206),g=t.n(E),S=(t(218),function(n){function e(){return c()(this,e),d()(this,(e.__proto__||s()(e)).apply(this,arguments))}return h()(e,n),u()(e,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var n=window.sessionStorage[this.props.className];n&&(this.container.scrollTop=n)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var n=this.container.scrollTop;window.sessionStorage[this.props.className]=n}}},{key:"render",value:function(){var n=this,e=this.props,t=e.className,r=e.children,o=g()(a()({"app-container":!0},t,!!t));return v.a.createElement("div",{ref:function(e){n.container=e},className:o},v.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},v.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},v.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),r)}}]),e}(f.Component));e.a=S},212:function(n,e,t){"use strict";t(214),t(220)},213:function(n,e,t){"use strict";t(212),t(219)},216:function(n,e,t){"use strict";var r=t(207),a=t.n(r),o=t(222),s=t.n(o),i=t(227),c=t.n(i),l=t(226),u=t.n(l),m=t(32),d=t.n(m),p=t(31),h=t.n(p),f=t(33),v=t.n(f),E=t(30),g=t.n(E),S=t(29),_=t.n(S),y=t(0),T=t.n(y),N=t(34),A=t.n(N),R=t(225),D=t.n(R),C=(t(213),t(209)),x=t(221),L=t.n(x),k=t(224),w=(t(214),t(223),function(n){function e(n){h()(this,e);var t=g()(this,(e.__proto__||d()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return _()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(2),t.e(4)]).then(t.bind(null,353)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,T.a,A.a,n]}}).then(function(t){var r=t.args,a=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var o=Object(k.transform)(n,{presets:["es2015","react"]}).code;r.push(o),(new(Function.prototype.bind.apply(Function,[null].concat(L()(r))))).apply(void 0,L()(a)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){return T.a.createElement(C.a,null,T.a.createElement(C.a.Header,{title:T.a.createElement("span",null,this.title)}),T.a.createElement(C.a.Body,null,T.a.createElement("div",{id:this.containerId})))}}]),e}(T.a.Component)),O=t(211),b=t(210),H=function(n){function e(n){h()(this,e);var t=g()(this,(e.__proto__||d()(e)).call(this,n));return t.components=new u.a,t.renderer=new D.a.Renderer,t}return _()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var r,a=s()(this.components);!(n=(r=a.next()).done);n=!0){var o=r.value,i=c()(o,2),l=i[0],u=i[1],m=document.getElementById(l);m instanceof HTMLElement&&A.a.render(u,m)}}catch(n){e=!0,t=n}finally{try{!n&&a.return&&a.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,r=e.className;if("string"==typeof t){this.components.clear();var o=D()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,r){var o=r.toString(36);return n.components.set(o,T.a.createElement(w,a()({name:n.constructor.name.toLowerCase()},n.props),t)),"<div id="+o+"></div>"}),{renderer:this.renderer});return T.a.createElement(O.a,{className:r},T.a.createElement("main",{dangerouslySetInnerHTML:{__html:o}}),T.a.createElement(b.a,null))}return T.a.createElement("span",null)}}]),e}(T.a.Component);e.a=H},284:function(n,e){n.exports="## 上拉加载下拉刷新 Pull\n\n:::demo 基本用法\n```jsx\nimport { Pull, Cell } from 'zarm';\n\nconst REFRESH_STATE = {\n  normal: 0,  // 普通\n  pull: 1,    // 下拉刷新（未满足刷新条件）\n  drop: 2,    // 释放立即刷新（满足刷新条件）\n  loading: 3, // 加载中\n  success: 4, // 加载成功\n  failure: 5, // 加载失败\n};\n\nconst LOAD_STATE = {\n  normal: 0,   // 普通\n  abort: 1,    // 中止\n  loading: 2,  // 加载中\n  success: 3,  // 加载成功\n  failure: 4,  // 加载失败\n  complete: 5, // 加载完成（无新数据）\n};\n\nfunction getRandomNum(min, max) {\n  const Range = max - min;\n  const Rand = Math.random();\n  return (min + Math.round(Rand * Range));\n}\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.mounted = true;\n    this.state = {\n      customRefreshing: REFRESH_STATE.normal,\n      customLoading: LOAD_STATE.normal,\n      dataSource: [],\n    };\n  }\n\n  componentDidMount() {\n    this.fetchData('customRefreshing');\n  }\n\n  componentWillUnmount() {\n    this.mounted = false;\n  }\n\n  // 模拟请求数据\n  fetchData(key) {\n    this.setState({ [`${key}`]: REFRESH_STATE.loading });\n    setTimeout(() => {\n      if (!this.mounted) return;\n\n      const dataSource = [];\n      const { length } = dataSource;\n\n      for (let i = length; i < length + 20; i++) {\n        dataSource.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n      }\n\n      this.setState({\n        dataSource,\n        [`${key}`]: REFRESH_STATE.success,\n      });\n    }, 2000);\n  }\n\n  // 模拟加载更多数据\n  loadData() {\n    this.setState({ customLoading: LOAD_STATE.loading });\n    setTimeout(() => {\n      if (!this.mounted) return;\n\n      const randomNum = getRandomNum(0, 5);\n      const { dataSource } = this.state;\n      let customLoading = LOAD_STATE.success;\n\n      // eslint-disable-next-line\n      console.log(`状态: ${randomNum === 0 ? '失败' : (randomNum === 1 ? '完成' : '成功')}`);\n\n      if (randomNum === 0) {\n        customLoading = LOAD_STATE.failure;\n      } else if (randomNum === 1) {\n        customLoading = LOAD_STATE.complete;\n      } else {\n        const newLength = 5;\n        const startIndex = dataSource.length;\n        for (let i = startIndex; i < startIndex + newLength; i++) {\n          dataSource.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n        }\n      }\n\n      this.setState({\n        dataSource,\n        customLoading,\n      });\n    }, 2000);\n  }\n\n  render() {\n    const { customRefreshing, customLoading, dataSource } = this.state;\n\n    const itemsRender = [];\n    for (let i = 0; i < 3; i++) {\n      itemsRender.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n    }\n\n    return (\n      <div>\n        <Pull\n          refresh={{\n            state: customRefreshing,\n            handler: () => this.fetchData('customRefreshing'),\n            // render: (refreshState, percent) => {\n            //   const cls = 'custom-control';\n            //   switch (refreshState) {\n            //     case REFRESH_STATE.pull:\n            //       return <div className={cls} style={{ transform: `scale(${percent / 100})` }}><img src={logo} alt=\"\" /></div>;\n\n            //     case REFRESH_STATE.drop:\n            //       return <div className={`${cls} rotate360`}><img src={logo} alt=\"\" /></div>;\n\n            //     case REFRESH_STATE.loading:\n            //       return <div className={cls}><Spinner className=\"rotate360\" /></div>;\n\n            //     case REFRESH_STATE.success:\n            //       return <div className={cls}>加载成功</div>;\n\n            //     case REFRESH_STATE.failure:\n            //       return <div className={cls}>加载失败</div>;\n            //   }\n            // },\n          }}\n          load={{\n            state: customLoading,\n            handler: () => this.loadData(),\n            // render: (loadState) => {\n            //   const cls = 'custom-control';\n            //   switch (loadState) {\n            //     case LOAD_STATE.loading:\n            //       return <div className={cls}><Spinner className=\"rotate360\" /></div>;\n\n            //     case LOAD_STATE.failure:\n            //       return <div className={cls}>加载失败</div>;\n\n            //     case LOAD_STATE.complete:\n            //       return <div className={cls}>我是有底线的</div>;\n            //   }\n            // },\n          }}\n        >\n          {dataSource}\n        </Pull>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-pull | | 类名前缀 |\n| className | string | | | 追加类名 |\n| refresh | Action | | | 下拉刷新的参数配置 |\n| load | Action |  | | 上拉加载的参数配置 |\n| animationDuration | number | 400 | | 动画执行时间，单位：毫秒 |\n| stayTime | number | 1000 | | 加载成功停留时间 |\n\n#### Action 类型定义\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| state | REFRESH_STATE &#124; LOAD_STATE | 0 | | 状态枚举 |\n| startDistance | number | 20 | | 下拉时的助跑距离 |\n| distance | number | 50 | | 触发距离阀值 |\n| render | <code>(refreshState: REFRESH_STATE &#124; LOAD_STATE, percent: number) => any</code> | | | 各状态渲染的回调函数 |\n| handler | <code>() => void</code> | | | 达到阀值后释放触发的回调函数 |\n\n:::"},286:function(n,e,t){},367:function(n,e,t){"use strict";t.r(e);var r=t(32),a=t.n(r),o=t(31),s=t.n(o),i=t(30),c=t.n(i),l=t(29),u=t.n(l),m=t(216),d=(t(286),function(n){function e(){var n,r,o,i;s()(this,e);for(var l=arguments.length,u=Array(l),m=0;m<l;m++)u[m]=arguments[m];return r=o=c()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(284),className:"pull-page"}},i=r,c()(o,i)}return u()(e,n),e}(m.a));e.default=d}}]);