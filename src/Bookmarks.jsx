import Bookmark from "./Bookmark";

const Bookmarks = ({cooks}) => {

return (
        <div className=" w-1/3  border-solid border-2 rounded text-center mb-7">
            <h1>Bookmarks:{cooks.length}</h1>
            <hr />
          {
            cooks.map( bookmark =><Bookmark bookmark={bookmark}></Bookmark>)
          }
        </div>
    );
};

export default Bookmarks;