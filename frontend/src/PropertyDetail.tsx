import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





interface Property {
    _id?: string;
    address: string;
    price: string;
    bedroom: number;
    bathroom: number;
    garage: number;
    propertytype: string;
    imageUrls: string[];
    status: string;
    description: string;
}




//function PropertyDetail{
//   const { id } = useParams<{ id: string }>();
//    const {property, setproperty} = useState<Property | null>(null):

// return(




// )}

// export default PropertyDetail;