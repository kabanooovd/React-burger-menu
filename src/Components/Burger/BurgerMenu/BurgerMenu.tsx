import { ReactNode, useEffect, useMemo } from "react";
import style from "./BurgerMenu.module.scss";
import { createPortal } from "react-dom";

interface IProps {
    show: boolean;
    children: ReactNode;
}

const modalRootElement = document.querySelector("#burger");

export const BurgerMenu = (props: IProps) => {
    const { children, show } = props;

    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        if (show) {
            modalRootElement?.appendChild(element);
            return () => {
                modalRootElement?.removeChild(element);
            };
        }
    }, [show, element]);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [show]);

    return createPortal(
        <div>
            <div className={style.container}>{children}</div>
        </div>,
        element
    );
};
