interface HeaderPorps {
  genreTitle: string;
}

export function Header({ genreTitle }: HeaderPorps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {genreTitle}</span>
      </span>
    </header>
  );
}
