import useDebounce from "../../Hooks/useDebounceHook"
import "./Search.css"
function Search({updateSearch})
{
    const debouncedCallback = useDebounce((e) => updateSearch(e.target.value))

    return (
        <>
        <input type="text" placeholder="Search Here ..." onChange={debouncedCallback} />
        </>
    )
}

export default Search