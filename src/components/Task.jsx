export const Task = (props) => {

    const { id, descripcion, completado } = props;

    return (
        <li>
            <input id={id} type="checkbox" />
            <label htmlFor={id} >
                {descripcion}
            </label>
            <br />
        </li>
    );
};