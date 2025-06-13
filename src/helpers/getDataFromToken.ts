import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const gatDataFromToken = (request: NextRequest) => {
    try {

        const token = request.cookies.get('token')?.value || '';
        if(!token) {
            console.log('No token found in cookies');
            return null;
        }

        const decodedToken:any  =  jwt.verify(token, process.env.TOKEN_SECRET!)
        return decodedToken.id
        
    } catch (error) {
        console.log('Error extracting data from token:', error);
        
    }
}

export default gatDataFromToken