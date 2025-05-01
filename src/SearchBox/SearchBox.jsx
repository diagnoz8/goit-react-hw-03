export default function SearchBox({value, onSearch}){
    return (
        <input type="text" value={value} onChange={(evt) => onSearch(evt.target.value)}></input>
    )
}