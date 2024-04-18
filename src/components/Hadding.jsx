import React from 'react'


    function Hadding({ text ,className }) {
        let pattern = /#([^#]+)#/g;
        let textWithSpans = text.replace(pattern,"<span class='one'>$1</span>");
        return <h1 className={` ${className}`} dangerouslySetInnerHTML={{ __html: textWithSpans }} />;
  
}

export default Hadding