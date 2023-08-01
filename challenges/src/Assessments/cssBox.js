//@ts-check

const cssBox = () =>{
    return(
        <div className="cssbody">
            <div className="header">Header </div>
            <div className="main">
                <div className="sidebar">
                    <div className="button">first button</div>
                    <div className="button">second button</div>
                    <div className="button">third button</div>
                </div>
                <div className="feed">
                    <div className="box1">box1</div>
                    <div className="box2">box2</div>
                    <div className="box3">box3</div>
                    <div className="box4">box4</div>
                </div>
               
            </div>
            <div className="footer">Footer </div>
        </div>
    )
}

export default cssBox;