import { useLocation } from "react-router-dom";

const End = () => {
    const location = useLocation()
    console.log(location.state)
    return(<>
        END SCREEN

    </>)
}

export default End;