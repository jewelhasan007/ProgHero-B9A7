

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-6 hover:bg-gray-400"> <a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;