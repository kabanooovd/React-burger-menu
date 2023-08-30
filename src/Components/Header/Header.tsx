import { Burger } from "../../Components";
import style from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={style.container}>
            <div className={style.contentWrapper}>
                <h1>some logo</h1>
                <h1>some content</h1>
                <Burger />
            </div>
        </header>
    );
};
