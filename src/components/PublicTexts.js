import PublicText from './PublicText'
import { Container } from '../globalStyles'
import { useState, useEffect } from 'react'

const PublicTexts = ({ texts  }) => {
  const[reference, setReference] = useState(null);

  return (
   
    <>

      {texts.map((text, ref) => (<PublicText key={ref} text={text} />))}

      

    </>
    
  )
}

export default PublicTexts

/*

 {texts.map((text, ref) => (

      <div
        key={ref}
        onClick={() => setReference(text.ref === reference
                                       ? null 
                                       : text.ref)}
                                       >
      { reference === null ? <PublicText key={ref} text={text} /> : (text.ref === reference && <PublicText key={ref} text={text} />  ) }
     

      </div>
      ))}




*/