export default {
    palette:{
    type:'dark',
    primary:{
    light: "#7986cb",
    main: "#ff5722",
    dark: "#b23c17",
    contrastText: "#fff"
},
    secondary:{
    light: "#d04081",
    main: "#c51162",
    dark: "#890b44",
    contrastText: "#fff"
}
    },
    typography:{
    useNextVariants:true
    },
    invisibleSeperator:{
        border:'none',
        margin:4
    },
    visibleSeperator:{
        width:'100%',
        borderBottom:'1px solid rgba(0,0,0,0.1)',
        marginBottom:20
    },
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progress: {
        position: 'absolute'
    },
    paper: {
        padding: 20
    },
    profile: {
        '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
        }
        },
        '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
        },
        '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
            verticalAlign: 'middle'
        },
        '& a': {
            color: '#00bcd4'
        }
        },
        '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
        },
        '& svg.button': {
        '&:hover': {
            cursor: 'pointer'
        }
        }
    },
    buttons: {
        textAlign: 'center',
        '& a': {
        margin: '20px 10px'
        }
    }
    
}