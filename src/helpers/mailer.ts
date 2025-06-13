/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";




export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            });
        } 
        else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000 
            });
        }

        // transporter
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST, 
            port: parseInt(process.env.MAILTRAP_PORT!),
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD, 
            },
        });

        // Construct the verification/reset URL
        const domain = process.env.DOMAIN 
        const verifyUrl = `${domain}/verifyemail?token=${hashedToken}`;
        const resetUrl = `${domain}/resetpassword?token=${hashedToken}`;

        // Create HTML content
        const htmlContent = emailType === "VERIFY"
            ? `<p>Click <a href="${verifyUrl}">here</a> to verify your email or copy and paste the link below in your browser. <br> ${verifyUrl}</p>`
            : `<p>Click <a href="${resetUrl}">here</a> to reset your password or copy and paste the link below in your browser. <br> ${resetUrl}</p>`;

        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email" : "Reset your Password",
            html: htmlContent,
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        console.log("Email sent:", mailResponse.response);
        return mailResponse; 

    } catch (error: any) {
        console.log("Error while sending the mail:", error);
    }
};