let grandParent = document.querySelector('#grandParent');
let parent = document.querySelector('#parent');
let child = document.querySelector('#child');


// default behaviour of event (bubbling)

grandParent.addEventListener('click', function () {  
  console.log('grandparent clicked');  
})

parent.addEventListener('click', function () {
  console.log('parent clicked');  
})

child.addEventListener('click', function () {
  console.log('child clicked');  
})

// third parameter default false => bubbling
// third parameter true => capturing
// stopPropogation used to prevent from bubbling and capturing


/* ------------ stop event bubbling using stopPropogation method ------------ */
// grandParent.addEventListener('click', function (event) {  
//   console.log('grandparent clicked');
//   event.stopPropagation();
// })

// parent.addEventListener('click', function (event) {
//   console.log('parent clicked');
//   event.stopPropagation();
// })

// child.addEventListener('click', function (event) {
//   console.log('child clicked');
//   event.stopPropagation();
// })