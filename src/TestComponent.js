import picture from './pic.jpg';
import picture_large from './pic_large.jpg';
import './TestComponent.css';

function TestComponent(props) {
    return (
        <div>
            <header className="center">
                <p>Test Component</p>
                <p>This simple component was written by {props.name}</p>
                <div className="center">
                    <img src={picture} alt="logo" className="pic" />
                </div>
                <div className="center">
                    <img src={picture_large} alt="logo" className="pic" />
                </div>
            </header>
        </div>
    );
}

export default TestComponent;