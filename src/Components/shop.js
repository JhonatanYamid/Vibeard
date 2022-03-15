import Categories from "./categories";
import HeaderShop from "./headerShop";
import InputSearch from "./inputSearch";

const Shop = () => {
    return (
        <div className="px-7">
            <div className="h-[15%]">
                <HeaderShop />
            </div>
            <div className="h-[15%]">
                <InputSearch />
            </div>
            <div className="h-[70%] flex items-center">
                <Categories />
            </div>
        </div>
    );
}
export default Shop;