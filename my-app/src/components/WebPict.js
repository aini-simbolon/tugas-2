export default function WebPict(props) {
    const title = props.title;
    const img = props.img;
    return (
        <div className="h-30">
            <img 
            src={img}
            width={200}
            height={100}/>

            <strong><h4>{title}</h4></strong>

        </div>
    )
}