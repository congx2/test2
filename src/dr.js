import scrollreveal from 'scrollreveal'

function generateOptions(defaultOptions, bindingValue, bindingModifiers) {
  const options = Object.assign({}, defaultOptions, bindingValue);

  if (bindingModifiers) {
    if (bindingModifiers.reset) {
      options.reset = true;
    }

    if (bindingModifiers.nomobile) {
      options.mobile = false;
    }

    if (bindingModifiers.nodesktop) {
      options.desktop = false;
    }
  }

  return options;
}

export default function f(defaultOptions = {}) {
  const sr = scrollreveal(defaultOptions)
  return {
    inserted: (el, binding) => {
      const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

      if (typeof options.class === 'string') {
        el.classList.add(options.class);
        delete options.class;
      }

      sr.reveal(el, options);
    },
    update: (el, binding) => {
      if (binding.value != binding.oldValue) {
        const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

        sr.reveal(el, options);
      }
    }
  }
}