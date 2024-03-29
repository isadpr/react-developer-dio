import { ItemContainer } from "./styles";

export default function ItemRepo({ repo, handleRemoveRepo }) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer >
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="blank">Ver repositório</a> <br />
            <a href="#" rel="noreferrer" className="remover" onClick={handleRemove}>Remover</a>
            <hr />
        </ItemContainer>
    )
}