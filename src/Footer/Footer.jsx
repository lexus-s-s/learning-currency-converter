import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="copyright">
                    <div className="footer-brand">2019 © React. Lite Level</div>
                    <span>All Rights Reserved</span>
                </div>
                <div className="footer-links">
                    <a href="#">Карта сайта</a>
                    <a href="#">Google Sitemap</a>
                </div>
                <div className="footer-links">
                    <a href="#">Контакты</a>
                    <a href="#">Гарантии</a>
                    <a href="#">О сервисе Raketa24</a>
                    <a href="#">Условия возврата</a>
                    <a href="#">Соглашение о использовании сервиса</a>
                </div>
            </div>
        </footer>)
}
export default Footer