import css from './SearchBox.module.css'
export default function SearchBox({ value, onSearch }) {
    return (<>
        <p>Find contact</p>
        <input type="text" value={value} className={css.searchbox} onChange={(evt) => onSearch(evt.target.value)}></input></>
       
    )
}