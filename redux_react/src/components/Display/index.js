import { useDispatch } from 'react-redux';
import { selecionarPromocao } from '../../store/apto/aptoSlice';

const style = {
    borderStyle: 'outset',
    padding: "10px",
    backgroundColor: "#444"
}

function Display(props) {
    const dispatch = useDispatch();

    return (
        <div style={style} onClick={() => dispatch(selecionarPromocao(props.apto))}>
            <p>Numero: {props.apto.numero}</p>
            <p>Preco: {props.apto.preco}</p>
            <p>Promocao: {props.apto.promocao}</p>
        </div>    
    );
}

export default Display;