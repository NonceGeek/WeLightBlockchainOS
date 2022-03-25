import React from 'react';
import UbuntuApp from '../base/ubuntu_app';

export class FenceBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            apps: [],
            category: [],
        }
    }

    componentDidMount() {
        this.setState({
            apps: this.props.apps,
            category: this.props.category,
        })
    }

    renderBlock = () => {
        let blockJsx = [];

        let apps = [...this.state.apps]
            .filter(app => app.category === this.state.category);

        apps.forEach((app, index) => {
            const props = {
                name: app.title,
                id: app.id,
                icon: app.icon,
                openApp: this.props.openApp
            }

            blockJsx.push(
                <UbuntuApp key={index} {...props} />
            );
        });
        return blockJsx;
    }

    render() {
        return (
            <div className={"fence-block mt-10 mx-5 p-2 inline-flex flex-col rounded-md border-black border-opacity-60 bg-black bg-opacity-40 pointer-events-auto"}>
                <div className={"block-title text-center text-white mb-3"}>{this.state.category}</div>
                <div className={"block-apps flex flex-row"}>
                    {this.renderBlock()}
                </div>
            </div>
        )
    }
}

export default FenceBlock;