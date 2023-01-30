import Button from "../Button"
import ProfileIcon from "../ProfileIcon";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/images/logo.svg" />
            </div>
            <div className="actions">
                <Button variant="login" label="Giriş Yap" />
                <ProfileIcon />
            </div>
        </header>
    );
};

export default Header;