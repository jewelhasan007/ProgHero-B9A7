

const Bookmark = ({bookmark}) => {
    const {recipe_name} = bookmark
    return (
        <div className="mt-2">
            <h3 >Cooks Name: <span className="font-bold"> {recipe_name} </span></h3>
        </div>
    );
};

export default Bookmark;