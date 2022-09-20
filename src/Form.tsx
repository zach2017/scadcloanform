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
        <hr />
        <div className='container text-center'>
            <h3>Borrower Information</h3>
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="column">
                            <label>1. Amount of Loan</label></div>
                        <div className="column">
                            <input
                                type="number"
                                {...register('loanAmount', { required: true, maxLength: 10 })}


                            />
                            <p>
                                {errors.loanAmount?.type === 'required' && "Loan Amount required"}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="column">
                            <label>2. Name of Borrower</label></div>
                        <div className="column">
                            <input
                                type="text"
                                {...register('borrowerName', { required: true, maxLength: 80 })}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="column">
                            <label>3. Address</label></div>
                        <div className="column">
                            <textarea {...register("borrowerAddress", { required: true, max: 100, min: 5, maxLength: 80 })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="column">
                                <label>4. Contact Person</label></div>
                            <div className="column">
                                <input
                                    type="text"
                                    {...register('contactPerson', {
                                        required: true,
                                        maxLength: 11,
                                        minLength: 8,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="column">
                                <label>5. Telephone Number</label></div>
                            <div className="column">
                                <input type="tel" placeholder="Telephone Number" {...register("telNumber", { required: true, max: 12, min: 5, maxLength: 12 })} />

                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="column">
                                <label>6. Tax ID# or SSN#</label></div>
                            <div className="column">
                                <input type="password" placeholder="" {...register("taxNumber", { required: true, max: 12, min: 5, maxLength: 12 })} />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <hr className="margin-top: 20" />
                        </div>
                        <div className="col-sm">
                            <div className="column">
                                <label> </label></div>
                            <div className="column">
                                <input className="btn btn-success" type="submit" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </form>

    </div>
    )
}