(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{651:function(n,e,t){"use strict";t.r(e),e.default='# Input \u6587\u672c\u6846\n\n\n\n## \u57fa\u672c\u7528\u6cd5\n\n```jsx\nimport { useState } from \'react\';\nimport { Input, Cell } from \'zarm\';\n\nconst Demo = () => {\n  const [title, setTitle] = useState(\'\');\n  const [content, setContent] = useState(\'\');\n\n  return (\n    <>\n      <Cell title="\u5355\u884c\u6587\u672c">\n        <Input\n          clearable\n          type="text"\n          placeholder="\u8bf7\u8f93\u5165"\n          value={title}\n          onChange={(value) => {\n            setTitle(value);\n            console.log(`onChange: ${value}`);\n          }}\n          onBlur={(value) => console.log(`onBlur: ${value}`)}\n        />\n      </Cell>\n      <Cell title="\u591a\u884c\u6587\u672c">\n        <Input\n          type="text"\n          rows={3}\n          placeholder="\u8bf7\u8f93\u5165"\n          type="text"\n          placeholder="\u8bf7\u8f93\u5165"\n          value={content}\n          onChange={setContent}\n        />\n      </Cell>\n    </>\n  )\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u8f93\u5165\u7c7b\u578b\n\n```jsx\nimport { useState, useRef } from \'react\';\nimport { Input, Cell, Button } from \'zarm\';\n\nconst Demo = () => {\n  const focusInput = useRef();\n  const [value, setValue] = useState(\'\');\n\n  return (\n    <>\n      <Cell title="\u6570\u5b57">\n        <Input\n          ref={focusInput}\n          type="number"\n          placeholder="type is number"\n          value={value}\n          onChange={setValue}\n        />\n      </Cell>\n\n      <Cell title="\u91d1\u989d">\n        <Input type="price" placeholder="type is price" defaultValue={value} />\n      </Cell>\n\n      <Cell title="\u8eab\u4efd\u8bc1">\n        <Input type="idcard" placeholder="type is idcard" />\n      </Cell>\n\n      <Cell>\n        <Button size="xs" theme="primary" onClick={() => focusInput.current.focus()}>click to focus the first input</Button>\n      </Cell>\n    </>\n  )\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u53ea\u8bfb / \u7981\u7528\u72b6\u6001\n\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nReactDOM.render(\n  <>\n    <Cell title="\u5355\u884c\u6587\u672c">\n      <Input readOnly type="text" defaultValue="\u6211\u662f\u53ea\u8bfb\u72b6\u6001" />\n    </Cell>\n    <Cell title="\u5355\u884c\u6587\u672c">\n      <Input disabled type="text" value="\u6211\u662f\u7981\u7528\u72b6\u6001" />\n    </Cell>\n    <Cell title="\u591a\u884c\u6587\u672c">\n      <Input readOnly type="text" rows={3} value="\u6211\u662f\u53ea\u8bfb\u72b6\u6001\uff0c\u6211\u662f\u53ea\u8bfb\u72b6\u6001\uff0c\u6211\u662f\u53ea\u8bfb\u72b6\u6001\uff0c\u6211\u662f\u53ea\u8bfb\u72b6\u6001\u3002" />\n    </Cell>\n    <Cell title="\u591a\u884c\u6587\u672c">\n      <Input disabled type="text" rows={3} value="\u6211\u662f\u7981\u7528\u72b6\u6001\uff0c\u6211\u662f\u7981\u7528\u72b6\u6001\uff0c\u6211\u662f\u7981\u7528\u72b6\u6001\uff0c\u6211\u662f\u7981\u7528\u72b6\u6001\u3002" />\n    </Cell>\n  </>\n, mountNode);\n```\n\n\n\n## \u65e0\u6807\u7b7e\u680f\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nReactDOM.render(\n  <>\n    <Cell><Input type="text" placeholder="\u6807\u9898" /></Cell>\n    <Cell><Input autoHeight type="text" rows={4} maxLength={200} placeholder="\u6458\u8981" /></Cell>\n  </>\n, mountNode);\n```\n\n\n\n## \u9ad8\u5ea6\u81ea\u9002\u5e94\n\n```jsx\nimport { useState } from \'react\';\nimport { Input, Cell } from \'zarm\';\n\nconst Demo = () => {\n  const [value, setValue] = useState(\'\');\n\n  return (\n    <Cell title="\u591a\u884c\u6587\u672c">\n      <Input\n        autoHeight\n        type="text"\n        rows={3}\n        placeholder="\u8bf7\u8f93\u5165"\n        value={value}\n        onChange={setValue}\n      />\n    </Cell>\n  );\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u663e\u793a\u8f93\u5165\u5b57\u6570\n```jsx\nimport { useState } from \'react\';\nimport { Input, Cell } from \'zarm\';\n\nconst Demo = () => {\n  const [value, setValue] = useState(\'\');\n\n  return (\n    <Cell title="\u591a\u884c\u6587\u672c">\n      <Input\n        autoHeight\n        showLength\n        maxLength={200}\n        type="text"\n        rows={3}\n        placeholder="\u8bf7\u8f93\u5165"\n        value={value}\n        onChange={setValue}\n      />\n    </Cell>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| type | string | \'text\' | \u7c7b\u578b\uff0c\u53ef\u9009\u503c `text`\u3001`number`\u3001`idcard`\u3001`price`\u3001`password`\u3001`search` |\n| value | number \\| string | - | \u503c |\n| defaultValue | number \\| string | - | \u521d\u59cb\u503c |\n| disabled | boolean | false | \u662f\u5426\u7981\u7528 |\n| readOnly | boolean | false | \u662f\u5426\u53ea\u8bfb |\n| rows | number | - | \u591a\u884c\u6587\u672c\u65f6\u7684\u663e\u793a\u884c\u6570\u3002type\u4e3atext\u7c7b\u578b\u65f6\u6709\u6548\u3002 |\n| autoHeight | boolean | false | \u662f\u5426\u9ad8\u5ea6\u81ea\u9002\u5e94 |\n| maxLength | number | - | \u8f93\u5165\u5b57\u6570\u4e0a\u9650 |\n| showLength | boolean | false | \u662f\u5426\u663e\u793a\u8f93\u5165\u5b57\u6570\u3002\u591a\u884c\u6587\u672c\uff08type="text"\u4e14\u5305\u542brows\u5c5e\u6027\uff09\u65f6\u6709\u6548\u3002 |\n| clearable | boolean | true | \u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae\u3002\u591a\u884c\u6587\u672c\uff08type="text"\u4e14\u5305\u542brows\u5c5e\u6027\uff09\u65f6\u65e0\u6548\u3002\u5fc5\u987b\u4e3a\u53d7\u63a7\u7ec4\u4ef6\uff08\u5c5e\u6027\u5305\u542bvalue\u3001onChange\uff09\u65f6\u65b9\u53ef\u751f\u6548\u3002 |\n| onChange | (value?: number \\| string) => void | - | \u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n\n'}}]);
//# sourceMappingURL=49.165159f9.js.map