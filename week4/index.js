import Sidebar from './components/Sidebar.js';

const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});
// I am going to use the render method here, but i am not 100% sure if this is the right way to do since I am not able to run it.
 render() {
    return `<ul>${this.props.Sidebar.}</ul>`;
  }

/* 
  TODO: Use the render() method of Sidebar to show HTML response on console. Results should be wrapped in <ul></ul>
  
  The final result should look like the following:
  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/
console.log();
