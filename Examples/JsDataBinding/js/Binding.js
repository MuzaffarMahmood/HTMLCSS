class Binding {
    constructor(prop, handler, el) {
        this.prop = prop;
        this.handler = handler;
        this.el = el;
    }
    bind() {
        let bindingHandler = Binder.handlers[this.handler];
        bindingHandler.bind(this);
        Binder.subscribe(this.prop, () => {
            bindingHandler.react(this);
        });
    }
    setValue(value) {
        Binder.scope[this.prop] = value;
    }
    getValue() {
        return Binder.scope[this.prop];
    }
}