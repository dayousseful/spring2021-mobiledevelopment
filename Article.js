// Import Component
const Component =  require('./Component.js');

// Article is a child object of Component
class Article extends Component {
// adding tilte, author and text
  constructor (title, author, text) {
    // Send what it gets to its parent object
	  // using super funtion to add these to the article.
	  super(title, author, text);
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
	  // Iam fixing the return function because I think that the OutcomeTemplate Literals was not done right. 
    return (`
      <Article>
		  ${this.props.title.render()}
          <span>${this.props.author}</span>
          <div>${this.props.text}</div>
      </Article>
    `
    );
    
  }

}
`
        <Article>
          <h1>THIS IS SPORTS, Y'ALL</h1>
          ${this.props.title.render()}
          <span>${this.props.author}</span>
          <div>${this.props.content}</div>
        </Article>`

export default Article;
