(self.webpackChunksite=self.webpackChunksite||[]).push([[4594],{54594:function(n,e,a){"use strict";a.r(e),e.default="# SearchBar 搜索框\n\n## 基本用法\n\n```jsx\nimport { SearchBar } from 'zarm';\n\nReactDOM.render(\n  <SearchBar\n    onSubmit={(value) => {\n      console.log(`搜索内容为${value}`);\n    }}\n    onFocus={() => {\n      console.log('获取焦点');\n    }}\n    onChange={(value) => {\n      console.log(value);\n    }}\n    onBlur={() => {\n      console.log('失去焦点');\n    }}\n    onClear={() => {\n      console.log('点击了清除');\n    }}\n    onCancel={() => {\n      console.log('点击了取消');\n    }}\n  />,\n  mountNode,\n);\n```\n\n## 始终展示取消按钮\n\n```jsx\nimport { useState } from 'react';\nimport { SearchBar } from 'zarm';\n\nconst Demo = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <SearchBar\n      showCancel\n      placeholder=\"搜索\"\n      cancelText=\"取消\"\n      value={value}\n      onChange={setValue}\n      onClear={() => setValue('')}\n    />\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## 多形状\n\n```jsx\nimport { SearchBar } from 'zarm';\n\nReactDOM.render(\n  <>\n    <SearchBar shape=\"rect\" />\n    <SearchBar shape=\"round\" />\n  </>,\n  mountNode,\n);\n```\n\n## 手动获取焦点\n\n```jsx\nimport { useRef } from 'react';\nimport { SearchBar, Button } from 'zarm';\n\nconst Demo = () => {\n  const manualFocus = useRef();\n\n  return (\n    <>\n      <SearchBar ref={manualFocus} />\n      <div className=\"button-wrap\">\n        <Button\n          theme=\"primary\"\n          size=\"xs\"\n          shape=\"radius\"\n          onClick={() => {\n            manualFocus.current.focus();\n          }}\n        >\n          点击获取焦点\n        </Button>\n      </div>\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| 属性         | 类型                     | 默认值   | 说明                                   |\n| :----------- | :----------------------- | :------- | :------------------------------------- |\n| placeholder  | string                   | '搜索'   | 占位符                                 |\n| value        | string                   | -        | 值                                     |\n| defaultValue | string                   | -        | 初始值                                 |\n| shape        | string                   | 'radius' | 形状，可选值 `rect`, `radius`, `round` |\n| disabled     | boolean                  | false    | 是否禁用                               |\n| showCancel   | boolean                  | false    | 是否一直展示取消按钮                   |\n| cancelText   | string                   | '取消'   | 取消按钮显示的内容                     |\n| maxLength    | number                   | -        | 输入字数上限                           |\n| clearable    | boolean                  | true     | 是否提供清空输入框功能                 |\n| onChange     | (value?: string) => void | -        | 值变化时触发的回调函数                 |\n| onSubmit     | (value?: string) => void | -        | 提交时触发的回调函数                   |\n| onFocus      | () => void               | -        | 获取焦点时触发的回调函数               |\n| onBlur       | () => void               | -        | 失去焦点时触发的回调函数               |\n| onClear      | () => void               | -        | 点击清除按钮时触发的回调函数           |\n| onCancel     | () => void               | -        | 点击取消时触发的回调函数               |\n"}}]);