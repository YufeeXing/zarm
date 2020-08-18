(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{654:function(e,n,t){"use strict";t.r(n),n.default="# Picker \u9009\u62e9\u5668\n\n\n\n## \u57fa\u672c\u7528\u6cd5\n```jsx\nimport { useEffect, useRef, useReducer } from 'react';\nimport { Cell, Button, Picker, Toast } from 'zarm';\n\nconst SINGLE_DATA = [\n  { value: '1', label: '\u9009\u9879\u4e00' },\n  { value: '2', label: '\u9009\u9879\u4e8c' },\n];\n\n// \u666e\u901a\u591a\u5217\u6570\u636e\nconst MULTI_DATA = [\n  [\n    { value: '1', label: '\u9009\u9879\u4e00' },\n    { value: '2', label: '\u9009\u9879\u4e8c' },\n  ],\n  [\n    { value: '3', label: '\u9009\u9879A' },\n    { value: '4', label: '\u9009\u9879B' },\n  ],\n];\n\n// \u7ea7\u8054\u6570\u636e\nconst CASCADE_DATA = [\n  {\n    code: '1',\n    label: '\u5317\u4eac\u5e02',\n    children: [\n      { code: '11', label: '\u6d77\u6dc0\u533a' },\n      { code: '12', label: '\u897f\u57ce\u533a' },\n    ],\n  },\n  {\n    code: '2',\n    label: '\u4e0a\u6d77\u5e02',\n    children: [\n      { code: '21', label: '\u6768\u6d66\u533a' },\n      { code: '22', label: '\u9759\u5b89\u533a' },\n    ],\n  },\n];\n\nconst DIY_DATA = [\n  {\n    value: '1',\n    name: '\u5317\u4eac\u5e02',\n    children: [\n      { value: '11', name: '\u6d77\u6dc0\u533a' },\n      { value: '12', name: '\u897f\u57ce\u533a' },\n    ],\n  },\n  {\n    value: '2',\n    name: '\u4e0a\u6d77\u5e02',\n    children: [\n      { value: '21', name: '\u9ec4\u57d4\u533a' },\n      { value: '22', name: '\u8679\u53e3\u533a' },\n    ],\n  },\n];\n\nconst initState = {\n  single: {\n    visible: false,\n    value: '',\n    dataSource: SINGLE_DATA,\n  },\n  multi: {\n    visible: false,\n    value: [],\n    dataSource: MULTI_DATA,\n  },\n  cascade: {\n    visible: false,\n    value: [],\n    dataSource: [],\n  },\n  diy: {\n    visible: false,\n    value: [],\n    dataSource: DIY_DATA,\n  },\n  specDOM: {\n    visible: false,\n    value: '',\n    dataSource: SINGLE_DATA,\n  },\n};\n\nconst reducer = (state, action) => {\n  const { type, key, visible, value, valueMember, dataSource } = action;\n\n  switch (type) {\n    case 'visible':\n      return {\n        ...state,\n        [key]: {\n          ...state[key],\n          visible: !state[key].visible,\n        }\n      };\n    \n    case 'value':\n      return {\n        ...state,\n        [key]: {\n          ...state[key],\n          value,\n        }\n      };\n\n    case 'valueMember':\n      return {\n        ...state,\n        [key]: {\n          ...state[key],\n          valueMember,\n        }\n      };\n    \n    case 'dataSource':\n      return {\n        ...state,\n        [key]: {\n          ...state[key],\n          dataSource,\n        }\n      };\n  }\n};\n\nconst Demo = () => {\n  const myRef = useRef();\n  const [state, dispatch] = useReducer(reducer, initState);\n\n  const setVisible = (key) => {\n    dispatch({ type: 'visible', key });\n  };\n\n  const setValue = (key, value) => {\n    dispatch({ type: 'value', key, value });\n  };\n\n  const setValueMember = (key, value) => {\n    dispatch({ type: 'valueMember', key, valueMember: value });\n  };\n\n  const setDataSource = (key, value) => {\n    dispatch({ type: 'dataSource', key, dataSource: value });\n  };\n\n  useEffect(() => {\n    // \u5f02\u6b65\u52a0\u8f7d\u6570\u636e\u6e90\u6d4b\u8bd5\n    setTimeout(() => {\n      setValue('cascade', ['1', '12']);\n      setValueMember('cascade', 'code');\n      setDataSource('cascade', CASCADE_DATA);\n    }, 0);\n  }, []);\n\n  return (\n    <>\n      <Cell\n        description={\n          <Button size=\"xs\" onClick={() => setVisible('single')}>\u9009\u62e9</Button>\n        }\n      >\n        \u5355\u5217\n      </Cell>\n\n      <Cell\n        description={\n          <Button size=\"xs\" onClick={() => setVisible('multi')}>\u9009\u62e9</Button>\n        }\n      >\n        \u591a\u5217\n      </Cell>\n\n      <Cell\n        description={\n          <Button size=\"xs\" onClick={() => setVisible('cascade')}>\u9009\u62e9</Button>\n        }\n      >\n        \u7ea7\u8054\n      </Cell>\n\n      <Cell\n        description={\n          <Button size=\"xs\" onClick={() => setVisible('diy')}>\u9009\u62e9</Button>\n        }\n      >\n        \u81ea\u5b9a\u4e49\n      </Cell>\n\n      <Cell\n        description={\n          <Button size=\"xs\" onClick={() => setVisible('specDOM')}>\u9009\u62e9</Button>\n        }\n      >\n        \u6302\u8f7d\u5230\u6307\u5b9adom\u8282\u70b9\n      </Cell>\n\n      <Picker\n        visible={state.single.visible}\n        value={state.single.value}\n        dataSource={state.single.dataSource}\n        onOk={(selected) => {\n          console.log('Picker onOk: ', selected);\n          Toast.show(JSON.stringify(selected));\n          setValue('single', selected.map(item => item.value));\n          setVisible('single');\n        }}\n        onCancel={() => setVisible('single')}\n      />\n\n      <Picker\n        visible={state.multi.visible}\n        value={state.multi.value}\n        dataSource={state.multi.dataSource}\n        onOk={(selected) => {\n          console.log('Picker onOk: ', selected);\n          Toast.show(JSON.stringify(selected));\n          setValue('multi', selected.map(item => item.value));\n          setVisible('multi');\n        }}\n        onCancel={() => setVisible('multi')}\n      />\n\n      <Picker\n        visible={state.cascade.visible}\n        value={state.cascade.value}\n        dataSource={state.cascade.dataSource}\n        valueMember={state.cascade.valueMember}\n        onOk={(selected) => {\n          console.log('Picker onOk: ', selected);\n          Toast.show(JSON.stringify(selected));\n          setValue('cascade', selected.map(item => item.code));\n          setVisible('cascade');\n        }}\n        onCancel={() => setVisible('cascade')}\n      />\n\n      <Picker\n        visible={state.diy.visible}\n        title=\"custom title\"\n        cancelText=\"Cancel\"\n        okText=\"Ok\"\n        dataSource={state.diy.dataSource}\n        value={state.diy.value}\n        valueMember=\"value\"\n        itemRender={data => data.name}\n        onOk={(selected) => {\n          console.log('Picker onOk: ', selected);\n          Toast.show(JSON.stringify(selected));\n          setValue('diy', selected.map(item => item.value));\n          setVisible('diy');\n        }}\n        onCancel={() => setVisible('diy')}\n      />\n\n      <Picker\n        visible={state.specDOM.visible}\n        value={state.specDOM.value}\n        dataSource={state.specDOM.dataSource}\n        onOk={(selected) => {\n          console.log('Picker onOk: ', selected);\n          Toast.show(JSON.stringify(selected));\n          setValue('specDOM', selected.map(item => item.value));\n          setVisible('specDOM');\n        }}\n        onCancel={() => setVisible('specDOM')}\n        mountContainer={() => myRef.current}\n      />\n\n      <div\n        id=\"test-div\"\n        style={{ position: 'relative', zIndex: 1 }}\n        ref={myRef} \n      />\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## Select \u8868\u5355\u9009\u62e9\u5668\n```jsx\nimport { Select, Cell, Icon } from 'zarm';\n\n// \u7ea7\u8054\u6570\u636e\nconst CASCADE_DATA = [\n  {\n    value: '1',\n    label: '\u5317\u4eac\u5e02',\n    children: [\n      { value: '11', label: '\u6d77\u6dc0\u533a' },\n      { value: '12', label: '\u897f\u57ce\u533a' },\n    ],\n  },\n  {\n    value: '2',\n    label: '\u4e0a\u6d77\u5e02',\n    children: [\n      { value: '21', label: '\u6768\u6d66\u533a' },\n      { value: '22', label: '\u9759\u5b89\u533a' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n  state = {\n    value: [],\n    dataSource: [],\n  };\n\n  componentDidMount() {\n    // \u5f02\u6b65\u52a0\u8f7d\u6570\u636e\u6e90\u6d4b\u8bd5\n    setTimeout(() => {\n      this.setState({\n        dataSource: CASCADE_DATA,\n        value: ['1', '12'],\n      });\n    }, 0);\n  }\n\n  render() {\n    const { value, dataSource } = this.state;\n    return (\n      <Cell title=\"\u57ce\u5e02\">\n        <Select\n          value={value}\n          dataSource={dataSource}\n          onOk={(selected) => {\n            console.log('Select onOk: ', selected);\n            this.setState({\n              value: selected.map(item => item.value),\n            });\n          }}\n        />\n      </Cell>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## PickerView \u5e73\u94fa\u9009\u62e9\u5668\n```jsx\nimport { PickerView } from 'zarm';\n\n// \u7ea7\u8054\u6570\u636e\nconst CASCADE_DATA = [];\n\nclass Demo extends React.Component {\n  state = {\n    value: [],\n    dataSource: CASCADE_DATA,\n  };\n\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({\n        value: ['1', '12'],\n        dataSource: [\n          {\n            code: '1',\n            label: '\u5317\u4eac\u5e02',\n            children: [\n              { code: '11', label: '\u6d77\u6dc0\u533a' },\n              { code: '12', label: '\u897f\u57ce\u533a' },\n            ],\n          },\n          {\n            code: '2',\n            label: '\u4e0a\u6d77\u5e02',\n            children: [\n              { code: '21', label: '\u6768\u6d66\u533a' },\n              { code: '22', label: '\u9759\u5b89\u533a' },\n            ],\n          },\n        ],\n        valueMember: 'code'\n      })\n    }, 0)\n  }\n\n  render() {\n    return (\n      <PickerView\n        value={this.state.value}\n        valueMember=\"code\"\n        dataSource={this.state.dataSource}\n        onChange={selected => {\n          this.setState({\n            value: selected.map(item => item.code),\n          });\n          console.log('PickerView onChange: ', selected);\n        }}\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| dataSource | object[] | [] | \u6570\u636e\u6e90 |\n| value | string \\| number \\| boolean \\| Array<string &#124; number &#124; boolean> | - | \u503c |\n| defaultValue | string \\| number \\| boolean \\| Array<string &#124; number &#124; boolean> | - | \u521d\u59cb\u503c |\n| valueMember | string | 'value' | \u503c\u5b57\u6bb5\u5bf9\u5e94\u7684key \n| itemRender | (data?: object) => data.label | (data?: object) => data.label | \u5355\u4e2a\u9009\u9879\u7684\u5c55\u793a |\n| disabled | boolean | false | \u662f\u5426\u7981\u7528 |\n| cols | number | Infinity | \u7ea7\u8054\u9009\u62e9\u5668\u7684\u7ea7\u6570 |\n| onChange | (selected?: object) => void | - | \u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n\n### \u4ec5 Picker & Select \u652f\u6301\u7684\u5c5e\u6027\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| title | string | '\u8bf7\u9009\u62e9' | \u9009\u62e9\u5668\u6807\u9898 |\n| okText | string | '\u786e\u5b9a' | \u786e\u5b9a\u680f\u6587\u5b57 |\n| cancelText | string | '\u53d6\u6d88' | \u53d6\u6d88\u680f\u6587\u5b57 |\n| maskClosable | boolean | true | \u662f\u5426\u70b9\u51fb\u906e\u7f69\u5c42\u65f6\u5173\u95ed\uff0c\u9700\u8981\u548conCancel\u4e00\u8d77\u4f7f\u7528 |\n| destroy | boolean | false | \u5f39\u5c42\u5173\u95ed\u540e\u662f\u5426\u79fb\u9664\u8282\u70b9 |\n| onOk | (selected?: object) => void | - | \u70b9\u51fb\u786e\u5b9a\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n| onCancel | () => void | - | \u70b9\u51fb\u53d6\u6d88\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n| mountContainer | HTMLElement &#124; () => HTMLElement | document.body | \u6307\u5b9a Picker \u6302\u8f7d\u7684 HTML \u8282\u70b9 |\n\n\n### \u4ec5 Picker \u652f\u6301\u7684\u5c5e\u6027\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | \u662f\u5426\u5c55\u793a |\n\n### \u4ec5 Select \u652f\u6301\u7684\u5c5e\u6027\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| placeholder | string | '\u8bf7\u9009\u62e9' | \u8f93\u5165\u63d0\u793a\u4fe1\u606f |\n| hasArrow | boolean | true | \u662f\u5426\u663e\u793a\u7bad\u5934 |\n| displayRender | (selected?: object) => string | selected => selected.map(item => item.label) | \u6240\u9009\u503c\u7684\u5c55\u793a |\n"}}]);
//# sourceMappingURL=59.f481ea87.js.map