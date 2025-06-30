const { default: EcommerceDenmark } = require("../components/EcommerceDenmark")

const DenmarkEcommerce = ({notify}) => {
    return(
        <>
            <EcommerceDenmark notify={notify}/>
        </>
    )
}

export default DenmarkEcommerce;