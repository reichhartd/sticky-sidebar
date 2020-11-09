import * as styles from './App.module.css';

export const App = () => (
    <div className={styles.container}>
        <div className={styles.sidenav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
        </div>
        <div className={styles.main}>
            <h2>Sidebar</h2>
            <p>This sidebar is of full height (100%) and always shown.</p>
            <p>Scroll down the page to see the result.</p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <p key={number}>
                    {`${number}. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                    concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur
                    eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                    voluptatibus.`}
                </p>
            ))}
        </div>
    </div>
);
