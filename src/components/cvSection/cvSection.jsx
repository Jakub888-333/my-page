import { useState } from "react"


const CvSection = ( {title, content, color} ) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () =>{
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='cvBox'>
        <div className='cvBoxName' onClick={handleToggle} > 
          {title}
        </div>
        {isExpanded && (
        <div className='cvBoxInner'>
        <div className='cvBoxText'>
            {content.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
        </div>
        <div className='cvBoxPicture'>
            {color}
        </div>
        </div>
        )}
    </div>
)
}

export default CvSection