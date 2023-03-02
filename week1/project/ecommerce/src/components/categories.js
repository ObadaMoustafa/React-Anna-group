import './categories.css';
import categoryred from "../fake-data/all-categories" 
function Category (prop) {
    return (
        <div class="categories--item">{prop}</div>
    )
}
function CategoryList  (prop) {
    return (<div class="categories">
        {
            categoryred.map(item=>Category(item))
        }
    </div>
    )
}export default
 CategoryList;