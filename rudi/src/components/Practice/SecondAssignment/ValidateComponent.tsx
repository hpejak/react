const ValidateComponent = ({textLength}) => {

    return (
        <>
            <p>{textLength >=5 ? "Text is long enough": "Text is too short"}</p>
        </>
    )

}

export default ValidateComponent;