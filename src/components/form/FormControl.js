import FormUser from "./FormUser";
import FormNews from "./FormNews";
import FormBook from "./FormBook";

function FormControl({type}) {

    return (
        <div className="card">
            <div className="card-header">
                <h4>Add {type}</h4>
            </div>
            <div className="card-body">
                {
                    type === 'user' ? <FormUser/> :
                        type === 'news' ? <FormNews/> : <FormBook/>
                }
            </div>
        </div>
    )
}

export default FormControl