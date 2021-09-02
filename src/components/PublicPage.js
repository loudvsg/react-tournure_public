import PropTypes from 'prop-types'
import Button from './Button'
import PublicTexts from './PublicTexts'
import {ThemeLine} from './Elements/Info.element'


const PublicPage = ({texts, month}) => {
  console.log("here we are");

  return (
    <div>
      <ThemeLine>{"Les plus beaux textes d'aout sont présentés ici "}</ThemeLine>
      <PublicTexts        
       texts={texts}
      />
    </div>
  )
}

export default PublicPage