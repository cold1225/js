let oldArrayProtoMethods = Array.prototype

export let arrayMethods = Object.create(oldArrayProtoMethods)

let methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'sort',
    'reverse',
    'splice'
]
methods.forEach(method => {
    arrayMethods[method] = function (...args){
        const result = oldArrayProtoMethods[method].apply(this, args)
        let inserted
        let ob = this.__ob__
        switch(method) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted =   args.slice(2)
            default:
                break
        }
        if(inserted) ob.observeArray(inserted)
        ob.dep.notify()
        return result
    }
})