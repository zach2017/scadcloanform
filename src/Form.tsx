import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    console.log(errors);

    return (<div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="column">
                <label>First name</label></div>
                <div className="column">    <input
                    type="text"
                    {...register('firstName', { required: true, maxLength: 80 })}
                />
                </div>
            </div>
            <div className="row">
            <div className="column">
                <label>Mobile number</label>
                </div>
                <div className="column">
                <input
                    type="tel"
                    {...register('mobileNumber', {
                        required: true,
                        maxLength: 11,
                        minLength: 8,
                    })}
                />
                </div>
            </div>
            <div>
                <label>Are you a developer?</label>
                <input
                    type="radio"
                    value="Yes"
                    {...register('developer', { required: true })}
                />
                <input
                    type="radio"
                    value="No"
                    {...register('developer', { required: true })}
                />
            </div>

            <input type="submit" />
        </form>
    </div>
    )
}