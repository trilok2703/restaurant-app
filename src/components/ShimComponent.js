const ShimComponent = () => {
    return(
        <div className="shim-restaruant-card-list">
            {
                Array(10)
                .fill("")
                .map((index) => {
                    return (
                        <div key={index} className="shim-restaurant-card">
                            <div className="shim-restaurant-card-img-container">
                                
                            </div>
                            <h3 className="shim-restaurant-card-header"></h3>
                            <div className="shim-restaurant-card-content"></div>
                            <div className="shim-restaurant-card-content"></div>
                            <div className="shim-restaurant-card-content"></div>
                            <div className="shim-restaurant-card-content"></div>
                        </div>
                    )
                } )
            }
        </div>
    )
}

export default ShimComponent;