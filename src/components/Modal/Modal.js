import React from 'react';
import './Modal.css';
import Carousel from 'react-material-ui-carousel';
export const Modal = (props) => {
    const show = props.show
    const close = props.close
    const project = props.project
    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p>{project.projectName}</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="modal-body1">
                        <h4>Description</h4>
                        <p>{project.projectDesc}</p>
                    </div>
                    <div className="modal-body2">
                        <h4>Technical used</h4>
                        <ul>
                            {project.projectTech && project.projectTech.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <p>The project is online at <a href={project.projectLink}>{project.projectLink}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};