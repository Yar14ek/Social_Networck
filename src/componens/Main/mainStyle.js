import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const mainStyle ={
title:{
    color: 'red',
    '&:hover':{
        color:'blue'
    }
},
}





export const {classes}= jss.createStyleSheet(mainStyle).attach();