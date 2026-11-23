/** Grão de filme + vinheta, fixos sobre todo o site. Puramente decorativo. */
export default function FilmOverlay() {
  return (
    <>
      <div className="film-vignette" aria-hidden />
      <div className="film-grain" aria-hidden />
    </>
  );
}
