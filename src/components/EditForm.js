import React, { useEffect, useState } from 'react'
import EditMainContainer from './EditMainContainer'
import {API} from '../Config'
import { useParams } from 'react-router-dom'
import Lottie from 'react-lottie';
import File from '../anime/99297-loading-files.json'
import axios from 'axios'

function EditForm() {
    let params  = useParams()

    const [Viewform,setViewform] = useState({})

    var formView = async () => {
        try {
            let value = await axios.get(`${API.Link}/Editform/${params.id}`)
            setViewform(value.data)
        } catch (error) {
            console.log(error)
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: File,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }; 

    useEffect(() => {
        formView()
        // eslint-disable-next-line
    }, []);

    return (
        <>
        {
            ! Viewform.title ? <Lottie options={defaultOptions} height={300} width={300} /> : <EditMainContainer Viewform={Viewform}/>
        }
        </>
    )
}

export default EditForm