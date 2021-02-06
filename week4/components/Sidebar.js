import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
  // This is how to concatenate the value of each item to the variable responseHTML, but I dont know how to make each wrapped in <li></li> 
    let responseHTML = 'Albert Eggstein' +
		'Attila the Hen' +
		'Attila the Hen' +
		'Dixie Chick' +
		'Gregory Peck' +
		'Mary Poopins';

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;