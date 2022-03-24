import React from 'react';
import FenceBlock from './fence_block';

export class Fences extends React.Component {
    constructor() {
        super();
        this.state = {
            apps: [],
            appCategory: [],
        }
    }

    componentDidMount() {
        this.setState({
            apps: this.props.apps,
            appCategory: this.props.appCategory,
        })
    }

    renderFences = () => {

        let fencesJsx = [];

        let apps = [...this.state.apps];
        let categories = Object.values(this.state.appCategory);
        categories.forEach((category, index) => {
            fencesJsx.push(
                <FenceBlock
                    key={index}
                    apps={apps}
                    category={category}
                    openApp={this.props.openApp}
                />
            );
        });
        return fencesJsx;
    }

    render() {
        return (
            <div className={"fences absolute h-full top-7 w-full z-20 justify-center pointer-events-none"}>
                {this.renderFences()}
            </div>
        )
    }
}

export default Fences;