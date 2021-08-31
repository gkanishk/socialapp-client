import React from 'react'

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton"
export default ({children,onClick,btnClassName,tip,tipClassName, disabled=false})=> 
(
<Tooltip title={tip} className={tipClassName}>
    <IconButton 
    onClick={onClick} 
    className={btnClassName}
    disabled={disabled}
    >
        {children}
    </IconButton>
</Tooltip>
);
