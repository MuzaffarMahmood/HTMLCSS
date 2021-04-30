class Binder {
    static setScope(scope) {
        this.scope = scope;
    }
    static redefine() {
        let keys = Object.keys(this.scope);
        keys.forEach((key) => {
            let value = this.scope[key];
            delete this.scope[key];
            Object.defineProperty(this.scope, key, {
                get() {
                    return value;
                },
                set(newValue) {
                    const shouldNotify = value != newValue;
                    value = newValue;
                    if (shouldNotify) {
                        Binder.notify(key);
                    };
                }
            })
        });
    }
    static subscribe(key, callback) {
        this.subscriptions.push({
            key: key,
            cb: callback
        });
    }
    static notify(key) {
        const subscriptions = this.subscriptions.filter(
            subscription => subscription.key == key
        );
        subscriptions.forEach(subscription => {
            subscription.cb();
        })
    }
}

// create some static properties
Binder.subscriptions = [];
Binder.scope = {};
Binder.handlers = {
    value: new ValueBindingHandler(),
    text: new TextBindingHandler()
}