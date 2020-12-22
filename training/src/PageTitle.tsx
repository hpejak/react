const PageTitle = ({titleText, someAdditionalData}) => {
    return (
        <div className="titleClass" align="center">
            <h2 >{ titleText + ' ' + someAdditionalData}</h2>
        </div>
    )
}

export default PageTitle;