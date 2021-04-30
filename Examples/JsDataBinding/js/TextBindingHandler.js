class TextBindingHandler {
    bind(binding) {
        this.react(binding);
    }
    react(binding) {
        binding.el.innerText = binding.getValue();
    }
}