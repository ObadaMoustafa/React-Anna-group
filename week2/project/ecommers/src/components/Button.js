function ListCategory({name, onClick}) {
    return(
        <button className="categoty-btn" onClick={onClick}>{name}</button>
    );
}

export default ListCategory;
