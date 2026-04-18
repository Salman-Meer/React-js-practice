import {useForm} from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
function Form(){
    const {register, handleSubmit, control} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
return(
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name:<input type="text" placeholder="Name" {...register("name")}/><br /> you can keep any another value also in register *
        Email:<input type="email" placeholder="Email" {...register("email")}/><br />
        Age:<input type="number" placeholder="Age" {...register("age")}/><br /> */}




{/* 
         Name:<input type="text" placeholder="Name" {...register("name",{
            required:"Name is required"
         })}/><br />
        Email:<input type="email" placeholder="Email" {...register("email",{
            required:"Email is required"
        })}/><br />
        Age:<input type="number" placeholder="Age" {...register("age",{
            required:"Age is required"
        })}/><br /> */}



{/* 
                 Name:<input type="text" placeholder="Name" {...register("name",{
            required:"Name is required"
         })}/><br />
        Email:<input type="email" placeholder="Email" {...register("email",{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                message:"Invalid email address"
            }
        })}/><br />
        Age:<input type="number" placeholder="Age" {...register("age",{
            required:"Age is required"
        })}/><br /> */}





{/* 


       Name:<input type="text" placeholder="Name" {...register("name",{
            required:"Name is required"
         })}/><br />
        Email:<input type="email" placeholder="Email" {...register("email",{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                message:"Invalid email address"
            }
        })}/><br />
        Age:<input type="number" placeholder="Age" {...register("age",{
            required:"Age is required",
            valueAsNumber:true, it convert string into number
            min:{
                value:18,
                message:"Age must be at least 18"   
            },
            max:{
                value:60,
                message:"Age must be less than 60"   
            }
        })}/><br /> */}






       Name:<input type="text" placeholder="Name" {...register("name",{
            required:"Name is required"
         })}/><br />
        Email:<input type="email" placeholder="Email" {...register("email",{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                message:"Invalid email address"
            }
        })}/><br />
        Age:<input type="number" placeholder="Age" {...register("age",{
            required:"Age is required",
            valueAsNumber:true, 
            min:{
                value:18,
                message:"Age must be at least 18"   
            },
            max:{
                value:60,
                message:"Age must be less than 60"   
            }
        })}/><br />

        <button>Submit</button>
    </form>
        <DevTool control={control} placement="top-right" />
    </div>   
)
}
export default Form;
