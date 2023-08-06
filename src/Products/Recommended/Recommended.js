import Buttons from "../../components/Buttons";
import "./Recommended.css";
const Recommended = ({ handleClick }) => {
    return(
    <>
    <div className="recommended_class">
        <h2 className="recommended-title">Recommended</h2>
        <div className="Recommended-flex">

            <Buttons onClickHandler={handleClick} value="" title="All products" />
            <Buttons onClickHandler={handleClick} value="Nike" title="nike" />
            <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
            <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
            <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
    </div>
    </>
    );
}
export default Recommended;