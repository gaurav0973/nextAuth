/* eslint-disable @typescript-eslint/no-explicit-any */
import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'

connect()


export async function POST(request : NextRequest){
    try {

        const reqBody = await request.json()
        // console.log('Received request body:', reqBody);
        const { email, password, username } = reqBody;

        // check if user already exists
        const existingUser = await User.findOne({email: email});
        if (existingUser) {
            console.log('User already exists:', existingUser);
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log('Hashed password:', hashedPassword);

        // create new user
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
            username: username
        });
        await newUser.save();
        // console.log('New user created:', newUser);


        // send verification email
        await sendEmail({email, emailType: "VERIFY", userId : newUser._id})

        // return success response
        return NextResponse.json(
            { message: 'User signed up successfully', user: newUser },
            { status: 201 }
        );


        
    } catch (error :any) {
        console.log('Error during signup:', error);
        return NextResponse.json(
            { error: 'Error in signing up the user' },
            { status: 500 }
        );
        
    }
}


