import { isObject } from "@vue/shared"
import { track, trigger } from "./effect"
import { reactive } from "./reactive"

export const enum ReactiveFlags {
    IS_REACTIVE = '__v_isReactive'
}

export const mutableHandler = {
    get(target, key, receiver) {
        if (key === ReactiveFlags.IS_REACTIVE) {
            return true
        }
        track(target, 'get', key)
    
        const res = Reflect.get(target, key, receiver)
        if (isObject(res)) {
            return reactive(res)
        }
        return res
    },
    set(target, key, value, receiver) {

        const oldValue = target[key]
        const result = Reflect.set(target, key, value, receiver)
        if (oldValue !== value) {
            trigger(target, 'set', key, value, oldValue)
        }
        return result
    },
}