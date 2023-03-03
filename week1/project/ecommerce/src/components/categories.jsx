/*import './categories.css';

import categoryaltern from "../fake-data/all-categories" 
function Category (prop) {
    return (
        <div class="categories--item">{prop}</div>
    )
}
function CategoryList  (prop) {
    return (<div class="categories">
        {
            categoryaltern.map(item=>Category(item))
        }
    </div>
    )
}*/
import './categories.css';

const Category = (props) => {
    const {current, state, setState} = props
    const key = current.slice(6)

    const className = 'categories--item' + ((key === state.selectedCategory) && !state.isAll ? ' category-selected' : '')

    const changeFilter = (key) => {
        setState(prevState => {
            return {
                selectedCategory: key, 
                isAll: (prevState.selectedCategory === key) && !prevState.isAll
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
