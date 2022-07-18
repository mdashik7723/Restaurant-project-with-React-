import React, {Component} from "react";
import Loading from "./Loading";


class Home extends Component {
    render() {
        document.title = "Ashik's Restaurant";
        return(
            <div>
                <Loading/>
            </div>
        );
    }
}

export default Home;