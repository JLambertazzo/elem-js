(function (global, document) {
  /**
   * Create a new HTML element
   * @param {string} tag The element tagName ex: 'h1', 'div'
   * @param {string[]} classes The classes to be attached to the element
   * @param {{[key: string]: unknown}} props The properties to attach to the new element
   * @param  {...(HTMLElement | Text)} children Children to append to this node
   * @returns {HTMLElement} New HTML Element from given information
   */
  const el = (tag, classes = [], props = {}, ...children) => {
    const element = document.createElement(tag);
    element.classList.add(...classes);
    Object.entries(props).forEach(([key, val]) =>
      element.setAttribute(key, val)
    );
    children.forEach((child) => element.appendChild(child));
    return element;
  };

  /**
   * Shortcut to create a text node
   * @param {string} text Text to be used in the text node
   * @returns {Text} New text node with specified text
   */
  const t = (text) => document.createTextNode(text);

  global.el = global.el || el;
  global.t = global.t || t;
})(window, window.document);
