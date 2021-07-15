// <div id="my">hello {{name}} <span>world</span></div>

import { generate } from "./generate"
import { parseHTML } from "./parse"

export function compileToFunctions(template) {
    // html模板 => render函数
    // 1.需要将html代码转化成ast语法树 可以用ast树来描述语言本身
    const ast = parseHTML(template)
    // 2.优化静态节点
    // 3.通过这棵树 重新生成代码 
    const code = generate(ast)
    // 4.将字符串变成函数
    const render = new Function(`with(this){return ${code}}`)
    return render
}