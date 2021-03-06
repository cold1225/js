export const isObject = (target) => typeof target === 'object' && target !== null

export const isString = (target) => typeof target === 'string'
export const isNumber = (target) => typeof target === 'number'
export const isFunction = (target) => typeof target === 'function'
export const isArray = Array.isArray
export const assign = Object.assign
export const hasOwn = (target, key) => Object.prototype.hasOwnProperty.call(target, key)  

export const enum ShapeFlags { // vue3提供的形状标识
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 1 << 1,
    STATEFUL_COMPONENT = 1 << 2,
    TEXT_CHILDREN = 1 << 3,
    ARRAY_CHILDREN = 1 << 4,
    SLOTS_CHILDREN = 1 << 5,
    TELEPORT = 1 << 6,
    SUSPENSE = 1 << 7,
    COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
    COMPONENT_KEPT_ALIVE = 1 << 9,
    COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
// 位运算适合权限校验 & | 