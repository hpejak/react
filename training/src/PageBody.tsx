import Card from "./Card";

const data = [{
    name: 'Some Text',
    data: 'Data for Page',
    id: 1,
},{
    name: 'Additional Text',
    data: 'Additional data for Page',
    id: 2,
}];


const PageBody = (props) => {
    const {passingValue, somePassingValue, children}  = props;
    return (
        <div>
            <p>Training is in progress</p>
            <p>{passingValue}</p>
            <p>{somePassingValue}</p>
            {children}
            <PageData />
        </div>
    )
}

const PageData = () => {
    return (<section>
        {data.map((dataObject:any) => {
            return (
                <Card {...dataObject} key={dataObject.id}/>
            );
        })}
    </section>)
}

export default PageBody;