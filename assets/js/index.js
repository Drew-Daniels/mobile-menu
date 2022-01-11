const unhide = function(element, visibleClass) {
  element.classList.add(visibleClass);
}

const hide = function(element, visibleClass) {
  element.classList.remove(visibleClass);
}

const getClasses = function(element) {
  const classList = element.className.split(' ');
  return classList;
}

const classify = function(element, ...classesToAdd) {
  element = element.classList.add(...classesToAdd);
  return element;
}

const declassify = function(element, ...classesToRemove) {
  const currClasses = [...element.classList];
  classesToRemove.forEach(function(classToRemove) {
    if (currClasses.includes(classToRemove)) {
      element.classList.remove(classToRemove);
    }
  })
}

const add = function(btn, list, visibleClass, btnImage) {
  btn.addEventListener('click', 
    function() {
      const listClasses = getClasses(list);
      const visible = listClasses.includes(visibleClass);
      if (visible) {
        hide(list, visibleClass);
      } else {
        unhide(list, visibleClass);
      }
    }
  );
  // TODO: Add in functionality to turn the btnImage 180deg
  btn.addEventListener('click',
    function() {
      const imgClasses = getClasses(btnImage);
      const visible = imgClasses.includes(visibleClass);
      if (visible) {
        declassify(btnImage, visibleClass);
      } else {
        classify(btnImage, visibleClass);
      }
    }
  );
}

export {
  unhide,
  hide,
  getClasses,
  classify,
  declassify,
  add,
}