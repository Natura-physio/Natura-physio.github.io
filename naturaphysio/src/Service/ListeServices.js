const ListeServices = ({services}) => {

    // const services = props.services;
    // console.log(props,services);
    return ( 
        <div className="liste-services">
            {services.map((service) => (
                <div className="services-apercu" key={service.id}>
                    <h2>{service.titre}</h2>
                    <p>{service.description}</p>
                    {/* <button className="btn" onClick={() => handleDelete(service.id)}></button> */}
                </div>
            ))}

        </div>

     );
}
 
export default ListeServices;