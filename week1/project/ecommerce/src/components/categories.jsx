import './categories.css';
import './categories.css';
import categorynew from "../fake-data/all-categories"

function Category (prop) {
    return (
        <div class="categories--item">{prop}</div>
    )
}
function CategoryList  (prop) {
    return (<div class="categories">
        {
            categorynew.map(item=>Category(item))
        }
    </div>
    )
}

export default CategoryList;
