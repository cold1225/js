import { createRenderer } from "@vue/runtime-core";
import { nodeOps } from "./nodeOps";
import { patchProp } from "./patchProps";


const renderOptions = Object.assign(nodeOps, { patchProp })



export function render(vnode, container) {
    return createRenderer(renderOptions).render(vnode, container)
}

export * from '@vue/runtime-core'