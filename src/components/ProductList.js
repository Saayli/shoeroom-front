import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';

const ProductList = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://shoeroom-api.onrender.com/produit')
            .then(response => {
                console.log(response.data); // Vérifiez ce qui est retourné par l'API
                setProducts(response.data); // Accédez correctement aux données des produits
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>There was an error loading the products.</p>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Produits</h1>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} class="col-4 p-4">
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt={product.libelle} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.libelle}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><small className="text-muted">{product.prix} €</small></p>
                                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ProductList;
