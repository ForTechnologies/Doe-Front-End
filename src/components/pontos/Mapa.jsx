import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModalEdtEndereco from './ModalEdtEndereco';
import MapaLocal from "../../assets/images/mapa.png"

const Mapa = ({onOpen = () => {}}) => {

    return (
        <div className='div-mapa'>
            <Typography variant='body' onClick={onOpen} style={
                {
                    float: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    mb: 10,
                    mr: 10
                }}>
                Rua Haddok Lobo, 351
                <KeyboardArrowDownIcon color='primary' />
            </Typography>
            <img src={MapaLocal} alt="mapa.png" className="mapa" />
        </div>
    )
}

export default Mapa;