import { useState } from "react";
export const Tarea = (props) => {

    const { tarea } = props;
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
            {tarea} 📝🗑
        </span>
        <br />
        </label>
    );
};