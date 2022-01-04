import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:{
        width: "100%",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundImage: '../publc/img/back.webp',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}));
function PrimeiraDobra()  {
const classes = useStyles();
return (
<div ClassName={classes.root}>
 <h1 >
 Você merece uma contabilidade com atendimento personalizado.
 <p>Aqui você tem o Contador estratégico para seu negocio! </p>
 </h1>
 
</div>

)};

export default PrimeiraDobra;
