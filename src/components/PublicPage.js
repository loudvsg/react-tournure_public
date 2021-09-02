import PropTypes from 'prop-types'
import Button from './Button'
import PublicTexts from './PublicTexts'
import {ThemeLine} from './Elements/Info.element'


const PublicPage = ({texts, month}) => {
  console.log("here we are");

  return (
    <div>
      <ThemeLine>{"Révélation "}</ThemeLine>
      <PublicTexts        
       texts={texts}
      />
    </div>
  )
}

export default PublicPage