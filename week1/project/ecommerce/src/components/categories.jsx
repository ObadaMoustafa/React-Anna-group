import './categories.css';

const Category = (props) => {
    const {current, state, setState} = props
    const key = current.slice(6)

    const className = 'category--item' + ((key === state.pickCategory) && !state.itsEver ? 'category-sort' : '')

    const changeFilter = (key) => {
        setState(prevState => {
            return {
                pickCategory: key, 
                itsEver: (prevState.pickCategory === key) && !prevState.itsEver
            }
        })
    }

    return (
        <div key={key} className={className} onClick={() => changeFilter(key)}>{current}</div>
    )
}

const CategoryList = (props) => {
    const {categories, state, setState} = props;
    return (
        <div className="categories">
            {categories.map(current => Category({ current, state, setState }))}
        </div>
    )
}

export default CategoryList;