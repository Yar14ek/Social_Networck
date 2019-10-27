import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const postStyle ={
    uptitle:{
        textTransform: 'uppercase',
        fontSize: '60px'
    }

}





export const {classes}= jss.createStyleSheet(postStyle).attach();