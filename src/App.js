import React from 'react';
import {marked} from 'marked';
import ReactDOM from 'react-dom';

let initial_input = `# Welcome to the Markdown Previewer.
 ## Enter text in the space above to render them to HTML.
Plain text can be rendered as a paragraph.

[My portfolio site](https://kevabra.github.io/PersonalWebsite/)
- You can type list items with a dash
\`\`\`
let z = 5;
let a=1+z;
\`\`\`
This is inline code \`<div></div>\`
**This text has been bolded**
> This is a block quote
![html image](https://tse1.mm.bing.net/th?id=OIP.fee3LkhaYVQCYZsCesO3ZwHaHa&pid=Api&P=0&w=115&h=115)
`;
class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      input: initial_input
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  render() {
    let val = this.state.input;
    
    
    let previewStyle = {
      backgroundColor: 'black',
      width: '60vw',
      border: '1px solid black',
      height: '100vh',
      overflowY: "auto",
      color: "pink",
      overflowX: "auto",
      marginLeft: "20vw"
    };
    let editorStyle = {
      width: "60vw",
      height: "100vh",
      backgroundColor: 'black',
      color: 'pink',
      marginLeft: "20vw"
    }
    let parentStyle = {
      display: "flex",
      flexDirection:"row",
      marginLeft: "20vw"
    };
    
    
    val = marked(val, {breaks: true});
    return(
      <div className="container-fluid" id="parent">
        <h1>Markdown Previewer <span>(scroll down for the preview)</span></h1>
        <div>
          <div>
            <h2 style={{textAlign: "center", textDecoration: "underline"}} >Markdown</h2>
            <textarea id="editor" style={editorStyle}value={this.state.input} onChange={this.handleChange}>
            </textarea>
          </div>
        </div>
          <div>
            <h2 style={{textAlign: "center", textDecoration: "underline"}}>Markdown Preview</h2>
            <div className="preview" id="preview" style={previewStyle} dangerouslySetInnerHTML={{__html: val}}>
              
            </div>
          </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
