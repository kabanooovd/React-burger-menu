import style from "./BurgerMenuContent.module.scss";
import { CloseIcon } from "../CloseIcon";

interface IProps {
    onClose: () => void
}

export const BurgerMenuContent = (props: IProps) => {
    const { onClose } = props;
    return (
        <div className={style.container}>
            <div className={style.close} onClick={onClose}>
                <CloseIcon />
            </div>
            <div>
                <h1>Some</h1>
            </div>
            <div>
                <h1>Content</h1>
            </div>
        </div>
    );
};
