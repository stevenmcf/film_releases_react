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
    <h2>This is the film release list</h2>
    <ul>
        {filmList}
    </ul>
    </>
);
};

export default FilmReleases;