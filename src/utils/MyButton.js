import React from 'react'

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton"
// import { Icon } from '@material-ui/core';
export default ({children,onClick,btnClassName,tip,tipClassName})=> 
(
<Tooltip title={tip} className={tipClassName}>
    <IconButton 
    onClick={onClick} 
    className={btnClassName}
    >
        {children}
    </IconButton>
</Tooltip>
);
