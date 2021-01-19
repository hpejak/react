const CharComponent = ({stringCharacter, handleCharClick}) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
    }

    return (
        <div style={style} onClick={handleCharClick} >
            <p>{stringCharacter}</p>
        </div>
    )

}

export default CharComponent;