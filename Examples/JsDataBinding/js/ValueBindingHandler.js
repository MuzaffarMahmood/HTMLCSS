class ValueBindingHandler {
    bind(binding) {
        binding.el.addEventListener('input', () => {
            this.listener(binding);
        });
        this.react(binding);
    }
    react(binding) {
        binding.el.value = binding.getValue();
    }
    listener(binding) {
        let value = binding.el.value;
        binding.setValue(value);
    }
}