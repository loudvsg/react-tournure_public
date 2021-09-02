import { FullTextPage } from "./Elements/Info.element";

const FullText = ({ text }) => {


return(
    <>
        <FullTextPage>{text.text}</FullTextPage>
    </>
)

}

export default FullText;