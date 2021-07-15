// <div id="app" style="color: red"> hello {{name}}<span>hello</span></div>
// render() {
// return _c('div', {id: 'app', style: {color: red}}, _v('hello'+ _s(name)),_c('span', null, _v('hello')))
//}
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g
// 语法层面的转义
function genProps(attrs) {
    let str = ''
    for (let i = 0; i < attrs.length; i++) {
        let attr = attrs[i]
        if (attr.name === 'style') {
            let obj = {}
            attr.value.split(';').forEach(item => {
                let [key, value] = item.split(':')
                obj[key] = value
            })
            attr.value = obj
        }
        str += `${attr.name}:${JSON.stringify(attr.value)},`
    }

    return `{${str.slice(0, -1)}}`

}

function gen(node) {
    if (node.type == 1) { // 元素
        return generate(node)
    } else { // 文本
        let text = node.text
        // 如果是普通文本 不带{{}}
        if (!defaultTagRE.test(text)) {
            return `_v(${JSON.stringify(text)})` // _v('hello {{name}}')
        }
        let tokens = []
        let lastIndex = defaultTagRE.lastIndex = 0
        let match, index
        while (match = defaultTagRE.exec(text)) {
            index = match.index
            if (index > lastIndex) {
                tokens.push(JSON.stringify(text.slice(lastIndex, index)))
            }
            tokens.push(`_s(${match[1].trim()})`)
            lastIndex = index + match[0].length
        }
        if (lastIndex < text.length) {
            tokens.push(JSON.stringify(text.slice(lastIndex)))
        }
        return `_v(${tokens.join('+')})`

    }
}

function genChildren(el) {
    const children = el.children
    if (children) {
        return children.map(child => gen(child)).join(',')
    }
}
export function generate(el) {
    let children = genChildren(el)
    let code = `_c('${el.tag}', ${el.attrs.length ? `${genProps(el.attrs)}` : 'undefined'}
    ${
         children ? `,${children}`:''
    })`

    return code
}