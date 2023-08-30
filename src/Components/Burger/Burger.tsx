import { BurgerIcon } from "./BurgerIcon";
import style from "./Burger.module.scss";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState } from "react";
import { BurgerMenuContent } from "./BurgerMenuContent/BurgerMenuContent";

export const Burger = () => {
    const [show, setShow] = useState<boolean>(false);

    const onHandleBurgerClick = () => setShow(true);
    const onClose = () => setShow(false);

    return (
        <div className={style.container}>
            <BurgerMenu show={show}>
                <BurgerMenuContent onClose={onClose} />
            </BurgerMenu>
            <div className={style.fixedIcon} onClick={onHandleBurgerClick}>
                <BurgerIcon />
            </div>
        </div>
    );
};
