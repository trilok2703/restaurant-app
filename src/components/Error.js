import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    // console.log(err);

    const {error} = err;

    return(
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong!!</h2>
            <p>{error.message}</p>
        </div>
    )
};

export default Error;