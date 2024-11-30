// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//   item.style.backgroundColor = 'blue';
//   item.style.color = 'white';
//   item.style.cursor = 'pointer';
//   item.style.padding = '10px';
//   item.style.borderRadius = '5px';
//   item.style.marginBottom = '10px';
//   item.style.fontSize = '18px';
//   item.style.fontWeight = 'bold';
//   item.style.transition = 'background-color 0.3s ease, color 0.3s ease';
//   item.addEventListener('mouseenter', () => {
//     item.style.backgroundColor = 'lightblue';
//     item.style.color = 'black';
//   });
//   item.addEventListener('mouseleave', () => {
//     item.style.backgroundColor = 'blue';
//     item.style.color = 'white';
//   });
//   item.addEventListener('click', () => {
//     alert('Item clicked!');
//   });

//   // Add a click event listener to the item that toggles the background color between red and blue
//   item.addEventListener('dblclick', () => {
//     const currentColor = item.style.backgroundColor;
//     item.style.backgroundColor = currentColor === 'blue'? 'red' : 'blue';
//   });
//   // Add a mousedown event listener to the item that changes the background color to green and adds a shadow effect
//   item.addEventListener('mousedown', () => {
//     item.style.backgroundColor = 'green';
//     item.style.boxShadow = '0px 0px 5px 2px rgba(0, 0, 0, 0.5)';
//   });
//   // Add a mouseup event listener to the item that removes the shadow effect and restores the background color to its original color
//   item.addEventListener('mouseup', () => {
//     item.style.backgroundColor = 'blue';
//     item.style.boxShadow = 'none';
//   });
//   // Add a contextmenu event listener to the item that displays a context menu with additional option
//   item.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//     const contextMenu = document.createElement('ul');
//     contextMenu.style.listStyleType = 'none';
//     contextMenu.style.padding = '0';
//     contextMenu.style.margin = '0';
//     contextMenu.style.backgroundColor = 'lightgray';
//     contextMenu.style.width = '100px';
//     contextMenu.style.height = '100px';
//     const addItem = document.createElement('li');
//     addItem.textContent = 'Add Item';
//     addItem.addEventListener('click', () => {
//       const newItem = document.createElement('li');
//       newItem.textContent = 'New Item';
//       items.appendChild(newItem);
//     });
//     const removeItem = document.createElement('li');
//     removeItem.textContent = 'Remove Item';
//     removeItem.addEventListener('click', () => {
//       items.removeChild(item);
//     });
//     contextMenu.appendChild(addItem);
//     contextMenu.appendChild(removeItem);
//     document.body.appendChild(contextMenu);
//     contextMenu.style.top = `${event.clientY}px`;
//   });
// });