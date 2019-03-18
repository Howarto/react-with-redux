import React, { Component } from 'react';
import { store } from './stores';
import { setTechnology } from './actions';

class ButtonGroup extends Component {
    dispatchButtonAction(e) {
        const tech = e.target.dataset.tech;
        debugger;
        store.dispatch(setTechnology(tech));
    }

    render() {
        return (
            <div>
                {this.props.technologies.map((tech, i) => (
                    <button
                        data-tech={tech}
                        key={`btn-${i}`}
                        className="hello-btn"
                        onClick={this.dispatchButtonAction}
                    >
                        {tech}
                    </button>
                ))}
            </div>
        );
    }
}

export default ButtonGroup;
