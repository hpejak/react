import NavMenu from "./components/NavMenu";

const navItems: any = [
    {id: 0, name: "Home", link:"home"},
    {id: 1, name: "First", link:"first"},
    {id: 2, name: "Second", link:"second"}
]


const App = () => {
    return (
        <>
            <NavMenu navItems={navItems}/>
        </>
    );
}

export default App;