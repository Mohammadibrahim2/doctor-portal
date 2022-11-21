import React from "react";
import { format } from 'date-fns';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
    const { name,slots } = treatment
    const date = format(selectedDate, "PP")

    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const phone=form.phone.value
        const email=form.email.value
        const slot=form.slot.value
        const date=form.date.value
        const serviceName=form.serviceName.value
        const bookingData={
            serviceName:serviceName,
            AppointmentDate:date,
            person:name,
            slot,
            phone,
            email
        }
        console.log(bookingData)
        setTreatment(null)

        form.reset()
    }
    return (
        <div className="text-left">
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative text-black">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit} className="w-full text-center">
                    <input type="text" className="text-lg font-bold  "value={name} name="serviceName"></input>
                        <input type="text text-white" name="date"disabled value={date} className="input input-bordered text-white  w-full " />
                        <select name="slot" className="select select-bordered w-full my-5">
                            {
                             slots.map((slot,index)=><option value={slot}key={index}>{slot}</option>)
                            }
                        </select>
                        <input name="name"type="name" placeholder="Your name" className="input input-bordered w-full " />
                        <input name="email" type="email" placeholder="Your email" className="my-5 input input-bordered w-full " />
                        <input name="phone"type="text" placeholder="Your phone" className="input input-bordered w-full my-5 " />
                        <input type="submit" value="SUBMIT" className="btn btn-base-200 w-full" />
                    </form>
                </div>
            </div>

        </div>
    )


}
export default BookingModal