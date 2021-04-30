Binder.setScope({
    name: 'John',
    surname: 'Doe'
});
Binder.redefine();

const els = document.querySelectorAll('[data-bind]');
els.forEach(el => {
    const expressionParts = el.getAttribute('data-bind').split(':');
    const bindingHandler = expressionParts[0].trim();
    const scopeKey = expressionParts[1].trim();
    const binding = new Binding(scopeKey, bindingHandler, el);
    binding.bind();
});