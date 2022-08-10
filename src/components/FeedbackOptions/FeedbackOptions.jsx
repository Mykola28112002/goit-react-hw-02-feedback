import { Box } from "../../Box";
import { Button } from "./FeedbackOptions.styled";

export const  FeedbackOptions = ({buttons,good}) => {
    
    return <Box display='flex' gridGap='10px'>
        {buttons.map(({button,id}) => {
            return <Button key={id} onClick={good}  type="button">{button}</Button>
        })}
    </Box>;

}
