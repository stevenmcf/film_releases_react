import Film from './Film'

// pass props of films from state in film container
const FilmReleases = ({films}) => {

    const filmList = films.map ( film => {

        return (
            <Film name={film.name} key={film.id}>{film.url}</Film>
        )

    });

return (
    <>
    <h2>Upcoming Film Releases for the UK</h2>
    <ul>
        {filmList}
    </ul>

    <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases....</a>
    </>
);
};

export default FilmReleases;