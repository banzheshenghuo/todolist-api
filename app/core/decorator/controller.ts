function setRoute(instance, name, value) {
    if (!instance.routes) {
        instance.routes = {}
    }

    instance.routes[name] = value
}

function get(path: string) {
    return (instance, name, descriptor) => {
        setRoute(instance, name, { method: 'get', path: path, handler: descriptor.value })
        return descriptor
    }
}

function post(path: string) {
    return (instance, name, descriptor) => {
        setRoute(instance, name, { method: 'post', path: path, handler: descriptor.value })
        return descriptor
    }
}

export { get, post }
