import "./custom-search.scss";
const SearchIcon = "/images/icons/search.svg";
const CustomSearchBar = () => {
  return (
    <div id="custom-search">
      <button type="submit">
        <img
          src={process.env.PUBLIC_URL + SearchIcon}
          alt="search icon"
          width="18"
          height="18"
        />
      </button>{" "}
      <input type="search" placeholder="Search..." />
    </div>
  );
};
export default CustomSearchBar;
