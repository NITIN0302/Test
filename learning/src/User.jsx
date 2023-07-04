
function User(props)
{
    return (
        props.isGas && <h1>{props.name}</h1>
    );
}

export default User