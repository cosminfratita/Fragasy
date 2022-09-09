import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then (response =>{
            const data = response.data()
            const productsAdapted = { id: response.id, ...data}
            setProduct(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).finally(() => {
        // //     setLoading(false)
        // })
    }, [productId])

    // if(loading) {
    //     return <h1>Cargando...</h1>
    // }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer