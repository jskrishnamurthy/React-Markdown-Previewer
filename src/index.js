import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './styles.sass';
import 'bootstrap/dist/css/bootstrap.css';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
  });

class Marked_Previewer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rawMarkupText:placeholder,
            markedPreviewer:rawMarkup
        }
        this.transformMarkdown = this.transformMarkdown.bind(this);
    }
    componentDidMount() {
        const script = document.createElement("script");
    
        script.src =
          "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
    
        document.body.appendChild(script);
      }

    transformMarkdown(event){
        var rawMarkup = marked(event.target.value, {sanitize: true});
        this.setState({
            rawMarkupText: event.target.value,
            markedPreviewer: rawMarkup
        })
       // return { __html: rawMarkup };
    }
    render(){
        return(
            <div class="form-group">
                <div>
                    <h3 className="text-center">Enter Markdown</h3>
                    <textarea class="form-control" rows="5" id="editor" value={this.state.rawMarkupText} onChange={this.transformMarkdown}></textarea>
                </div>                
                <div>
                    <h3 className="text-center">Result</h3>
                    <div id="preview" className="well" dangerouslySetInnerHTML={{__html: this.state.markedPreviewer}}></div>
                </div>                
            </div>           
        )
    }
}
const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
var rawMarkup = marked(placeholder, {sanitize: true});
class MainApp extends React.Component {
    render() {
      return (
        <div className="container">
          <h1 className="text-center">Markdown Previewer</h1>
          <Marked_Previewer />
        </div>
      )
    }
  }
//=================================
ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);

