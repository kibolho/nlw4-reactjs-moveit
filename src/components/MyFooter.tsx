import style from '../styles/components/MyFooter.module.css';

export function MyFooter() {
  return (
    <div className={style.containerMyFooter}>
      <footer>
        Criado por&ensp;
        <a href="https://github.com/kibolho" target="_blank" rel="noreferrer">
          Abílio Azevedo
        </a>
          &ensp;ft.&ensp;
        <a href="https://rocketseat.com.br" target="_blank" rel="noreferrer">
          Rocketseat 🚀
        </a>
      </footer>
    </div>
  );
}
