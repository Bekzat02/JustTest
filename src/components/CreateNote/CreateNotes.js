import React from 'react';
import {useForm} from "react-hook-form";
import s from './Notes.module.css'
const CreateNotes = (props) => {
    const {register, handleSubmit} = useForm()
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <label className={s.label}>
                <div>Название</div>
                <div>
                <input {...register("name")}/>
                </div>
            </label>
            <label className={s.label}>
                <div>Текст</div>
                <div>
                    <input {...register("text")}/>
                </div>
            </label>
            <label className={s.label}>
                <div>Дата</div>
                <div>
                    <input type="date" {...register("date")}/>
                </div>
            </label>
            <button type="submit" >Submit</button>
        </form>
    );
};

export default CreateNotes;
