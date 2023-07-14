import { useState } from "react";
export default function NestedComponent(){
    var products = [
        {catagory:'Electronics',Product:['Samsung Tv','Mobile']},
        {catagory:'Footwear',Product:['Nike Casual','Lee Copper Boot']}
    ];
    let productDetails = [
        {name:'Nike Shoe',price:4500,photo:'images/shoe.jpg'},
        {name:'Speaker',price:7500,photo:'images/speaker.jpg'}
    ];

    const [username, setUserName] = useState();
    function UpdateChanges(event){
        setUserName(event.target.value);

    }
    return(
        <>
        <p id="demo"></p>
            <div className="container-fluid">
                <h2>Product List</h2>
                <ol>
                    {
                        products.map(item =>
                        <li key={item.catagory}>{item.catagory}
                        <ul>
                            {
                                item.Product.map(product=>
                                <li key={product}>{product}</li>
                                )
                            }
                        </ul>
                        </li>
                        )
                    }
                </ol>

                <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Preview</th>
                </tr>
                </thead>
                <tbody>
                    {
                        productDetails.map(product=>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img alt="Preview" src={product.photo} width='100' height='100' /></td>
                        </tr>
                        )
                    }
                </tbody>

                </table>

                <div>
                <h2>User Details</h2>
                  User Name:  <input type="text" name="username" onKeyUp={UpdateChanges}/>
                    <div>
                    <p>Hello ! {username}</p>
                    </div>
                </div>
            </div>
        </>
    )
}