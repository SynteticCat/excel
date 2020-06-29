// own framework to work with DO simplify (like jQuery)
class Dom {
}

export function $() {
  return new Dom;
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
