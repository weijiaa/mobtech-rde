import React, { useEffect, useState } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './index.less';
import 'highlight.js/styles/github.css';

function MarkDown(props) {
  const { source='' } = props;
  const [content, setContent] = useState('');

  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      silent: true,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });

    setContent(marked(source))
  }, [source])

  return (
    <div className="markdown-wrap">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export default MarkDown;
