import {useForm} from 'react-hook-form'

import { DevTool } from "@hookform/devtools";

function Form2(){
    const {register, handleSubmit, control,formState} = useForm()
    const {errors} = formState
    const onSubmit = (data) => {
        console.log(data)
    }
return(
    <div>   
        <form onSubmit={handleSubmit(onSubmit)}>

        Name:<input type="text" placeholder="Name" {...register("name",{
            required:"Name is required"
        })}/>
        <br />
        {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>}

        <br />
        Email:<input type="email" placeholder="Email" {...register("email",{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                message:"Invalid email address"
            }
        })}/>
        <br />
        {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
                <br />
        Age:<input type="number" placeholder="Age" {...register("age",{
            required:"Age is required",
            min:{
                value:18,
                message:"Age must be at least 18"
            },
            max:{
                value:60,
                message:"Age must be less than 60"
            }
        })}/>
        <br />
        
        {errors.age && <span style={{color:'red'}}>{errors.age.message}</span>}
        <br />
       <button type="submit">Submit</button>

        </form>
            <DevTool control={control}/>
            
    </div>
)
}
export default Form2;