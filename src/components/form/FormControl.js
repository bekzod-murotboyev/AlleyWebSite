import FormUser from "./FormUser";
import FormNews from "./FormNews";
import FormBook from "./FormBook";
import FormUniversity from "./FormUniversity";

function FormControl({type}) {

    return (
        <div className="card">
            <div className="card-header">
                <h4>Add {type}</h4>
            </div>
            <div className="card-body">
                {
                    type === 'User' ? <FormUser/> :
                        type === 'News' ? <FormNews/> : type === 'University' ? <FormUniversity/> : <FormBook/>
                }
            </div>
        </div>
    )
}

export default FormControl